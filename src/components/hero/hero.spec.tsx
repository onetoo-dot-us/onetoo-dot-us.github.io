import { render, screen } from '@testing-library/react';
import React from 'react';
import Hero from './hero';

describe('Hero', () => {
  it('should render', () => {
    expect(render(<Hero />)).toBeTruthy();
  });

  it('should initially display only first item of heroTextContentArray', () => {
    render(<Hero />);
    const firstItem = screen.getByTestId('first-item');
    const secondItem = screen.getByTestId('second-item');

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toHaveClass('hidden');
  });
});
