/**
 * Created by user on 2016/11/11.
 */
export default class EventListener{
    //单选多选按钮监听
    static RADIO_BUTTON_CLICK = 'RadioButtonClick';
    //单选多选按钮监听2
    static BUSINESS_RADIO_BUTTON_CLICK = 'BUSINESS_RADIO_BUTTON_CLICK';
    //拍照是否上传
    static PHOTO_UPLOAD = 'photoUpload';
    //登入成功
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    //退出成功
    static LOGIN_OUT_SUCCESS = 'LOGIN_OUT_SUCCESS';
    //未登录，非法请求的退出
    static LOGIN_OUT_PRE = 'LOGIN_OUT_PRE';

    //消息已读
    static SET_MSG_READED = 'SET_MSG_READED';
    //头像更新成功
    static UPDATE_IMAGE = 'UPDATE_IMAGE';

    //通知订单列表刷新
    static UPDATE_ORDERLIST = 'UPDATE_ORDERLIST';

    //通知订单列表停止后台刷新
    static STOP_UPDATE_ORDERLIST = 'STOP_UPDATE_ORDERLIST';

    //通知抢单成功
    static GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
    //订单已送达
    static ORDER_ARRIVE_SUCCESS = 'ORDER_ARRIVE_SUCCESS';
    //切换菜单
    static CHANGE_TAB = 'CHANGE_TAB';
     //切换主菜单
     static CHANGE_TAB_MINE = 'CHANGE_TAB_MINE';

}
