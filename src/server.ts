import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import ShortnerRoute from './routes/shortener.route';
import RedirectorRoute from './routes/redirector.route';

ValidateEnv();

const app = new App([new ShortnerRoute(), new RedirectorRoute()]);

app.listen();
