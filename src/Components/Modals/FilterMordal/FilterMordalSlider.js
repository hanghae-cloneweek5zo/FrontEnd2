import React, { useState } from "react";
import styled from 'styled-components';
import useInput from "../../../hook/hook";

const FilterMordalSlider = () => {
    const [right,setRight] = useInput(400)
    const [left,setLeft] = useInput(0)

return(<>
    <div>
        <leftRange type='range' onChange={setLeft} value={left} max={200} min={0}/> <RightRange type='range' value={right} onChange={setRight} max={400} min={200}/>
    </div>
    <div>
    <input type="number" onChange={setLeft} value={left} max={200} min={0}/> <input type='number' value={right} onChange={setRight} max={400} min={200}/>
    </div>
    </>
)

}



export default FilterMordalSlider;

export const LeftRange = styled.input`
accent-color:  transparent;
`
export const RightRange = styled.input`
accent-color:  transparent;
`