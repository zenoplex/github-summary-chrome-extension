// @flow

import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';

type DefaultProps = {
  onChange: Function,
}

type Props = {
  from: ?Date,
  to: ?Date,
  onChange: Function,
}

type State = {
  from: Date,
  to: Date,
}

class RangedDatePicker extends Component {

  static defaultProps: DefaultProps = {
    onChange: () => {},
  };

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    const { from, to } = props;
    const date = new Date();

    this.state = {
      from: from || date,
      to:   to || date,
    };
  }

  handleMinDateChange: (e: Event, date: Date) => void = (e, date) => {
    const { onChange } = this.props;
    const { to } = this.state;
    const obj = { from: date };
    this.setState(obj);

    onChange(e, { ...obj, to });
  };

  handleMaxDateChange: (e: Event, date: Date) => void = (e, date) => {
    const { onChange } = this.props;
    const { from } = this.state;
    const obj = {
      to:   date,
      from: date.getTime() < from.getTime() ? date : from,
    };

    this.setState(obj);
    onChange(e, obj);
  };

  render() {
    const { from, to } = this.state;
    const today = new Date();

    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <DatePicker
              autoOk
              floatingLabelText="from"
              fullWidth
              maxDate={to}
              value={from}
              onChange={this.handleMinDateChange}
            />
          </Col>
          <Col xs={6}>
            <DatePicker
              autoOk
              floatingLabelText="to"
              maxDate={today}
              value={to}
              fullWidth
              onChange={this.handleMaxDateChange}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RangedDatePicker;
