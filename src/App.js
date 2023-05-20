import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/detail';
import Main from './pages/Main';
import Information from './pages/Information';
import Wallet from './pages/wallet';
import Welcome from './pages/welcome';
import Mypage from './pages/mypage';
import ShoppingHistory from './pages/ShoppingHistory';
import Design from './pages/Design';
import Nftlist from './pages/Nftlist';
import Poolnft from './pages/Poolnft';
import Gooodsnft from './pages/Gooodsnft';


function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/information/*" element={<Information />}></Route>
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="/detail/*" element={<Detail />}></Route>
        <Route path="/wallet/*" element={<Wallet />}></Route>
        <Route path="/welcome/*" element={<Welcome />}></Route>
        <Route path="/mypage/*" element={<Mypage />}></Route>
        <Route path="/shoppinghistory/*" element={<ShoppingHistory />}></Route>
        <Route path="/design/*" element={<Design />}></Route>
        <Route path="/nftlist/*" element={<Nftlist />}></Route>
        <Route path="/poolnft/*" element={<Poolnft />}></Route>
        <Route path="/gooodsnft/*" element={<Gooodsnft />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
