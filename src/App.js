import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// update 
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
