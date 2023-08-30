import { STATUS_CATEGORY, STATUS_PRODUCT } from '@/constants/status-product';

declare namespace API {
  type TCategory = {
    id: number;
    createAt: string;
    updateAt: string;
    name: string;
    status: STATUS_CATEGORY;
  };

  type TProduct = {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    quantityInStock: number;
    weight: number;
    categoryId: number;
    status: STATUS_PRODUCT;
    category: TCategory;
  };
}
