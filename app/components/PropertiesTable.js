import React, { PropTypes } from 'react';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';
import style from './properties-table.css';

const Row = ({ propertyColumnWidth, property, description }) =>
  <TableRow>
    <TableRowColumn width={propertyColumnWidth}>
      <code>{property}</code>
    </TableRowColumn>
    <TableRowColumn>{description}</TableRowColumn>
  </TableRow>
;

Row.propTypes = {
  property:    PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  propertyColumnWidth: PropTypes.number,
};

const PropertiesTable = ({ propertyColumnWidth = 100, properties }) =>
  <Table fixedHeader className={style.propertiesTable}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn width={propertyColumnWidth}>Variable</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} stripedRows>
      {
        properties.map((item, index) =>
        <Row
          key={`properties-table-${index}`}
          propertyColumnWidth={propertyColumnWidth}
          {...item}
        />)
      }
    </TableBody>
  </Table>
;

PropertiesTable.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    property:    PropTypes.string,
    description: PropTypes.any,
  })),
  propertyColumnWidth: PropTypes.number,
};

PropertiesTable.defaultProps = {
  properties: [],
};

export default PropertiesTable;
