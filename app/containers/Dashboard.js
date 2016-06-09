import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row } from 'react-flexbox-grid/lib/index';
import PropertiesTable from 'components/PropertiesTable';
import Progress from 'components/Progress';
import { Wrapper, ContentWrapper } from 'components/Wrapper';
import RangedDatePicker from 'components/RangedDatePicker';
import Collapse from 'components/Collaspse';
import Sidebar from 'components/Sidebar';
import TextArea from 'components/TextArea';
import { formatters } from 'constants/GithubSummaryFormatter';
import GithubSummary from 'github-summary';

class Dashboard extends Component {

  componentDidMount() {
    const { settings, actions } = this.props;
    if (!settings.username) actions.openSidebar();
  }

  handleIconRightTap = () => {
    const { actions } = this.props;
    actions.resetSettingsForm();
    actions.openSidebar();
  };

  handleSaveClick = () => {
    this.refs.sidebar.submit();
  };

  handleSubmit = (data) => {
    const { actions } = this.props;
    if (!data.username) return;

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
    const {
      actions, sidebar, summary, settings, dates, api: {
        summaryIsLoading,
      },
    } = this.props;

    return (
      <Wrapper>
        <Progress show={summaryIsLoading} />
        <Header onIconRightTap={this.handleIconRightTap} />
        <ContentWrapper>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <TextField
                  floatingLabelText="formatter"
                  hintText={GithubSummary.defaults.formatter}
                  fullWidth
                  value={settings.formatter}
                  onChange={this.handleFormatterChange}
                  onBlur={this.handleFormatterChange}
                />
              </Col>
            </Row>

            <Collapse label="see formatter placeholders">
              <PropertiesTable properties={formatters} />
            </Collapse>

            <RangedDatePicker
              from={dates.from}
              to={dates.to}
              onChange={this.handleDatePickerChange}
            />

            <Row>
              <Col xs={12}>
                <TextArea value={summary} disabled={summaryIsLoading} />
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
        <Footer
          onGenerateClick={actions.generateSummary}
          disabled={!settings.username || summaryIsLoading}
        />
        <Sidebar
          ref="sidebar"
          onRequestChange={actions.closeSidebar}
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
  summary:  PropTypes.string,
  dates:    PropTypes.object,
  api:      PropTypes.object,
};

export default Dashboard;
