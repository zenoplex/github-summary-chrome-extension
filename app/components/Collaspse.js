// @flow

import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import style from './collapse.css';

type Props = {
  label: string,
  children: any,
}

const Collapse = ({ label, children, ...props }: Props) =>
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

export default Collapse;
