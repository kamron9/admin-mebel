import { routesItem } from "../../routes/routesItem"

export const sidebarItem = routesItem.map(({ title, icon, path }) => {
  if (path !== "/login") {
    return {
      label: title,
      icon,
      key: path,
    }
  }
})
