import styled from 'styled-components';
import table from '../../assets/table.svg';

export const Tabuleiro = styled.div`
    height: 576px;
    width: 576px;
    margin: auto;
    background: url(${table}) 0% 0% / 100% 100%;


`;

export const Peca = styled.div`

    position: absolute;
    transform: translate(${props => props.local || '0px, 0px'});
    width: 72px;
    height: 72px
    font-size: 48px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
    cursor: pointer;


`;
