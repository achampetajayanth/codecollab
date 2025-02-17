
import './App.css';
import EditorPage from './components/EditorPage';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   
    <>
    <div>
      <Toaster position='top-center'></Toaster>
    </div><Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
      </>
  );
}

export default App;
