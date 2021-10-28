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

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
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

function GotoScanner(){
   var dirPath = dirname(location.href);
   fullPath = dirPath + "/scanner.html";
   window.location=fullPath;
}

function dirname(path)
{
   return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
}
