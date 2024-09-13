

const CardSkeleton = () => {
  return (
    <div className="overflow-hidden m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[35%] xl:w-[20%] 2xl:w-[18%] 
    rounded-3xl animate-pulse border-2 border-slate-200">
      <div className="h-[40vh] sm:h-[30vh] md:h-[33vh] lg:h-[37vh] 2xl:h-[40vh] overflow-hidden bg-slate-200 animate-pulse rounded-t-3xl">
      </div>
      <div className="p-2 flex flex-col">
        <div className="flex justify-between items-baseline gap-4 mb-3 min-h-[60px]">
          <h4 className="text-lg bg-slate-200 text-transparent">holaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <span className=" bg-slate-200 animate-pulse">
            <strong className="text-transparent">holaaaaaaaaaaaaaaaaaaaaaaa</strong>
          </span>
        </div>
        <div className="w-[100%] bg-slate-200 animate-pulse rounded-xl">
            <button className="text-sm w-[100%]  rounded-xl"></button>
        </div>
      </div>
  </div>
  )
}

export default CardSkeleton