import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Homepage from "./pages/Homepage";
import DetailSong from "./pages/DetailSong";
import DetailAlbum from "./pages/DetailAlbum";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Homepage />} />
          <Route path="songs/:id" element={<DetailSong />} />
          <Route path="albums/:id" element={<DetailAlbum />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
