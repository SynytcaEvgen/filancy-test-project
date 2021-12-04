import Header from './features/Header/Header';
import SearchBlock from './features/SearchBlock/SearchBlock';
import Splashscreen from './features/Splashscreen/Splashscreen';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReposItemDetail from './features/ReposItemDetail/ReposItemDetail';
import ScrollToTop from './app/ScrollToTop';

import './App.scss';

function App() {
  return (
    <Router>
      <ScrollToTop/>
        <div className="app_wrapper">
          <Header />
          <Splashscreen/>
          <main>
            <Routes>
              <Route path="/" element={<SearchBlock />} />
              <Route path="detail" element={<ReposItemDetail/>}/>
            </Routes>
          </main>
        </div>
    </Router>
    
  );
}

export default App;
