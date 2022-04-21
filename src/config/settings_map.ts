/**
 * 地图相关配置
 */

// 天地图浏览器端key
export const TDT_KEYS = [
  '69e525f8d858763512d1e4e1364698b1',
]
/**
 * 地图配置
 */
export const mapConfig = {
  scene: {
    center: {
      lat: 36.744547,
      lng: 104.284599,
      alt: 21863223,
      heading: 0,
      pitch: -90,
      roll: 0,
    }, // 中心位置（复位按钮默认位置）
    scene3DOnly: false, // 是否开启3D唯一模式（可提高3d渲染性能）
    shadows: false, // 是否开启阴影
    removeDblClick: true, // 是否清除双击事件
    sceneMode: 3, // 场景模式
    showSun: true, // 是否渲染太阳
    showMoon: true, // 是否渲染月亮
    showSkyBox: true, // 是否渲染天空盒子
    showSkyAtmosphere: true, // 是否渲染大气
    fog: true, // 是否渲染雾气笼罩
    fxaa: true, // 是否开启抗锯齿
    clock: {
      multiplier: 1, // 速度
    },
    globe: {
      depthTestAgainstTerrain: false, // 是否使绘制的基本体可穿透地形
      baseColor: 'rgba(0,0,0,0.1)',
      showGroundAtmosphere: true, // 是否渲染地表大气
      enableLighting: false, // 是否启用照明
    },
    cameraController: {
      zoomFactor: 3.0, // 放大系数
      minimumZoomDistance: 0, // 最小zoom
      maximumZoomDistance: 1500000000, // 最大zoom
      constrainedAxis: false, // 解除在南北极区域鼠标操作限制
      enableRotate: true, // 启用旋转
      enableTranslate: true, // 启用翻译
      enableTilt: true, // 启用倾斜
      enableZoom: true, // 启用缩放
      enableCollisionDetection: true, // 启用碰撞检测
      minimumCollisionTerrainHeight: 15000, // 最小碰撞高度
    },
  },
  control: {
    homeButton: true, // 是否显示视角复位 :直接初始化完成
    baseLayerPicker: false, // 基层选取器
    fullscreenButton: true, // 全屏按钮  :直接初始化完成
    sceneModePicker: true, // 场景模式选取器
    vrButton: false, // vr模式按钮
    navigationHelpButton: false, // 帮助
    animation: false, // 动画組件（時速表）
    timeline: false, // 时间线
    clockAnimate: false, // 时钟动画控制(左下角)
    infoBox: false, // 支持弹窗  :直接初始化完成
    geocoder: false, // geo检索
    geocoderConfig: {
      key: ['ae29a37307840c7ae4a785ac905927e0'],
    },
    locationBar: {
      // 底部信息栏 :直接初始化完成
      crs: 'CGCS2000_GK_Zone_3',
      crsDecimal: 0,
      fps: true,
      template:
        '<div>经度:{lng}</div><div>纬度:{lat}</div> <div>海拔：{alt}米</div> <div>层级：{level}</div><div>方向：{heading}度</div> <div>俯仰角：{pitch}度</div><div>视高：{cameraHeight}米</div>',
      // 等切换mars3d版本后template改为format
    },
    defaultContextMenu: true, // 默认右键菜单
    mouseDownView: true, // 直接初始化完成加载
    compass: {
      // 三维导航球:直接初始化完成加载
      top: '148px',
      right: '17px',
    },
    distanceLegend: {
      // 比例尺:直接初始化完成加载
      left: '0px',
      bottom: '0px',
    },
  },
  terrain: {
    show: false,
  },
  basemaps: [
    {
      name: '天地图影像',
      icon: 'img/basemaps/tdt_img.png',
      type: 'tdt',
      layer: 'img_d',
      key: TDT_KEYS,
      show: true,
    },
  ],
}
