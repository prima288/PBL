import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerLogin from './component/auth/BuyerLogin';
import BuyerRegister from './component/auth/BuyerRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/buyer/login" element={<BuyerLogin />} />
        <Route path="/buyer/register" element={<BuyerRegister />} />
        {/* Tambahkan rute untuk halaman lain di sini jika diperlukan */}
      </Routes>
    </Router>
  );
}

export default App;
