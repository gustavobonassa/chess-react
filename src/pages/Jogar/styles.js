import styled from 'styled-components';
import table from '../../assets/table.svg';

export const Container = styled.div`


`;
export const Tabuleiro = styled.div`
    height: 576px;
    width: 576px;
    margin: auto;
    background: url(${table}) 0% 0% / 100% 100%;

    .posCord{
        width: 72.01px;
        height: 72.01px;
        position: absolute;
    }
    .posR {
        float: right;
        color: #464545;
    }
    .posL {
        float: left;
        bottom: 0;
        color: #464545;
        position: absolute;
    }
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
    z-index: 10;

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
        z-index: 15;
    }
    .movm2 {
        transform: translate(${props => props.local || '0px, 0px'});
        position: absolute;
        background-color: #4e3636;
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
        z-index: 15;
    }
    .lastMov {
        transform: translate(${props => props.local || '0px, 0px'});
        position: absolute;
        background-color: #9d9ad8;
        width: 72.01px;
        height: 72.01px;
        opacity: 0.7;
        background-repeat: no-repeat;
        background-size: 100%;
        cursor: pointer;
        z-index: 5;
    }
    .kingCheck {
        transform: translate(${props => props.local || '0px, 0px'});
        position: absolute;
        background-color: rgb(193, 61, 61);;
        width: 72.01px;
        height: 72.01px;
        opacity: 0.7;
        background-repeat: no-repeat;
        background-size: 100%;
        cursor: pointer;
        z-index: 5;
    }


`;
export const MostraTurno = styled.div`
    height: 250px;
    width: 250px;
    margin-top: 20px;
    margin-left: 20px;
    position: fixed;
    text-transform: uppercase;
    text-align: center;

    .turnoClass{
        border: 1px solid gray;
        border-radius: 15px;
        padding: 20px;
    }
    .rodar{
        border: 1px solid gray;
        border-radius: 15px;
        padding: 20px;
        margin-top: 10px;
        cursor: pointer;
    }


`;
export const PecasFora = styled.div`
    height: 100%;
    width: 300px;
    position: fixed;
    right: 0;

    .pecasMortas{
        width: 72px;
        height: 72px;
        float: left;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .black{
        width: 100%;
        float: left;
    }
    .white{
        width: 100%;
        float: left;
    }
    .log{
        float:left;
        width: 90%;
        margin:20px;
        height: 150px;
        overflow-y: scroll;
        border:1px solid gray;
    }

`;