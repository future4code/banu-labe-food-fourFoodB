import styled from 'styled-components';


export const ContainerCadastro = styled.div`
    width: 22.5rem;
    height: 40rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #b8b8b8;
 

    .barra {
        width: 22.5rem;
        height: 2rem;
        margin-top: 0.5rem;
        border-bottom: solid #b8b8b8 1px;
    }

    .backImg {
        width:1rem;
        height:1.5rem;
        margin-top:2px;

    }
    .logoContainer{
        width: 6.5rem;
        height: 3.625rem;
        margin-bottom: 1.75rem;
    }

    .logoImg{
        width:100%;
        height:100px;
        object-fit: contain;
    }
    

    .ContainerSenha{
        displax:flex;
    }

    .ContainerInputSenha{
        width: 90%;
        height: calc(100% - 4px);
        border: none;
        padding: 0.75rem;
    }

    .Title {
        width: 22.5rem;
        height: 2.62rem;
        margin: 1rem 0 0;
        padding: 0.75rem 2rem;
    }

    .Text {
        font-size: 1rem;
        letter-spacing: -0.39px;
        text-align: center;
        margin-bottom: 1.25rem;
    }

    .Input_locus {
        width: 22.5rem;
        height: 4.5rem;
        margin: 0.25rem;
        padding: 0 1rem 0.5rem;
    }
    .ContainerDados {
        width: 100%;
        height: 3.5rem;
        margin-bottom: 1rem;
        border: 1px solid #b8b8b8;
        border-radius: 2px;
    }

    .ContainerLabel {
        display: block;
        position: relative;
        margin-top: -0.75rem;
        width: 4.875rem;
        font-size: 0.75rem;
        margin-left: 0.75rem;
        padding-left: 0.25rem;
        letter-spacing: -0.29px;
        color: #b8b8b8;
        background: #fff;
    }

    .ContainerInput { 
        width: 100%;
        height: calc(100% - 4px);
        border: none;
        padding: 1rem;
    }

    .Senha2 {
        width: 10%;
        height: 1.5rem;
        margin-top: 0.5rem;
        object-fit: contain;
    }
    
    .Deve-ser-a-mesma-que{
        width: 12.063rem;
        height: 1.125rem;
        margin: 0.313rem 7.438rem 0 1rem;
        font-family: Roboto;
        font-size: 0.75rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #e02020;
    }
  

    .ContainerBotao {
        width: 20.5rem;
        height: 2.625rem;
        padding: 0.75rem 1rem;
        border-radius: 2px;
        background-color: #e8222e;
    }
    button  {
        width: 100%;
        height: 1.125rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        background-color: #e8222e;
        border: none;
      }
`