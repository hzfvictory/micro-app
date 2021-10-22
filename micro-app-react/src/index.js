import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// // 监听卸载
// window.addEventListener("unmount", function () {
//   // 卸载应用
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// })

export function mount() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// 应用每次卸载时都会执行 unmount 方法，在此处可以执行卸载相关操作（必传)
export function unmount() {
  // 卸载应用
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  mount();
}