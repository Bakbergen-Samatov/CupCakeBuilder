import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://diplom-fa541.firebaseio.com/";

export default instance;
