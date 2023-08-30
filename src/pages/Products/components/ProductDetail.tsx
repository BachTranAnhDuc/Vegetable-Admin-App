import { useQueryProductById } from '@/services/product/services';
import { history, useLocation, useModel } from '@umijs/max';
import { Image, Modal, Space } from 'antd';

const ProductDetail: React.FC = () => {
  const { isOpen, handleCloseModal, handleOpenColor } = useModel('useModalModel', (model) => ({
    isOpen: model.isOpen,
    handleCloseModal: model.handleCloseModal,
    handleOpenColor: model.handleOpenModal,
  }));

  const { search } = useLocation();

  const result = search.slice(search.indexOf('=') + 1);

  const { data } = useQueryProductById(result);

  return (
    <Modal
      title={data?.name}
      centered
      open={isOpen}
      onOk={() => {
        handleCloseModal();
        history.push('products');
      }}
      onCancel={() => {
        handleCloseModal();
        history.push('/products');
      }}
      width={1000}
    >
      <Space direction="vertical">
        <p>Name: {data?.name || '-'}</p>
        <Image
          src={
            data?.imageUrl ||
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
          alt={'image'}
          height={64}
        ></Image>
        <p>Create at: {data?.createdAt || '-'}</p>
        <p>Update at: {data?.updatedAt || '-'}</p>
        <p>Description: {data?.description || '-'}</p>
        <p>Price: {data?.price || '-'}</p>
        <p>Quantity in stock: {data?.quantityInStock || '-'}</p>
        <p>Weight: {data?.weight || '-'}</p>
        <p>Status: {data?.status || '-'}</p>
        <p>Category: {data?.category?.name || '-'}</p>
      </Space>
    </Modal>
  );
};

export default ProductDetail;
