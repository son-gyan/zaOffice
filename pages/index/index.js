Page({
  data: {
    grid: {
      list: [
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png',
          title: '折叠面板',
          entitle: 'Collapse',
          page: '/page/biz/pages/collapse/index',
        }, {
          icon: 'https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png',
          title: '下拉菜单',
          entitle: 'Dropdown',
          page: '/page/biz/pages/dropdown/index',
        }, {
          icon: 'https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png',
          title: '通用错误页',
          entitle: 'ErrorView',
          page: '/page/biz/pages/error-view/index',
        }, {
          icon: 'https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png',
          title: '宫格',
          entitle: 'Grid',
          page: '/page/biz/pages/grid/index',
        }
      ],
      columnNum: 3
    }
  },
  handleItemTap(e){
    debugger
    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {
        
      },
    });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成


    
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '竹安办公',
      desc: '竹安办公一体化',
      path: 'pages/index/index',
    };
  },
});
