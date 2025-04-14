import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./contexts/NotificationContext";
import { MidnightTaskProvider } from "./contexts/MidnightTaskContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Highscores from "./components/Highscores/Highscores";

function App() {
  return (
    <NotificationProvider>
      <MidnightTaskProvider>
        <BrowserRouter>
          <Header />
          <main className="pages">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/highscores" element={<Highscores />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </MidnightTaskProvider>
    </NotificationProvider>
  );
}

export default App;
