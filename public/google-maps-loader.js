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

  console.log('尝试使用备用方法加载Google Maps API...');
  // 如果加载失败，我们将手动加载
  // 注意: 实际项目中API密钥应该从环境变量获取
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAS7ZXOm1OOTFxfLbEF62Ljsf3nK2zDrVA&libraries=places&callback=googleMapsCallback';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  // 回调函数
  window.googleMapsCallback = function() {
    console.log('Google Maps API 已成功加载（通过备用加载方式）');
    // 触发加载完成事件
    var event = new Event('google-maps-loaded');
    window.dispatchEvent(event);
  };
})(); 