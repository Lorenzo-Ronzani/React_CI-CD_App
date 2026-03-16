import {render, screen} from '@testing-library/react';
import App from './App';

test('renders react cicd app', () => {
  render(<App />);

  const textElement = screen.getByText(/react cicd app/i);
  expect(textElement).toBeInTheDocument();
});
