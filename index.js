import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

//忽略isMounted废弃警告提示，不影响程序运行
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('AwesomeProject', () => App);
