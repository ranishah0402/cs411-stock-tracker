import React from 'react';
import Plot from 'react-plotly.js';
class Stock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []

        }
    }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const POINTER_TO_THIS = this;
        const API_KEY = 'IOJR3FGTVTYC4D2A';
        let StockSymbol = 'AMZN'; 
        let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=${API_KEY}';
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);

                    for (var key in data['Time Series (Daily)']){
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    POINTER_TO_THIS.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )


    }

    render(){
        return (
            <div>
                <h1>Stock Market</h1>
                {/*<p>x-values: {this.state.stockChartXValues}</p>
                <p>y-values: {this.state.stockChartYValues}</p>*/}
                <Plot
                    data={[
                    {
                        x: this.stockChartXValues,
                        y: this.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                    ]}
                    layout={ {width: 320, height: 240, title: 'Single Stock Plot'} }
                />
            </div>
        )
    }
}
export default Stock