#!/usr/bin/env node

const program = require('commander');

const getHelp = () => {}

program
    // 命令名称
    .name('better-clone')
    .version('0.0.1')
    .option('-v, --verbose', 'verbosity that can be increased')

program
    // 定义子命令
    .command('clone <source> [destination]')
    // 参数
    .option('-d, --depths <level>', 'git clone depths')
    .description('clone a repository into a newly created directory')
    // 具体操作行为
    .action((source, destination, cmdObj) => {
        console.log(`start cloning from ${source} to ${destination} with depth ${cmdObj.depths}...`);
    });

// 需要将node cli中传入的参数传递给commander进行解析
program.parse(process.argv);