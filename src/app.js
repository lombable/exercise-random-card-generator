/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let symbol = ["♦", "♥", "♠", "♣"];
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let randomsymbol = Math.floor(Math.random() * symbol.length);
  let randomnumber = Math.floor(Math.random() * number.length);

  document.querySelector(".top").innerHTML = symbol[randomsymbol];
  document.querySelector(".number").innerHTML = number[randomnumber];
  document.querySelector(".bottom").innerHTML = symbol[randomsymbol];

  let color = () => {
    if (symbol[randomsymbol] == "♥" || symbol[randomsymbol] == "♦") {
      document.querySelector(".top").style.color = "red";
      document.querySelector(".number").style.color = "red";
      document.querySelector(".bottom").style.color = "red";
    }
  };
  color();
};
