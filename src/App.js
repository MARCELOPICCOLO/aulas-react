import React from 'react'
import logo from './logo.svg';
import './App.css';
import Input from './componentes/Input'
import Select from   './componentes/Select'
import useForm from './componentes/useForm';

function App() {
  const cep = useForm('cep');
  const email = useForm('email')

  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate(cep.value && email.validate(email.value))){
      console.log("enviou");
    }else{
      console.log("nao enviado");
    }
  }

  return (
    <div className="App">
     <h1>Aulas</h1>
      <form onSubmit={handleSubmit}>
        <Input 
            label="Cep" 
            id="cep"
            type="text"
            {...cep}
          />

        <Input 
            label="Email" 
            id="email"
            type="email"
            {...email}
          />
          <button>enviar</button>
      </form>  
    </div>
  );
}

export default App;
