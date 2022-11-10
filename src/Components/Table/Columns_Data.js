import React, { useState } from 'react'
import PaginatedItems from '../Pagination/Paginated/PaginatedItems';
import Table from './Table';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import deleted from '../../assets/deleted.png'
import './RenderColumn/NameColumn/style.scss'
import { ColumnAmount, ColumnDeleted, ColumnPrice, ColumnProduct, ColumnTotal } from './RenderColumn/NameColumn';
import Checkbox, { CheckboxSelectedAll } from './RenderColumn/Checkbox/Checkbox';

const data = [
    {
        id: 0,
        url: img1,
        heading: 'Bột cần tây nguyên chất',
        trademark: 'Death Star',
        price: 22500,
        total: 74000,
        icon: deleted,
        selected: false
    },

    {
        id: 1,
        url: img2,
        heading: 'Bột lá tía tô',
        trademark: 'Perfect Healthy',
        price: 22000,
        total: 22000,
        icon: deleted,
        selected: false
    },

    {
        id: 2,
        url: img3,
        heading: 'Bột rau diếp cá',
        trademark: 'Earth Pro',
        price: 17800,
        total: 56000,
        icon: deleted,
        selected: false
    },

    {
        id: 3,
        url: img1,
        heading: 'Bột cần tây nguyên chất',
        trademark: 'True Natural City',
        price: 28000,
        total: 44000,
        icon: deleted,
        selected: false
    },

    {
        id: 4,
        url: img2,
        heading: 'Bột lá tía tô kết hợp sữa',
        trademark: 'Viet Healthy',
        price: 22000,
        total: 28000,
        icon: deleted,
        selected: false
    },

    {
        id: 5,
        url: img3,
        heading: 'Bột rau diếp cá',
        trademark: 'Faker Healthy',
        price: 32500,
        total: 62990,
        icon: deleted,
        selected: false
    },

    {
        id: 6,
        url: img1,
        heading: 'Bột cần tây nguyên chất',
        trademark: 'False Natural',
        price: 52500,
        total: 224000,
        selected: false,
        icon: deleted,

    },

    {
        id: 7,
        url: img2,
        heading: 'Bột lá tía tô',
        trademark: 'AUS Healthy',
        price: 22000,
        total: 44999,
        icon: deleted,
        selected: false
    },

    {
        id: 8,
        url: img3,
        heading: 'Bột rau diếp cá',
        trademark: 'USA Healthy',
        price: 14000,
        total: 58000,
        icon: deleted,
        selected: false
    },

    {
        id: 9,
        url: img1,
        heading: 'Bột cần tây nguyên chất chữa bệnh',
        trademark: 'True Natural',
        price: 28999,
        total: 104000,
        icon: deleted,
        selected: false
    },

    {
        id: 10,
        url: img2,
        heading: 'Bột lá tía tô nguyên chất',
        trademark: 'Viet Healthy',
        price: 43000,
        total: 128000,
        icon: deleted,
        selected: false
    },

    {
        id: 11,
        url: img3,
        heading: 'Bột rau diếp cá GOCE ',
        trademark: 'Viet Healthy',
        price: 33500,
        total: 62990,
        icon: deleted,
        selected: false
    },
]

function Columns_Data() {
    const [rowData, setRowData] = useState(data)

    const columns = [
        {
            Header: () => <div className="columns col-checkbox" > <CheckboxSelectedAll rows={rowData} selectedByRow={handleSelectedByRow} /> </div>,
            accessor: "check",
            Cell: ({ row: { original } }) => (<Checkbox checked={original.selected} id={original.id} selectedByRow={handleSelectedByRow} />)
        },

        {
            Header: () => <div className="columns col-product">Sản phẩm</div>,
            accessor: 'product',
            Cell: ({ row: { original } }) => (<ColumnProduct row={original} />)
        },

        {
            Header: () => <div className="columns">Đơn giá</div>,
            accessor: 'price',
            Cell: ({ row: { original } }) => (<ColumnPrice row={original} />)
        },

        {
            Header: () => <div className="columns col-amount">Số lượng</div>,
            accessor: 'amount',
            Cell: ({ row: { original } }) => (<ColumnAmount row={original} />)
        },

        {
            Header: () => <div className="columns col-total">Tổng</div>,
            accessor: 'total',
            Cell: ({ row: { original } }) => (<ColumnTotal row={original} />)
        },

        {
            Header: () => <div className="columns dlt"><button onClick={handleRemoveByCheckBox}  ><i className="fa-regular fa-trash-can"></i></button></div>,
            accessor: 'deleted',
            Cell: ({ row: { original } }) => (<ColumnDeleted row={original} id={original.id} removeProduct={removeProduct} />)
        }
    ]

    /* Checkbox Selected by Row */
    const handleSelectedByRow = (data) => {
        console.log(data)
        const newSelectedList = rowData.map(item => {
            if (data.id === 'all') {
                return { ...item, selected: data.checked }
            } else if (data.id === item.id.toString()) {
                return { ...item, selected: data.checked }
            } else {
                return item
            }
        })

        setRowData(newSelectedList)
    }

    /* Delete Row (Xóa từng dòng) */
    const removeProduct = (id) => {
        const newData = rowData.filter(row => row.id !== id)
        setRowData(newData)
    }

    /* Delete by Checkbox (Xóa theo checkbox) */

    const handleRemoveByCheckBox = () => {
        const newRows = rowData.filter(item => item.selected === false)
        setRowData(newRows)
    }


    /* Pagination (Phân trang) */
    // console.log(data.length)
    const [filter, setFilter] = useState({
        limit: 2,
        page: 0
    })

    const handleChangePage = (e) => {
        setFilter({ ...filter, page: e.selected })
    };

    return (
        <>
            <Table columns={columns} data={rowData} />
            <PaginatedItems itemsPerPage={9} pageCount={Math.ceil(data.length / filter.limit)} onChange={handleChangePage} />

        </>

    )
}

export default Columns_Data

