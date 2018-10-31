// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import WebViewDemo from '../components/WebViewDemo';

//antd design mobile 模板
import AntdMobileDesign from '../components/antdDesignMobile/AntdMobileDesign';  
import ButtonAntd from '../components/antdDesignMobile/ButtonAntd'; 

// StackNavigation示例
import StackNavigatorExampleScreen from '../components/navigator/stackNavigator/StackNavigatorExampleScreen'; 
import EditInfoScreen from '../components/navigator/stackNavigator/EditInfoScreen';
import SecondScreen from '../components/navigator/stackNavigator/SecondScreen';


export const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  WebView: { screen: WebViewDemo },

  //antd-designed-mobile
  AntdMobileDesign: { screen: AntdMobileDesign },
  ButtonAntd: { screen: ButtonAntd },

  EditInfo: { screen: EditInfoScreen },
  Second: { screen: SecondScreen },
  StackNavigatorScreen: {
    screen: StackNavigatorExampleScreen,  //将对象导入路由中（路由名字自定义供其他页面调用），对应界面名称，需要填入import之后的页面

    navigationOptions:({navigation,screenProps}) => ({ //配置StackNavigator的一些属性,screenProps 传递其他参数

        // StackNavigator 属性部分

        // title:'ChatScreen', 同步设置导航和tabbar文字,不推荐使用
        //headerTitle:'识兔', // 只会设置导航栏文字,
        // header:{}, // 可以自定义导航条内容，如果需要隐藏可以设置为null
        //headerTitleAllowFontScaling, //标题栏中标题字体是否应该缩放取决于文本大小是否可以设置。 默认为true。
        // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
        // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
        // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
        // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。当一个组件被渲染时，它会接收到很多的属性（onPress, title, titleStyle 等等， - 请检查 Header.js 的完整列表）
        headerStyle:{
            backgroundColor:'red'
        }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS下用shadowOpacity: 0。
        headerTitleStyle:{
            fontSize:20,
            color:'white'
        }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了,在安卓上会遇到，
        // 如果左边有返回箭头导致文字还是没有居中的问题，最简单的解决思路就是在右边也放置一个空的按钮。
        // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
        // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
        // headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
        gesturesEnabled:true, // 是否支持滑动返回手势，iOS默认支持，安卓默认关闭
        // gestureResponseDistance：对象覆盖触摸从屏幕边缘开始的距离，以识别手势。 它需要以下属性：
                  // horizontal - number - 水平方向的距离 默认为25。
                  // vertical - number - 垂直方向的距离 默认为135。
        // 设置滑动返回的距离
        gestureResponseDistance:{horizontal:300},
        // gestureDirection,  //用来设置关闭页面的手势方向，默认（default）是从做往右，inverted是从右往左
        
        // TabNavigator 属性部分：

        // router的选项

        // initialRouteName - 设置堆栈的默认页面。 必须匹配RouteConfigs中的一个key。
        // initialRouteParams - 初始化路由的参数
        // navigationOptions - 用于页面的默认导航选项
        // paths - 用于覆盖RouteConfigs中设置的path的一个映射（路由中设置的路径的覆盖映射配置）

        // 导航视觉效果
        //
        // mode：定义跳转风格。
                // card 使用iOS和安卓默认的风格。
                // modal  iOS独有的使屏幕从底部画出。类似iOS的present效果
        // headerMode 定义标题该如何渲染
                // float：iOS默认的效果，可以看到一个明显的过渡动画。
                // screen：滑动过程中，整个页面都会返回。
                // none：没有动画。
        
        // cardStyle：自定义设置跳转效果，使用这个属性覆盖或者扩展堆栈中单个Card的默认样式。

        // transitionConfig： 自定义设置滑动返回的配置(返回一个与默认页面的transitionConfig(参见类型定义)合并的对象的函数。 提供的函数将传递以下参数)
                // transitionProps - 新页面跳转的属性。
                // prevTransitionProps - 上一个页面跳转的属性
                // isModal - 指定页面是否为modal。

        // onTransitionStart：当转换动画即将开始时被调用的功能（card跳转动画开始时要调用的函数）。
        // onTransitionEnd：当转换动画完成，将被调用的功能（card跳转动画结束时要调用的函数）。
        //

        // path:path属性适用于其他app或浏览器使用url打开本app并进入指定页面。path属性用于声明一个界面路径，例如：【/pages/Home】。此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。
    })
},

});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
