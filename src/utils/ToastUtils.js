/**
 * Created by xiaodong on 2018/9/20.
 */
import Toast from 'react-native-root-toast'; // 引入类库
class ToastUtils {

    constructor() {
        this.toast = null;
    }

    //保存
    show(text) {
        if (text == null || text == undefined || text.length==0){
            text = 'unknown error!';
        }
// 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        this.toast = Toast.show(text, {
            duration: 3000, // toast显示时长
            position: Toast.positions.BOTTOM, // toast位置
            shadow: true, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时
            onShow: () => {
                // toast出现回调（动画开始时）
            },
            onShown: () => {
                // toast出现回调（动画结束时）
            },
            onHide: () => {
                // toast隐藏回调（动画开始时）
            },
            onHidden: () => {
                // toast隐藏回调（动画结束时）
                this.toast = null;
            }
        });
    }

    showTopTips(text) {
        if (text == null || text == undefined || text.length==0){
            text = 'unknown error!';
        }
// 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        this.toast = Toast.show(text, {
            duration: 3000, // toast显示时长
            position: Toast.positions.TOP, // toast位置
            shadow: true, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时
            onShow: () => {
                // toast出现回调（动画开始时）
            },
            onShown: () => {
                // toast出现回调（动画结束时）
            },
            onHide: () => {
                // toast隐藏回调（动画开始时）
            },
            onHidden: () => {
                // toast隐藏回调（动画结束时）
                this.toast = null;
            }
        });
    }

    showCenterTips(text,duration) {
        if (text == null || text == undefined || text.length==0){
            text = 'unknown error!';
        }
        if (duration == null || duration == undefined || duration.length==0){
            duration = 3000;
        }
// 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        this.toast = Toast.show(text, {
            duration: duration, // toast显示时长
            position: Toast.positions.CENTER, // toast位置
            shadow: true, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时
            onShow: () => {
                // toast出现回调（动画开始时）
            },
            onShown: () => {
                // toast出现回调（动画结束时）
            },
            onHide: () => {
                // toast隐藏回调（动画开始时）
            },
            onHidden: () => {
                // toast隐藏回调（动画结束时）
                this.toast = null;
            }
        });
    }
}
export default  new ToastUtils();