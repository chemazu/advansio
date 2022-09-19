import axios from "axios";

axios.defaults.baseURL =
  "https://newsapi.org/v2/everything?q=apple&apiKey=c1503ffc1c2141f3bddc93fd127e4731";
export const newsData = async () => {
  try {
    const response = await axios.get();
    return { status: true, data: response.data };
  } catch (error) {
    return { status: false, error: error };
  }
};
