import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/OverviewComponents/Overview';

function App() {
  return (
    <div className='body'>
        <Navigation></Navigation>
        <Overview></Overview>
    </div>
    );
}

export default App;
