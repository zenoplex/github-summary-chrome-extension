import React, { PropTypes } from 'react';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';
import style from './properties-table.css';

const Row = ({ property, description }) =>
  <TableRow>
    <TableRowColumn>
      <code>{property}</code>
    </TableRowColumn>
    <TableRowColumn>{description}</TableRowColumn>
  </TableRow>
;

Row.propTypes = {
  property:    PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const PropertiesTable = ({ properties }) =>
  <Table fixedHeader className={style.propertiesTable}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Variable</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} stripedRows>
      {properties.map((item, index) => <Row key={`properties-table-${index}`} {...item} />)}
    </TableBody>
  </Table>
;

PropertiesTable.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    property:    PropTypes.string,
    description: PropTypes.any,
  })),
};

PropertiesTable.defaultProps = {
  properties: [],
};

export default PropertiesTable;
