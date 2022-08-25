import axios from "axios";
import shortUrl from "./config";

export default axios.create({
    baseURL: shortUrl
})