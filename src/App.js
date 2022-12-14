import { Route, Routes } from "react-router-dom";
import { Homepage } from "./routes/Homepage";
import { Marketplace } from "./routes/Marketplace";
import { Auctions } from "./routes/Auctions";
import { Drop } from "./routes/Drop";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Marketplace />} path="/marketplace" />
      <Route element={<Auctions />} path="/auctions" />
      <Route element={<Drop />} path="/drop" />
    </Routes>
  );
}

export default App;
