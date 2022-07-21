#!/usr/bin/env node
"use strict";

const { Command } = require("commander");
const pkg = require("./package.json");

const program = new Command();

program
    .name("qixie")
    .description("Qixie Command Line Interface")
    .version(pkg.version)
    .action((_opts, cmd) => console.log(`输入 "${cmd._name} ${cmd._helpShortFlag}" 获取帮助`))

program.parse(process.argv);