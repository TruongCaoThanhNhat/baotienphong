import './App.scss';
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/home/HomePage';

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
