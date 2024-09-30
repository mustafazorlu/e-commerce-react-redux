import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

function App() {
    const { drawer } = useSelector((state) => state.drawer);

    return (
        <div className="app">
            <PageContainer>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route />
                        <Route path="/detail/:id" element={<Details />} />
                    </Routes>
                    {drawer.payload && <Cart />}
                    <Footer />
                </BrowserRouter>
            </PageContainer>
        </div>
    );
}

export default App;
