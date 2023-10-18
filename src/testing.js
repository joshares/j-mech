import React, { useReducer } from 'react';

const initialState = {
  name: { value: '', error: '' },
  phone: { value: '', error: '' },
  appointmentDate: { value: '', error: '' },
  appointmentTime: { value: '', error: '' },
};

function formReducer(state, action) {
  const { fieldName, value } = action.payload;
  const fieldValidationFn = fieldValidationFunctions[fieldName];
  const error = fieldValidationFn(value);

  if (action.type === 'UPDATE_FIELD') {
    return { ...state, [fieldName]: { value, error } };
  }

  if (action.type === 'RESET_FORM') {
    return initialState;
  }

  throw new Error(`Invalid action type: ${action.type}`);
}

function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { fieldName: name, value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      // Submit form data using formState
      dispatch({ type: 'RESET_FORM' });
    }
  }

  function isFormValid() {
    const fieldNames = Object.keys(formState);
    let isFormValid = true;
    for (const fieldName of fieldNames) {
      const { value } = formState[fieldName];
      const fieldValidationFn = fieldValidationFunctions[fieldName];
      const error = fieldValidationFn(value);
      if (error) {
        dispatch({ type: 'UPDATE_FIELD', payload: { fieldName, value, error } });
        isFormValid = false;
      }
    }
    return isFormValid;
  }

  const { name, phone, appointmentDate, appointmentTime } = formState;
  const isSubmitDisabled = !name.value || !phone.value || !appointmentDate.value || !appointmentTime.value;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name.value} onChange={handleInputChange} />
        {name.error && <div className="error">{name.error}</div>}
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone.value} onChange={handleInputChange} />
        {phone.error && <div className="error">{phone.error}</div>}
      </label>
      <label>
        Date:
        <input type="date" name="appointmentDate" value={appointmentDate.value} onChange={handleInputChange} />
        {appointmentDate.error && <div className="error">{appointmentDate.error}</div>}
      </label>
      <label>
        Time:
        <input type="time" name="appointmentTime" value={appointmentTime.value} onChange={handleInputChange} />
        {appointmentTime.error && <div className="error">{appointmentTime.error}</div>}
      </label>
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
}

// Define validation functions for each field
const fieldValidationFunctions = {
  name: (value) => {
    if (!value) {
      return "Name is required";
    }
    if (value.length < 2) {
      return "Name must be at least 2 characters long";
    }
    return "";
  },
  phone: (value) => {
    if (!value) {
      return "Phone number is required";
    }
    if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value)) {
      return "Phone number must be in the format XXX-XXX-XXXX";
    }
    return "";
  },
  appointmentDate: (value) => {
    if (!value) {
      return "Date is required";
    }
    const today = new Date();
    const selectedDate = new Date(value);
    if (selectedDate < today) {
      return "Date must be in the future";
    }
    return "";
  },
  appointmentTime: (value) => {
    if (!value) {
      return "Time is required";
    }
    const [hours, minutes] = value.split(":");
    if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
      return "Time must be between 9:00 AM and 5:00 PM";
    }
    return "";
  },
  email: (value) => {
    if (!value) {
      return "Email is required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Invalid email address";
    }
    return "";
  },
};

