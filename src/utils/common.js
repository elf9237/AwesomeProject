// 对象数组根据对象的任意属性进行排序
export  function sortByProperty(property){
    var sortfun = (obj1,obj2) =>{
      let obj1Property = '',obj2Property = '';
      if(typeof obj1[property] == 'object' && typeof obj2[property] == 'object'){
        obj1Property = obj1[property][0];
        obj2Property = obj2[property][0];
      }else{
        obj1Property = obj1[property];
        obj2Property = obj2[property];
      }
      if(obj1Property > obj2Property){
        return 1;
      }else if (obj1Property < obj2Property) {
        return -1;
      }else if (obj1Property == obj2Property){
        return 0;
      }
    };
    return sortfun;
  }
// 使用方法：
// let offNetDevArr = [...offNetDev.values()];
// offNetDevArr.sort(sortByProperty('fault'));

//计时开始
export function getWebcliTime() {
    let webcliTimeout = new Date().getTime();
    return webcliTimeout;
  }
//计时结束-是否超时
export function isTimeout(webcliTimeout, time) {
console.log(new Date().getTime() - webcliTimeout, '超时时间');
return new Date().getTime() - webcliTimeout > time;
}