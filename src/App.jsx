import React from 'react';
import logo from "./assets/imagens/logo_secult_-_.jpg";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { PrimeReactProvider } from 'primereact/api';
import Ways from "./routes";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/formulario.css';
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service";
import './App.css';
const App = () => {

  const [userInfo, setUserInfo] = useState({
    name: 'Chico',
    isLogged: false,
    level: 'admin'
  });
  

  return(
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
          <PrimeReactProvider>
            <Ways />
          </PrimeReactProvider>
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

// export default App;
function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [profissao, setProfissao] = useState('');
  const [genero, setGenero] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [sugestao, setSugestao] = useState('');

  const [values, setValues] = useState ();
  
      
  const mandarPedido = (e) => {
      e.preventDefault(); // Prevenir o comportamento padrão do formulário

      // Verificar se todos os campos obrigatórios foram preenchidos
      if (nome && profissao && cidade && bairro) {
          // Aqui você poderia implementar a lógica para enviar o pedido
          alert("Cadastro enviado com sucesso.");
         
      } else {
          alert("Por favor, preencha todos os campos obrigatórios.");
      }
  };

  return (
      <div>
          <form onSubmit={mandarPedido}>
          <h1>Sejam bem vindos(as)</h1>
              <label htmlFor="nome">Nome do Visitante</label>
              <input type="text" id="nome" placeholder="Digite seu nome" required />
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="cpf">CPF</label>
                      <input type="text" id="cpf" placeholder="Digite seu CPF" />
                      
                  </div>
                  <div className="lado">
                      <label htmlFor="profissao">Profissão</label>
                      <input type="text" id="profissao" placeholder="Digite sua profissão" required />
                  </div>
              </div>
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="genero">Gênero</label>
                      <select id="genero" defaultValue="">
  <option disabled value="">Escolha o Gênero</option>
  <option value="Masculino">Masculino</option>
  <option value="Feminino">Feminino</option>
</select>
                  </div>
                  <div className="lado">
                      <label htmlFor="idade">Idade</label>
                      <input type="text" id="idade" placeholder="Digite sua idade" />
                  </div>
              </div>
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="cidade">Cidade</label>
                      <input type="text" id="cidade" placeholder="Digite sua cidade" required />
                  </div>
                  <div className="lado">
                      <label htmlFor="bairro">Bairro</label>
                      <input type="text" id="bairro" placeholder="Digite seu bairro" required />
                  </div>
              </div>
              <label htmlFor="sugestao">Sugestão:</label>
              <textarea id="sugestao" cols="30" rows="5"></textarea>
              <button type="submit" onClick={mandarPedido}>Enviar</button>
            
          </form>
          {/* <img src="Assets/logo-secult_jpg" alt="Logo do Governo do Estado do Ceará" /> */}
      </div>
  );
}  

export default Formulario;

  
 