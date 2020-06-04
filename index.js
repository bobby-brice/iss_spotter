// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("64.137.139.81", (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(data);
// });

// const coords = {latitude: '43.65550', longitude: '-79.36260'};

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   // let s = new Date(1591307223 * 1000).toLocaleDateString("en-US");
//   // console.log(s);
  
//   console.log("It worked! Returned flyover times: ", passTimes);
// });

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});