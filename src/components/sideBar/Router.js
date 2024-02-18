import { createBrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import App from "./App";
import CountryForm from "../crudCountry/CountryCreationForm";
import CountryManagementForm from "../crudCountry/CountryManagementForm";
<<<<<<< HEAD
import Countries from "../urls/Countries";
=======
import Countries from "../apis/Flags";
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")

const Router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar/>,
        children: [
            {
<<<<<<< HEAD
            index: true,
=======
            path: '/Home',
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")
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