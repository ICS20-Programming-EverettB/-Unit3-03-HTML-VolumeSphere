// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume .
 */
function calculate () {
  // input
  let ValueR = parseFloat(document.getElementById('radius').value);
  
  
  // process
  let Volume = (4/3) * Math.PI * ValueR**3
  
  // output
  document.getElementById('volume-calculate').innerHTML = 'The volume is: ' + Volume.toFixed(2) + " cm3"
  

}
