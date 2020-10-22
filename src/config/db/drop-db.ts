import pgtools = require("pgtools");
import { configService } from '../config.service';

const typeOrmConfig: any = configService.getTypeOrmConfig();

const config = {
  user: typeOrmConfig.username,
  host: typeOrmConfig.host,
  password: typeOrmConfig.password,
  port: typeOrmConfig.port
};

pgtools.dropdb(config, typeOrmConfig.database, function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});