import { useQuery } from '@umijs/max';
import { getAllProducts, getProductById } from './api-services';

export const useQueryListProducts = () => {
  return useQuery({
    queryKey: ['get-list-products'],
    queryFn: () => getAllProducts(),
  });
};

export const useQueryProductById = (idProduct: string) => {
  return useQuery({
    queryKey: ['get-list-products', idProduct],
    queryFn: () => getProductById(idProduct),
  });
};
