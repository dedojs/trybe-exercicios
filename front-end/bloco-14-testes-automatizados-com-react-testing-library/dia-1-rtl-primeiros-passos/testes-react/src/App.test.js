import { render, screen } from '@testing-library/react';
import App from './App';

describe("Dia de testes", () => {

  test('Primeiro teste', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})