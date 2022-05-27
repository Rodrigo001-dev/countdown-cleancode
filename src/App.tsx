import { useEffect, useState } from 'react';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('Chegou ao fim!');
      return;
    };

    // se eu não colcocar o setTimeout vai entrar em um loping eterno
    setTimeout(() => {
      setSecondsAmount(state => state -1);
    }, 1000);
  }, [secondsAmount]);

  // pegando os segundos e transformando em minutos mas arredondando sempre para
  // baixo(floor) poque nem sempre pode me retornar um numero inteiro
  const minutes = Math.floor(secondsAmount / 60);
  // o percentual(%) vai fazer a divisão mas vai pegar somente o resto da
  // divisão, e esse resto é a quantidade se segundos que não conseguiram caber
  // dentro do proximo minuto da divisão
  const seconds = secondsAmount % 60;

  return (
    <div>
      {
        /* 
          pelos numeros serem inteiros não vão colocar um 0 depois dele, por
          isso eu transformo ele em string e utilizo a função padStart
          o padStart é básicamente uma função que adiciona uma quantidade de
          caracteres a esquerda até ela completar um numero de caracteres que eu
          desejo, que é 2 caracteres, eu sempre quero que o numero de segundos ou
          minutos sempre tenha 2 caracteres, se não tiver eu quero complerar os
          caracteres que faltam com zero
        */
      }
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default App
