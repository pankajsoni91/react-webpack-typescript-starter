import { History } from 'history';
import createBrowserHistory from 'history/createBrowserHistory';

export default (process.env.BROWSER && createBrowserHistory()) as History;
