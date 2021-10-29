function initForPlatforms(){
    var cordova = window.cordova;
    var platform = window.device.platform;
    if (platform == 'iOS') {
            alert("is ios");
            // Expose WebRTC Globals
            if (cordova && cordova.plugins && cordova.plugins.iosrtc) {
                cordova.plugins.iosrtc.registerGlobals();
            }
    }
    if (platform == 'Android'){
        alert("is android");
        var permissions = cordova.plugins.permissions;
        permissions.hasPermission(permissions.CAMERA, function (status) {
            if (status.hasPermission) {
                // here you can savely start your own plugin because you already have CAMERA permission
                console.log("Permission granted!");
            }
            else {
                // need to request camera permission
                permissions.requestPermission(permissions.CAMERA, success, error);

                function error() {
                    // camera permission not turned on        
                    alert('Please accept the Android permissions.');
                }

                function success(status) {
                    if (status.hasPermission) {
                        // user accepted, here you can start your own plugin
                        alert("Permission granted!");
                    }
                }
            }
        });
    }
}