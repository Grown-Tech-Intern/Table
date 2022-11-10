import React, { useCallback, useEffect, memo } from 'react'
import { useState } from 'react'
import { useTable, useRowSelect } from 'react-table'
import '././style.scss'
import { IndeterminateCheckbox } from './RenderColumn/Checkbox/Checkbox'

function Table(props) {
    const { columns, data } = props

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable(
        { columns, data },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            {/* <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} /> */}
                        </div>
                    ),
    
                    Cell: ({ row }) => (
                        <div>
                            {/* <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} /> */}
                        </div>
                    ),
                },
                ...columns,
            ])
        },

    )
    
    // useEffect(() => {
    //     //  props.handleSelect(selectedFlatRows)
    // },[selectedFlatRows])


    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default memo(Table)