import { useState, createContext, useContext } from "react"

export const CollapsedMenuContext = createContext(null)

export const CollapsedContext = () => useContext(CollapsedMenuContext)

const CollapsedMenuProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsedMenu = () => {
    setCollapsed(!collapsed)
  }
  return (
    <CollapsedMenuContext.Provider
      value={{ collapsed, setCollapsed, toggleCollapsedMenu }}
    >
      {children}
    </CollapsedMenuContext.Provider>
  )
}

export default CollapsedMenuProvider
