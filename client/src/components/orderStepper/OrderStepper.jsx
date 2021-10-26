import React, { useCallback, useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Tickets from './tickets/Tickets';
import GuestForm from './guestForm/GuestForm';
import OrderSummary from './orderSummary/OrderSummary';
import { useGuestContext } from '../../context/guestContext';
import { Grid } from '@mui/material';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import '../../app.css';

const steps = ['Select Ticket', 'Fill in form', 'Checkout'];

const OrderStepper = () => {
  const {
    guestUserOrder,
    guestUserOrder: { tickets },
    setGuestUserOrder,
  } = useGuestContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [triggerSubmit, setTriggerSubmit] = useState(false);
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
    setLocalStorage('guestUserOrder', guestUserOrder);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getLocalOrder = useCallback(() => {
    const userOrder = getLocalStorage('guestUserOrder');
    if (userOrder !== null) {
      setGuestUserOrder(userOrder);
    }
  }, [setGuestUserOrder]);

  useEffect(() => {
    getLocalOrder();
  }, [getLocalOrder]);

  return (
    <Grid container sx={{ width: '100%', minHeight: '550px', padding: '30px' }}>
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
        {step.second && (
          <GuestForm
            triggerSubmit={triggerSubmit}
            setFormSubmitted={setFormSubmitted}
            handleNext={handleNext}
            setTriggerSubmit={setTriggerSubmit}
          />
        )}
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

          {step.first && (
            <Button onClick={handleNext} disabled={disableNextButton()}>
              Go to Form
            </Button>
          )}

          {step.second && (
            <Button onClick={() => setTriggerSubmit(true)}>
              Go to Payment
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderStepper;
