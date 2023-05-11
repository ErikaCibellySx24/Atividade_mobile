import React from 'react';
import pageHome from './Pages/Home';
import LoginForm from './Componentes/LoginForm';
import './App.css';

function App() {
  return (
    <>
    <LoginForm onSubmit={function (email: string, password: string): void {
        throw new Error('Function not implemented.');
      } } />
    </>
  );
}

export default App;
