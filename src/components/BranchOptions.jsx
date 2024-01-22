import React from 'react'
import { tableInputs } from '../../data/data'
import { branches } from '../../data/data'


const BranchOptions = ({ isOpen, setIsOpen,  isOpenSubMenu, setisOpenSubMenu, setisOpenPrice, isOpenPrice, selectedMenu, setSelectedMenu, activeAdisyon }) => {



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
   
    
    setisOpenSubMenu(false)
  };
  return (
    <>

      <div className={`inline-block text-left ${  activeAdisyon ? 'hidden' : isOpenPrice  && 'hidden' } `}  >
        

        {
        !selectedMenu ?
          <>
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={toggleDropdown}
              >
                Compare
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {isOpen && (

                <div
                  className=" absolute right-0 mt-2 w-56   bg-[#FCFCFC] "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1  flex flex-col" role="none">
                    {
                      branches.map((branch) => (
                        <div onClick={() => setisOpenSubMenu(true)} className='pl-4 py-3 bordb '>{branch.name}</div>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          </>
          :
          <div onClick={() => { setSelectedMenu(!selectedMenu); setIsOpen(!isOpen); setisOpenSubMenu(!isOpenSubMenu) }} className={`cursor-pointer mt-10 bg-blue-800 text-white p-3 font-bold `} mt-9 >back</div>
        }
      </div>
    </>
  )
}

export default BranchOptions 