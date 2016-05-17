var env = process.env.NODE_ENV || 'development';
var mongoURI;

// development only
if (env === 'development') {
  exports.mongoURI = 'mongodb://localhost/interusp';
}

// production only
else if (env === 'production') {
  exports.mongoURI = 'mongodb://interusp:interusp@ec2-52-201-135-248.compute-1.amazonaws.com:27017/interusp';
}

exports.apiSecret = 'appsimples-interusp-api-secret';

