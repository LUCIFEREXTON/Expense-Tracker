import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home';
import ModalController from './Pages/ModalController/ModalController';
function App() {
  return (<>
    <ModalController/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
