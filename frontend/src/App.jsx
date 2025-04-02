import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pages">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
