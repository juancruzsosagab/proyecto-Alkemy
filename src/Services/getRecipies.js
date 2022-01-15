import { instance } from "../Config/Axios"

const endpointApi = "apiKey=d3c4fdcadde84c2cbc83a3aca8a5b217"

export const getRecipies = (id) => {
      return instance.get("informationBulk?"+endpointApi+"&ids="+id)
}