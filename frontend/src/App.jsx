import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SketchyForm from "./forms/forms"
import Home from "./pages/home"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <SketchyForm mode="register" />
    },
    {
      path: "/login",
      element: <SketchyForm mode="login" />
    },
    {
      path: "/",
      element: <Home />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}