import { useNavigate } from "react-router-dom"

type BackBarProps = {
    orderCancel?: boolean
    time? : string
}

const BackBar = ({ orderCancel = false , time}: BackBarProps) => {
    const nav = useNavigate();
    const handleBtn = ()=>{
        if(orderCancel) nav("/store");
        else nav(-1);
    }
    return (
        <div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
        <img src="/arrow.svg" alt="BackButton"  className="cursor-pointer" onClick={handleBtn}/>
        <p>{time}</p>
        {orderCancel && (
            <span className="text-[16px] font-semibold text-[#333d4b]">
                <button onClick={handleBtn}>주문 취소</button>
            </span>
        )}
        </div>
    )
}

export default BackBar
