import React, { useEffect, useState } from 'react';

const Counter = ({ targetNumber,increment=1 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + increment ;
        }
        clearInterval(interval); 
        return prevCount;
      });
    }, 1);
    return () => clearInterval(interval);
  }, [targetNumber]);

  return <span>{count}</span>;
};

export default Counter;
