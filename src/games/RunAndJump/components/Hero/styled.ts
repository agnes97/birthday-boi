import styled from 'styled-components'
import agnes from '../../../../assets/agnes.gif'
import henry from '../../../../assets/henry.gif'

export const StyledHero = styled.div`
    position: absolute;
    bottom: 2rem;
    left: -4rem;
    height: 4rem;
    width: 2.5rem;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    cursor: pointer;

    &.agnes { background-image: url(${agnes}); }
    &.henry { background-image: url(${henry}); }
`