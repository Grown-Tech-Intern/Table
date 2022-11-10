import React from 'react'
import styled from 'styled-components'
import next from '../../../../assets/nextArrow.svg'

const ContainerNext = styled.div `
    button {
        border: none;
        cursor: pointer;
        img {
            background-color: #fff;
        }
    }
`

function Next() {
    return (
        <ContainerNext>
            <button><img src={next} alt="" /></button>
        </ContainerNext>
    )
}

export default Next