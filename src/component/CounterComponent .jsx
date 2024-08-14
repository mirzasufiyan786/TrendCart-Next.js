import React, { useEffect, useState } from 'react';
const CounterComponent = () => {
  // Set initial time (e.g., 15 days, 10 hours, 24 minutes, 30 seconds)
  const [time, setTime] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days -= 1;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max"
    style={{
      display:"flex",

    }}
    >
      <div className=" pt-1 rounded-lg "
      style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#606060",
        width:"45px",
        height:"50px",
        color:"white"
      }}
      >
        <span className="countdown font-bold text-[16px]">
          <span>{time.days}</span>
        </span>
        <p className='font-normal text-[12px]'>Days</p>
      </div>
      <div className=" pt-1 rounded-lg "
       style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#606060",
        width:"45px",
        height:"50px",
        color:"white"
      }}
      >
        <span className="countdown font-bold text-[16px]">
          <span>{time.hours}</span>
        </span>
        <p className='font-normal text-[12px]'>Hours</p>
      </div>
      <div className=" pt-1 rounded-lg "
       style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#606060",
        width:"45px",
        height:"50px",
        color:"white"
      }}
      >
        <span className="countdown font-bold text-[16px]">
          <span>{time.minutes}</span>
        </span>
        <p className='font-normal text-[12px]'>Min</p>
      </div>
      <div className=" pt-1 rounded-lg "
       style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#606060",
        width:"45px",
        height:"50px",
        color:"white"
      }}
      >
        <span className="countdown font-bold text-[16px]">
          <span>{time.seconds}</span>
        </span>
        <p className='font-normal text-[12px]'>Sec</p>
      </div>
    </div>
  );
};

export default CounterComponent;
