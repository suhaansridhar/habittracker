import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route></Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App
