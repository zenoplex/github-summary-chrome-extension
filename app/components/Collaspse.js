import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import style from './collapse.css';

const Collapse = ({ label, children, ...props }) =>
  <Card className={style.collapse} {...props}>
    <CardTitle
      className={style.collapseTitle}
      subtitle={label}
      actAsExpander
      showExpandableButton
    />
    <CardText className={style.collapseText} expandable>
      {children}
    </CardText>
  </Card>;

Collapse.propTypes = {
  label:    PropTypes.string,
  children: PropTypes.node,
};

export default Collapse;
