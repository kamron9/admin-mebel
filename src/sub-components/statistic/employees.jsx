import { useState } from "react"
import EmployeesService from "../../service/statistic-service/employeesService"
import { useQuery } from "react-query"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import EmployeesTable from "./employeesTable"
import { Button } from "antd"
import { useEmployeesContext } from "../../context/employees/Employees"
const Employees = () => {
  const [employees, setEmployess] = useState([])

  const { showDrawer } = useEmployeesContext()

  const { isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => await EmployeesService.getAllEmployees(),
    select: ({ data }) => data,
    onError: (err) => {
      throw new Error(err)
    },
    onSuccess: (data) => setEmployess(data),
  })
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FontAwesomeIcon icon={faUsers} />
          <p>
            active employees:
            <span>{employees.length}</span>
          </p>
        </div>
        <Button onClick={() => showDrawer({})} type="primary">
          create new employee
        </Button>
      </div>
      <EmployeesTable employeesData={employees} />
    </div>
  )
}

export default Employees
