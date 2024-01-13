import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import config from './config';
import server from './server';


// **** Run **** //

const START_MSG = ('Express server started on: http://localhost:' + config.PORT);

server.listen(config.PORT, () => logger.info(START_MSG));
