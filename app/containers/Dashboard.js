import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row } from 'react-flexbox-grid/lib/index';
import PropertiesTable from '../components/PropertiesTable';
import { Wrapper, ContentWrapper } from '../components/Wrapper';
import DatePicker from 'material-ui/DatePicker';
import Collapse from '../components/Collaspse';
import Settings from '../components/Settings';

const formatterOptions = [
  { property: '{repo}', description: 'Repository name' },
  { property: '{username}', description: 'Username of ' },
  { property: '{title}', description: 'Title of issue or pull request' },
  { property: '{checkbox}', description: 'Checkbox depending on flag' },
  {
    property: '{flag}', description: <span>
      <code>mergedTag</code> or <code>closedTag</code>
      to display depending on issue state or merged flag
    </span>,
  },
];

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.handleIconRightTap = this.handleIconRightTap.bind(this);
  }

  handleIconRightTap() {

  }

  render() {
    const today = new Date();

    return (
      <Wrapper>
        <Header onIconRightTap={this.handleIconRightTap} />
        <ContentWrapper>

          <Grid fluid>
            <Row>
              <Col xs={12}>
                <TextField
                  floatingLabelText="formatter"
                  hintText="{checkbox} {title} - {repo} by {username} {flag}"
                  fullWidth
                />
              </Col>
            </Row>

            <Collapse label="see formatter placeholders">
              <PropertiesTable properties={formatterOptions} />
            </Collapse>

            <Row>
              <Col xs={6}>
                <DatePicker
                  autoOk
                  floatingLabelText="from"
                  fullWidth
                />
              </Col>
              <Col xs={6}>
                <DatePicker
                  autoOk
                  floatingLabelText="to"
                  maxDate={today}
                  defaultDate={today}
                  fullWidth
                />
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
        <Footer />
        <Settings />
      </Wrapper>
    );
  }
}

export default Dashboard;
