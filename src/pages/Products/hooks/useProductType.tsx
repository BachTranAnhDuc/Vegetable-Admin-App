import { API } from '@/services/product/typing';
import { history, useModel } from '@umijs/max';
import { Button, Image, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';

const useDataColumn = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModel('useModalModel', (model) => ({
    isOpen: model.isOpen,
    handleCloseModal: model.handleCloseModal,
    handleOpenModal: model.handleOpenModal,
  }));

  const columns: ColumnsType<API.TProduct> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },

    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },

    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_, record) => {
        return <p>{record?.name}</p>;
      },
    },

    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (_, record) => {
        return (
          <div>
            <Image src={record?.imageUrl} alt="image" height={36}></Image>
          </div>
        );
      },
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleOpenModal();
              history.push(`/products?id=${record?.id}`);
            }}
          >
            View
          </Button>
          <a>Edit</a>
        </Space>
      ),
    },
  ];

  return columns;
};

export default useDataColumn;
