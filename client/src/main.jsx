import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.jsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Root from './components/Root'
import ErrorPage from "./components/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DonutsPage from "./pages/DonutsPage"
import ColdDrinksPage from './pages/ColdDrinksPage'
import HotDrinksPage from './pages/HotDrinksPage'

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/donuts" element={<DonutsPage/>}/>
            <Route path="/cold-drinks" element={<ColdDrinksPage />}/>
            <Route path="/hot-drinks" element={<HotDrinksPage />}/>

        </Route>

    ])
);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);