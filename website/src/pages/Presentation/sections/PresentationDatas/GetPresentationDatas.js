import axios from "axios";
import Cookies from "js-cookie";

class GetPresentationDatasClass {
  async GetPresentationDatas(callback) {
    try {
      const request = await axios({
        method: 'GET',
        url: 'https://localhost:7239/api/v1/IndexData',
        headers: { Authorization: 'Bearer ' + Cookies.get('token') },
        withCredentials: true,
      });  
      await callback(request.data.data);
    } catch (ex) {
      console.log(ex);  
    }
  }
}

export default GetPresentationDatasClass;