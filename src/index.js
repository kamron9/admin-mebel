import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "./index.css";
import { QueryClientProvider } from "react-query";
import CollapsedMenuProvider from "./context/Sidebar/CollapsedMenuContext";
import { queryClient } from "./config/queryClinet";
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from "@ant-design/cssinjs";
import OrderModalProvider from "./context/OrderModalContext";

const root = ReactDOM.createRoot(document.querySelector("div"));

root.render(
  <StyleProvider
    hashPriority="high"
    transformers={legacyLogicalPropertiesTransformer}
  >
    <QueryClientProvider client={queryClient}>
      <OrderModalProvider>
        <CollapsedMenuProvider>
          <RouterProvider router={routes} />
        </CollapsedMenuProvider>
      </OrderModalProvider>
    </QueryClientProvider>
  </StyleProvider>,
);
