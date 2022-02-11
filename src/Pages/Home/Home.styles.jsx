import styled from "styled-components";

export const Wrapper = styled.header`

  .container {
    max-width: 500px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-link {
      width: 100%;
      display: flex;
      align-items: center;
      a {
        padding:15px;
        margin-left: 20px;
        font-size: 20px;
      }
    }

    .header{
      margin: 40px 0;
      h1{
        font-size: 42px;
        color: #222;
      }
      h2 {
        color: #555;
        font-weight: 100;
        margin-bottom: 10px;
      }
    }
  }
`;
