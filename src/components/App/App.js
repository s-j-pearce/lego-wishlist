import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='App--container'>
        <HomePage />
        <NavBar />
      </div>
    </div>
  );
}
