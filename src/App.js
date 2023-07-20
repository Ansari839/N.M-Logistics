import logo from './logo.svg';
import './App.css';
import AppRouter from './Config/Router';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
