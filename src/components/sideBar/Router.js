import { createBrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import App from "./App";
import CountryForm from "../crudCountry/CountryCreationForm";
import CountryManagementForm from "../crudCountry/CountryManagementForm";
<<<<<<< HEAD
<<<<<<< HEAD
import Countries from "../urls/Countries";
=======
import Countries from "../apis/Flags";
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")
=======
import Countries from "../apis/Flags";
>>>>>>> 81f30f497722056027d36e8961eca004a8b4f890

const Router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar/>,
        children: [
            {
<<<<<<< HEAD
<<<<<<< HEAD
            index: true,
=======
            path: '/Home',
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")
=======
            path: '/Home',
>>>>>>> 81f30f497722056027d36e8961eca004a8b4f890
            element: <Countries/>        
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