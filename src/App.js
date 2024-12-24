import {BrowserRouter , Route, Routes} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/rooms/' element={<Rooms />}/>
        <Route path='/rooms/:roomId' element={<SingleRoom />}/>
        <Route path='/error-page' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
