import { useState } from 'react'
import btn_decrease from '../../../../assets/btn_decrease.png'
import btn_increase from '../../../../assets/btn_increase.png'


export function ColumnProduct({ row }) {
    return (
        <div className="column_product">
            <div className="image">
                <img src={row.url} alt="" />
            </div>
            <div className="product">
                <h4>{row.heading}</h4>
                <p>Thương hiệu: <span>{row.trademark}</span></p>
            </div>
        </div>
    )
}

export function ColumnPrice({ row }) {
    return (
        <div className="column_price">
            <div className="price">
                <p>{row.price}<span>đ</span></p>
            </div>
        </div>
    )
}

export function ColumnAmount({ row }) {
    const [count, setCount] = useState(1)
    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        if (count > 1)
            setCount(count - 1)
    }

    return (
        <div className="column_amount">
            <div className="amount">
                <button className='decrease' onClick={handleDecrease}><img src={btn_decrease} alt="" /></button>
                <p>{count} </p>
                <button className='increase' onClick={handleIncrease}><img src={btn_increase} alt="" /></button>
            </div>
        </div>
    )
}

export function ColumnTotal({ row }) {
    return (
        <div className="column_total">
            <div className="total">
                <p>{row.total}<span>đ</span></p>
            </div>
        </div>
    )
}



export function ColumnDeleted({ row, id, removeProduct }) {
    return (
        <div className="column_deleted">
            <button onClick={() => removeProduct(id)} ><img src={row.icon} alt="" /></button>
        </div>
    )

}