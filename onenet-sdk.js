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
		  var result = {}
		  result.errno = 500
		  result.error = 'request params error'
          reject(result)
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
function OneNet(apiAddr, apiKey, registerCode) {
  this.apiAddr = apiAddr || 'http://api.heclouds.com'
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
    url: this.apiAddr + '/register_de?register_code=' + this.registerCode,
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
    url: this.apiAddr + '/register_attr',
    headers: {
      'api-key': this.apiKey
    },
    json: allowDup
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
    url: this.apiAddr + '/devices',
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
    url: this.apiAddr + '/devices/' + deviceId,
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
    url: this.apiAddr + '/devices/' + deviceId,
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
    url: this.apiAddr + '/devices?' + urlParams,
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
    url: this.apiAddr + '/devices/status?devIds=' + deviceIds,
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
    url: this.apiAddr + '/devices/datapoints?devIds=' + deviceIds,
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
    url: this.apiAddr + '/devices/' + deviceId,
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
    url: this.apiAddr + '/devices/' + deviceId + '/datastreams',
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
    url: this.apiAddr + '/devices/' + deviceId + '/datastreams/' + dataStreamId,
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
    url: this.apiAddr + '/devices/' + deviceId + '/datastreams/' + dataStreamId,
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
    url: this.apiAddr + '/devices/' + deviceId + '/datastreams/?datastream_ids=' + dataStreamIds,
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
    url: this.apiAddr + '/devices/' + deviceId + '/datastreams/' + dataStreamId,
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
    url: this.apiAddr + '/devices/' + deviceId + '/datapoints',
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
    url: this.apiAddr + '/devices/' + deviceId + '/datapoints?' + urlParams,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}
/**
 * add triggers
 */
OneNet.prototype.addTriggers = function (triggerOption) {
  const options = {
    method: 'post',
    url: this.apiAddr + '/triggers',
    headers: {
      'api-key': this.apiKey
    },
    json: triggerOption
  }
  return requestData(options)
}
/**
 * read api for nbiot device
 * @param {Object} readOptions 
 */
OneNet.prototype.nbiotRead = function (readOptions) {
  var params = []
  for (let key in readOptions) {
    params.push(key + '=' + readOptions[key])
  }
  params = params.join('&')
  const options = {
    method: 'get',
    url: this.apiAddr + '/nbiot?' + params,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}

/**
 * write api for nbiot device
 * @param {Object} readOptions 
 */
OneNet.prototype.nbiotWrite = function (writeOptions, writeData) {
  var params = []
  for (let key in writeOptions) {
    params.push(key + '=' + writeOptions[key])
  }
  params = params.join('&')
  const options = {
    method: 'post',
    url: this.apiAddr + '/nbiot?' + params,
    headers: {
      'api-key': this.apiKey,
      'Content-Type': 'application/json'
    },
    json: writeData
  }
  return requestData(options)
}

/**
 * execute api for nbiot device
 * @param {Object} readOptions 
 */
OneNet.prototype.nbiotExecute = function (executeOptions, executeData) {
  var params = []
  for (let key in executeOptions) {
    params.push(key + '=' + executeOptions[key])
  }
  params = params.join('&')
  const options = {
    method: 'post',
    url: this.apiAddr + '/nbiot/execute?' + params,
    headers: {
      'api-key': this.apiKey,
      'Content-Type': 'application/json'
    },
    json: executeData
  }
  return requestData(options)
}

/**
 * resources api for nbiot device
 * @param {Object} readOptions 
 */
OneNet.prototype.nbiotResources = function (resourcesOptions) {
  var params = []
  for (let key in resourcesOptions) {
    params.push(key + '=' + resourcesOptions[key])
  }
  params = params.join('&')
  const options = {
    method: 'get',
    url: this.apiAddr + '/nbiot/resources?' + params,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}

/**
 * resources api for nbiot device
 * @param {Object} readOptions 
 */
OneNet.prototype.nbiotObserve = function (observeOptions) {
  var params = []
  for (let key in observeOptions) {
    params.push(key + '=' + observeOptions[key])
  }
  params = params.join('&')
  const options = {
    method: 'post',
    url: this.apiAddr + '/nbiot/observe?' + params,
    headers: {
      'api-key': this.apiKey
    }
  }
  return requestData(options)
}

module.exports = OneNet