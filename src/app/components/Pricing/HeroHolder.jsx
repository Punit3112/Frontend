export default function Hero(){
    return <div className="flex flex-col items-center my-[2%] max-[800px]:mt-[1%] max-[800px]:mb-0">
        <h1 className="max-[800px]:text-[215%] text-[260%] font-semibold m-0 text-center black">Supercharge your Influencer Marketing</h1>
        <div className="flex items-center mt-[2%] mb-[0.5%] max-[1000px]:mt-[18px] max-[1000px]:mb-[25px]">
            <div className="mx-[5px] text-[90%] text-[#bcbcbc] font-light cursor-pointer rounded-[30px] py-[3px] px-[9px]" data-period="m">Bill Monthly</div>
            <div className="flex items-center">
                <div className="mx-[5px] text-[90%] text-[#bcbcbc] font-light cursor-pointer rounded-[30px] py-[3px] px-[9px]" data-period="y">Bill Yearly</div>
                <div className="text-[65%] text-white rounded-[50px] py-[3px] px-[7px] ml-[-10px]">Save 50%</div>
            </div>
        </div>
    </div>
} 