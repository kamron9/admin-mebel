import { createBrowserRouter } from "react-router-dom"
import { routesItem } from "./routesItem"
import MainLayout from "../layout/Layout"

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routesItem.map((route) => {
      return {
        path: route.path,
        element: route.element,
      }
    }),
  },
])
