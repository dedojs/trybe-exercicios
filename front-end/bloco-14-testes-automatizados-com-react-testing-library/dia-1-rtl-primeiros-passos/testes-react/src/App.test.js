import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe("Dia de testes", () => {

  beforeEach(() => {
    
  })

  test('Primeiro teste, verificar texto Carregando', () => {
    render(<App/>)
    const loadingText = screen.getByText(/carregando/i) // regex
    expect(loadingText).toBeInTheDocument()
  });

  test('Segundo teste, verificar Link React', () => {
    render(<App/>)
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  /*
  //testes assincronos //
  test('Terceiro teste, verificar título', async () => {

    const loadingText = screen.getAllByText(/carregando/i)
    await waitForElementToBeRemoved(loadingText)

    const title = await screen.findByText(/Kingslaive/i);
    expect(title).toBeInTheDocument();
  });
  */

  test('Quarto teste, teste de interação do usuário', () => {
    render(<App/>)
    const detail = screen.getAllByText(/ver detalhes/i);
    expect(detail).toBeDefined();
  });

  /*
  test('Quinto teste, teste de interação do usuário', () => {
    userEvent.click(detail[0])
    const detailTitle = screen.getAllByText(/ver detalhes/i);
    expect(detail).toBeDefined();
  });
  */

  test('Sexto teste, teste de id', () => {
    render(<App/>)
    const dataTesteId = screen.getByTestId(/testeid/i);
    expect(dataTesteId).toBeDefined();
  });




})