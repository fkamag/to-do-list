import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main className="App">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signup' element={ <SignUp /> } />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
