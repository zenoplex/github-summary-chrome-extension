import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row } from 'react-flexbox-grid/lib/index';
import PropertiesTable from '../components/PropertiesTable';
import Progress from '../components/Progress';
import { Wrapper, ContentWrapper } from '../components/Wrapper';
import RangedDatePicker from '../components/RangedDatePicker';
import Collapse from '../components/Collaspse';
import Sidebar from '../components/Sidebar';
import TextArea from '../components/TextArea';

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
  handleIconRightTap = () => {
    const { actions } = this.props;
    actions.toggleSidebar();
  };

  handleSaveClick = () => {
    this.refs.sidebar.submit();
  };

  handleSubmit = (data) => {
    const { actions } = this.props;
    actions.saveSettings(data);
    actions.closeSidebar();
  };

  handleFormatterChange = (e) => {
    const { actions } = this.props;
    actions.saveFormatter(e.target.value);
  };

  handleDatePickerChange = (e, { from, to }) => {
    const { actions } = this.props;
    actions.saveDateRange(from, to);
  };

  render() {
    const { actions, sidebar, summary, settings, dates } = this.props;
    const { value, isFetching } = summary;

    return (
      <Wrapper>
        <Progress show={isFetching} />
        <Header onIconRightTap={this.handleIconRightTap} />
        <ContentWrapper>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <TextField
                  floatingLabelText="formatter"
                  hintText="{checkbox} {title} - {repo} by {username} {flag}"
                  fullWidth
                  value={settings.formatter}
                  onChange={this.handleFormatterChange}
                  onBlur={this.handleFormatterChange}
                />
              </Col>
            </Row>

            <Collapse label="see formatter placeholders">
              <PropertiesTable properties={formatterOptions} />
            </Collapse>

            <RangedDatePicker
              from={dates.from}
              to={dates.to}
              onChange={this.handleDatePickerChange}
            />

            <Row>
              <Col xs={12}>
                <TextArea value={value} disabled={isFetching} />
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
        <Footer onGenerateClick={actions.generateSummary} disabled={isFetching} />
        <Sidebar
          ref="sidebar"
          onRequestChange={actions.toggleSidebar}
          onSaveClick={this.handleSaveClick}
          onSubmit={this.handleSubmit}
          initialValues={settings}
          {...sidebar}
        />
      </Wrapper>
    );
  }
}

Dashboard.propTypes = {
  actions:  PropTypes.object,
  settings: PropTypes.object,
  sidebar:  PropTypes.object,
  summary:  PropTypes.object,
  dates:    PropTypes.object,
};

export default Dashboard;
