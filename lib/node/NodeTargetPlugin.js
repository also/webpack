/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var ExternalsPlugin = require("../ExternalsPlugin");

/**
 * The plugins should be used if you run the bundle in a node.js environment.
 *
 * If ensures that native modules are loaded correctly even if bundled.
 *
 * @class
 */
function NodeTargetPlugin() {}

module.exports = NodeTargetPlugin;
NodeTargetPlugin.prototype.apply = function(compiler) {
	new ExternalsPlugin("commonjs", Object.keys(process.binding("natives"))).apply(compiler);
};
