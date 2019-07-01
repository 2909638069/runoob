var ChildProcess = require('child_process');

ChildProcess.exec(
    'ls -al; cd ..; ls -al',
    function (error, stdout, stderr){
        if (error) console.log('Error');
        console.log(stdout);
        console.log(stderr);
    }
);
