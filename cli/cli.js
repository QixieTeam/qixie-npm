#!/usr/bin/env node
"use strict";

const { Command } = require("commander");
const pkg = require("./package.json");
const lib = require("./lib");

const program = new Command();

program
    .name("qixie")
    .description("Qixie Command Line Interface")
    .version(pkg.version)
    .action((_opts, cmd) => console.log(`输入 "${cmd._name} ${cmd._helpShortFlag}" 获取帮助`))

program
    .command("clone <url>")
    .description("克隆 <url> 处的文件")
    .action((arg_url, _opts, cmd) => {
        lib.cloneFile(arg_url, "./");
    })

program.parse(process.argv);