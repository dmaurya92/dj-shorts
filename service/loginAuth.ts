import axios from "axios";
import React from "react";
export class LoginService {
  
    login(body: any) {
        return axios.post(`api/login`,body)
        //console.log('service', body);
        //return fetch('api/login', {method: 'POST', body: JSON.stringify(body)}).then(res => res.json()).then(d => d.data);
    }
}