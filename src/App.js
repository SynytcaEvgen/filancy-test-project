import Header from './features/Header/Header';
import SearchBlock from './features/SearchBlock/SearchBlock';
import Splashscreen from './features/Splashscreen/Splashscreen';
// import ReposItemDetail from './features/ReposItemDetail/ReposItemDetail';

import './App.scss';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Splashscreen/>
      <main>
        <SearchBlock />
        {/* <ReposItemDetail/> */}
      </main>
    </div>
  );
}

export default App;
