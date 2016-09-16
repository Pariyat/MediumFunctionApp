var nostra = require('nostra');

﻿module.exports = function (context, req, intable) {

    // generate a fortune
    var fortune = nostra.generate();

    context.log("Retrieved records:", intable);

    context.res = {
        status: 200,
        body: {
          "table": intable,
          "fortune": fortune
        }
    };
    context.done();
};
