import './App.scss';
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>} />
                    <Route path="/chitiet" element={<DetailPage></DetailPage>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
