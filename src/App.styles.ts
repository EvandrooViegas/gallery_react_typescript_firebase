import styled from "styled-components";
export const Container = styled.div`
    background-color: #27282F;
    color: white;
    min-height: 100vh;
    margin: 0;
    padding: 0;

` 

export const Area = styled.div`
    margin:auto;
    max-width: 980px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .error {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: red;
        padding: 10px;
        color: white;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
        button {
            background-color: transparent;
            border: none;
            padding: 10px;
            color: white;
            font-size: 10px;

            &:hover {
                opacity: .90;
                cursor: pointer
            }
        }
    }
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;
    .emoji {
        font-size:50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button {
        padding: 12px;
        border-radius: 10px;
        border: none;
        background-color: #2f67f5;
        color: white;
        transition: .8s;

        &:hover {
            cursor: pointer;
            opacity: .90;
        }
    }

`