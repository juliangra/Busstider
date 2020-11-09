import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const updateClock = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(updateClock);
  }, [clock]);

  return clock.toTimeString().slice(0, 8);
};

export default Clock;
