import React, { useState, useEffect, useRef } from "react";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const Timer = (props) => {
  const { onHour, onMin, onSec } = props;

  console.log(onHour, onMin, onSec);
  // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터
  const tempHour = onHour ? parseInt(onHour) : 0;
  const tempMin = onMin ? parseInt(onMin) : 0;
  const tempSec = onSec ? parseInt(onSec) : 0;
  console.log(tempHour, tempMin, tempSec);
  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  let initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);

  console.log("123", tempHour * 60 * 60 + tempMin * 60 + tempSec);
  const interval = useRef(null);

  console.log("call");
  console.log(interval);
  console.log("이니셜", initialTime);
  const [hour, setHour] = useState(padNumber(tempHour, 2));
  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  console.log(interval);
  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60, 2));
      setMin(padNumber(parseInt((initialTime.current / 60) % 60), 2));
      setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  console.log(interval);

  // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  return (
    <div>
      {hour} : {min} : {sec}
    </div>
  );
};

export default Timer;
