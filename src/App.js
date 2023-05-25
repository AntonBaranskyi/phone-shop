import React from "react";
import HomePage from "./pages/HomePage";
import SinglePhonePage from "./pages/SinglePhonePage/SinglePhonePage";
import { Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import { useDispatch } from "react-redux";
import { getInfo } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const data = localStorage.getItem("USER_DATA");
    if (data) {
      const user = JSON.parse(data);
      dispatch(getInfo(user));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SinglePhonePage />} path="/phone/:id" />
        <Route element={<GoogleAuth />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
