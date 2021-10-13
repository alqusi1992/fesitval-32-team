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
  const [formSubmit, setFormSubmit] = useState(false);

  const step = {
    first: activeStep === 0,
    second: activeStep === 1,
    third: activeStep === 2,
  };

  const disableNextButton = step.third
    ? true
    : !formSubmit && step.second
    ? true
    : step.first && tickets.length === 0
    ? true
    : false;

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
        {activeStep === 0 && <Tickets />}
        {activeStep === 1 && <GuestForm setFormSubmit={setFormSubmit} />}
        {activeStep === 2 && <OrderSummary />}

        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

          <Button onClick={handleNext} disabled={disableNextButton}>
            Next
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default OrderStepper;
