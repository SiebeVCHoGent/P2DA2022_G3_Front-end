import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';
import { SearchProvider } from './contexts/SearchProvider';

function App() {
  return (
    <div className='body'>
          <Navigation></Navigation>
          
          <SearchProvider>
            <Overview></Overview>
          </SearchProvider>
      </div>
    );
}

export default App;
