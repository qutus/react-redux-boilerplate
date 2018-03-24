import commonConfiguration from './common.config';
import development from './development.config';
import production from './production.config';

const envConfiguration = {
  development,
  production
};

export default {
  ...commonConfiguration,
  ...envConfiguration[process.env.NODE_ENV || 'production']
}
