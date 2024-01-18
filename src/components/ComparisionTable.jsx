import React from 'react'
import DataTable from './DataTable'
import ComparisionData from './ComparisionData'

const ComparisionTable = ({selectedData,selectedMenu,isOpen}) => {
  return (
    <>
    <div className={`${!selectedMenu && 'hidden'}`}>
     <ComparisionData selectedData={selectedData} />
    </div>
    </>
  )
}

export default ComparisionTable