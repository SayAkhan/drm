var browser = 'Non-DRM browser';
var drmType = 'No DRM';

// Replace the DASH and HLS URIs when you test your own content. 
var dashUri = 'https://pal-ts-test-media.s3.ap-northeast-2.amazonaws.com/test/qa/1080_sample.mpd';
var hlsUri = 'https://contents.pallycon.com/bunny/hls/master.m3u8';

var licenseUri = 'https://license-global.pallycon.com/ri/licenseManager.do';

// Replace the DEMO site ID with yours when you test your own FPS content.
var fairplayCertUri = 'https://license-global.pallycon.com/ri/fpsKeyManager.do?siteId=DEMO'; // for base64 encoded binary cert data
var fairplayCertDerUri = 'https://license-global.pallycon.com/ri/fpsCert.do?siteId=DEMO'; // for cert .der file download 

// Create and set the license tokens when you test your own content.
var widevineToken = 'ewoiZHJtX3R5cGUiOiAiV2lkZXZpbmUiLAoic2l0ZV9pZCI6ICJSRUk4IiwKInVzZXJfaWQiOiAiTElDRU5TRVRPS0VOIiwKImNpZCI6ICJ0ZXN0IiwKInBvbGljeSI6ICJvMUphWXFEV0owbnNHOCt1SXlEcTIvaDFYUUJkOUlSZVVoMlIxVGdIRkRnT2xwOFBBajFXQUNidmtJRFB6R0ZiMExiOE84akVoaCs2cVBITEI0cUM0Rng3U0pjYlYyZ1FpbE9iZVAxczZjeGlnYWNaVCtYTUo5Qm85bWdQUENuT1VUaHp6RnpRNG9vUUdKbGQwVDh2cVRLZjRqTWRxdVB3ZHpVZXRDSjN6N2QvV1NqZXFsMzY0YmtBV2Npd0pYWGR1SVVmOGV5VC84L3Fsa2JENXkwanpPeUQrcGdqTUhVS3lwUE12bmN3MUo1WVUzSVBzTzlBRVZ4Sm41NlRmVGpoc1h6QzZYQVpwNUxXWjNzWlBQZUFvTXNNMmJQOXEwZVdOOEFtbFI1VjVuRGpjYzl3UU1iUklsR3h4VXF2MzE5b0dBd2YrWjdLMFQ1ZGlUTlNLSlhCcmQ4NTZrODJMamhGSVpwVGM4RW5WckF1bHFLdUVzNTczNFhYdk5CZSt0TWptc21vZHVXSDdIcEk1dE5KSU0yWmJVZkJ5MFpSd08xejY2MGN3Q3JLV2c2aFBuUjJsT1NuZmxlRFNycGFYa2FGN1BndGFZLy9va0tKcHh2L0VHYW16dmFNN2J2STR6YjJHYW1uLzVsMFNTM29GV1pITWJZU2RYbW5rMkJ3Ti9JTlFKMnRuMmNINUhvbkFiK0NxY2p1YVVwTGhUZ01lSEtObWl3NnVkMWlteDl2UWNQVkM0TFpybHIvMTYyenRLd25HMXgzQTk5YjlDU0dGQ3JSQ3JyVE50WUVDbWtuYWVUeDVtOERnU3EzbGhnRFIvOUdicDZuS1BrV0VsSS90ZmNia2FOcHBRVVdWeHdwTHZ0RTNwSkVMb0RPNGNBOWJCeC9tVHpvUWN6UVRMcUdvVlhRS0lzUCtqTUVnM0w0WityeDBrYjRzbThxa3UwTTB5RlkydE9uNUEzZy81OVp3WEZBNHl4bzJ3aWdpc0xOUXgyNEd6SHhSZnFrOEpCWlFzTHk0Y3NXK3ovNmF0dHRpay8rWlRlZTdNVi9BS1FZTzQ5ODdDYUtoazVLU0UwRW4waHo3WTJwQW80cUpIR3hZaHk0bkdqOVFuT0U4dG5nUGIvSmZGTnQxS3g3ZDc5VnBpR2dEYnFyQUs0a0FDOFVFckp3blEzdjN3cXVpd1JZYU5tUUlJY3cwQ1JUdzRjQXRYempvMTEzZDdMQndGeWxjcU1vTUtzUzNycUd3TDFoWUN1cWU4WVk0c2tPUlJ3VHlKTEJQdG15WkJrRmd6c0Q5eTdPdTBsVVRtSm5UU2V0NWIxN3FuczgvZUlHU1Z1RGNxTlBQbnd6QXYwMU1xRWxUSlZQYVk2SE9xL2l1Sm1aT3FSaXhrU2JXTVNOOXBVTmR1QURtSVNNYlRZN1Znb3MwM2FFazFwUEpWL2lTK2QvZlVwSlpwellVdS9ZNW9ET3ZKZUlTTjRUUEw4NncwVlFzWnJ2c0ZVNkFZdTlsQ3FzY0dudHp0ME91Y1JhL0h2UlhqRG5nRm9DT20yNHVXOGVwYWNtaE5JQ0FJdlQrWW5mNXhZcTkrcmpabDVSK3VteXc0K2dmYzBrVEV4RU5kcXpjM3pOei9YbWdaZkhaMzBDbFZhaWw2S2swdDFlTlZxSWtmNG1hcFNOWkMvYWMvU20xeklBY2hHMzFyTUZ2MUZzNzZxMHlhTUFBdjN0aXFidkZDMkRCaGlwcG1nUzRaejN0dDEyQTFuT2JOWU5vcC85QTBUc3lYWDRoaDRMM3JQWjM0Z0xpSHF0RFMxNW5iRzRLaXNyVUZlYU5mcnRwdjRBRGlZa3RZUXNGQWltTjRnZ3g3YzBuOExNRW1kQkg2c0UrMUJEL1RNNGZDbFZ1S2Z6QVVaQUt1RVdzQnpnRkFaSVRJRU5rNW4yU3hWYXBUSnFaL1JzcUJJU2J3VHp5aXh3WDV5NUxNVVlHQnJ6VTVGWDZ5OG5EZHBndXZUUXdXMkMzYW0xVzcrRWdjMm1VcHFtT2Eya3dncHZwcUM4Ri9Jb1pSL0tlT3ZIZ0xGS3hnQW9oSmRsa0lKSVlKb0FBc2llSDNrSmtEK0xWMXAxVGdnVnhKc2Nta1grdnJGdDVRVE9wOHFGNDdnRUdNN0hPcHZKN2NxS2VBKzV5Zz09IiwKInRpbWVzdGFtcCI6ICIyMDIyLTA1LTE4VDAwOjIwOjAwWiIsCiJoYXNoIjogIm10YitDMWViaUtlU09WY1BhN3EvV0JGSDh2c211ZVVtbE9PSzZzMUZQbkE9Igp9';
var playreadyToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ0ZXN0LXVzZXIiLCJkcm1fdHlwZSI6IlBsYXlSZWFkeSIsInNpdGVfaWQiOiJERU1PIiwiaGFzaCI6IllDRjViUE9UVHFjZWZDUnlBQks3Rnl0V21mNUJ0T3RhcGo4dVI0QXc2S1E9IiwiY2lkIjoiYmlnYnVja2J1bm55IiwicG9saWN5IjoibjV4Mjh1WW1EZFBDRmltb00zbkdOdz09IiwidGltZXN0YW1wIjoiMjAyMS0wMS0wNlQwOToyNDowN1oifQ==';
var fairplayToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ0ZXN0LXVzZXIiLCJkcm1fdHlwZSI6IkZhaXJQbGF5Iiwic2l0ZV9pZCI6IkRFTU8iLCJoYXNoIjoiY21NZkZPUExrakErbTVLZ3BKS09vVnVmRTVTc3hKdVlTUm1jUWM1dmlVUT0iLCJjaWQiOiJiaWdidWNrYnVubnkiLCJwb2xpY3kiOiJuNXgyOHVZbURkUENGaW1vTTNuR053PT0iLCJ0aW1lc3RhbXAiOiIyMDIxLTAxLTA2VDA5OjI0OjI4WiJ9';

// Detect the browser and set proper DRM type
function checkBrowser() {
  var agent = navigator.userAgent.toLowerCase(),
    name = navigator.appName,
    browser;

  if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
    browser = 'ie';
    if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
      agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
      // browser += parseInt(agent[1]);
    } else if (agent.indexOf('edge/') > -1) { // Edge
      browser = 'Edge';
    }
    drmType = "PlayReady";
  } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
    if (agent.indexOf('opr') > -1) { // Opera
      browser = 'Opera';
      drmType = 'Widevine';
    } else if (agent.indexOf('whale') > -1) { // Chrome
      browser = 'Whale';
      drmType = 'Widevine';
    } else if (agent.indexOf('edg/') > -1 || agent.indexOf('Edge/') > -1) { // Chrome
      browser = 'Edge';
      drmType = "PlayReady";
    } else if (agent.indexOf('chrome') > -1) { // Chrome
      browser = 'Chrome';
      drmType = 'Widevine';
    } else { // Safari
      browser = 'Safari';
      drmType = "FairPlay";
    }
  } else if (agent.indexOf('firefox') > -1) { // Firefox
    browser = 'firefox';
    drmType = 'Widevine';
  }

  // The below three lines are for the sample code only. May need to be removed.
  var result = "Running in " + browser + ". " + drmType + " supported.";
  document.getElementById("browserCheckResult").innerHTML = result;
  console.log(result);

  return browser;
}

function arrayToString(array) {
  var uint16array = new Uint16Array(array.buffer);
  return String.fromCharCode.apply(null, uint16array);
}

function arrayBufferToString(buffer) {
  var arr = new Uint8Array(buffer);
  var str = String.fromCharCode.apply(String, arr);
  // if(/[\u0080-\uffff]/.test(str)){
  //     throw new Error("this string seems to contain (still encoded) multibytes");
  // }
  return str;
}

function base64DecodeUint8Array(input) {
  var raw = window.atob(input);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (i = 0; i < rawLength; i++)
    array[i] = raw.charCodeAt(i);

  return array;
}

function base64EncodeUint8Array(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  while (i < input.length) {
    chr1 = input[i++];
    chr2 = i < input.length ? input[i++] : Number.NaN;
    chr3 = i < input.length ? input[i++] : Number.NaN;

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
      keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

function getFairplayCert() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", fairplayCertUri, false);
  xmlhttp.send();
  console.log('fpsCert : ', xmlhttp.responseText);
  var fpsCert = shaka.util.Uint8ArrayUtils.fromBase64(xmlhttp.responseText);
  console.log('fpsCert decrypt : ', fpsCert);
  return fpsCert;
}

// global variant to store the name of detected DRM
let supportedDRM = "no support";

// checks which DRM is supported by the browser
function checkSupportedDRM() {
  console.log("checkSupportedDRM start");

  var configCENC = [{
    "initDataTypes": ["cenc"],
    "audioCapabilities": [{
      "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
    }],
    "videoCapabilities": [{
      "contentType": "video/mp4;codecs=\"avc1.42E01E\""
    }]
  }];

  var configFPS = [{
    "audioCapabilities": [{
      "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
    }],
    "videoCapabilities": [{
      "contentType": "video/mp4;codecs=\"avc1.42E01E\""
    }]
  }];

  // Checks if the browser support PlayReady DRM
  try {
    navigator.
    requestMediaKeySystemAccess("com.microsoft.playready", configCENC).
    then(function (mediaKeySystemAccess) {
      console.log('playready support ok');
      supportedDRM = "PlayReady";
      return; // Stops the checking here because we found PlayReady DRM 
    }).catch(function (e) {
      console.log('no playready support');
      console.log(e);
    });
  } catch (e) {
    console.log('no playready support');
    console.log(e);
  }

  // If no PlayReady, checks if there's Widevine DRM
  try {
    navigator.
    requestMediaKeySystemAccess("com.widevine.alpha", configCENC).
    then(function (mediaKeySystemAccess) {
      console.log('widevine support ok');
      supportedDRM = "Widevine";
      return; // Stops when Widevine DRM is found
    }).catch(function (e) {
      console.log('no widevine support');
      console.log(e);
    });
  } catch (e) {
    console.log('no widevine support');
    console.log(e);
  }

  /* Below code doesn't work on Safari browser. Commenting out for later use.
  try {
    navigator.
    requestMediaKeySystemAccess("com.apple.fps.1_0", configFPS).
    then(function (mediaKeySystemAccess) {
      console.log('fairplay support ok');
      supportedDRM = "FairPlay";
      return;
    }).catch(function (e) {
      console.log('no fairplay support');
      console.log(e);
    });
  } catch (e) {
    console.log('no fairplay support');
    console.log(e);
  }
  */

  // Couldn't find either PlaReady nor Widevine.
  // Let's just consider the browser supports FairPlay for now..
  console.log('seems the browser is safari (fairplay supported)');
  supportedDRM = "FairPlay";
}

/* Commenting out the below code since it doesn't work well on Safari

// EME Check
var keySystems = {
  widevine: ['com.widevine.alpha'],
  playready: ['com.microsoft.playready'],
  fairplay: ['com.apple.fairplay', 'com.apple.fps.1_0', 'com.apple.fps.2_0']
};

var keySystemsCount = (function () {
  var count = 0;
  for (keysys in keySystems) {
    if (keySystems.hasOwnProperty(keysys)) {
      count += keySystems[keysys].length;
    }
  }
  return count;
})();

var testVideoElement = document.createElement('video');
var supportedSystems = [];
var unsupportedSystems = [];

var supportsEncryptedMediaExtension = function () {
  if (!testVideoElement.mediaKeys) {
    if (window.navigator.requestMediaKeySystemAccess) {
      if (typeof window.navigator.requestMediaKeySystemAccess === 'function') {
        console.log('found default EME');
        hasEME = true;

        var isKeySystemSupported = function (keySystem) {
          var config = [{
            "initDataTypes": ["cenc"],
            "audioCapabilities": [{
              "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
            }],
            "videoCapabilities": [{
              "contentType": "video/mp4;codecs=\"avc1.42E01E\""
            }]
          }];

          if (window.navigator.requestMediaKeySystemAccess) {
            window.navigator.requestMediaKeySystemAccess(keySystem, config).then(function (keySystemAccess) {
              supportedSystems.push(keySystem);
              supportedDRM = keySystem;
              console.log(`supported drm: ${keySystem}`);
            }).catch(function () {
              unsupportedSystems.push(keySystem);
            });
          }
        };

        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              isKeySystemSupported(keySystems[keysys][dummy]);
            }
          }
        }
      }
    } else if (window.MSMediaKeys) {
      if (typeof window.MSMediaKeys === 'function') {
        console.log('found MS-EME');
        hasEME = true;
        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              if (MSMediaKeys.isTypeSupported(keySystems[keysys][dummy])) {
                supportedSystems.push(keySystems[keysys][dummy]);
                console.log('playready support ok');
                supportedDRM = "PlayReady";
              } else {
                unsupportedSystems.push(keySystems[keysys][dummy]);
              }
            }
          }
        }
      }
    } else if (testVideoElement.webkitGenerateKeyRequest) {
      if (typeof testVideoElement.webkitGenerateKeyRequest === 'function') {
        console.log('found WebKit EME');
        hasEME = true;
        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              if (testVideoElement.canPlayType('video/mp4', keySystems[keysys][dummy])) {
                supportedSystems.push(keySystems[keysys][dummy]);
                console.log('fairplay support ok');
                supportedDRM = "FairPlay";
              } else {
                unsupportedSystems.push(keySystems[keysys][dummy]);
              }
            }
          }
        }
      }
    } else {
      console.log('no supported EME implementation found');
      hasEME = false;
    }
  }
}
*/