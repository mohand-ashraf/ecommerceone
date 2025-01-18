import axios from "axios";
import { fetchCategoriesStart } from "../components/redux/appSlice";

export const fetchCategories = () => async (dispatch) => {
    const response = await axios.get("/data/data.json");
    dispatch(fetchCategoriesStart(response.data.data));
}