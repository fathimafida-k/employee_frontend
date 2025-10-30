import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

export const addEmployeeAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-emp`,reqBody)
}
export const getEmployeeAPI=async(searchkey)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-emp?search=${searchkey}`,{})
}

export const deleteEmployeeAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/delete-emp/${id}`,{})
}