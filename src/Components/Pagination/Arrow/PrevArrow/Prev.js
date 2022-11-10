import React from 'react'
import styled from 'styled-components'
import prev from '../../../../assets/prevArrow.svg'

const ContainerPrev = styled.div`
    button {
        border: none;
        cursor: pointer;
        img {
            background-color: #fff;
        }
    }
`

function Prev() {
    return (
        <ContainerPrev>
            <button><img src={prev} alt="" /></button>
        </ContainerPrev>
    )
}

export default Prev