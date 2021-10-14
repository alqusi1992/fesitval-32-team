import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Tickets from './tickets/Tickets';
import GuestForm from './guestForm/GuestForm';
import OrderSummary from './orderSummary/OrderSummary';
import { useGuestContext } from '../../context/guestContext';
import { Grid } from '@mui/material';
import '../../app.css';

const steps = ['Select Ticket', 'Fill in form', 'Checkout'];

const OrderStepper = () => {
  const {
    guestUserOrder: { tickets },
  } = useGuestContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const step = {
    first: activeStep === 0,
    second: activeStep === 1,
    third: activeStep === 2,
  };

  const disableNextButton = () => {
    if (step.first && tickets.length === 0) return true;
    if (step.second && !formSubmitted) return true;
    if (step.third) return true;

    return false;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container sx={{ width: '100%', minHeight: '550px' }}>
      <Grid item xs={12}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        {step.first && <Tickets />}
        {step.second && <GuestForm setFormSubmitted={setFormSubmitted} />}
        {step.third && <OrderSummary />}
      </Grid>
      <Grid
        container
        justifyContent='space-between'
        item
        xs={12}
        alignSelf='flex-end'
      >
        <Grid sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color='inherit'
            disabled={step.first}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        </Grid>
        <Grid sx={{ position: 'relative' }}>
          {!disableNextButton() && <div class='arrows'></div>}
          <Button onClick={handleNext} disabled={disableNextButton()}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderStepper;
