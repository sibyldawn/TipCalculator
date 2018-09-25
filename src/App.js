import React, { Component } from 'react';
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

    let tax = bill * 0.86
    
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
   const { tax, total} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.socialenterprisemark.org.uk/wp-content/uploads/2016/07/Dollar-icon.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Tip Calculator</h1>
        </header>
        <div className="wrapper">
        <div className="tip-box">
          <p>Bill:</p><span>$</span><input type="number" onChange={e => this.handleBillChange(e.target.value)}/> 
          <p>Tax:</p><h3>${tax}</h3>
          <p>Tip Percentage:</p><input type="number" onChange={e => this.handleTipChange(e.target.value)}/><span>%</span>
          <p>Total Bill:</p><h3>${total}</h3>
         <div> <button onClick={()=> alert(`Received Payment: $${total}`)}>Pay Now</button> </div>
        </div>
        </div>  
      </div>
    );
  }
}

export default App;
