import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';
import { SearchProvider } from './contexts/SearchProvider';

import { Routes, Route, Navigate } from 'react-router-dom'
import Uitleg from './components/Uitleg';
import CodingTreeItemOverview from './components/OverviewComponents/CodingTreeItemOverview';
import NotFound from './components/NotFound';
import Sectoren from './components/Sectoren/Sectoren';
import SectorenDetails from './components/Sectoren/SectorenDetails';
import Login from './components/Account/Login';
import Register from './components/Account/Register';

function App() {
  return (
    <div className='body'>
          <Navigation></Navigation>
          
          <SearchProvider>
            <Routes>
                <Route exact path='/' element={<Uitleg/>}/>
                <Route exact path='/sectoren' element={<Sectoren />}/>
                <Route exact path='/sectoren/:sectorid' element={<SectorenDetails />}/>
                <Route exact path='dashboard' element={<Overview/>} />
                <Route exact path='/dashboard/:item' element={<CodingTreeItemOverview />}/>
                <Route exact path='/account/login' element={<Login/>} />
                <Route exact path='/account/register' element={<Register/>} />
                <Route path='/404' element={<NotFound />}/> 
                <Route path='*' element={<Navigate to={'/404'} replace />} />
            </Routes>
          </SearchProvider>
      </div>
    );
}

export default App;
