var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var assets      = require('metalsmith-assets');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    title: "Amazo Nabeer",
    description: "Amazo Nabeer",
    keywords: "Amazo Nabeer, amazonabeer",
    author: "https://github.com/amazonabeer",
    generator: "metalsmith",
    url: "https://github.com/amazonabeer"
  })
  .source('src')
  .destination('public')
  .clean(true)
  .use(assets({
    source: 'assets',
    destination: '.'
  }))
  .use(sass({
    outputStyle: "expanded",
    outputDir: "css"
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    directory: 'layouts',
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
    console.log('Done!');
  });
