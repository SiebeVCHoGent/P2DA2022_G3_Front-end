import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';
import { SearchProvider } from './contexts/SearchProvider';

import { Routes, Route, Navigate } from 'react-router-dom'
import Uitleg from './components/Uitleg';
import CodingTreeItemOverview from './components/OverviewComponents/CodingTreeItemOverview';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='body'>
          <Navigation></Navigation>
          
          <SearchProvider>
            <Routes>
                <Route exact path='/' element={<Uitleg/>}/>
                <Route exact path='dashboard' element={<Overview/>} />
                <Route exact path='/dashboard/:item' element={<CodingTreeItemOverview />}/>
                <Route path='/404' element={<NotFound />}/> 
                <Route path='*' element={<Navigate to={'/404'} replace />} />
            </Routes>
          </SearchProvider>
      </div>
    );
}

export default App;
