import React, {useState} from "react";
import axios from "axios";
import {ContainerCadastroEndereco} from "../Address/styled";
import seta from '../../../img/back.png'


document.title = "Cadastro Endereço novo Usuário "

export const CadastroEndereco = () => {

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [neighbourhood, setNeighbourhood] = useState("");
    const [city,setCity] = useState("");
    const [state, setState] = useState("");
    const [complement, setComplement] = useState("");

     const cadastrarPrimeiroEndereco = async () => {
        const url = ' https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address'
     
        const header ={ 
            headers:
            {
                auth : window.localStorage.getItem('token')
            }
        }
        const body = {
            street,number,neighbourhood,city,state,complement
        }
       
        try {
            const res = await axios.put(url,body,header)
          /*   const res = await axios.put(url,{ street,number,neighbourhood,city,state,complement},{
                headers: {auth: window.localStorage.getItem('token')}
            }); */
            console.log(res);
            console.log(body);
            alert("Endereço Cadastrado com Sucesso");
        }catch(error) {
            console.log(body);
            alert(error.response.data.message)
    } 
}

  
    const onChangeRua = (e) => {
        setStreet(e.target.value);
    }

    const onChangeNumero= (e) => {
        setNumber(e.target.value);
    }

    const onChangeBairro = (e) => {
        setNeighbourhood(e.target.value);
    }

    const onChangeCidade = (e) => {
        setCity(e.target.value);
    }

    const onChangeEstado = (e) => {
        setState(e.target.value);
    }

    const onChangeComplemento = (e) => {
        setComplement(e.target.value);
    }


    return (
        <ContainerCadastroEndereco>
            <div className="barra">
                <img className="backImg" src={seta} />
            </div>
                <div className="Title">
                <h2 className="Text Text-Style-3">Meu endereço</h2>    
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Logradouro*</label>
                    <input type="text"  required className="ContainerInput" value={street} onChange={onChangeRua} placeholder="Rua / Av."/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Número*</label>
                    <input  type="text" required className="ContainerInput" value={number} onChange={onChangeNumero} placeholder="Número"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Complemento</label>
                    <input  type="text" className="ContainerInput" value={complement} onChange={onChangeComplemento} placeholder="Apto. / Bloco"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Bairro*</label>
                    <input type="text" required className="ContainerInput" value={neighbourhood} onChange={onChangeBairro} placeholder="Bairro"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Cidade*</label>
                    <input type="text" required className="ContainerInput" value={city} onChange={onChangeCidade} placeholder="Cidade"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Estado*</label>
                    <input type="text" required className="ContainerInput" value={state} onChange={onChangeEstado} placeholder="Estado"/>
                </div>
            </div>
                <div className="ContainerBotao">
                    <button className="botao" onClick={cadastrarPrimeiroEndereco}>Salvar</button>
                </div>

        </ContainerCadastroEndereco>
    );
};

export default CadastroEndereco;