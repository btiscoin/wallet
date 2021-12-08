import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Forgot from './components/forgot';
import Home from './components/home';
import Contact from './components/contact';
import Loading from './components/loading';
import FullLayoutRoute from './components/layouts/fullLayout';
import { MainLayoutRoute, MainLayout } from './components/layouts/mainLayout';
import MyWallet from './components/mywallet';
import Transfer from './components/transfer';
import Receive from './components/receive';
import Transaction from './components/transaction';
import Share from './components/share';
import MyInfo from './components/myinfo';

const App = ({ auth }) => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login auth={auth} />} />
        <Route path="/signup" element={<Signup auth={auth} />} />
        <Route path="/forgot" element={<Forgot auth={auth} />} />
        <Route element={<MainLayout auth={auth} />} >
          <Route path="mywallet" element={<MyWallet auth={auth} />} />
          <Route path="transfer" element={<Transfer auth={auth} />} />
          <Route path="receive" element={<Receive auth={auth} />} />
          <Route path="transaction" element={<Transaction auth={auth} />} />
          <Route path="share" element={<Share auth={auth} />} />
          <Route path="myinfo" element={<MyInfo auth={auth} />} />
        </Route>

        {/* <FullLayoutRoute exact path="/login" element={<Login auth={auth} />} />
        <FullLayoutRoute path="/signup" element={<Signup auth={auth} />} />
        <FullLayoutRoute path="/forgot" element={<Forgot auth={auth} />} />
        <MainLayoutRoute path="/home" element={<Home auth={auth} />} />
        <MainLayoutRoute path="/contact" element={<Contact auth={auth} />} /> */}
        <Route
          path="*"
          element={<Loading auth={auth} />}
        />
      </Routes>
    </div>
  );
};

export default App;
