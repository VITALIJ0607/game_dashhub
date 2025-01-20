import ApiClient from "./api-client";
import Platform from "../entities/Platform";

export default new ApiClient<Platform>("/platforms/lists/parents");
