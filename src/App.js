import React, { Component } from 'react'
import './App.css';
import GreatWall from './Containers/Great-wall/GreatWall';


class App extends Component {

 constructor(props){
   super(props);
   this.state = {
    data : [],
    columns : [
      {
      Header : 'Trading',
      columns : [
        {
          Header: "Tpilot",
          accessor: "Tpilot",
          style: { 'text-align': 'center' }
        },
        {
          Header: "YTDvsSPPercent",
          id: "YTDvsSPPercent",
          accessor: "YTDvsSPPercent",
          style: { 'text-align': 'center' }
        },
        {
            Header: "av10DVol",
            style: { 'text-align': 'center' },
            accessor: "av10DVol"
          },
          {
            Header: "av20DVol",
            style: { 'text-align': 'center' },
            accessor: "av20DVol"
          },
          {
            Header: "av30DVol",
            style: { 'text-align': 'center' },
            accessor: "av30DVol"
          },
          {
            Header: "av50DVol",
            style: { 'text-align': 'center' },
            accessor: "av50DVol"
          },
          {
            Header: "beta",
            style: { 'text-align': 'center' },
            accessor: "beta"
          },
          {
            Header: "companyName",
            style: { 'text-align': 'center' },
            accessor: "companyName"
          },

          {
            Header: "cusipId",
            style: { 'text-align': 'center' },
            accessor: "cusipId"
          },
          {
            Header: "divFrequency",
            style: { 'text-align': 'center' },
            accessor: "divFrequency"
          },
          {
            Header: "dividendPayDate",
            style: { 'text-align': 'center' },
            accessor: "dividendPayDate"
          },
          {
            Header: "earningReportDate",
            style: { 'text-align': 'center' },
            accessor: "earningReportDate"
          },
          {
            Header: "exchange",
            style: { 'text-align': 'center' },
            accessor: "exchange"
          },
          {
            Header: "industry",
            style: { 'text-align': 'center' },
            accessor: "industry"
          },
          {
            Header: "isin",
            style: { 'text-align': 'center' },
            accessor: "isin"
          },

          {
            Header: "postPanel",
            style: { 'text-align': 'center' },
            accessor: "postPanel"
          },
          {
            Header: "priceBookRatio",
            style: { 'text-align': 'center' },
            accessor: "priceBookRatio"
          },
          {
            Header: "priceYTDPercent",
            style: { 'text-align': 'center' },
            accessor: "priceYTDPercent"
          },
          {
            Header: "sector",
            style: { 'text-align': 'center' },
            accessor: "sector"
          },
          {
            Header: "specName",
            style: { 'text-align': 'center' },
            accessor: "specName"
          },{
            Header: "stockAvgDayVol",
            style: { 'text-align': 'center' },
            accessor: "stockAvgDayVol"
          },

          {
            Header: "stockDiv",
            style: { 'text-align': 'center' },
            accessor: "stockDiv"
          },
          {
            Header: "stockEPS",
            style: { 'text-align': 'center' },
            accessor: "stockEPS"
          },
          {
            Header: "stockExDivDate",
            style: { 'text-align': 'center' },
            accessor: "stockExDivDate"
          },
          {
            Header: "stockMktCap",
            style: { 'text-align': 'center' },
            accessor: "stockMktCap"
          },
          {
            Header: "stockPE",
            style: { 'text-align': 'center' },
            accessor: "stockPE"
          },
          {
            Header: "stockYearHi",
            style: { 'text-align': 'center' },
            accessor: "stockYearHi"
          },
          {
            Header: "stockYearLo",
            style: { 'text-align': 'center' },
            accessor: "stockYearLo"
          },
          {
            Header: "stockYield",
            style: { 'text-align': 'center' },
            accessor: "stockYield"
          }, {
            Header: "tickerName",
            style: { 'text-align': 'center' },
            accessor: "tickerName"
          },
          {
            Header: "trailingDiv",
            style: { 'textAlign': 'center' },
            accessor: "trailingDiv"
          }
      ]
      }
    ]
}
}
  render() {
    return (
      <div className="App">
      <GreatWall  columns = {this.state.columns} pageSize = '10' minRows = '0' symbol = 'MSFT'></GreatWall>
      </div>
    );
  }
}



export default App;
