import React from 'react';
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      
      <h2 style={{padding:"20px 0px"}}>The Marriage had a beatifull ending</h2>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="d-flex " id="counter" >
    
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 1} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      
    </div>
  );

  
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;