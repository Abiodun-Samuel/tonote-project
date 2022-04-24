import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Others/Header/Header";
import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
