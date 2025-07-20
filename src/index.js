import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddArtistForm from "./AddSong";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditForm from "./Editsong";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-song" element={<AddArtistForm />} />
        <Route path="/edit-song/:id" element={<EditForm />} />{" "}
      </Routes>
    </BrowserRouter>
  </Provider>
);
