const fs = require('fs');
const request = require('request');

function downloadImageToLocal(uri, filename) {
  return new Promise((resolve, reject) => {
    return request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', function() { return resolve(true); })
      .on('error', function(e) { return reject(e) });
  })
}

let options = {
  // Source url takes image url as input
  sourceUrl: 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png' ,
  // Destination path is the system path for saving the image
  destPath: '/mnt/c/Users/'
}

return downloadImageToLocal(options.sourceUrl, options.destPath)
  .then(res => {
    console.log('Image created Successfully')
  })
  .catch(err => {
    console.log('Image creation failed. Reason: ', err)
  })
