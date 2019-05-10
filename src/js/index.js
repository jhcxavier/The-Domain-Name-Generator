/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let emptyArray = [];
  for (let i in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(pronoun[i] + adj[b] + noun[c] + ".com <br>");
  console.log(emptyArray);
  document.querySelector(".domains").innerHTML = emptyArray;
};
