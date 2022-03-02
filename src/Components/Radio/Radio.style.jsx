import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 1060px;
    margin: 10px auto;
    padding: 10px;
    
    fieldset {
        padding: 2rem;
        margin-bottom: 2rem;
        border: 2px solid #beb8b8;

        legend {
            color: #565454;
            font-weight: bold;
        }

        label{
            display:flex;
            margin-bottom: 1rem;
            font-family: monospace;
        }
    }

`