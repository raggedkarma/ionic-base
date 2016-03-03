"use strict";

const Test = require("./test");

module.exports = $scope => {

    $scope.message = "Example text thing here";

    var test = new Test({ "test": "TESTINGTON" });
    test.log("Test? Why Yes, Test!");
};