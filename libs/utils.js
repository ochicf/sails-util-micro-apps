/**
 * Emmanuel Mahuni (c) 2018 MIT
 */
const _ = require('lodash');

module.exports = {
    _bindToSails: function (sails, modules, cb) {
        _.each(modules, function (module) {
            // Add a reference to the Sails app that loaded the module
            module.sails = sails;
            // Bind all methods to the module context
            _.bindAll(module);
        });

        return cb(null, modules);
    }
}
