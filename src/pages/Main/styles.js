import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
    }

    form {
        width: 300px;
    
        display: flex;
        flex-direction: column;
    }
    input {
        height: 48px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 30px;
    }
`;
export const SubmitButton = styled.button`
    height: 48px;
    background: ${props => props.color || '#312b42'};
    border-radius: 4px;
    font-size: 16px;
    padding: 0 20px;
    margin-top: 10px;
    color: #FFF;
    font-weight: bold;
    border: 0;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;