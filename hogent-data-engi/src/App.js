import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';
import { SearchProvider } from './contexts/SearchProvider';
import { AuthProvider } from './contexts/AuthProvider';

import { Routes, Route, Navigate } from 'react-router-dom'
import Uitleg from './components/Uitleg';
import CodingTreeItemOverview from './components/OverviewComponents/CodingTreeItemOverview';
import NotFound from './components/NotFound';
import Sectoren from './components/Sectoren/Sectoren';
import SectorenDetails from './components/Sectoren/SectorenDetails';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Account from './components/Account/Account';
import PrivateRoute from './components/PrivateRoute'
import HoofdsectorDetails from './components/Sectoren/HoofdsectorDetails';

function App() {
  return (
    <div className='body'>
          <AuthProvider>
            <Navigation></Navigation>
              <SearchProvider>
                <main>
                  <Routes>
                      <Route exact path='account' element={<PrivateRoute><Account /></PrivateRoute>}/>
                      <Route exact path='/account/login' element={<Login/>} />
                      <Route exact path='/account/register' element={<Register/>} />
                      <Route exact path='/' element={<Uitleg/>}/>
                      <Route exact path='/sectoren' element={<PrivateRoute><Sectoren /></PrivateRoute>}/>
                      <Route exact path='/sectoren/:sectorid' element={<PrivateRoute><SectorenDetails /></PrivateRoute>}/>
                      <Route exact path='/hoofdsectoren/:sectorid' element={<PrivateRoute><HoofdsectorDetails /></PrivateRoute>}/>
                      <Route exact path='dashboard' element={<PrivateRoute><Overview/></PrivateRoute>} />
                      <Route exact path='/dashboard/:item' element={<PrivateRoute><CodingTreeItemOverview /></PrivateRoute>}/>
                      <Route exact path='/404' element={<NotFound />}/> 
                      <Route path='*' element={<Navigate to={'/404'} replace />} />
                  </Routes>
                </main>
              </SearchProvider>
          </AuthProvider>
      </div>
    );
}

export default App;
