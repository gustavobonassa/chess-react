import styled from 'styled-components';
import table from '../../assets/table.svg';

export const Container = styled.div`


`;
export const Tabuleiro = styled.div`
    height: 576px;
    width: 576px;
    margin: auto;
    background: url(${table}) 0% 0% / 100% 100%;


`;

export const Peca = styled.div`

    position: absolute;
    transform: translate(${props => props.local || '0px, 0px'});
    width: 72.01px;
    height: 72.01px
    font-size: 48px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
    cursor: pointer;

`;
export const Movimentos = styled.div`
    .movm {
        transform: translate(${props => props.local || '0px, 0px'});
        position: absolute;
        background-color: #4e86ec;
        width: 52.01px;
        border-radius: 30px;
        height: 52.01px;
        margin: 10px;
        font-size: 48px;
        text-align: center;
        opacity: 0.7;
        background-repeat: no-repeat;
        background-size: 100%;
        cursor: pointer;
    }


`;
export const MostraTurno = styled.div`
    height: 250px;
    width: 250px;
    margin-top: 20px;
    margin-left: 20px;
    position: fixed;
    text-transform: uppercase;

    .turnoClass{
        border: 1px solid gray;
        padding: 20px;
    }


`;
export const PecasFora = styled.div`
    height: 100%;
    width: 300px;
    position: fixed;
    right: 0;

`;