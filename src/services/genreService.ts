import ApiClient from "./api-client";
import Genre from "../entities/Genre";

export default new ApiClient<Genre>("/genres");
