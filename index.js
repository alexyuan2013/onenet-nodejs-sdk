const OneNet = require('./onenet-sdk')

var onenet = new OneNet('sygzFeioL=G6fSw1LBzbr1qB76M=', 'zVGRcKzIE7MA7Oxz')

// onenet.registerDevice({sn: '2017090701421', title: 'mydevice'}).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.registerAttr({allow_dup: true}).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// var option = {}
// option.title = 'mydevice'
// option.desc = 'some decription'
// option.protocal = 'MQTT'
// option.auth_info = '1541254124512'
// onenet.addDevice(option).then(function(res){
//   console.log(res)
// }, function(err){
//   console.log('err: ' + err)
// })

// var option = {}
// option.title = 'mydevice111'
// option.desc = 'some decription'
// option.protocal = 'MQTT'
// onenet.updateDeviceInfo('8836617', option).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.getOneDeviceInfo('8836617').then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.getDevicesInfo('').then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.getDevicesStatus('8836617,8836458').then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.deleteDevice('8836617').then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// var option = {
//   "id":"temperature",
//   "tags":["Tag1","Tag2"],
//   "unit":"celsius",
//   "unit_symbol":"C"
// }
// onenet.addDataStream('8836458', option).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// var option = {
//   "unit":"celsius",
//   "unit_symbol":"F"
// }
// onenet.updateDataStreamInfo('8836458', 'temperature', option).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.getOneDataStream('8836458', 'EXTBATVOLT').then(function(res){
//   console.log(res)
// },function(err){
//   console.log(err)
// })

// onenet.getDataStreams('7501801', 'EXTBATVOLT,BATLOWVOLTALARM').then(function(res){
//   console.log(res)
// },function(err){
//   console.log(err)
// })

// onenet.deleteDataStream('8836458', 'temperature').then(function(res){
//   console.log(res)
// },function(err){
//   console.log(err)
// })

// var points = {
//   datastreams: [
//     {
//       id: 'GPSPOSITION',
//       datapoints: [
//         {
//           value: '1,E11332.348383,N2341.334343'
//         }
//       ]
//     }
//   ]
// }
// onenet.addDataPoints('8836458', points).then(function(res){
//   console.log(res)
// }).catch(function(err){
//   console.log(err)
// })

// onenet.getDataPoints('8836458', '').then(function(res){
//   console.log(res)
// },function(err){
//   console.log(err)
// })

onenet.addTriggers({title: 'test trigger', ds_id: 'gps', url: 'alex.ngrock.cc', type: 'change'}).then(function(res){
  console.log(res)
},function(err){
  console.log(err)
})