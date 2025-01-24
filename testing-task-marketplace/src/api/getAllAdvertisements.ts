import axios from "axios";
import { API_URL } from "../config";
import { Advertisment } from "../types";

const getAllAdvertisements = async () => {
  return await axios
    .get<Advertisment[]>(`${API_URL}/advertisements`)
    .then((res) => res.data)
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {});
};

export default getAllAdvertisements;
