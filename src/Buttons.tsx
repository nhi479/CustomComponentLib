import React from 'react';

import Button from './components/Button';

const Buttons = () => {
  return (
    <>
      <div style={{marginBottom: '50px'}}></div>
      <div style={{marginBottom: '10px'}}>
        <Button text='Send Email' intent='primary' />
        <Button text='Send Email' intent='success' style={{marginLeft: '10px'}}/>
        <Button text='Send Email' intent='error' style={{marginLeft: '10px'}}/>
      </div>
      <div style={{marginBottom: '10px'}}>
        <Button text='Send Email' intent='primary' variant='text' />
        <Button text='Send Email' intent='success' variant='text' style={{marginLeft: '10px'}}/>
        <Button text='Send Email' intent='error' variant='text' style={{marginLeft: '10px'}}/>
      </div>
      <div style={{marginBottom: '10px'}}>
        <Button text='Send Email' intent='primary' loading/>
        <Button text='Send Email' intent='primary' variant='text' loading style={{marginLeft: '10px'}}/>
      </div>
      <div style={{marginBottom: '10px'}}>
        <Button text='Send Email' intent='primary' disabled/>
        <Button text='Send Email' intent='primary' variant='text' disabled style={{marginLeft: '10px'}}/>
      </div>
    </>
  );
}

export default Buttons;
