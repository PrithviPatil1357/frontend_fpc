import React, { useState } from 'react';
import './CarLoanForm.css';

export function CarLoanForm() {
  const [formData, setFormData] = useState({
    loan_details: {
      loan_tenure_in_months: 48,
      rate_of_interest: 8.5,
    },
    buyer: {
      yearly_take_home_income: 4440000,
      emi_as_percentage_of_monthly_income: 10.0,
      car_down_payment_percentage: 20.0,
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { loan_details, buyer } = formData;
    fetch('/api/calculate-car-loan', {
      method: 'POST',
      body: JSON.stringify({ loan_details, buyer }),
    })
      .then((response) => response.json())
      .then((data) => {
        // do something with the response data
      });
  };

  return (
    <form className="car-loan-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Calculate Your Car Loan</h1>
      <label>
        Loan Tenure (in months):
        <input
          className="form-input"
          type="number"
          name="loan_tenure_in_months"
          value={formData.loan_details.loan_tenure_in_months}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rate of Interest:
        <input
          className="form-input"
          type="number"
          name="rate_of_interest"
          value={formData.loan_details.rate_of_interest}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Yearly Take-Home Income:
        <input
          className="form-input"
          type="number"
          name="yearly_take_home_income"
          value={formData.buyer.yearly_take_home_income}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        EMI as Percentage of Monthly Income:
        <input
          className="form-input"
          type="number"
          name="emi_as_percentage_of_monthly_income"
          value={formData.buyer.emi_as_percentage_of_monthly_income}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Car Down Payment Percentage:
        <input
          className="form-input"
          type="number"
          name="car_downpayment_percentage"
          value={formData.buyer.car_down_payment_percentage}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="form-button" type="submit">Calculate</button>
    </form>
  );
}

export default CarLoanForm;

