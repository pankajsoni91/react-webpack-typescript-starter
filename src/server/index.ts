import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import api from 'routes/api';
import pages from 'routes/pages';

const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.use(helmet());
app.use(bodyParser.json());

app.use('/v1/api', api);
app.use(pages);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
