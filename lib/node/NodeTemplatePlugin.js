/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var NodeMainTemplatePlugin = require("./NodeMainTemplatePlugin");
var NodeChunkTemplatePlugin = require("./NodeChunkTemplatePlugin");
var NodeHotUpdateChunkTemplatePlugin = require("./NodeHotUpdateChunkTemplatePlugin");

/**
 * Chunks are wrapped into node.js modules exporting the bundled modules. The entry chunks loads chunks by requiring them.
 *
 *`options` are the output options.
 *
 *`options.chunkFilename` is the filename under that chunks are expected.
 *
 * @class
 */
function NodeTemplatePlugin(options) {
	options = options || {};
	this.asyncChunkLoading = options.asyncChunkLoading;
}
module.exports = NodeTemplatePlugin;
NodeTemplatePlugin.prototype.apply = function(compiler) {
	compiler.plugin("this-compilation", function(compilation) {
		compilation.mainTemplate.apply(new NodeMainTemplatePlugin(this.asyncChunkLoading));
		compilation.chunkTemplate.apply(new NodeChunkTemplatePlugin());
		compilation.hotUpdateChunkTemplate.apply(new NodeHotUpdateChunkTemplatePlugin());
	}.bind(this));
};
