import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TeamPage from "./team/Team";
import ScrollTopPage from "./components/ScrollTopPage";
import ScrollToTopComp from "./components/ScrollToTopComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollTopPage />
        <ScrollToTopComp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;