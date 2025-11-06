import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigate } from 'react-router';
import Container from '../Container/Container';
import { ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';

const MainLayout = () => {
  const { state } = useNavigate();
  
    return (
      <div>
        <header className="max-w-full mx-auto">
          <nav className="shadow-md">
            <Navbar></Navbar>
          </nav>
        </header>
        {/* Main Content */}
        <main className="max-w-full mx-auto min-h-[calc(100vh-381px)] bg-[#0000000e]">
          <Container>
            {state ? <Loading></Loading> : <Outlet></Outlet>}
          </Container>
        </main>
        <footer className="max-w-full mx-auto bg-[#000000e0]">
          <Footer></Footer>
        </footer>
        {/* alert */}
        <ToastContainer />
      </div>
    );
};

export default MainLayout;