import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

test('renders logo, links, switch, and profile in header', () => {
  const { getByText, getByAltText, getByTestId } = render(<Header />);
  const homeMenuItem = getByText(/Home/i);
  const logo = getByAltText(/streemly/i);
  const profile = getByAltText(/profile picture/i);
  const switchBtn = getByTestId("color-mode-switch");
  
  expect(homeMenuItem).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(profile).toBeInTheDocument();
  expect(switchBtn).toBeInTheDocument();
});
