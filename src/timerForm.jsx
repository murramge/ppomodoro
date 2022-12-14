import React, { useRef } from "react";

function TimerForm(props) {
  const formRef = useRef();
  const hourInputRef = useRef();
  const minInputRef = useRef();
  const secInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const { onHour, onMin, onSec } = props;

    const hour = hourInputRef.current.value;
    const min = minInputRef.current.value;
    const sec = secInputRef.current.value;

    onHour(hour);
    onMin(min);
    onSec(sec);
  };

  return (
    <>
      <form ref={formRef} className="timer-set">
        <input ref={hourInputRef} type="text" className="hour-input" />
        <input ref={minInputRef} type="text" className="min-input" />
        <input ref={secInputRef} type="text" className="sec-input" />
        <button className="timer-set-button" onClick={onSubmit}>
          set
        </button>
      </form>
    </>
  );
}

export default TimerForm;
