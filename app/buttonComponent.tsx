import Image from "next/image";
import saveIcon from "/public/save.svg"

function ButtonComponent({text, peso, showModal}:{text:string, peso:number, showModal:()=>void}) {
  return (
      <div className="flex items-end justify-between p-3 mb-2 bg-neutral-300 brightness-90 hover:invert rounded-md hover:cursor-pointer transition-all duration-200 text-xs" onClick={showModal}>
        <p className=" text-blue-400 flex gap-3 items-end">
    <Image className="aspect-square w-6" src={saveIcon} alt=""/>
       {text} </p>
    <button className="border flex flex-col border-black text-gray-800 py-2 px-4 rounded">Descargar <span>{peso}mb
    </span></button>
</div>
  )
}

export default ButtonComponent
