import logo from './logo.svg';
import {Routes , Route ,Link} from "react-router-dom";
import './App.scss';
import {Fragment} from "react";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";
import DanhMuc from "./page/DanhMuc";

function App() {
  return (
      <Fragment>
              <Routes>
                  <Route path="/HomePage" element={<HomePage></HomePage>} />
                  <Route path="/chitiet" element={<DetailPage></DetailPage>} />
                  <Route path="/danhmuc" element={<DanhMuc></DanhMuc>} />
              </Routes>
      </Fragment>
  );
}

export default App;
