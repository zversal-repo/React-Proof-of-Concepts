import React , { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

class GreatWall extends Component {
    columns
    constructor (props){
        super(props);
        this.state =  {
          data : []
        }
    }

    componentWillMount() {
      axios.get('http://www4.quodd.com/b4utrade/app/QuoddViewDetailedQuoteJsonList.do?UPCLOSETICKER=' + `${this.props.symbol}`)
      .then(json => {
          this.setState({
              data : json.data
          })
          this.columns = Object.keys(this.state.data[0]).map((key)=>{
            return {
              Header: key,
              accessor: key
            }
          });
      }); 
    }
  
    render () {
      const { pageSize , minRows } = this.props;
       return (    
       <div>
            <h1 className="text-center">DataGrid</h1> 
            <ReactTable
            data={this.state.data}
            columns = {columns}
            defaultPageSize={pageSize}
            className="-striped -highlight"
            minRows = {minRows}
        >
        </ReactTable>
       </div>
       );
    };
}

export default GreatWall;