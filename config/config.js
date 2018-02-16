CONFIG = {};

CONFIG.port = process.env.PORT || 3000;
CONFIG.ip = process.env.IP || 'localhost';

CONFIG.storage = __basedir + '/data/test.sqlite';
CONFIG.model = __basedir + '/models/';

//module.exports = CONFIG

