import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";
import "./app.css";

const Register = lazy(() => import("./components/Register/Register"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="app">
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
