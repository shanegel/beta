import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Index from './Pages/Index';
import React, { useState, useEffect } from 'react';
import Loading from './Shared/Loading';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
