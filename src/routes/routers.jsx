import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/common/ErrorPage";
import Login from "../access/Login";
import Register from "../access/Register";
import Home from "../components/Home/Home";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
            
        ]
    }
])

export default router;