import React, { Component } from "react";

export default class Polyfill extends Component {
  componentDidMount() {
    // this.arrayFlat();
    // this.arrayFilter();
    // this.arrayReduce();
    // this.arrayforEach();
    // this.arrayMap();
    // this.arraySome();
    this.arrayEvery();
  }

  arrayFlat() {
    let arr = [
      10,
      20,
      30,
      [50, [60], [70, [80], [90, [100, [200, [300], [400, 500]]]]]],
    ];
    console.log("flat", this.myFlat(arr, 10));
    // console.log(this.myFlat(arr, Infinity));
  }

  myFlat = (arr, depth) => {
    if (depth <= 0 || !Array.isArray(arr) || arr.length == 0) return arr;
    let res = [];

    for (let i of arr) {
      if (!Array.isArray(i)) {
        res.push(i);
      } else {
        res.push(...this.myFlat(i, depth - 1));
      }
    }
    return res;
  };

  

  arrayFilter() {
    let arr = [10, 25, 30];
    console.log("filter: ", this.myFilter(arr, this.divisibleBy10));
  }

  divisibleBy10 = (ele) => {
    return ele % 10 === 0;
  };

  myFilter = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }

    let res = [];
    for (let i of arr) {
      if (!!fn(i)) res.push(i);
    }
    return res;
  };



  arrayReduce() {
    let arr = [1, 2, 3, 4];
    console.log("reduce: ", this.myReduce(arr, this.add, 0));
    // console.log("reduce: ", this.myReduce([], this.add));
  }

  add = (a, b) => {
    return a + b;
  };

  myReduce = (arr, fn, initialVal) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }

    if (arr.length == 0 && initialVal == undefined) return undefined;

    let res = initialVal == undefined ? arr[0] : initialVal;
    const startIndex = initialVal == undefined ? 1 : 0;

    for (let i = startIndex; i < arr.length; i++) {
      res = fn(res, arr[i]);
    }
    return res;
  };



  arrayforEach() {
    let arr = [1, 2, 3, 4];
    this.myForEach(arr, this.logger);
  }

  logger = (a, index) => {
    console.log(`element at ${index}th pos`, a);
  };

  myForEach = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i);
    }
  };



  arrayMap() {
    let arr = [1, 2, 3, 4];
    console.log("map:",this.myMap(arr, this.multiplyBy2));
  }

  multiplyBy2 = (a) => {
    return a * 2;
  };

  myMap = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }
    let res= [];
    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i]));
    }

    return res
  };


  arraySome() {
    let arr = [1, 2, 3, 4];
    console.log("some:",this.mySome(arr, this.divisibleBy2));
  }

  divisibleBy2 = (a) => {
    return a % 2 == 0;
  };

  mySome = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }
    for (let i = 0; i < arr.length; i++) {
      if(fn(arr[i])) return true;
    }

    return false
  };



  arrayEvery() {
    let arr = [1, 2, 3, 4];
    console.log("every:",this.myEvery(arr, this.divisibleBy2));
  }

  myEvery = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== "function") {
      throw new TypeError("Invalid input");
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i])) return false;
    }

    return true;
  };




  render() {
    return <div></div>;
  }
}
