## 一、navigation对象

> 当你用一个navigator注册一个组件时，这个组件将会添加一个属性 `navigation` 。 这个属性能够控制不同页面间的跳转 ,未注册组件要使用 `navigation` 属性，可通过组件属性传递 `navigation` 

```
//navigation属性是navigationOptions函数的实参
static navigationOptions = ({ navigation, screenProps }) => {
        const { state, setParams } = navigation;
      ...
    };
    
//已注册组件调用
const { navigate } = this.props.navigation;

//未注册组件调用
<View navigation={this.props.navigation}></View> //父组件传递navigation属性
const { navigate } = this.props.navigation;  //子组件调用
```

###state

> 通过`this.props.navigation.state`来访问路由 

    key  //当前路由id
    params //父页面传递参数
    routeName //当前注册路由name

###setParams(NavigationActions)  

> 重新设置父页面传递的参数（对象或函数），如果父页面没有传递这个参数，即直接设置为从父页面传递过来的参数 

通过navigation对象调用：setParams(params, key)

```
() => setParams({ mode: isInfo ? 'none' : 'info' })

this.props.navigation.setParams({ handleSave: this._handleSave });

```

通过NavigationActions对象进行dispatch分发action操作：

```
const setParamsAction = NavigationActions.setParams({

  params: { title: 'Hello' }, //必选项 - 被合并到当前路由参数中的新的参数

  key: 'screen-123', //必选项 - 应该获得新参数的路由标识

})

this.props.navigation.dispatch(setParamsAction)
```



###getParam 

> 替换直接从父页面获取传递参数的方法，如果父页面没有这个参数，将直接设置成新参数

通过navigation对象调用：getParam(params)

```
Bofore：

const { name } = this.props.navigation.state.params;

After：

const name = this.props.navigation.getParam('user', 'Peter');

console.log('param');

console.log(name);

```



###navigate (NavigationActions)

>链接到其他页面

- `routeName` - 已在应用程序的路由器中注册的目标路由名称
- `params` - 合并到目标路由中的参数
- `action` - （高级）如果页面是`navigator`，则是在子路由中运行的子操作。 有关`action`的完整列表，请参阅[Actions Doc](https://www.reactnavigation.org.cn/docs/Navigation-Actions)） 
- key  -路由id

通过navigation对象调用：**navigate(routeName, params, action)** 

```
const {navigate} = this.props.navigation;

<Button

    onPress={() => navigate('Profile', {name: 'Brent'})}

    title="Go to Brent's profile"

/>

```

通过dispatch发出NavigationActions操作：

```
const navigateAction = NavigationActions.navigate({

  routeName: 'Profile',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})

})

this.props.navigation.dispatch(navigateAction)

```



### goBack(NavigationActions)

> {
>   routes: [
>     { routeName: 'HomeScreen', key: 'A' },
>     { routeName: 'DetailScreen', key: 'B' },
>     { routeName: 'DetailScreen', key: 'C' },
>   ],
>   index: 2
> }

通过navigation对象调用：**goBack(key)** 

```
navigation.goBack("B") // will go to screen A FROM screen B

navigation.goBack(null) //从当前页返回

navigation.goBack() //从当前页返回

```



通过NavigationActions对象进行dispatch分发action操作：**back(key)**

```
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: 'Profile',
});
this.props.navigation.dispatch(backAction);
```



###reset
> 有的需求是在登陆之后，重置路由并传递参数到某个页面

通过NavigationActions对象进行dispatch分发action操作：

```
const resetAction = NavigationActions.reset({

    index: 0,  //navigation.state.routers数组中当前router的索引

    actions: [

        NavigationActions.navigate({routeName: 'Home', params: { token: '123456' }})  //将要替换navigation.state的Action数组 0

        NavigationActions.navigate({ routeName: 'Profile'}), //1

        NavigationActions.navigate({ routeName: 'Settings'}) //2

    ],

    key  //字符串 或 null - 可选项 - navigator将会使用设置的key重置；如果是null，根navigator将会重置

})

this.props.navigation.dispatch(resetAction);

```

### replace

###push
> 在堆栈顶部添加一条路径并向前导航。 
> 这与导航的不同之处在于，如果组件已经安装在堆栈中，那么导航将弹回到堆栈中较早的位置。 
> Push将始终添加在顶部，因此可以多次安装组件。

直接navigation对象调用：**navigation.push(routeName, params, action)** 

- `routeName`   //路由名
- params  //参数
- action 

通过NavigationActions对象进行dispatch分发action操作：

```
const pushAction = StackActions.push({

  routeName: 'Profile',

  params: {

    myUserId: 9,

  },

});

this.props.navigation.dispatch(pushAction);

```



###popToTop
> 返回初始路由

```
this.props.navigation.dispatch(StackActions.popToTop());
```



###pop
> 返回之前在路由中的页面，参数n指定返回几个页面

通过NavigationActions对象进行dispatch分发action操作：

```
const popAction = StackActions.pop({

  n: 1,

});

this.props.navigation.dispatch(popAction);

```




###isFocused

> 查询屏幕的重点状态
>
> Returns true if the screen is focused and false otherwise.

```
let isFocused = this.props.navigation.isFocused();
```


`您可能希望使用withNavigationFocus而不是直接使用它，它会将一个isFocused布尔值传递给您的组件。`



###dispatch

> 需要 NavigationActions 对象：import { NavigationActions } from 'react-navigation';  

```
const navigateAction = NavigationActions.navigate({

  routeName: 'Profile',

  params: {},

  // navigate can have a nested navigate action that will be run inside the child router

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})

})

this.props.navigation.dispatch(navigateAction)

```

### dismiss

### dangerouslyGetParent

###addListener 
> 订阅导航生命周期的更新

- willBlur - the screen will be unfocused   //将要离开页面
- willFocus - the screen will focus  //将要进入页面
- didFocus - the screen focused (if there was a transition, the transition completed)   //进入页面后
- didBlur - the screen unfocused (if there was a transition, the transition completed)  //离开页面后

通过NavigationActions对象进行dispatch分发action操作：

```
const didBlurSubscription = this.props.navigation.addListener(
  'didBlur',
  payload => {
    console.debug('didBlur', payload);
  }
);

// Remove the listener when you are done
didBlurSubscription.remove();

```

> The JSON payload:

```
{

  action: { type: 'Navigation/COMPLETE_TRANSITION', key: 'StackRouterRoot' },

  context: 'id-1518521010538-2:Navigation/COMPLETE_TRANSITION_Root',

  lastState: undefined,

  state: undefined,

  type: 'didBlur',

};

```



###actions
    Push 
    navigation.push(routeName, params, action)
    Pop
    navigation.pop(n)
    PopToTop
    navigation.popToTop()
    Replace
    navigation.replace(routeName, params, action)

## 二、navigator导航器属性

### onNavigationStateChange

> 每次导航器管理的导航状态发生变化都会被调用的函数。 它接收之前的状态，导航的新状态以及触发状态改变的事件。 默认情况下，它将状态的改变打印到控制台 
>
> `onNavigationStateChange(prevState, newState, action)`

```
...
let routes = [];
let lastBackPressed = null;
...
    render() {
        return (
            <AppNavigator
                onNavigationStateChange={(prevNav, nav, action) => {
                console.log('prevNav=',prevNav);
                console.log('nav=',nav);
                console.log('action=',action);
                routes = nav.routes;
            }}/>
        );
    }
```



### uriPrefix

> 应用程序可能处理的URI前缀。 这将在处理[深层链接](https://www.reactnavigation.org.cn/docs/Deep-Linking)以提取传递给路由的路径时使用。 