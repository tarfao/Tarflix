import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import useForm from '../../../componentes/hooks/useForm';
import categoriesRepository from '../../../repositories/categoria';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    cor: '',
    text: '',
    url: ''
  };
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearValues } = useForm(valoresIniciais);
  // ============

  useEffect(() => {
    categoriesRepository.getAllCategoryWithVideos()
      .then(resp => {
        setCategorias(resp);
      })
      .catch(err => {
        console.log(err.message)
      })

  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        if (!values.nome) {
          alert("Ops! O nome da categoria é obrigatório!");
          return;
        }
        categoriesRepository.create(values);

        clearValues(valoresIniciais);

        categoriesRepository.getAllCategoryWithVideos()
          .then(resp => {
            setCategorias(resp);
          })
          .catch(err => {
            console.log(err.message)
          })
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Texto extra:"
          type="text"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="Url para vídeo extra:"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
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
