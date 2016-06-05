/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var WebWorkerMainTemplatePlugin = require("./WebWorkerMainTemplatePlugin");
var WebWorkerChunkTemplatePlugin = require("./WebWorkerChunkTemplatePlugin");
var WebWorkerHotUpdateChunkTemplatePlugin = require("./WebWorkerHotUpdateChunkTemplatePlugin");

/**
 * Chunks are loaded by `importScripts`. Else it's similar to `JsonpTemplatePlugin`.
 *
 * `options` are the output options.
 *
 * @class
 */
function WebWorkerTemplatePlugin() {}
module.exports = WebWorkerTemplatePlugin;
WebWorkerTemplatePlugin.prototype.apply = function(compiler) {
	compiler.plugin("this-compilation", function(compilation) {
		compilation.mainTemplate.apply(new WebWorkerMainTemplatePlugin());
		compilation.chunkTemplate.apply(new WebWorkerChunkTemplatePlugin());
		compilation.hotUpdateChunkTemplate.apply(new WebWorkerHotUpdateChunkTemplatePlugin());
	});
};
