export default function Title({title} : {title : string}) {
  return (
        <div className="flex justify-center items-center w-[212px] h-[90px] relative">
          <h2 className="font-bold text-[32px] text-[#2F2A25]">
             {title}
            <img src="/curve.png" alt="" className="w-[211] h-[84px] absolute top-0 right-0"/>
          </h2>
        </div>
  )
}
