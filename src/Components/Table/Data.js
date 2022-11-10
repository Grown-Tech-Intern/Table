import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import deleted from '../../assets/deleted.png'
import './RenderColumn/NameColumn/style.scss'
import { ColumnAmount, ColumnDeleted, ColumnPrice, ColumnProduct, ColumnTotal } from './RenderColumn/NameColumn';

export const headerData = [
    {
        Header: () => <div className="columns col-product">Sản phẩm</div>,
        accessor: 'product',
        Cell: ({ row: { original } }) => (<ColumnProduct row={original} /> )
    },

    {
        Header: () => <div className="columns">Đơn giá</div>,
        accessor: 'price',
        Cell: ({ row: { original } }) => (<ColumnPrice row={original} /> )
    },

    {
        Header: () => <div className="columns col-amount">Số lượng</div>,
        accessor: 'amount',
        Cell: ({ row: { original } }) => (<ColumnAmount row={original} /> )
    },

    {
        Header: () => <div className="columns col-total">Tổng</div>,
        accessor: 'total',
        Cell: ({ row: { original } }) => (<ColumnTotal row={original} /> )
    },

    {
        Header: () => <div className="columns dlt">Xóa</div>,
        accessor: 'deleted',
        Cell: ({ row: { original } }) => (<ColumnDeleted row={original}  /> )
    }
];

export const contentData = [
    {
        id: 1,
        url: img1,
        heading: 'Bột cần tây nguyên chất',
        trademark: 'True Natural',
        price: 22000,
        total: 44000,
        icon: deleted,
    },

    {
        url: img2,
        heading: 'Bột lá tía tô',
        trademark: 'Viet Healthy',
        price: 22000,
        total: 22000,
        icon: deleted
    },

    {
        url: img3,
        heading: 'Bột rau diếp cá',
        trademark: 'Viet Healthy',
        price: 22000,
        total: 22000,
        icon: deleted
    },

    {
        url: img1,
        heading: 'Bột cần tây nguyên chất',
        trademark: 'True Natural',
        price: 22000,
        total: 44000,
        icon: deleted
    },

    {
        url: img2,
        heading: 'Bột lá tía tô',
        trademark: 'Viet Healthy',
        price: 22000,
        total: 22000,
        icon: deleted
    },

    {
        url: img3,
        heading: 'Bột rau diếp cá',
        trademark: 'Viet Healthy',
        price: 22000,
        total: 22000,
        icon: deleted
    },
   
];