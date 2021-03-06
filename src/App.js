import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const Register = lazy(() => import("./components/Register/Register"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="home_app">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
