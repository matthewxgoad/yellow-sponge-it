function spongebobify(input) {
    let output = "";
    for ( let i = 0 ; i < input.length ; i++ ) {
        let caseState = (Math.floor(Math.random() * 2) == 0);
        if (caseState == 0) {
            output = output.concat(input[i].toUpperCase());
        } else {
            output = output.concat(input[i].toLowerCase());
        }
    };
    return output
};