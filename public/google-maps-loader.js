// 备用加载Google Maps API的脚本
// 如果直接加载失败，此脚本将尝试加载
(function() {
  // 检查Google Maps API是否已加载
  if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
    console.log('Google Maps API 已成功加载（通过直接引入）');
    // 触发加载完成事件
    var event = new Event('google-maps-loaded');
    window.dispatchEvent(event);
    return;
  }

  // 回调函数
  window.googleMapsCallback = function() {
    console.log('Google Maps API 已成功加载（通过备用加载方式）');
    // 触发加载完成事件
    var event = new Event('google-maps-loaded');
    window.dispatchEvent(event);
  };
})(); 
