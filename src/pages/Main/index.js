import React, { Component } from 'react';

//import logo from "../../assets/logo.png";

import { Container, SubmitButton } from './styles';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <form >
                    <h1>Xadrez</h1>
                    <input 
                        placeholder="Digite seu nome"
                    />
                    <SubmitButton type="submit">Entrar</SubmitButton>
                </form>
            </Container>
        );
    }
}
