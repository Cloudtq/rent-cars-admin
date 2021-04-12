import Vue from "vue";
// 高德离线地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    // 高德key
    key: '94eaf8e38c1597a30a7a4ab37b56aea4', // 自己到官网申请
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geocoder'],
    v: '1.4.15', // 
    uiVersion: '1.0.11' // ui版本号，也是需要写
})