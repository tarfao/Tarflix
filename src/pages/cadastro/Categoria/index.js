import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  const setValue = async (chave, valor) => {
    await setNovaCategoria({...novaCategoria, [chave]: valor});
  }

  const changeValue = e => {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  const submit = async e => {
    e.preventDefault();
      await setCategorias([...categorias, novaCategoria])
      await setNovaCategoria(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={submit}>
        
        <FormField 
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={novaCategoria.nome}
          onChange={changeValue}
        />
        
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name='descricao'
              value={novaCategoria.descricao}
              onChange={changeValue}
            />
          </label>
        </div>

        <FormField 
          label='Cor'
          type='text'
          name='cor'
          value={novaCategoria.cor}
          onChange={changeValue}
        />

        <button type='submit'>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((item, index) => {
          return (
            <li key={index}>
              {item.descricao+item.cor+item.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;