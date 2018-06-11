# TabNavigator参数详解



### API 定义

**TabNavigator(RouteConfigs, TabNavigatorConfig)**

### RouteConfigs

> RouteConfigs对象是一个从路由名称到路由配置的映射，他告诉导航该为路由呈现什么，参阅StackNavigator中的example

### TabNavigatorConfig

- `tabBarComponent` - 用作渲染tab bar的组件，例如TabBarBottom（这是iOS上的默认设置），TabBarTop（这是Android上的默认设置）。
- `tabBarPosition` - tab bar的位置, 可选值： 'top' or 'bottom'
- `swipeEnabled` - 是否允许滑动切换tab页
- `animationEnabled` - 是否在切换tab页时使用动画
- `configureTransition` - 给定currentTransitionProps和nextTransitionProps的函数，其返回一个配置对象，该对象用于描述tab页之间的动画
- `initialLayout` - 可以传递包含初始height和width的可选对象，用以防止react-native-tab-view渲染中一个帧的延迟
- `tabBarOptions` - 配置tab bar ，详情见下文

> 传递到底层路由，用于修改导航逻辑的几个选项：

- `initialRouteName` - 第一次加载tab bar时路由的routeName

- `order` - 定义了tab bar顺序的一个routeNames数组
- `paths` - 提供routeName到path config的映射，它覆盖了routeConfigs中设置的path。
- `backBehavior` - 返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。

**TabBarBottom的tabBarOptions (TabBarBottom为iOS的默认tab bar)**

- `activeTintColor` - 当前选中的tab bar的文本颜色和图标颜色
- `activeBackgroundColor` - 当前选中的tab bar的背景色
- `inactiveTintColor` - 当前未选中的tab bar的文本颜色和图标颜色
- `inactiveBackgroundColor` - 当前未选中的tab bar的背景色
- `showLabel` - 是否显示tab bar的文本，默认是true
- `style` - tab bar的样式
- `labelStyle` - tab bar的文本样式
- `tabStyle` - tab页的样式
- `allowFontScaling` - 文本字体大小是否可以缩放取决于该设置，默认为true。

**栗子:**

```
tabBarOptions: {

  activeTintColor: '#e91e63',

  labelStyle: {

    fontSize: 12,

  },

  style: {

    backgroundColor: 'blue',

  },

}

```



**TabBarTop的tabBarOptions (TabBarTop为Android的默认tab bar)**

- `activeTintColor` - 当前选中的tab bar的文本颜色和图标颜色
- `inactiveTintColor` - 当前未选中的tab bar的文本颜色和图标颜色
- `showIcon` - 是否显示tab bar的图标，默认是false
- `showLabel` - 是否显示tab bar的文本，默认是true
- `upperCaseLabel` - 是否将文本转换为大小，默认是true
- `pressColor` - material design中的波纹颜色(仅支持Android >= 5.0)
- `pressOpacity` - 按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
- `scrollEnabled` - 是否允许滑动切换
- `tabStyle` - tab页的样式
- `indicatorStyle` - tab 页指示符的样式 (tab页下面的一条线).
- `labelStyle` - tab bar的文本样式
- `iconStyle` - tab bar的图标样式
- `style` - tab bar的样式
- `allowFontScaling` - 文本字体大小是否可以缩放取决于该设置，默认为true。

**栗子:**

```
tabBarOptions: {

  labelStyle: {

    fontSize: 12,

  },

  tabStyle: {

    width: 100,

  },

  style: {

    backgroundColor: 'blue',

  },

}

```



### Screen Navigation Options

- `title`

  可以用作headerTitle 和 tabBarLabel后备的通用标题。（headerTitle 和 tabBarLabel未设置时，就会使用title的值替代）

- `tabBarVisible`

  tab bar是否可见，缺省是true

- `swipeEnabled`

  是否允许tab页之间滑动切换，如果未设置，则使用TabNavigatorConfig的swipeEnabled选项

- `tabBarIcon`

  用于在tab bar中展示的React元素或一个传入{ focused: boolean, tintColor: string }返回React.Node的函数

- `tabBarLabel`

  用于在tab bar中展示的一个字符串或者一个传入{ focused: boolean, tintColor: string }返回React.Node的函数，如果未定义，则使用页面的title属性。如果像隐藏文本，请参阅上一小节中讲到的tabBarOptions.showLabel

- `tabBarOnPress`

  tab被点击时的回调函数；参数是一个对象，包含一下属性：

  - previousScene: { route, index } ：正在离开的页面
  - scene: { route, index } 被点击的页面
  - jumpToIndex 执行跳转操作必须的参数

**在跳转到下一个页面之前增加一个自定义的逻辑是有用的**

### Navigator Props

**由TabNavigator(...)创建的导航组件，请使用下面的属性：**

- `screenProps` - 将其他选项传递给子页面和导航选项，例如：


```
 const TabNav = TabNavigator({  
 // config
});
<TabNav
  screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}
/>

```

