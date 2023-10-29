import { useEffect, useState } from "react"
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
      <div className={"flex items-center my-4"}>
        <FontAwesomeIcon icon={faUsers} />
        <p className={"ml-1 text-lg font-thin"}>
          active employees:
          <span className={"text-sm font-bold"}>{employees.length}</span>
        </p>
      </div>
      {isLoading && <h1>loading...</h1>}
      {!employees.length && !isLoading && <h1>data not found</h1>}
      <EmployeesTable employeesData={employees} />
    </div>
  )
}

export default Employees
