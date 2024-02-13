import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import App from "./App";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar/>,
        children: [
            {
            index: true,
            element: <App/>        
        },
        {
            path: '/crear',
            element: <h2>Crear</h2>
        },
        {
            path: '/gestionar',
            element: <h2>Gestionar</h2>
        }
        ]
    },
    
]);

export default Router;