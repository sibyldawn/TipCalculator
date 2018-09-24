import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      bill: 0,
      tax: 0,
      tipPercent: 0,
      total: 0,
    }
  }

  handleBillChange(bill){
    this.setState({
         bill
    },this.calculateTax())
  }
  
  calculateTax(){
    const { bill } = this.state;

    let tax = bill * 0.086
    
    return(
      this.setState({
           tax: tax.toFixed(2)
      })
    )
  }


  handleTipChange(tipPercent){
    this.setState({
         tipPercent
    },this.calculateTotal)
  }

  calculateTotal(){
    const {bill,tax,tipPercent} = this.state;
    
    let subtotal = +bill + +tax;
    console.log("subtotal", subtotal);
    let tipAmount = (subtotal*(tipPercent/100)).toFixed(2)
    console.log("tip", tipAmount);
    let total = +subtotal + +tipAmount
    console.log(total)
    return(
      this.setState({
        total: total
      })
    )
  }



  render() {
   console.log("state", this.state); 
   const { tax, total} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tip Calculator</h1>
        </header>
        <div className="tip-box">
          <p>Bill:</p><span>$</span><input type="text" onChange={e => this.handleBillChange(e.target.value)}/> 
          <p>Tax:</p><h3>${tax}</h3>
          <p>Tip Percentage:</p><input type="text" onChange={e => this.handleTipChange(e.target.value)}/><span>%</span>
          <p>Total Bill:</p><h3>${total}</h3>
         <div> <button>Pay Now</button> </div>
        </div>
        
      </div>
    );
  }
}

export default App;
