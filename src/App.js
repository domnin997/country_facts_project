import './App.css';
import AppHeader from './components/app-header/app-header';
import AppDescription from './components/app-description/app-description';
import AppCountries from './components/app-countries/app-countries';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppCountries></AppCountries>
    </div>
  );
}

export default App;
