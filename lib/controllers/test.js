"use strict";

class Test {
    constructor(opts) {
        this.opts = opts;
    }

    log(msg) {
        console.log(msg, this.opts);
    }
};

module.exports = Test;
