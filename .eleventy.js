const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(inclusiveLangPlugin, {
        templateFormats: ["md"],
        words:
            "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy,directory,directories,easy"
    });

    eleventyConfig.addPairedShortcode("todo", function (todoItems) {
        return (
            `<div data-percentage='0' class='todo'><div class='progress'><div class='progress-inner'></div></div>
            ${todoItems}
</div>
            `
        );
    })
    eleventyConfig.addShortcode("cta", function (text, href) {
        return (
            `<a class='btn' href='${href}'>${text}</a>
            `
        );
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("exercises/chapter-1");
    eleventyConfig.addPassthroughCopy("exercises/chapter-2");
    eleventyConfig.addPassthroughCopy("exercises/chapter-3");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        pathPrefix: "/untitled-coding-workshop/"
    }
};