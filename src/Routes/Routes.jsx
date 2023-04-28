import { Navigate, createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category";
import NewsLayout from "../Pages/NewsLayout/NewsLayout";
import News from "../Pages/News/News";
import LogInLayout from "../Layout/LogInLayout/LogInLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Login/Register/terms";

const router = createBrowserRouter([
  {

path:'/',
element: <LogInLayout />,
children:[
  {
    path: '/',
    element: <Navigate to={'/category/0'}></Navigate>
  },

  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element: <Register />
  },{
    path:'/terms',
    element:<Terms /> 
  }
]


  }


  ,
  {
    path: "category",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Category> </Category>,
      //   loader:()=> fetch('http://localhost:5000/news')
      // },
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute> <News> </News> </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);
export default router;
