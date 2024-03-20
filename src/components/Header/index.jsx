import React, { useState } from 'react';
import logo from "./assets/imagens/logo_secult_-_.jpg";
import '../../../public/formulario.css'
import '../../App.css';
import ReactDOM from 'react-dom';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
//import { useState } from 'react'

const Header = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [profissao, setProfissao] = useState('');
  const [genero, setGenero] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [sugestao, setSugestao] = useState('');

  const mandarPedido = (e) => {
      e.preventDefault(); // Prevenir o comportamento padrão do formulário

      // Verificar se todos os campos obrigatórios foram preenchidos
      if (nome && cpf && profissao && genero && idade && cidade && bairro) {
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
              <input type="text" id="nome" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="cpf">CPF</label>
                      <input type="text" id="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                      
                  </div>
                  <div className="lado">
                      <label htmlFor="profissao">Profissão</label>
                      <input type="text" id="profissao" placeholder="Digite sua profissão" value={profissao} onChange={(e) => setProfissao(e.target.value)} required />
                  </div>
              </div>
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="genero">Gênero</label>
                      <select id="genero" defaultValue={genero} onChange={(e) => setGenero(e.target.value)} required>
                        <option disabled value="">Escolha o Gênero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                      </select>
                  </div>
                  <div className="lado">
                      <label htmlFor="idade">Idade</label>
                      <input type="text" id="idade" placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                  </div>
              </div>
              <div className="lado-a-lado">
                  <div className="lado">
                      <label htmlFor="cidade">Cidade</label>
                      <input type="text" id="cidade" placeholder="Digite sua cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                  </div>
                  <div className="lado">
                      <label htmlFor="bairro">Bairro</label>
                      <input type="text" id="bairro" placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                  </div>
              </div>
              <label htmlFor="sugestao">Sugestão:</label>
              <textarea id="sugestao" cols="30" rows="5" value={sugestao} onChange={(e) => setSugestao(e.target.value)}></textarea>
              <button type="submit">Enviar</button>
          </form>
          {/* <img src="Assets/logo-secult_jpg" alt="Logo do Governo do Estado do Ceará" /> */}
      </div>
  );
}

export default Header;
