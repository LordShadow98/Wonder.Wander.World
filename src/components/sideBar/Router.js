import { createBrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import App from "./App";
import CountryForm from "../crudCountry/CountryCreationForm";
import CountryManagementForm from "../crudCountry/CountryManagementForm";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar/>,
        children: [
            {
            index: true,
            element: <App/>        
        },
        {
            path: '/crear',
            element: <CountryForm/>
        },
        {
            path: '/gestionar',
            element: <CountryManagementForm/>
        }
        ]
    },
    
]);

export default Router;