import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";

function App() {
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
                    <Footer />
                </BrowserRouter>
            </PageContainer>
        </div>
    );
}

export default App;
