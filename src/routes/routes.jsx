import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../layouts/DashboardLayout";
import CreateSupplyPage from "../pages/Dashboard/CreateSupplyPage";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardSupplies from "../pages/Dashboard/DashboardSupplies";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SuppliesPage from "../pages/SuppliesPage";
import SupplyDetailsPage from "../pages/SupplyDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/supplies',
                element: <SuppliesPage/>
            },
            {
                path: '/supplies/:id',
                element: <SupplyDetailsPage/>,
                loader: ({params}) => fetch(`https://food-distribution-supplies-server.vercel.app/supplies/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashboardHome/>
            },
            {
                path: '/dashboard/supplies',
                element: <DashboardSupplies/>
            },
            {
                path: '/dashboard/create-supply',
                element: <CreateSupplyPage/>
            }
        ]
    }
]);

export default router;