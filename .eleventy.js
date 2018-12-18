const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(config) {
    // Add a date formatter filter to Nunjucks

    // config.addFilter('dateDisplay', require('./filters/dates.js'))
    // config.addFilter('timestamp', require('./filters/timestamp.js'))

    config.addPlugin(pluginRss)
    config.addPlugin(pluginSyntaxHighlight)

    config.addLayoutAlias('base', 'layouts/base.njk')
    config.addLayoutAlias('page', 'layouts/page.njk')
    config.addLayoutAlias('post', 'layouts/post.njk')

    return {
        dir: {
            input: 'src/site',
            output: 'dist',
            includes: 'includes'
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}