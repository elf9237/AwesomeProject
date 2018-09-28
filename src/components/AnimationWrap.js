
//@flow
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  TextInput,
  Platform,
  NativeModules,
  DeviceEventEmitter,
  Animated,
  Easing,
} from 'react-native';
const { width, height } = Dimensions.get('window');



type Props = {
  navigation: NavigationScreenProp<any>,
};

type State = {
  projectName: string,
  projectId: string,
};

export default class AnimationWrap extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.fadeInAnimated = new Animated.Value(0); // 渐隐动画初始值，默认为0，透明
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    var timing = Animated.timing;
    Animated.parallel(['fadeInAnimated', 'animatedValue'].map(property => {
      return timing(this[property], {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
      });
    })).start();  // 开始执行动画
  }
  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1], // 0-0.3     0.3-1
      outputRange: [0, 300, 0], // 0-300     300-0     速度会不一样
    });
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{ opacity: this.animatedValue,marginLeft: movingMargin }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}