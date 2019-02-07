import React , { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

class DataGrid extends Component {
    constructor (props){
        super(props);
        this.state =  {
          data : []
        }
    }

    componentDidMount() {
      axios.get('http://www4.quodd.com/b4utrade/app/QuoddViewDetailedQuoteJsonList.do?UPCLOSETICKER=' + `${this.props.symbol}`)
      .then(json => {
          this.setState({
              data : json.data
          })
      });
    }
  
    render (props) {
      const { data, columns, pageSize , minRows } = this.props;
       return (    
       <div>
            <h1 className="text-center">DataGrid</h1> 
            <ReactTable
            data={this.state.data}
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