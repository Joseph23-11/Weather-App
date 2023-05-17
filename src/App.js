import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className='App'>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/dashboard'
            element={isAuth ? <Dashboard /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
