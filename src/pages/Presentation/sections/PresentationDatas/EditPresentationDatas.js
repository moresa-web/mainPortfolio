//sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import axios from "axios";
import Cookies from "js-cookie";

async function EditPresentationDatas (location, view, editCallback) {
      const request = await axios({
        method: 'GET',
        headers: {Authorization: 'Bearer '+Cookies.get('token')},
        url: 'https://localhost:7239/api/v1/Account/isAdmin',
        withCredentials: true,
      });
      if(request.request.status == 200)
        {
          withReactContent(Swal).fire({
            title: <i>Change data</i>,
            text: 'you can use html tags',
            input: 'text',
            preConfirm: () => {
              if(Swal.getInput()?.value == "")
                {
              withReactContent(Swal).fire({
                icon: "warning",
                title: <i>warning</i>,
                text: "please enter sumthing"
              })
            }
            else{
              SendData(Swal.getInput()?.value, location, view, editCallback);
            }
          }
        })
      }
  }
  async function SendData(value, location, view, editCallback) {
    const model = {
      data: [value],
      location: location,
      view: view
    }
    await axios({
      method: 'POST',
      data: model,
      headers: {Authorization: 'Bearer '+Cookies.get('token')},
      withCredentials: true,
      url: 'https://localhost:7239/api/v1/IndexData'
    });
    await editCallback(model.data, location);
  }
  export default EditPresentationDatas;