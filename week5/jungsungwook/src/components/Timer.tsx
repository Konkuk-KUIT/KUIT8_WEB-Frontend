type Time =  {
    timeLeft : number;
};

const Timer = ({timeLeft} : Time)=>{
    return (
        <div className="text-red-500">
            {(timeLeft === 0) ? "시간이 만료되었습니다" : timeLeft}
        </div>
    );
}

export default Timer;