import { FC } from 'react';

import './index.css';
import Footer from '../Footer';
import Header from '../Header';
import RunAndJump from '../../games/RunAndJump';

const App: FC = () => (
  <div className="page-wrapper">
    <Header />
    <main>
      <RunAndJump />
    </main>
    <Footer />
  </div>
)

export default App;
