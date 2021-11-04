import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { useLocation } from 'react-router';
import { showAlert } from '../../actions/alertActions';
import Alert from '../alert/Alert';
import { useValue } from '../../context/globalContext';
import useScrollToTop from '../../utils/useScrollToTop';
import { classes } from './OrderStepperStyles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { PayButton } from '../payButton/PayButton';

const steps = ['Select Ticket', 'Fill in form', 'Checkout'];

const OrderStepper = () => {
  useScrollToTop();
  const { dispatch } = useValue();

  const {
    guestUserOrder,
    guestUserOrder: { tickets },
    setGuestUserOrder,
  } = useGuestContext();
  const [activeStep, setActiveStep] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false);
  const step = {
    first: activeStep === 0,
    second: activeStep === 1,
    third: activeStep === 2,
  };

  const disableNextButton = () => {
    if (step.first && tickets.length === 0) return true;
    if (step.second && !isFormSubmitted) return true;
    if (step.third) return true;

    return false;
  };

  const handleNext = (guestUserOrder) => {
    setSessionStorage('guestUserOrder', guestUserOrder);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getSessionOrder = useCallback(() => {
    const userOrder = getSessionStorage('guestUserOrder');
    if (userOrder !== null) {
      setGuestUserOrder(userOrder);
    }
  }, [setGuestUserOrder]);

  let totalTicketsPrice = 0;
  if (guestUserOrder.tickets.length > 0) {
    totalTicketsPrice = guestUserOrder.tickets.reduce(
      (acc, value) => acc + value.price * value.quantity,
      0,
    );
  }

  useEffect(() => {
    getSessionOrder();
  }, [getSessionOrder]);

  const location = useLocation().search;

  const memorizedQuery = useMemo(() => {
    const query = new URLSearchParams(location);
    return query;
  }, [location]);

  useEffect(() => {
    if (memorizedQuery.has('canceled')) {
      setActiveStep(2);
      showAlert(
        'danger',
        'Your payment was canceled either by you or by the bank, please try again',
        dispatch
      );
    }
  }, [memorizedQuery, dispatch]);



  return (
    <Grid container sx={classes.stepper}>
      {alert.isAlert && <Alert />}
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
      <Grid item xs={12} sx={classes.stepContainer}>
        {step.first && <Tickets />}
        {step.second && (
          <GuestForm
            isTriggerSubmit={isTriggerSubmit}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            handleNext={handleNext}
            setIsTriggerSubmit={setIsTriggerSubmit}
          />
        )}
        {step.third && <OrderSummary />}
      </Grid>
      <Grid
        container
        justifyContent='space-between'
        item
        xs={12}

        alignSelf='center'
        sx={classes.ctaBar}
      >
        {!step.first && (
          <Grid>
            <Button color='inherit' onClick={handleBack} sx={classes.btn}>
              <KeyboardArrowLeftIcon /> Back
            </Button>
          </Grid>
        )}
        <Grid sx={classes.total}>Total: € {totalTicketsPrice}</Grid>
        <Grid>
          {step.first && (
            <Button
              onClick={() => handleNext(guestUserOrder)}
              disabled={disableNextButton()}
              sx={classes.btn}
            >
              Go to Form <KeyboardArrowRightIcon />
            </Button>
          )}

          {step.second && (

            <Button onClick={() => setIsTriggerSubmit(true)} sx={classes.btn}>
              Go to Payment <KeyboardArrowRightIcon />
            </Button>
          )}
          {step.third && <PayButton classes={classes} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderStepper;
