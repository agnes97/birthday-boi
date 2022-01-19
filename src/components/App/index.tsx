import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import RunAndJump from '../../games/RunAndJump';
import { StyledPageWrapper, StyledMain } from './styled';

const App: FC = () => (
  <StyledPageWrapper>
    <Header />
    <StyledMain>
      <RunAndJump />
    </StyledMain>
    <Footer />
  </StyledPageWrapper>
)

export default App;
