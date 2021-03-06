import styled, { keyframes } from 'styled-components'

const flicker = keyframes`
    0%   {transform: rotate(-35deg) scale(1.0);}
    20%  {transform: rotate(-65deg) scale(1.0);}
    40%  {transform: rotate(-35deg) scale(1.1);}
    60%  {transform: rotate(-65deg) scale(1.1);}
    80%  {transform: rotate(-35deg) scale(0.9);}
    100% {transform: rotate(-65deg) scale(0.9);}
`

export const StyledObstacle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    /* Starting position needs to be this big to accomodate higher numbers. */
    right: -3rem;
    bottom: 2rem;

    & > .obstacle-number {
        font-size: 2.5rem;
        font-weight: bold;
        -webkit-text-stroke: 0.1rem hsl(0, 20%, 25%);
    }

    & > .obstacle-flame {
        width: 1rem;
        height: 1rem;
        border-radius: 50% 0% 50% 50%;
        background: radial-gradient(
            circle at 25% 75%, 
            transparent 10%, 
            hsl(60, 100%, 50%), 
            hsl(39, 100%, 50%), 
            hsl(16, 100%, 50%), 
            hsl(0, 100%, 50%)
        );
        animation: ${flicker} 1s linear infinite;
    }
`