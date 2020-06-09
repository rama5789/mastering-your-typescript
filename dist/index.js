"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_types_1 = __importDefault(require("./references/basic/data_types"));
var helper_1 = require("./utils/helper");
console.log('\n\n<------ index.ts ----->');
var tag = 'Index';
{
    helper_1.log(tag);
    var hello = 'Hello';
    var world = 'World';
    console.log(hello + ' ' + world);
    console.log(data_types_1.default);
}
exports.default = tag;
