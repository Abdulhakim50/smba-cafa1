import React from 'react'
import DataTable from './DataTable'

const ComparisionTable = ({selectedData,selectedMenu}) => {
  return (
    <>
    <div className={`  ${!selectedMenu && 'hidden'}`}>
     <DataTable selectedData={selectedData} />
    </div>
    </>
  )
}

export default ComparisionTable