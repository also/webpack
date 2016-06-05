/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * Modules that are included in every parent chunk are removed from the chunk.
 *
 * @class
 */
function RemoveEmptyChunksPlugin() {}
module.exports = RemoveEmptyChunksPlugin;

RemoveEmptyChunksPlugin.prototype.apply = function(compiler) {
	compiler.plugin("compilation", function(compilation) {
		compilation.plugin(["optimize-chunks-basic", "optimize-extracted-chunks-basic"], function(chunks) {
			chunks.filter(function(chunk) {
				return chunk.isEmpty() && !chunk.initial;
			}).forEach(function(chunk) {
				chunk.remove("empty");
				chunks.splice(chunks.indexOf(chunk), 1);
			});
		});
	});
};
