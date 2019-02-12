import React , { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

class GreatWall extends Component {
    constructor (props){
        super(props);
        this.state =  {
          gridData : [],
          columnOptions : [{
            Header : '',
            accessor : ''
          }]
        }
    }

    getGridData = () => {
      axios.get('http://www4.quodd.com/b4utrade/app/QuoddViewDetailedQuoteJsonList.do?UPCLOSETICKER=' + this.props.symbol)
      .then(json => {
        const columnNames = Object.keys(json.data[0]).map((key)=>{
          return {
            Header: key,
            accessor: key,
            style: { 'textAlign': 'center' } 
          } 
        });

        this.setState({
          columnOptions : columnNames
        })

        this.setState({
          gridData : json.data,
        });
      }); 
    }

    render () {
      const { pageSize , minRows  } = this.props;
       return (    
       <div>
            <h1 className="text-center">DataGrid</h1> 
            <ReactTable
            data={this.state.gridData}
            columns = {this.state.columnOptions}
            defaultPageSize={pageSize}  
            className="-striped -highlight"
            minRows = {minRows}>
        </ReactTable>
       </div>
       );
    };

     componentDidMount() {
      // Calling Api Every 5 
      this.getGridData();
      this.timer = setInterval(()=> this.getGridData(), 5000); 
                          }
      // Removing Timer Once Component is Destroyed
      componentWillMount() {
        this.timer = null
      }
}

export default GreatWall;