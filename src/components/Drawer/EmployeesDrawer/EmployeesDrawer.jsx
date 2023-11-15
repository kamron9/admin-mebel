import { Button, Drawer, Select, Space } from "antd"
import { useEmployeesContext } from "../../../context/employees/Employees"
import EmployeesForm from "./EmployeesForm/EmployeesForm"
import styles from "./drawer.module.scss"

const EmployeesDrawer = () => {
  const { openDrawer, closeDrawer } = useEmployeesContext()
  return (
    <>
      <Drawer
        title="Change user"
        width={420}
        onClose={closeDrawer}
        open={openDrawer}
        styles={{
          body: {
            paddingBottom: 80,
          },
          position: "relative",
        }}
      >
        <EmployeesForm />
      </Drawer>
    </>
  )
}
export default EmployeesDrawer
