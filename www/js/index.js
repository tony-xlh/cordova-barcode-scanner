/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // Just for iOS devices.
    if (window.device && window.device.platform == 'iOS') {
            alert("is ios");
            var cordova = window.cordova;

            // Expose WebRTC Globals
            if (cordova && cordova.plugins && cordova.plugins.iosrtc) {

                //cordova.plugins.iosrtc.debug.enable('*', true);

                cordova.plugins.iosrtc.registerGlobals();


            }
            

    }
    //TestGetUserMedia();
    var permissions = cordova.plugins.permissions;
    permissions.hasPermission(permissions.CAMERA, function (status) {
        if (status.hasPermission) {
            // here you can savely start your own plugin because you already have CAMERA permission
            alert("Permission granted!");
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

function GotoAndroidScanner(){
   var dirPath = dirname(location.href);
   fullPath = dirPath + "/scanner.html";
   window.location=fullPath;
}

function GotoiOSScanner(){
   var dirPath = dirname(location.href);
   fullPath = dirPath + "/scanner_ios.html";
   window.location=fullPath;
}

function dirname(path)
{
   return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
}

var localStream, localVideoEl, localDeviceId;
function TestGetUserMedia(deviceId) {

    if (!deviceId) {
        return navigator.mediaDevices.enumerateDevices().then(function(devices) {
            var newDevice = devices.filter(function(device) {
                return device.kind === 'videoinput';
            }).find(function(device, idx) {
                return device.deviceId !== 'default';
            });

            localDeviceId = newDevice ? newDevice.deviceId : null;
            return TestGetUserMedia(localDeviceId || 'default');
        });
    }

    console.debug('TestGetUserMedia', deviceId);
    alert(deviceId);
    return navigator.mediaDevices.getUserMedia({
        /*
        video: true,
        */
        video: {
            deviceId: deviceId,

            /*
            width: {
                max: 1280,
                min: 640
            },
            height: {
                max: 720,
                min: 480
            },
            */
                                               /*
            height: {
                ideal: 240,
                min: 180,
                max: 480
            },
                                                */
            //facingMode: 'environment'
            //height: 480,
            //width: 1280,
            //height: 720,
            //width: 1280,
            //height: 960,
            //aspectRatio: 16/9,
            //aspectRatio: 11/9,
            //aspectRatio: 4/3,
            //frameRate:{ min: 30.0, max: 30.0 }
        },
        audio: true
        /*
        video: {
          // Test Back Camera
          //deviceId: 'com.apple.avfoundation.avcapturedevice.built-in_video:0'
          //sourceId: 'com.apple.avfoundation.avcapturedevice.built-in_video:0'
          deviceId: {
            exact: 'com.apple.avfoundation.avcapturedevice.built-in_video:0'
          }
        },
        audio: {
          deviceId: {
            exact: 'Built-In Microphone'
          }
        }*/
    }).then(function(stream) {

        console.debug('getUserMedia.stream', stream);
        console.debug('getUserMedia.stream.getTracks', stream.getTracks());

        TestSetLocalStream(stream);

        // Test mute at Start
        /*
        localStream.getAudioTracks().forEach(function (track) {
            track.enabled = false;
        });
        */
        return localStream;

    }).catch(function(err) {
        console.error('getUserMediaError', err, err.stack);
        alert(err.stack);
    });
}


function TestSetLocalStream(localStreamMedia) {
    var appContainer = document.querySelector('.app');
    localVideoEl = appContainer.querySelector('.local-video');

    // Note: Expose for debug
    localStream = localStreamMedia;


    // Attach local stream to video element
    localVideoEl.srcObject = localStream;
}




