/**
 * The SDK for China Mobile Iot Platform: OneNet
 * more information, see: https://open.iot.10086.cn/doc/art262.html#68
 */

const request = require('request')
const Promise = require('promise')

/**
 * common method for request data
 * @param {*} options 
 */
var requestData = function(options) {
  return new Promise(function(resolve, reject){
    request(options, function(err, res, body){
      if (err) {
        reject(err)
      } else {
        if (res.statusCode >= 200 && res.statusCode < 300){
          resolve(body)
        } else {
          reject('request params error')
        }
      }
    })
  })
}
/**
 * constructor function
 * @param {string} apiKey 
 * @param {string} registerCode 
 */
function OneNet(apiKey, registerCode) {
  this.apiKey = apiKey
  this.registerCode = registerCode
}
/**
 * register device
 * return a promise object
 */
OneNet.prototype.registerDevice = function(registerOption) {
  const options = {
    method: 'post',
    url: 'http://api.heclouds.com/register_de?register_code=' + this.registerCode,
    json: registerOption
  }
  return requestData(options)
}
/**
 * update register attribute
 * return a promise object
 */
OneNet.prototype.registerAttr = function (allowDup) {
  const options = {
    method: 'put',
    url: 'http://api.heclouds.com/register_attr',
    headers: {
      'api-key': this.apiKey
    },
    json: {'allow_dup': allowDup}
  }
  return requestData(options)
}
/**
 * same to registerDevice
 * return a promise object
 */
OneNet.prototype.addDevice = function (deviceOption) {
  const options = {
    method: 'post',
    url: 'http://api.heclouds.com/devices',
    headers: {
      'api-key': this.apiKey
    },
    json: deviceOption
  }
  return requestData(options)
}
/**
 * update device info
 */
OneNet.prototype.updateDeviceInfo = function (deviceId, deviceOption){
  const options = {
    method: 'put',
    url: 'http://api.heclouds.com/devices/' + deviceId,
    headers: {
      'api-key': this.apiKey
    },
    json: deviceOption
  }
  return requestData(options)
}
/**
 * get one device info
 */
OneNet.prototype.getOneDeviceInfo = function (deviceId) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/' + deviceId,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * get multiple device info
 */
OneNet.prototype.getDevicesInfo = function (urlParams) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices?' + urlParams,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * get multiple device status
 */
OneNet.prototype.getDevicesStatus = function (deviceIds) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/status?devIds=' + deviceIds,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * get multiple device data
 */
OneNet.prototype.getDevicesData = function (deviceIds) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/datapoints?devIds=' + deviceIds,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * delete device
 */
OneNet.prototype.deleteDevice = function (deviceId) {
  const options = {
    method: 'delete',
    url: 'http://api.heclouds.com/devices/' + deviceId,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * add datastreams for device
 */
OneNet.prototype.addDataStream = function (deviceId, dataStreamOption) {
  const options = {
    method: 'post',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datastreams',
    headers: {
      'api-key': this.apiKey
    },
    json: dataStreamOption 
  }
  return requestData(options)
}
/**
 * update datastream info
 */
OneNet.prototype.updateDataStreamInfo = function (deviceId, dataStreamId, infoOption) {
  const options = {
    method: 'put',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datastreams/' + dataStreamId,
    headers: {
      'api-key': this.apiKey
    },
    json: infoOption 
  }
  return requestData(options)
}
/**
 * get one datastream
 */
OneNet.prototype.getOneDataStream = function (deviceId, dataStreamId) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datastreams/' + dataStreamId,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * get multiple datastreams
 */
OneNet.prototype.getDataStreams = function (deviceId, dataStreamIds) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datastreams/?datastream_ids=' + dataStreamIds,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * delete datastream
 */
OneNet.prototype.deleteDataStream = function (deviceId, dataStreamId) {
  const options = {
    method: 'delete',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datastreams/' + dataStreamId,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * add datapoint for test
 */
OneNet.prototype.addDataPoints = function(deviceId, pointsJson) {
  const options = {
    method: 'post',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datapoints',
    headers: {
      'api-key': this.apiKey
    },
    json: pointsJson 
  }
  return requestData(options)
}
/**
 * get datapoint
 */
OneNet.prototype.getDataPoints = function (deviceId, urlParams) {
  const options = {
    method: 'get',
    url: 'http://api.heclouds.com/devices/' + deviceId + '/datapoints?' + urlParams,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}

module.exports = OneNet