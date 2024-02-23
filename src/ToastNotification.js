import React, { useState, useEffect } from "react";

import "./Toast.css";

function ToastNotification(props) {
  useEffect(() => {

    let timer2;
    let timer = setTimeout(() => {
      props.setToastAnimation("toast-alert closeAnimation");
      timer2 = setTimeout(() => {
        props.setToastState(false);
      }, 500);
    }, 3000);

    return () => { 
      clearTimeout(timer);
      clearTimeout(timer2); 
    }
  }, []);

  return (
    <div className={props.toastAnimation} onClick={() => { toastClickEvent() }}>
      <img alt="" src="img/alert.png" />
      <p>입력하지 않은 칸이 있습니다!</p>
    </div>
  );
}

function toastClickEvent() {
  props.setToastState(false);
}

export { ToastNotification }