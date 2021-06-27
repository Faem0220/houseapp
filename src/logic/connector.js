import Vue from 'vue'
import axios from "axios";

function __request_get(
    service, 
    data = []
    ) {
    var data_response = axios.get(
      Vue.prototype.$url + service,
      )
      .then(response => {
          return response.data
      })
      .catch (error => {
          return error
        }
      )
    return data_response
  }
  
  
  function __request_post(
    service, 
    data_requests
    ) {
  
    var data_response = axios.post(
      Vue.prototype.$url + service,
      data_requests,
      )
      .then(response => {
          return response.data
  
      })
      .catch (error => {
          return error
        }
      )
    return data_response
  }
  
  
  
  export default {
    request_get(
      service, 
      data = []
      ) {
      var data_response = __request_get(
          service=service,
          data=data
        )
      return data_response
    },
  
    request_post(
      service, 
      data_requests
      ) {
      var data_response = __request_post(
          service=service,
          data_requests=data_requests,
        )
      return data_response
    }
  
  };

