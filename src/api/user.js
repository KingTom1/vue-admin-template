import request from '@/utils/request'
import Qs from 'qs'

export function login(data) {
  return request({
    url: '/user/login/',
    method: 'post',
    data: Qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
