import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/common/ErrorPage";
import Login from "../access/Login";
import Register from "../access/Register";
import Home from "../components/Home/Home";
import Details from "../components/Details";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../components/Blogs";
import AllToys from "../components/allToyPage/AllToys";
import AddAToy from "../components/crud/AddAToy";
import MyToys from "../components/crud/MyToys";
import UpdateToy from "../components/crud/UpdateToy";

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
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/addAToy',
                element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
            },
            {
                path:'/myToys',
                element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            }, 
            {
                path:'/update-toy/:id',
                element:<UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
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
                element:<PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
            
        ]
    }
])

export default router;