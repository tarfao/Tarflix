import { useState } from 'react';

function useForm(valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  
    /**The best handleChange, que ajuda economizar varios onChanges para cada novo
     * atributo, recuperando o seu valor, e o nome daquele input que deseja obter o seu value. 
     * AJUDA DEMAIS
    */
    function handleChange(e) {
      setValue(
        e.target.getAttribute('name'),
        e.target.value,
      );
    }
  
    function clearValues(){
      setValue(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearValues
    }
  }

  export default useForm;