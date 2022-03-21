// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const testMock = {
  card: [{
    name: 'Andre',
  age: '41',
  }] 
}

test('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});

test('Verificar texto na tela', () => {
  render(<App />)
  const text = screen.getByText(/teste de inputs/i)
  expect(text).toBeInTheDocument();
})

test('Verificar campo', () => {
  render(<App />)
  const target = screen.getByRole('textbox', { name:/nome/i }) //input
  expect(target).toBeInTheDocument();
})

test('verificar logo e subtitulo', () => {
  render(<App />)
  const imgLogo = screen.getByRole('img', {name:/logo/i}) // img
  const subtitle = screen.getByRole('heading', { level:2, name:/subtitulo/i}) // tag

  expect(imgLogo).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
})

test('verificar botão', () => {
  render(<App />)
  const btn = screen.getByRole('button', {name: /pesquisar/i}) // button
  expect(btn).toBeInTheDocument();
  // screen.logTestingPlaygroundURL(); // dica de ouro
})

test('verificar api, meu primeiro Mock', async () => {
  // digitou e pegou input
  // clicou no botao
  
  //fn usado em funções
  global.fetch = jest.fn((url) => {
    return Promise.resolve({
      json: () => Promise.resolve(testMock)
    })
  })
  render(<App />)

  // fazer a const do botao e do input, depois o user, fazer o input e o click
  // usar um await e uma const esperando o retorno na tela
  
})

test('verificar api, meu segundo Mock', async () => {
  // digitou e pegou input
  // clicou no botao
  
  //mockResolved
  global.fetch = jest.fn().mockResolvedValue({
    json: () => jest.fn().mockResolvedValue(testMock)
  })
    
  render(<App />)

  // fazer a const do botao e do input, depois o user, fazer o input e o click
  // usar um await e uma const esperando o retorno na tela
  
})