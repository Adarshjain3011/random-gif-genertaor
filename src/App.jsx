import axios from "axios";
import Random from "./components/Random"
import Tag from "./components/Tag"
import { useEffect } from "react";

export default function App() {
  
    return(

      <div className="background w-full h-screen flex flex-col relative overflow-x-hidden">
            <h1 className="bg-white rounded-md absolute w-11/12 text-center mt-[40px] ml-[40px] px-10 py-4 text-3xl font-bold mx-auto flex justify-center items-center uppercase">Random Gifs </h1>
            <div className="flex flex-col">

              <div className="flex flex-col w-full items-center gap-y-10 mt-[150px]">

            <Random></Random>
            <Tag></Tag>
              </div>
            </div>
      </div>
    )

}
