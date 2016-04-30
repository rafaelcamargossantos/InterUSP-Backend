var env = process.env.NODE_ENV || 'development';
var mongoURI;

// development only
if (env === 'development') {
  exports.mongoURI = 'mongodb://localhost/27017';
}

// production only
else if (env === 'production') {
  // mongoURI = 'mongodb://backendBootstrap:amazonapp123654@ec2-52-90-169-151.compute-1.amazonaws.com:27017/backendBootstrap';
}

exports.apiSecret = 'appsimples-swapped-api-secret';