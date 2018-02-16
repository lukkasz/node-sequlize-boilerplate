CONFIG = {};

CONFIG.port = process.env.PORT || 3000;
CONFIG.ip = process.env.IP || 'localhost';

CONFIG.base = process.env.PWD ? process.env.PWD : process.cwd();

CONFIG.db_host = process.env.IP || 'localhost';
CONFIG.db_dialect = 'sqlite';
CONFIG.db_storage = CONFIG.base + '/data/db-dev.sqlite';
CONFIG.db_name = undefined; 
CONFIG.db_user = undefined;
CONFIG.db_password = undefined;



