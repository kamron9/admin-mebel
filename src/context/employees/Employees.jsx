import { createContext, useContext, useState } from "react"

export const EmployeesContext = createContext(null)
export const useEmployeesContext = () => useContext(EmployeesContext)

const EmployeesProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [employeeData, setEmployeeData] = useState({})

  const showDrawer = (employeeData) => {
    setEmployeeData(employeeData)
    setOpenDrawer(true)
  }
  const closeDrawer = () => {
    setOpenDrawer(false)
    setEmployeeData({})
  }
  return (
    <EmployeesContext.Provider
      value={{
        openDrawer,
        showDrawer,
        closeDrawer,
        employeeData,
        setEmployeeData,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider
