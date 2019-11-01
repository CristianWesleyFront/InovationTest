import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { TableSerch } from "./styled";

export default function Table(props) {
  const { SearchBar } = Search;
  const { products, columns, placeholder } = props;
  return (
    <ToolkitProvider keyField="id" data={products} columns={columns} search>
      {props => (
        <div>
          <TableSerch>
            <SearchBar {...props.searchProps} placeholder={placeholder} />
          </TableSerch>

          <hr />
          <BootstrapTable {...props.baseProps} striped hover bordered={false} />
        </div>
      )}
    </ToolkitProvider>
  );
}
