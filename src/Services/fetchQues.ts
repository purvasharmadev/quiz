import axios from "axios";

export async function fetchQues(category:number) {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
      )
      return data
    } catch (error:any) {
     return error.Error
    }
  }