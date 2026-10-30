import { useState, useEffect } from "react";

const useCountdown = (seconds : number) => {
  const [left, setLeft] = useState(seconds);

  useEffect(()=>{
    if(left <= 0) return;
    const id = setTimeout(()=>setLeft((prev)=> prev-1), 1000);
    return ()=> clearTimeout(id);
  }, [left]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return { time : `${mm}:${ss}`, isOver : left <= 0 };
};

export default useCountdown;
