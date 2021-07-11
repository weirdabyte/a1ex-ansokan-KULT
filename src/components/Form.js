import React from 'react';
import {useForm} from '@formcarry/react';

const Form = () => {
  // Call the `useForm` hook in your function component
  const {state, submit} = useForm({
    id: 'beFT53Hoa3H',
  });

  // Success message
  if (state.submitted) {
    return (
      <div className="success-message">
        Thank you! We received your submission.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Namn</label>
      <input type="text" name="Name" className="user" />

      <label htmlFor="email" className="name">
        Email
      </label>
      <input id="email" type="email" name="email" />

      <label htmlFor="message">Meddelande</label>
      <textarea id="message" className="message" name="message" />

      <button type="submit" className="submit">
        Skicka
      </button>
    </form>
  );
};

export default Form;
