let isCalled = false, timer;  
  
/** 
 * @param functionTobeCalled 被包装的方法 
 * @param interval 时间间隔，可省略，默认600毫秒 
 * onPress={activityId => callOnceInInterval(() => navigate(‘ActivityDetail’, {‘id’: activityId}))}
 */  
export default callOnceInInterval = (functionTobeCalled, interval = 1000) => {  
    if (!isCalled) {  
        isCalled = true;  
        clearTimeout(timer);  
        timer = setTimeout(() => {  
            isCalled = false;  
        }, interval);  
        return functionTobeCalled();  
    }  
}; 