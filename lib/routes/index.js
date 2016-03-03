"use strict";

module.exports = $stateProvider => {
    
    $stateProvider
        .state("example", {
            "url": "",
            "templateUrl": "./templates/example.html",
            "controller": require("../controllers/main")
        });
};
