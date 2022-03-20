import React from 'react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { GridCount } from '../helper/puzzle'

const Input = styled.div`
    display: flex;
    gap: 1vw;
    place-content: center;
    max-width: 300px;
`

type InputFieldsProps = {
  colRow: GridCount
  setColumnsRows: React.Dispatch<React.SetStateAction<{
    columns: number;
    rows: number;
  }>>

}

function InputFields({ colRow, setColumnsRows }: InputFieldsProps) {
  const { columns, rows } = colRow

  const onChangeHandle = (value: string, type: 'rows' | 'columns') => {
    const newValue = value === '' ? 0 : parseInt(value)
    setColumnsRows({ ...colRow, [type]: newValue })
  }

  return (
    <Input>
      <TextField id="outlined-basic" label="Columns" variant="outlined" value={columns} size="small" onChange={(event) => { return onChangeHandle(event.target.value, 'columns') }} />
      <TextField id="outlined-basic" label="Rows" variant="outlined" value={rows} size="small" onChange={(event) => { return onChangeHandle(event.target.value, 'rows') }} />
    </Input>
  )
}

export default InputFields
