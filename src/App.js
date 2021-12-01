import Header from './features/Header/Header';
import SearchBlock from './features/SearchBlock/SearchBlock';
// import ReposItemDetail from './features/RerosDetail/ReposDetail';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SearchBlock />
        {/* <ReposItemDetail/> */}
      </main>
    </div>
  );
}

export default App;
