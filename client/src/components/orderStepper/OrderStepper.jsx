import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Tickets from './tickets/Tickets';
import GuestForm from './guestForm/GuestForm';
import OrderSummary from './orderSummary/OrderSummary';
import { useGuestContext } from '../../context/guestContext';

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
    if (
      (step.first && tickets.length === 0) ||
      (!formSubmitted && step.second) ||
      step.third
    )
      return true;
    return false;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
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
      <>
        {step.first && <Tickets />}
        {step.second && <GuestForm setFormSubmitted={setFormSubmitted} />}
        {step.third && <OrderSummary />}

        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color='inherit'
            disabled={step.first}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

          <Button onClick={handleNext} disabled={disableNextButton()}>
            Next
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default OrderStepper;
