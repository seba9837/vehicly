import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/input';
import Button from '../../../components/UI/Button/button';
import '../auth.css';

const SignIn = (props) => {
  const [inputs, setInputs] = useState({
    email: {
      elementType: 'input',
      elementAttributes: {
        type: 'email',
        placeholder: 'Enter your email',
      },
      value: '',
      label: 'E-mail',
      iconType: 'EmailIcon',
    },
    password: {
      elementType: 'input',
      elementAttributes: {
        type: 'password',
        placeholder: 'Enter your password',
      },
      value: '',
      label: 'Password',
      iconType: 'LockIcon',
    },
  });

  const inputChangeHandler = (event, inputName) => {};
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const formElementsArray = [];
  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key],
    });
  }

  let formInputs = formElementsArray.map((formInput) => (
    <Input
      key={formInput.id}
      elementType={formInput.config.elementType}
      elementAttributes={formInput.config.elementAttributes}
      label={formInput.config.label}
      iconType={formInput.config.iconType}
      changed={(event) => inputChangeHandler(event, formInput.id)}
    />
  ));

  return (
    <div className='authContainer'>
      <form className='authForm'>
        <h1>Sign in to Vehicly</h1>
        <div className='authInputsForm'>{formInputs}</div>
        <Button clicked={(event) => submitHandler(event)}>Sign in</Button>
        <div className='textWithLinkContainer'>
          <span>New to Vehicly? </span>
          <Link to='/signup'>Create an account</Link>.
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
