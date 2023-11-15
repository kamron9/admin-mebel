import { createContext, useContext, useState } from "react"

export const EmployeesContext = createContext(null)
export const useEmployeesContext = () => useContext(EmployeesContext)
const EmployeesProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [employeeData, setEmployeeData] = useState({})
  const showDrawer = (employeeData) => {
    setOpenDrawer(true)
    setEmployeeData(employeeData)
  }
  const closeDrawer = () => {
    setOpenDrawer(false)
  }
  return (
    <EmployeesContext.Provider
      value={{ openDrawer, showDrawer, closeDrawer, employeeData }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider
