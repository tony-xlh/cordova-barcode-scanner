cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-dynamsoft-barcode-reader/www/DBR.js",
        "id": "cordova-plugin-dynamsoft-barcode-reader.DBR",
        "pluginId": "cordova-plugin-dynamsoft-barcode-reader",
        "clobbers": [
            "cordova.plugins.DBR"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-plugin-iosrtc": "8.0.0",
    "cordova-plugin-android-permissions": "1.1.2",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-dynamsoft-barcode-reader": "0.0.1"
}
// BOTTOM OF METADATA
});