import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "b9551942-ebfb-4eab-a39b-e029a365f6d9" },
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
