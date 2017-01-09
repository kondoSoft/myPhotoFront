import Raven from 'raven-js';

const sentry_key = 'd9a26533b7cb49ef974ab91ffbff0ac9';
const sentry_app = '125820';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
