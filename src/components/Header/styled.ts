import styled from 'styled-components'

export const StyledHeader = styled.header`
    margin: 0 auto;

    & > h1, h2 { margin: 0; }

    & > h1 {
        color: var(--text-secondary-color-light);

        &::before {
            content: '{ ';
            font-size: larger;
            color: var(--text-secondary-color-dark);
        }

        &::after {
            content: ' }';
            font-size: larger;
            color: var(--text-secondary-color-dark);
        }
    }

    & > h2 {
        color: var(--text-secondary-color-dark);
    }
`