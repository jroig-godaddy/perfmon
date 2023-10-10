const program = require('commander');
const getToken = require('./lib/getToken');
const measurePage = require('./lib/measurePage');

// set up the options...
program
    .version('0.1')
    .description('Perfmon pageLoad analyser')
    .option('-u, --user [username]', 'gdtesting')
    .option('-p, --password [password]', 'somePassW0rd')
    .option('-e, --env [env]', 'test (default)/prod')
    .option('-n, --numberOfProbes [number]', '1 (default)')
    .option('-t, --timeBetweenProbes [number]', '10 (default)')
    .option('-d, --debug', 'true/false (default)')
    .parse(process.argv);

// should show help if there aren't any args...
if (!program.args || !program.args.length) {
    program.help();
}

const env = program.env || 'test';
const debug = program.debug || false;
const numberOfProbes = parseInt(program.numberOfProbes) || 1;
const timeBetweenProbes = parseInt(program.timeBetweenProbes) || 5;

const thePage = program.args[0];
if (debug) {
    console.log(`\nPreparing to measure: ${thePage}\n`);
}

getToken(program.user, program.password, env, debug).then((idpToken) => {
    if (debug) {
        console.log('jwt:', idpToken);
    }
    const params = {
        env,
        numberOfProbes,
        timeBetweenProbes,
        debug,
    };
    measurePage(thePage, idpToken, params).then((measurePageOutput) => {
        // only a single output for a probe...
        if (numberOfProbes === 1) {
            console.log(measurePageOutput[0]);
            return;
        }

        // otherwise, we want to gather some stats...
        const thePackage = {
            average: {},
            probes: measurePageOutput,
        };

        // go through the output...
        // get the totals...
        measurePageOutput.forEach((measureProbeObj) => {
            Object.keys(measureProbeObj).forEach(function(key,index) {
                if (typeof measureProbeObj[key] !== 'string') {
                    if (!thePackage.average[key]) {
                        thePackage.average[key] = measureProbeObj[key];
                    } else {
                        thePackage.average[key] += measureProbeObj[key];
                    }
                }
            })
        });

        // get the averages...
        Object.keys(thePackage.average).forEach(function(key,index) {
            thePackage.average[key] = thePackage.average[key]/numberOfProbes;
        });

        thePackage.average.numberOfProbes = numberOfProbes;
        thePackage.average.timeBetweenProbes = timeBetweenProbes;

        console.log(thePackage);

    });
});
