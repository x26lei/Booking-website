import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './Main';
import BookingSlotsDisplay from './BookingSlotsDisplay';

jest.mock('./Main', () => () => <div data-testid="main-component"></div>);
jest.mock('./BookingSlotsDisplay', () => () => <div data-testid="booking-slots-display-component"></div>);

describe('App', () => {
  test('renders Main and BookingSlotsDisplay components', () => {
    render(<App />);
    const mainComponent = screen.getByTestId('main-component');
    const bookingSlotsDisplayComponent = screen.getByTestId('booking-slots-display-component');
    
    expect(mainComponent).toBeInTheDocument();
    expect(bookingSlotsDisplayComponent).toBeInTheDocument();
  });
});
