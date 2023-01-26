import React from 'react';
import './CarLoanForm.css';
import { Slider, TextField } from '@material-ui/core';

function CarLoanFormPresentational(props) {
return (
<div className="car-loan-form">
<h1 className="form-title">Financially Prudent Car</h1>
<label className="form-label">
Loan Tenure (in months):
<Slider
className="form-slider"
value={props.loanDetailsValue.loan_tenure_in_months}
onChange={(e, value) => props.handleLoanDetailsValueChange(e, value, 'loan_tenure_in_months')}
min={6}
max={60}
/>
<TextField
className="form-input"
type="number"
value={props.loanDetailsValue.loan_tenure_in_months}
onChange={(e) => props.handleLoanDetailsValueChange(e, e.target.value, 'loan_tenure_in_months')}
/>
</label>
<br />
<label className="form-label">
Rate of Interest:
<Slider
className="form-slider"
value={props.loanDetailsValue.rate_of_interest}
onChange={(e, value) => props.handleLoanDetailsValueChange(e, value, 'rate_of_interest')}
min={0.0}
max={15.0}
step={0.5}
/>
<TextField
className="form-input"
type="number"
value={props.loanDetailsValue.rate_of_interest}
onChange={(e) => props.handleLoanDetailsValueChange(e, e.target.value, 'rate_of_interest')}
/>
</label>
<br />
<label className="form-label">
Yearly Take Home Income:
<Slider
className="form-slider"
value={props.buyerValue.yearly_take_home_income}
onChange={(e, value) => props.handleBuyerValueChange(e, value, 'yearly_take_home_income')}
min={200000}
max={100000000}
/>
<TextField
className="form-input"
type="number"
value={props.buyerValue.yearly_take_home_income}
onChange={(e) => props.handleBuyerValueChange(e, e.target.value, 'yearly_take_home_income')}
/>
</label>
<br />
<label className="form-label">
EMI as Percentage of Monthly Income:
<Slider
className="form-slider"
value={props.buyerValue.emi_as_percentage_of_monthly_income}
onChange={(e, value) => props.handleBuyerValueChange(e, value, 'emi_as_percentage_of_monthly_income')}
min={1.0}
max={50.0}
/>
<TextField
className="form-input"
type="number"
value={props.buyerValue.emi_as_percentage_of_monthly_income}
onChange={(e) => props.handleBuyerValueChange(e, e.target.value, 'emi_as_percentage_of_monthly_income')}
/>
</label>
<br />
<label className="form-label">
Car Down Payment Percentage:
<Slider
className="form-slider"
value={props.buyerValue.car_down_payment_percentage}
onChange={(e, value) => props.handleBuyerValueChange(e, value, 'car_down_payment_percentage')}
min={5.0}
max={100.0}
step={5.0}
/>
<TextField
className="form-input"
type="number"
value={props.buyerValue.car_down_payment_percentage}
onChange={(e) => props.handleBuyerValueChange(e, e.target.value, 'car_down_payment_percentage')}
/>
</label>
<div className="car-price">
{props.carPrice ? <p>{`Car Price: ${props.carPrice.currency}${props.carPrice.price.toLocaleString("en-IN")}`}</p> : <p>Loading car price...</p>}
</div>
</div>
);
}
export default CarLoanFormPresentational;