import React, { useState, useEffect } from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../componentes/FormField';
import useForm from '../../../componentes/hooks/useForm';
import Button from '../../../componentes/Button';
import videosRepositories from '../../../repositories/videos'
import categoriasRepositories from '../../../repositories/categoria'

function CadastroVideo(){
    const { handleChange, values } = useForm({ 
        titulo: '',
        url: '',
        categoria: ''
    });
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo);

    useEffect(() => {
        categoriasRepositories
        .getAll()
        .then(resp => {
            setCategorias(resp);
        })
    }, [])

    const categoriaEscolhida = categorias.find(item => {
        return item.titulo === values.categoria
    })

    const submit = (e) => {
        e.preventDefault();
        if(categoriaEscolhida){
            videosRepositories.create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id
            }).then(()=>{
                console.log('Vídeo cadastrado com sucesso');
                history.push('/');
            })
        } else {
            alert("Ops! Categoria não existe. Defina uma categoria sugerida pelo campo");
        }
    }
    return  (
    <PageDefault>
        <h1>Cadastro de vídeos</h1>

        <form onSubmit={submit}>
            
            <FormField
            label="Título do vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
            />

            <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
            />

            <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
            />

            <Button type='submit'>
                Cadastrar
            </Button>
        </form>

        <Link to='/cadastro/categoria'>
            Nova categoria
        </Link>
    </PageDefault>
    )
}

export default CadastroVideo;