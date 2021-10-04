import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GuestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = () => {};
  return (
    <form onSubmit={handleSubmit()}>
      <label>
        First Name
        <input
          type="text"
          placeholder="Enter your first name..."
          {...register("firstName", {
            required: "please enter your first name!",
          })}
        />
        {formState.errors.firstName && (
          <p>{formState.errors.firstName.message}</p>
        )}
      </label>
      <label>
        Last Name
        <input
          type="text"
          placeholder="Enter your last name..."
          {...register("lastName", {
            required: "please enter your last name!",
          })}
        />
        {formState.errors.lastName && (
          <p>{formState.errors.lastName.message}</p>
        )}
      </label>
      <label>
        E-mail Address
        <input
          type="text"
          placeholder="Enter your e-mail address..."
          {...register("email", {
            required: "please enter your e-mail address!",
          })}
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
      </label>
    </form>
  );
};

export default GuestForm;
