import React, { useState } from "react";
import TimerForm from "./timerForm";
import Timer from "./timer";

function App(props) {
  const [selecthour, setselecthour] = useState();
  const [selectmin, setselectmin] = useState();
  const [selectsec, setselectsec] = useState();

  const onHour = (time) => {
    setselecthour(time);
  };
  const onMin = (time) => {
    setselectmin(time);
  };
  const onSec = (time) => {
    setselectsec(time);
  };

  const hour = parseInt(selecthour);
  const min = parseInt(selectmin);
  const sec = parseInt(selectsec);

  //   console.log(`hour:${selecthour}, min:${selectmin}, sec:${selectsec}`);

  const hasInput = [hour, min, sec].every((item) => item);

  return (
    <>
      <TimerForm onHour={onHour} onMin={onMin} onSec={onSec}></TimerForm>
      <>{hasInput && <Timer onHour={hour} onMin={min} onSec={sec}></Timer>}</>
    </>
  );
}

export default App;
