import { useState } from "react"
import EmployeesService from "../../service/statistic-service/employeesService"
import { useQuery } from "react-query"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import EmployeesTable from "./employeesTable"
const Employees = () => {
  const [employees, setEmployess] = useState([])

  const { isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => await EmployeesService.getAllEmployees(),
    select: ({ data }) => data,
    onError: (err) => console.log(err),
    onSuccess: (data) => setEmployess(data),
  })

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faUsers} />
        <p>
          active employees:
          <span>{employees.length}</span>
        </p>
      </div>
      <EmployeesTable employeesData={employees} />
    </div>
  )
}

export default Employees
