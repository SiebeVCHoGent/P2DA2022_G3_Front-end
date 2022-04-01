import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';
import { SearchProvider } from './contexts/SearchProvider';

import { Routes, Route } from 'react-router-dom'
import Uitleg from './components/Uitleg';

function App() {
  return (
    <div className='body'>
          <Navigation></Navigation>
          
          <SearchProvider>
            <Routes>
                <Route exact path='/' element={<Uitleg/>}/>
                <Route exact path='*' element={<Overview/>} />
            </Routes>
          </SearchProvider>
      </div>
    );
}

export default App;
