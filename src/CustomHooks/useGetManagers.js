import { getManagers } from "../api/index";
import {useQuery} from 'react-query'

export const useGetManagers = ()=>{
    const { isLoading, isError, error, data: employeeData } = useQuery(
        "fetchEmployees",
        getManagers
      );
      return {isLoading, isError, error, employeeData}
}