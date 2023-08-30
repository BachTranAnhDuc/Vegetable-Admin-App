import { ROOT } from '@/constants/path';
import urlcat from 'urlcat';
import { API_GET_ALL_PRODUCTS } from './api';
import { request } from '@umijs/max';
import { API } from './typing';

export async function getAllProducts() {
  return request<API.TProduct[]>(urlcat(ROOT, API_GET_ALL_PRODUCTS));
}

export async function getProductById(idProduct: string) {
  return request<API.TProduct>(urlcat(ROOT, API_GET_ALL_PRODUCTS, { id: idProduct }));
}
