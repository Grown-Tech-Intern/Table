import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
`

export const Input = styled.div`
  width: 40%;
  input {
    width: 100%;
  }
  &.input-bot {
    width: 100%;
  }
  @media (max-width: 600px)
  {
    width: 100%;
  }
`
export const InputTop =styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem; */
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
  }
`
export const InputBot = styled.div`
  margin-top: 1rem;
`