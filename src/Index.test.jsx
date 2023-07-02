import React from 'react';
import { configure, render, screen } from '@testing-library/react';

import './__mocks__/matchMedia';
import App from './App/App';

configure({ testIdAttribute: 'data-v2' });

describe('application tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should render name', () => {
    const element = screen.getByTestId('name');
    expect(element).toHaveTextContent(/Igor Omelchenko/i);
  });

  test('should render title', () => {
    const element = screen.getByTestId('title');
    expect(element).toHaveTextContent(/AWS Architect \| Serverless enthusiast \| Fullstack developer/i);
  });

  test('should render creator', () => {
    const element = screen.getByTestId('creator');
    expect(element).toHaveTextContent(/Igor Omelchenko/i);
  });

  test('should render link to source code', () => {
    const element = screen.getByTestId('source');
    expect(element).toHaveAttribute('href', 'https://github.com/MEGApixel23/megapixel23.com');
  });

  const buttons = {
    GitHub: 'https://github.com/MEGApixel23',
    LinkedIn: 'https://www.linkedin.com/in/megapixel23',
    Resume: 'https://bit.ly/3d1868v',
    Email: 'mailto:hello@megapixel23.com',
  };

  test('should render buttons with links', () => {
    Object.entries(buttons).forEach(([k, v]) => {
      const element = screen.getByTestId(`${k}`);
      expect(element).toHaveTextContent(k);

      const parent = element.parentElement;
      expect(parent).toHaveAttribute('href', v);
    });
  });
});
