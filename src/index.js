import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { routes } from "./routes/routes"
import "./index.css"
import { QueryClientProvider } from "react-query"
import CollapsedMenuProvider from "./context/Sidebar/CollapsedMenuContext"
import EmployeesProvider from "./context/employees/Employees"
import { queryClient } from "./config/queryClinet"
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from "@ant-design/cssinjs"

const root = ReactDOM.createRoot(document.querySelector("div"))

root.render(
  <StyleProvider
    hashPriority="high"
    transformers={legacyLogicalPropertiesTransformer}
  >
    <QueryClientProvider client={queryClient}>
      <EmployeesProvider>
        <CollapsedMenuProvider>
          <RouterProvider router={routes} />
        </CollapsedMenuProvider>
      </EmployeesProvider>
    </QueryClientProvider>
  </StyleProvider>
)
