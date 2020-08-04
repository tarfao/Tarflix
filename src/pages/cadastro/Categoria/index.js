import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  const setValue = async (chave, valor) => {
    await setNovaCategoria({ ...novaCategoria, [chave]: valor });
  };

  const changeValue = (e) => {
    setValue(e.target.getAttribute('name'), e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    await setCategorias([...categorias, novaCategoria]);
    await setNovaCategoria(valoresIniciais);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={submit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={novaCategoria.nome}
          onChange={changeValue}
        />

        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={novaCategoria.descricao}
          onChange={changeValue}
          />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={novaCategoria.cor}
          onChange={changeValue}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((item, index) => (
          <li key={index}>
            {item.descricao + item.cor + item.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
