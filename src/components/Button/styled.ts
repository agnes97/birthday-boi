import styled from 'styled-components'

export const StyledButton = styled.button`
    border: 0.1rem solid hsl(0, 0%, 100%);
    color: hsl(0, 0%, 100%);
    font-weight: bold;
    line-height: 0;
    aspect-ratio: 1 / 1;
    transition: transform 1s linear;
    cursor: pointer;

    &:hover {
        background-color: hsl(0, 0%, 100%) !important;
        border: 0.1rem solid hsl(0, 0%, 0%);
        color: hsl(0, 0%, 0%);
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }

    /* BUTTON SHAPES */
    &.round { border-radius: 50%; }

    /* BUTTON SIZES */
    &.big { 
        min-width: 6rem;
        font-size: 4rem;
        padding: 1.5rem; 
    }

    &.medium { 
        min-width: 4rem;
        font-size: 2rem; 
        padding: 1rem;
    }

    &.small { 
        min-width: 2rem;
        font-size: 1rem;
        padding: 0.5rem; 
    }

    /* ALTERNATIVE COLORS */
    &.default { background-color: hsl(224, 50%, 45%); }
    &.won { background-color: hsl(120, 50%, 45%); }
    &.lost { background-color: hsl(0deg 50% 45%); }
`