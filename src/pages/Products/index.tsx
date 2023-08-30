import { useQueryListProducts } from '@/services/product/services';
import { PageContainer } from '@ant-design/pro-components';
import { Table } from 'antd';
import { useState } from 'react';
import ProductDetail from './components/ProductDetail';
import useDataColumn from './hooks/useProductType';

const ProductPage: React.FC = () => {
  const { data } = useQueryListProducts();

  const [open, setOpen] = useState<boolean>(false);

  const dataResult = data?.map((el) => {
    return { key: el?.id, ...el };
  });

  const columns = useDataColumn();

  return (
    <PageContainer>
      <div>
        <Table columns={columns} dataSource={dataResult} bordered />
      </div>

      <ProductDetail></ProductDetail>
    </PageContainer>
  );
};

export default ProductPage;
