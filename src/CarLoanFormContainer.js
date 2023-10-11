import React, { useState, useEffect } from 'react';
import './CarLoanForm.css';
import CarLoanFormPresentational from './CarLoanFormPresentational';
import _ from 'lodash';
import dotenv from 'dotenv';
dotenv.config({path: '/Users/prithvi/Desktop/Code/React/fpcar_frontend/fpc/.env'});


export function CarLoanFormContainer() {
  const [carPrice, setCarPrice] = useState({
    price: 0.0,
    currency: ""
  });
  const [loanDetails, setLoanDetails] = useState({
    loan_tenure_in_months: 48,
    rate_of_interest: 8.5,
  });
  const [loanDetailsValue, setLoanDetailsValue] = useState({
    loan_tenure_in_months: 48,
    rate_of_interest: 8.5,
  });
  const [buyer, setBuyer] = useState({
    yearly_take_home_income: 4440000,
    emi_as_percentage_of_monthly_income: 10.0,
    car_down_payment_percentage: 20.0,
  });
  const [buyerValue, setBuyerValue] = useState({
    yearly_take_home_income: 4440000,
    emi_as_percentage_of_monthly_income: 10.0,
    car_down_payment_percentage: 20.0,
  });

  const handleSubmit = () => {
    const { loan_tenure_in_months, rate_of_interest } = loanDetails;
    const { yearly_take_home_income, emi_as_percentage_of_monthly_income, car_down_payment_percentage } = buyer;
    const body = {
      loan_details: {
        loan_tenure_in_months,
        rate_of_interest
      },
      buyer: {
        yearly_take_home_income,
        emi_as_percentage_of_monthly_income,
        car_down_payment_percentage
      }
    }
    fetch(`${process.env.REACT_APP_URL}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => {
        setCarPrice({
          price: data.price,
          currency: data.currency
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  const debouncedHandleSubmit = _.debounce(handleSubmit, 1000);


  useEffect(() => {
    debouncedHandleSubmit();
  }, [loanDetails, buyer]);

  const handleLoanDetailsValueChange = (event, newValue, inputName) => {
    if (newValue !== '') {
      setLoanDetails({
        ...loanDetails,
        [inputName]: newValue,
      });
      setLoanDetailsValue({
        ...loanDetailsValue,
        [inputName]: newValue,
      });
    }
  };


  const handleBuyerValueChange = (event, newValue, inputName) => {
    if (newValue !== '') {
      setBuyer({
        ...buyer,
        [inputName]: newValue,
      });
      setBuyerValue({
        ...buyerValue,
        [inputName]: newValue,
      });
    }
  };




  return (
    <div className="car-loan-form">
      <CarLoanFormPresentational carPrice={carPrice} loanDetails={loanDetails} loanDetailsValue={loanDetailsValue} buyer={buyer} buyerValue={buyerValue} handleLoanDetailsValueChange={handleLoanDetailsValueChange} handleBuyerValueChange={handleBuyerValueChange} />
    </div>
  )
};
