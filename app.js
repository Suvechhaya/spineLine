function doNotify(){
  Notification.requestPermission().then(function(result){
    var myNotification = New Notification('electron notification', {
      body: 'check your posture.'

    });
  });
}
