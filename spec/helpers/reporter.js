const JasmineReporters = require('jasmine-reporters');
jasmine.getEnv().addReporter(
    new JasmineReporters.JUnitXmlReporter({
        savePath: 'test-results',
        consolidateAll: true
    })
);