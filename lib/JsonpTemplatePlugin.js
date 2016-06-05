/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var JsonpMainTemplatePlugin = require("./JsonpMainTemplatePlugin");
var JsonpChunkTemplatePlugin = require("./JsonpChunkTemplatePlugin");
var JsonpHotUpdateChunkTemplatePlugin = require("./JsonpHotUpdateChunkTemplatePlugin");

/**
 * Chunks are wrapped into JSONP-calls. A loading algorithm is included in entry chunks. It loads chunks by adding a `<script>` tag.
 *
 * `options` are the output options.
 *
 * `options.jsonpFunction` is the JSONP function.
 *
 * `options.publicPath` is uses as path for loading the chunks.
 *
 * `options.chunkFilename` is the filename under that chunks are expected.
 *
 * @class
 */
function JsonpTemplatePlugin() {}
module.exports = JsonpTemplatePlugin;
JsonpTemplatePlugin.prototype.apply = function(compiler) {
	compiler.plugin("this-compilation", function(compilation) {
		compilation.mainTemplate.apply(new JsonpMainTemplatePlugin());
		compilation.chunkTemplate.apply(new JsonpChunkTemplatePlugin());
		compilation.hotUpdateChunkTemplate.apply(new JsonpHotUpdateChunkTemplatePlugin());
	});
};
