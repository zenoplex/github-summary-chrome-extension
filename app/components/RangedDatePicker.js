import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';

class RangedDatePicker extends Component {

  static propTypes = {
    from:     PropTypes.oneOf([Date, PropTypes.string, PropTypes.number]),
    to:       PropTypes.oneOf([Date, PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  constructor(props) {
    super(props);

    const { from, to } = props;
    const date = new Date();

    this.state = {
      from: from || date,
      to:   to || date,
    };
  }

  handleMinDateChange = (e, date) => {
    const { onChange } = this.props;
    const { to } = this.state;
    const obj = { from: date };
    this.setState(obj);

    onChange(e, { ...obj, to });
  };

  handleMaxDateChange = (e, date) => {
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
