"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var moment = require("moment");
var chalk = require("chalk");
var appLogger = console.log;
exports.log = function (tag, funcName, message, env) {
    if (env === void 0) { env = 'development'; }
    if (env === 'development' && tag) {
        // const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        var currentDateTime = moment().format('h:mm:ss a');
        var chalkLog = chalk.yellow(currentDateTime);
        appLogger('\n');
        if (funcName && message) {
            chalkLog +=
                chalk.greenBright(" " + tag) +
                    chalk.yellowBright(" " + funcName + "()") +
                    chalk.cyanBright(" Message:") +
                    chalk.cyan(" " + message);
            appLogger(chalkLog);
        }
        else if (funcName) {
            chalkLog +=
                chalk.greenBright(" " + tag) +
                    chalk.yellowBright(" " + funcName + "()") +
                    chalk.cyanBright(' triggered --->');
            appLogger(chalkLog);
        }
        else if (message) {
            chalkLog +=
                chalk.greenBright(" " + tag) +
                    chalk.cyanBright(" Message:") +
                    chalk.cyan(" " + message);
            appLogger(chalkLog);
        }
        else {
            chalkLog +=
                chalk.greenBright(" " + tag) + chalk.cyanBright(' triggered --->');
            appLogger(chalkLog);
        }
    }
};
