import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import ShortnerRoute from './routes/shortener.route';

ValidateEnv();

const app = new App([new ShortnerRoute()]);

app.listen();
