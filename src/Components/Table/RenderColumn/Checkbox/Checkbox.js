import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'

const All = styled.div`
    margin-top: -23px;
`

const Container = styled.label`
    display: inline-block;
    position:relative;
    cursor:pointer;
    font-size:30px;
    user-select: none;
    padding-left:40px;
    margin-bottom:10px;

    input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    .checkmark {
        position:absolute;
        top:0;
        left:0;
        width:30px;
        height:30px;
        background:#eee;
        border-radius:3px;
    }

    .checkmark:after{
        content:"";
        position:absolute;
        display:none;
    }

    & .checkmark:after {
        top:50%;
        left:50%;
        width: 5px;
        height: 10px;
        border: solid #1C1C1C;
        border-width: 0 3px 3px 0;
        transform:translate(-50%,-50%) rotate(45deg);
    }

    & input:checked ~ .checkmark {
        background: linear-gradient(180deg, #FFF385 0%, #FFD254 100%);
    }

    & input:checked ~ .checkmark:after{
        display:block;
    }

`

/* Checkbox All Items */ 
export function CheckboxSelectedAll( {rows, selectedByRow} ) {
    const selectedAll = useMemo(() => rows ?.every(item => item.selected === true))

    /* Chọn tất cả các Checkbox */
    const changeSelectedCheckBox = useCallback((e) => {
        console.log(e.target.checked)
        selectedByRow({checked: e.target.checked, id: 'all'})
    }, [selectedByRow])

    return (
        <All>
            <Container>
                <input type="checkbox" onChange={changeSelectedCheckBox} name="all" checked={selectedAll}/>
                <span className="checkmark"></span>
            </Container>
        </All>
    )
}



/* Checkbox by Row */ 
function Checkbox( { id, selectedByRow, checked } ) {

    const changeSelectedCheckBox = useCallback((e) => {
        selectedByRow({checked: e.target.checked, id: e.target.name})
    }, [selectedByRow])

    return (
        <All>
            <Container>
                <input type="checkbox" onChange={changeSelectedCheckBox} checked={checked} name={id}/>
                <span className="checkmark"></span>
            </Container>
        </All>
    )
}

export default Checkbox