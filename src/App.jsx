import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Teacher from './pages/Teacher';
import { Provider } from 'react-redux';
import store from './store/store';
import CustomLayout from './pages/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route
            exact
            path='/home'
            element={<CustomLayout />}
          />
          <Route
            exact
            path='/:path'
            element={<CustomLayout />}
          />
          {/* <Route exact path='/dashboard' element={<Teacher />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
