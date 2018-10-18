'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  PanResponder,
  StyleSheet,
  View,
  processColor,
} = ReactNative;
//https://blog.csdn.net/zramals/article/details/78403508
var CIRCLE_SIZE = 80;

class NetOffDevInfo extends React.PureComponent<Props, State> {
    constructor(props){
        super(props);
        this.statics = {
            title: 'PanResponder Sample',
            description: 'Shows the use of PanResponder to provide basic gesture handling.',
          };
        
          this._panResponder = {};
          this._previousLeft = 0;
          this._previousTop = 0;
          this._circleStyles = {};
        //   circle: (null : ?{ setNativeProps(props: Object): void }),
    }
    
    
      componentWillMount() {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
          onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
          onPanResponderGrant: this._handlePanResponderGrant,
          onPanResponderMove: this._handlePanResponderMove,
          onPanResponderRelease: this._handlePanResponderEnd,
          onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
          style: {
            left: this._previousLeft,
            top: this._previousTop,
            backgroundColor: 'green',
          }
        };
      }
    
      componentDidMount() {
        this._updateNativeStyles();
      }
    
      render() {
        return (
          <View
            style={styles.container}>
            <View
              ref={(circle) => {
                this.circle = circle;
              }}
              style={styles.circle}
              {...this._panResponder.panHandlers}
            />
          </View>
        );
      }
    
      _highlight=()=> {
        this._circleStyles.style.backgroundColor = 'blue';
        this._updateNativeStyles();
      }
    
      _unHighlight=() =>{
        this._circleStyles.style.backgroundColor = 'green';
        this._updateNativeStyles();
      }
    
      _updateNativeStyles=() =>{
        this.circle && this.circle.setNativeProps(this._circleStyles);
      }
    
      _handleStartShouldSetPanResponder=(e: Object, gestureState: Object) => {
        // Should we become active when the user presses down on the circle?
        return true;
      }
    
      _handleMoveShouldSetPanResponder=(e: Object, gestureState: Object)=> {
        // Should we become active when the user moves a touch over the circle?
        return true;
      }
    
      _handlePanResponderGrant=(e: Object, gestureState: Object) =>{
        this._highlight();
      }
      _handlePanResponderMove=(e: Object, gestureState: Object) =>{
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updateNativeStyles();
      }
      _handlePanResponderEnd=(e: Object, gestureState: Object)=> {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
      }
}

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

export default PanResponderExample;