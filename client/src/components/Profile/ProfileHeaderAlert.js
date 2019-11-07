import React, { useState, Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'
// import Button from 'react-bootstrap/Button'
import { Button, Paper } from '@material-ui/core';

const ProfileHeaderAlert = () => {
  const [show, setShow] = useState(true)
  return (
    <Fragment>
    <Paper style={{paddingTop: '25px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '10px'}}>
      <Alert show={show}
        variant='success'
        style={{
          color: '#155724',
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
          position: 'relative',
          padding: '.75rem 1.25rem',
          marginBottom: '1rem',
          border: '1px solid transparent',
          borderRadius: '1rem'}}>
          <Alert.Heading
            style={{
              fontSize: '1.5rem',
              marginBottom: '.5rem',
              fontWeight: '700',
              lineHeight: '1.2'}}>
            Welcome to the meZocliQ Online Portal
          </Alert.Heading>
        <p style={{
          display: 'block',
          marginBlockStart: '1em',
          marginBlockEnd: '1em',
          marginInlineStart: '0px',
          marginInlineEnd: '0px'}}>
          Before getting started, pls set you profile up via the form below
        </p>
          <hr style={{
            marginTop: '1rem',
            marginBottom: '1rem',
            border: '0',
            borderTop: '1px solid rgba(0,0,0,.1)'
          }}/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button

            style={{color: '#28a745',
                    display: 'inlineBlock',
                    fontWeight: '400',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: 'transparent',
                    border: '1px solid #28a745',
                    padding: '.375rem .75rem',
                    fontSize: '.75rem',
                    lineHeight: '1.5',
                    borderRadius: '.25rem'}}
              onClick={() => setShow(false)}
              variant="outlined">
            Dismiss..
          </Button>
        </div>
      </Alert>
      {!show &&
      <Button style={{color: '#fff',
                      backgroundColor: '#007bff',
                      borderColor: '#007bff',
                      display: 'inlineBlock',
                      fontWeight: '400',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      userSelect: 'none',
                      border: '1px solid transparent',
                      padding: '.375rem .75rem',
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      borderRadius: '.25rem'}}
                onClick={() => setShow(true)}>
                Show Alert
            </Button>}
            </Paper>
    </Fragment>
  );
};

export default ProfileHeaderAlert;
