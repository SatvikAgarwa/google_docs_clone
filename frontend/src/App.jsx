import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SketchyForm from "./forms/forms"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <SketchyForm mode="register" />
    },
    {
      path: "/login",
      element: <SketchyForm mode="login" />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}