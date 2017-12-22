import yargs from 'yargs'

const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose', { // 命令行日志
        boolean: true,
        default: false,
        describe: 'log'
    })
    .option('sourcemaps', {
        describe: 'forec the creation of sourcemaps'
    })
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    .argv


export default args