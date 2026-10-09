type BackBarProps = {
    orderCancel?: boolean
    time? : string
}

const BackBar = ({ orderCancel = false , time}: BackBarProps) => {
    return (
        <div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
        <img src="/arrow.svg" alt="BackButton" />
        <p>{time}</p>
        {orderCancel && (
            <span className="text-[16px] font-semibold text-[#333d4b]">
                주문취소
            </span>
        )}
        </div>
    )
}

export default BackBar
