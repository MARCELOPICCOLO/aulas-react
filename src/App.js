import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Contato from './componentes/Contato'
import Header from './componentes/Header'


function App() {
  /*const cep = useForm('cep');
  const email = useForm('email')

  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate(cep.value && email.validate(email.value))){
      console.log("enviou");
    }else{
      console.log("nao enviado");
    }
  }*/

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato"  element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
