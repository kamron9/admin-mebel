import { Drawer } from "antd";
import { useEmployeesContext } from "../../../context/employees/Employees";
import EmployeesForm from "./EmployeesForm/EmployeesForm";

const EmployeesDrawer = () => {
  const { openDrawer, closeDrawer } = useEmployeesContext();
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
  );
};
export default EmployeesDrawer;
