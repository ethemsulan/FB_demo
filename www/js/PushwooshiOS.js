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
var gtech_token;

function registerPushwooshIOS() {
 	var pushNotification = window.plugins.pushNotification;

 	//set push notification callback before we initialize the plugin
	document.addEventListener('push-notification',
		function(event)
		{
			//get the notification payload
			var notification = event.notification;

			//display alert to the user for example
			alert(notification.aps.alert);
			
			//to view full push payload
			//alert(JSON.stringify(notification));
			
			//clear the app badge
			pushNotification.setApplicationIconBadgeNumber(0);
		}
	);

	//initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"69D23-07863"});

	//register for pushes
	pushNotification.registerDevice(
		function(status)
		{
			var deviceToken = status['deviceToken'];
			console.warn('registerDevice: ' + deviceToken);
			gtech_token = deviceToken;
			/*
			$.ajax({
            url : "http://213.74.186.114:8181/fiba_group_webservices/GetAcitivies?member_id=12345678&conType=totalpoint&deviceid="+deviceToken,
            dataType : "json",
            success : function(a, b, c) {
                console.log("token al");
                                     
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });
			*/
			onPushwooshiOSInitialized(deviceToken);
		},
		function(status)
		{
			console.warn('failed to register : ' + JSON.stringify(status));
			//alert(JSON.stringify(['failed to register ', status]));
		}
	);
	
	//reset badges on start
	pushNotification.setApplicationIconBadgeNumber(0);
}

function onPushwooshiOSInitialized(pushToken)
{
	var pushNotification = window.plugins.pushNotification;
	//retrieve the tags for the device
	pushNotification.getTags(
		function(tags) {
			console.warn('tags for the device: ' + JSON.stringify(tags));
		},
		function(error) {
			console.warn('get tags error: ' + JSON.stringify(error));
		}
	);

	//example how to get push token at a later time 
	pushNotification.getPushToken(
		function(token)
		{
			console.warn('push token device: ' + token);
		}
	);

	//example how to get Pushwoosh HWID to communicate with Pushwoosh API
	pushNotification.getPushwooshHWID(
		function(token) {
			console.warn('Pushwoosh HWID: ' + token);
		}
	);

	//start geo tracking.
	// pushNotification.startLocationTracking();
}
