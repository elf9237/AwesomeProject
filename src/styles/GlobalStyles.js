/**
 * 全局样式
 */
import {
    Dimensions
}from 'react-native'
const {height, width} = Dimensions.get('window');
const GlobalStyles = {
    line: {
        flex: 1,
        height: 0.8,
        opacity: 0.5,
        backgroundColor: '#ccc'
    },
    root_container:{
        flex: 1,
        backgroundColor: '#f3f3f4',
    },
    backgroundColor: '#f3f3f4',
    nav_bar_height_ios:44,
    nav_bar_height_android:50,
    window_height:height,
    window_width:width,

    statusBar: {
        backgroundColor:'#4b9dfd'
    },

    tipsLabel: {
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10
    },
    modalStyle:{
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    btn: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#4b9dfd',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
};

module.exports = GlobalStyles;