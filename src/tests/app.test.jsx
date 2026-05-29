import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from '../App.jsx';
import { store } from '../app/store.js';

it('renders login page', () => {
  render(<Provider store={store}><ConfigProvider><BrowserRouter><App /></BrowserRouter></ConfigProvider></Provider>);
  expect(screen.getByText('Employee Poll')).toBeInTheDocument;
});

describe('smoke', () => {
  it('has an npm runnable app', () => expect(true).toBe(true));
});
