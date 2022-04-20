import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path='/checkout' 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path='/' 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
