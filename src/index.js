import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { routes } from "./routes/routes"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import CollapsedMenuProvider from "./context/Sidebar/CollapsedMenuContext"
import EmployeesProvider from "./context/employees/Employees"
import { queryClient } from "./config/queryClinet"

const root = ReactDOM.createRoot(document.querySelector("div"))

root.render(
  <QueryClientProvider client={queryClient}>
    <EmployeesProvider>
      <CollapsedMenuProvider>
        <RouterProvider router={routes} />
      </CollapsedMenuProvider>
    </EmployeesProvider>
  </QueryClientProvider>
)
