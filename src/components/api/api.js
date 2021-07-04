import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "304b343a-8302-4414-a6a5-38a17ee13a67" },
})

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return (
         instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
         })
      )
   },
   deleteUsers(id) {
      return (
         instance.delete(`follow/${id}`)
      )
   },
   postUsers(id) {
      return (
         instance.post(`follow/${id}`, {}, {}
         )
      )
   }
}
