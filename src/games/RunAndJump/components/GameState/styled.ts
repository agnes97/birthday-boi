import styled from 'styled-components'

export const StyledGameStateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h2 { 
        font-size: 3rem;
        margin: 0;
    }

    & > h3 {
        margin-top: 0.5rem;
    }

    &.game-lost { background-color: hsl(0deg 50% 45% / 70%); }
    &.game-won { background-color: hsl(120deg 50% 45% / 50%); }
`

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`