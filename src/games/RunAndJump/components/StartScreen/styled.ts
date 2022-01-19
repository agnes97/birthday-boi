import styled from 'styled-components'

// MIXIS
const mixinFieldsetOptionHover = `
    background-color: hsla(224, 50%, 45%, 0.5);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
`

const mixinImitateFieldsetOptionHover = `
    background-color: hsl(224, 50%, 45%);
    color: hsl(0, 0%, 100%);
`

export const StyledStartScreenContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & > h2 {
        font-size: 3rem;
        margin: 0;
        padding: 2.5rem 0;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;
    gap: 4rem;
    width: 100%;
    padding: 0 4rem 2rem 4rem;
    margin-bottom: 2rem; /* TO AVOID GRASS */
`

export const StyledSubmit = styled.div`
    display: flex;
    color: hsl(224, 50%, 45%);
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 2rem;

    & > label {
        color: hsl(224, 50%, 45%);
        font-weight: bold;
        font-size: 2.5rem;
        cursor: pointer;
    }
`

export const StyledFieldset = styled.fieldset`
    display: flex;
    color: hsl(224, 50%, 45%);
    font-weight: bold;

    &.hero, &.obstacles {
        border: 0.1rem dashed hsl(224, 50%, 45%);
        height: 100%;
        width: 100%;
    }

    /* HERO */
    &.hero {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-transform: uppercase;

        & > div.fieldset-option {
            padding: 1rem;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;

            &:hover { 
                ${mixinFieldsetOptionHover} 
            }

            &.imitate-hover { 
                ${mixinImitateFieldsetOptionHover} 
            }
        }
    }

    /* OBSTACLES */
    &.obstacles {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 2rem;

        & * label { margin-left: 1rem; }

        & > div.fieldset-option {
            padding: 1.5rem;
            margin: -1rem;
            width: 100%;

            &:hover { 
                ${mixinFieldsetOptionHover} 
            }

            &.imitate-hover { 
                ${mixinImitateFieldsetOptionHover} 
            }
        }
    }
`

export const CustomNumberContainer = styled.div`
    font-size: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > input {
        height: 2.5rem;
        width: 5rem;
        font-size: 1.7rem;
        padding: 0.5rem;
        color: hsl(0, 0%, 100%);
        background-color: hsla(0, 0%, 100%, 0.1);
        border: 0.1rem dashed hsl(0, 0%, 100%);

        /* Do not group these rules! */
        &::-webkit-input-placeholder {
            color: hsl(0, 0%, 100%);
        }
        &:-moz-placeholder {
            /* FF 4-18 */
            color: hsl(0, 0%, 100%);
            opacity: 1;
        }
        &::-moz-placeholder {
            /* FF 19+ */
            color: hsl(0, 0%, 100%);
            opacity: 1;
        }
        &:-ms-input-placeholder {
            /* IE 10+ */
            color: hsl(0, 0%, 100%);
        }
        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: hsl(0, 0%, 100%);
        }
        &::placeholder {
            /* modern browser */
            color: hsl(0, 0%, 100%);
        }
    }
`