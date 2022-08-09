import styled from "styled-components"
export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    .delete {
        margin-top: 10px;
        opacity: 0;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 15px;
        transition: .5s;
        cursor: pointer;
        &:hover {
            color: red;
        }
    }

    &:hover {
        .delete {
            opacity: 1;
        }
    }
`