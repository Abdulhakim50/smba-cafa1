import React from 'react'
import DataTable from './DataTable'
import ComparisionData from './ComparisionData'

const ComparisionTable = ({selectedData,selectedMenu,isOpen,selectedMenuData}) => {
  return (
    <>
    <div className={`${!selectedMenu && 'hidden'}`}>
     <ComparisionData selectedData={selectedData} selectedMenuData={selectedMenuData} />
    </div>
    </>
  )
}

export default ComparisionTable