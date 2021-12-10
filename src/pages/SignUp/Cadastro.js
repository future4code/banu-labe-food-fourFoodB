import React, {useState} from "react";
import axios from "axios";
import {ContainerCadastro} from "../SignUp/styled"
import { goToNewAddress } from "../../routes/coordinator";
import  { useNavigate} from "react-router-dom";
import { cpfMask } from "../../inputMask";
import seta from '../../img/back.png'
import logo from '../../img/logo-labe-food.svg'
import senha2 from '../../img/senha-2.png';
import senha from '../../img/senha.png';

document.title = "Cadastro novo Usuário "
    
export const Cadastro = () => {

    const navigation = useNavigate();
    let valorToken = "";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password,setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mudarTipoSenha, setMudarTipoSenha] = useState("password")
    const [mudarTipoSenhaConfirmar, setMudarTipoSenhaConfirmar] = useState("password")
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [senhaVisivelConfirmar, setSenhaVisivelConfirmar] = useState(false);

    const cadastrarPessoa = async () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup'
        const body = {
            name,email,cpf,password
        }
        try {
            const res = await axios.post(url,body)
            console.log(res)
            console.log(body)
            salvarToken(res);
            alert("Usuário cadastrado com sucesso");
            goToNewAddress(navigation);
    
        }catch(error) {
            alert(error.response.data.message)
        }
    }

    const salvarToken = async(token) => {
        valorToken = token.data.token;
        localStorage.setItem("token", valorToken);
    }
  
    const onChangeNome = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail= (e) => {
        setEmail(e.target.value)
    }

    const onChangeCpf = (e) => {
        setCpf(e.target.value)
    }

    const onChangeSenha = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmar = (e) => {
        setConfirm(e.target.value)
    }

    const onClickSenhaVisivel = () => {
        setSenhaVisivel(!senhaVisivel);
        mudarTipoSenha === "text" ? setMudarTipoSenha("password") : setMudarTipoSenha("text");
    }

    const onClickSenhaVisivelConfirmar = () => {
        setSenhaVisivelConfirmar(!senhaVisivelConfirmar);
        mudarTipoSenhaConfirmar === "text" ? setMudarTipoSenhaConfirmar("password") : setMudarTipoSenhaConfirmar("text");
    }

    return (
        <ContainerCadastro>
            <div className="barra">
                <img className="backImg" src={seta} />
            </div>
             <div className="logoContainer">
                <img  className="logoImg" src={logo} alt="Logo"/>
            </div>
                <div className="Title">
                <h2 className="Text Text-Style-3">Cadastrar</h2>    
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Nome*</label>
                    <input type="text"  required className="ContainerInput" value={name} onChange={onChangeNome} placeholder="Nome e Sobrenome"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">E-mail*</label>
                    <input  type="text" required className="ContainerInput" value={email} onChange={onChangeEmail} placeholder="email@email.com"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">CPF*</label>
                    <input  type="text" required className="ContainerInput" value={cpfMask(cpf)} onChange={onChangeCpf} placeholder="000.000.000-00"/>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Senha*</label>
                    <div className="ContainerSenha">
                        <input type={mudarTipoSenha} required className="ContainerInputSenha" value={password} onChange={onChangeSenha} placeholder="Mínimo 6 caracteres"/>
                        {senhaVisivel === false ?  <img onClick={onClickSenhaVisivel} className="Senha2"src={senha2}  /> : <img onClick={onClickSenhaVisivel}  className="Senha2"src={senha} /> }
                       
                    </div>
                </div>
            </div>
            <div className="Input_locus">
                <div className="ContainerDados" >
                    <label className="ContainerLabel">Confirmar</label>
                    <div className="ContainerSenha">
                        <input type={mudarTipoSenhaConfirmar} required className="ContainerInputSenha" value={confirm} onChange={onChangeConfirmar} placeholder="Confirmar a senha anterior"/>
                        {senhaVisivelConfirmar === false ?  <img onClick={onClickSenhaVisivelConfirmar}  className="Senha2" src={senha2} /> : <img onClick={onClickSenhaVisivelConfirmar} className="Senha2"src={senha} /> }
                    </div>
                    {password === confirm ? <span className="Deve-ser-a-mesma-que"></span>: <span className="Deve-ser-a-mesma-que">Deve ser a mesma que a anterior.</span>}
                </div>
            
            </div>
            <div className="ContainerBotao">
                <button className="botao" onClick={cadastrarPessoa}>Criar</button>
                </div>      
        </ContainerCadastro>
    );
};

export default Cadastro;