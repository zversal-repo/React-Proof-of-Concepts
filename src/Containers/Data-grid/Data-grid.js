import React , { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataGrid extends Component {
    constructor (props){
        super(props);
    }
  
    render (props) {
      const { data, columns, pageSize , minRows } = this.props;
       return (    
       <div>
            <h1 className="text-center">DataGrid</h1> 
            <ReactTable
            data={data}
            columns = {columns}
            defaultPageSize={pageSize}
            className="-striped -highlight"
            minRows = {minRows}
        />
       </div>
       );
    };
}

export default DataGrid;