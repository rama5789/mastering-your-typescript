import moment = require('moment');
import chalk = require('chalk');

const appLogger = console.log;

export const log = (
  tag: string,
  funcName?: string,
  message?: string,
  env = 'development'
) => {
  if (env === 'development' && tag) {
    // const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const currentDateTime = moment().format('h:mm:ss a');
    let chalkLog = chalk.yellow(currentDateTime);

    appLogger('\n');
    if (funcName && message) {
      chalkLog +=
        chalk.greenBright(` ${tag}`) +
        chalk.yellowBright(` ${funcName}()`) +
        chalk.cyanBright(` Message:`) +
        chalk.cyan(` ${message}`);

      appLogger(chalkLog);
    } else if (funcName) {
      chalkLog +=
        chalk.greenBright(` ${tag}`) +
        chalk.yellowBright(` ${funcName}()`) +
        chalk.cyanBright(' triggered --->');

      appLogger(chalkLog);
    } else if (message) {
      chalkLog +=
        chalk.greenBright(` ${tag}`) +
        chalk.cyanBright(` Message:`) +
        chalk.cyan(` ${message}`);

      appLogger(chalkLog);
    } else {
      chalkLog +=
        chalk.greenBright(` ${tag}`) + chalk.cyanBright(' triggered --->');

      appLogger(chalkLog);
    }
  }
};
