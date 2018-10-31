/* @flow */
import { groupBy } from 'lodash';
// import {
//   ToastUtils,
// } from './utils';

// 对象数组根据对象的任意属性进行排序
export function sortByProperty(property: String) {
  //根据对象的某个属性进行排序
  var sortfun = (obj1: Object, obj2: Object) => {
    let obj1Property = '',
      obj2Property = '';
    if (typeof obj1[property] == 'object' && typeof obj2[property] == 'object') {
      obj1Property = obj1[property];
      obj2Property = obj2[property];
    } else {
      obj1Property = obj1[property];
      obj2Property = obj2[property];
    }
    if (obj1Property > obj2Property) {
      return 1;
    } else if (obj1Property < obj2Property) {
      return -1;
    } else if (obj1Property == obj2Property) {
      return 0;
    }
  };
  return sortfun;
}


// 使用方法：
// let offNetDevArr = [...offNetDev.values()];
// offNetDevArr.sort(sortByProperty('fault'));

//数组根据某个属性分类并排序
export function sortDataByProperty(data: any, property: String) {
  let { keys, values, entries } = Object;
  let newDataObject = groupBy(data, property);
  let newDataArray = [];
  for (let [key, value] of entries(newDataObject)) {
    console.log([key, value]);
    newDataArray.push({
      title: key,
      data: value,
    });
  }
  newDataArray.sort(sortByProperty('title'));
  return { newDataObject, newDataArray };
}


//计时开始
export function getWebcliTime() {
    let webcliTimeout = new Date().getTime();
    return webcliTimeout;
  }
//计时结束-是否超时
export function isTimeout(webcliTimeout: Number, time: Number) {
console.log(new Date().getTime() - webcliTimeout, '超时时间');
return !!(new Date().getTime() - webcliTimeout > time);
}