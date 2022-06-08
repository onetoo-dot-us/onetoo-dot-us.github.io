import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <div className='hero'>
      <p data-testid='first-item'>I am one,</p>
      <p className='hidden' data-testid='second-item'>
        You are one,
      </p>
      <p className='hidden'>We are</p>
      <p className='hidden'>Onetoo.</p>
    </div>
  );
}
