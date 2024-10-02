import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index Component={Home}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
