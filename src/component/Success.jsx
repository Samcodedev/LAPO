import React, {useState} from 'react'
import addFolder from "../assets/icons/addFolder.svg";
import checkCircle from '../assets/icons/check-circle.svg'

function Success({ isOpen, onClose }) {
const [schemeName, setSchemeName] = useState("");
const [panLength, setPanLength] = useState(0);

  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 bg-[#000000c7] backdrop-blur-xs bg-opacity-10 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 pb-0">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="border border-[#EAECF0] rounded-lg p-2.5 py-3">
              <img src={checkCircle} alt="addFolder" />
            </div>
          </div>
        </div>

        <div className="p-6">
            <h1 className='text-2xl'>Successful</h1>
            <p className='text-[#475467]'>Production file has been downloaded.</p>
        </div>

        <div className="p-6 pt-0">
          <button onClick={onClose} className="w-fit bg-[#014DAF] text-white py-2 px-5 rounded-md cursor-pointer transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success