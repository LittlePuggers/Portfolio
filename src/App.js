import './App.css';
import './index.css'
import { Footer } from './components/Footer';
import HideAppBar from './components/HideAppBar';
import NavBar from './components/NavBar';
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { teal } from '@mui/material/colors';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const myTheme = createTheme({
  palette: {
    primary: teal
  },
  typography:{
    fontFamily: 'Montserrat'
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <div className='navbar'>     
        <HideAppBar>
          <NavBar/>
        </HideAppBar>
      </div>

      <Outlet></Outlet>
    </>,


    children:[
      {
        path: "",
        element: <div>Home!</div>
      },
      {
        path: "aboutme",
        element: <div>About Me!</div>
      }
      
    ]
  },
  
]);

function App() {
 
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        

        <RouterProvider router={router}/>

        <div className='footer'>
          <Footer></Footer>

          <p>Algo mas</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
