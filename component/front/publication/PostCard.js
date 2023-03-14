import { React, useState } from "react";

import { BiComment } from "react-icons/bi";
import InsidePostComment from "./InsidePostComment";

export default function PostCard({ post, Key, auteur, date_pub }) {

  const [visible, setVisible] = useState(false);

      const handler =()=>{
        setVisible(!visible); 
      }

  return (
    <div className="bg-orange-300 shadow-lg rounded-lg p-0 lg:p-6 pb-12 mb-8 lg: w-5/6 drop-shadow-2xl">
      <h1 className="transition duration-700 text-left mb-1 cursor-pointer text-xl font-semibold">
        
       
      </h1>
      <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
        {auteur} 
      </p>

      <div className="font-medium text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>

         <span className="align-middle">{date_pub}</span> 
      
      </div>

      <p className="text-left text-lg text-gray-700 font-normal px-0 lg:px-1 mb-8">
        {post}
      </p>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        
        </div>
      </div>

      {/* //asiana commentaire  fonction maka id ny pub*/}


      <button
        onClick={handler}
        className="flex bg-orange-800 text-white px-4 py-2 border rounded-xl hover:bg-orange-500 hover:border-orange-700"
      >
        {" "}
        <BiComment size={25}></BiComment>
        Commenter
      </button>
      {visible ? (
      <div className="max-w-lg rounded-lg shadow-md shadow-orange-600/50 bg-orange-100">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label for="comment" className="text-lg text-gray-800">
            Ajouter un commentaire
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder="Ecrivez votre commentaire ici............"
          ></textarea>
        </div>
        <div className="px-16 py-2  flex justify-around gap-5 items-center">
          <button className="px-3 py-2 text-sm text-white  text-bold bg-orange-600 rounded">
            Commenter
          </button>
          <button className="px-3 py-2 text-sm text-orange-800 text-bold decoration-[3px] border-2 border-orange-800  rounded">
            Annuler
          </button>
        </div>
      </form>
    </div>
      ) : (
        <></>
      )}

    
    </div>
  );
}
