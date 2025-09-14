import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux';
import store from './store/store'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Dashboard />}></Route>
      <Route path='/Cart' element={<Cart />} ></Route>
    </Route>
  ))

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App;