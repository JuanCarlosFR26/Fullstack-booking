import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/rooms" element={<Rooms />}/>
          <Route path="/reservations" element={<Reservations />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
