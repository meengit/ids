# Setup this Documentation

Create default directory structure (without `_posts` dir) and default files:
```bash
mkdir -p PROJECT_DIR/{_drafts,_includes,_layouts,_data,_sass,_site}
touch PROJECT_DIR/{_config.yml,_config_dev.yml,index.md,Gemfile,README.md}
```

This setup working with [*Jekyll Collections*][6] for its contents called *contents*. To enable this collection create a directory called `contents` and add it to `_config.yml` (please see bellow).

Add your `.eslintrc` and `.scss-lint.yml`settings to `PROJECT_DIR`. Then setup the `Gemfile`:
```ruby 
# ./Gemfile

source "https://rubygems.org"
ruby RUBY_VERSION

gem "jekyll", "3.4.1"
gem "susy", "2.2.12"

# Plugins
group :jekyll_plugins do
   gem "jekyll-babel", "1.1.0"
   gem "jekyll-compass","2.0.1"
end
```

To use *Jekyll* with development and production environment please read this background post on [stackoverflow.com][1] as introduction. With `_config.yml` and `_config_dev.yml` booth solutions on [stackoverflow.com][1] are available.

Production `_config.yml`: 
```yaml
# ./_config.yml

# Site settings

# {{ site.title }}
title: Adobe InDesign Scripting 

gems:
  - jekyll-babel
  - jekyll-compass

# jekyll-babel, please do not process .js files
babel_js_extensions: 'es6, babel, jsx'

markdown: kramdown

# {{ site.email }}
email: ids@meen.ch

# {{ site.description }}
description: > 
  Adobe InDesign Scripting, Gemeinschaftsprojekt «Grafisches Forum Zürich» 
  und Berufsschule für Gestaltung Zürich medienformfarbe, entwickelt durch
  Andreas Eberhard, Jona.

github_username:  meengit
url: "https://meengit.github.io"
baseurl: "/ids"

collections:
  contents:
    output: true
```

Development `_config_dev.yml` (may optional):
```yaml
# ./_config_dev.yml

url: "https://localhost:4000"
baseurl: ""
```

## Jekyll plugins

This setup using two plugins: [jekyll-babel][2] and [jekyll-compass][3] with [susy][4] as dependency.

The required *gems* are registered in the `Gemfile`. For installation run
```bash
bundle install 
```

in terminal. The configurations are located on the top in `_config.yml`.

`jekyll-babel` runs automatically but is configurable, eg. in `_config.yml`:
```yaml
# jekyll-babel, please do not process .js files
babel_js_extensions: 'es6, babel, jsx'
```

`jekyll-compass` must be initialized first. Run:
```bash
compass create -r jekyll-compass --app=jekyll -r susy Path/PROJECT_DIR/
```

The output should be like this:
```text
directory _compass/
directory _site/css/
directory .compass/
   create .compass/config.rb
   create _compass/screen.scss
   create _compass/print.scss
   create _compass/ie.scss
    write _site/css/ie.css
    write _site/css/print.css
    write _site/css/screen.css

*********************************************************************
Congratulations! Your jekyll-compass project has been created.

Don't forget to add jekyll-compass to the list of gem plugins in _config.yml.

You may now add and edit Sass stylesheets in the _compass subdirectory of your project.

Sass files beginning with an underscore are called partials and won't be
compiled to CSS, but they can be imported into other sass stylesheets.

You can configure your project by editing the _data/compass.yml configuration file.

If you are using the jekyll new site template installed with `jekyll new` then
you may wish to move some of the files from _sass to _compass and then remove
this folder along with the css folder.

You must compile your Sass stylesheets into CSS when they change.
This can be done in one of the following ways:
  1. To compile on demand:
     compass compile (just compile your Sass)
     jekyll build (compile your entire website, including Sass)
  2. To monitor your project for changes and automatically recompile:
     compass watch (just watches your Sass)
     jekyll serve --watch (watch your entire website, including Sass)

More Resources:
  * Website: http://compass-style.org/
  * Sass: http://sass-lang.com
  * Community: http://groups.google.com/group/compass-users/
  * Jekyll: http://jekyllrb.com/
  * jekyll-compass: https://github.com/mscharley/jekyll-compass
```

To start up this setup in **development environment** run:
```bash
jekyll serve _config.yml,_config_dev.yml
```

## Troubleshooting:

**If your files in `_sass` folder not included wit `jekyll bild` or `serve`, move them to `_compass` directory and delete `_sass`. If you have some other issues, [Using susy with Jekyll][5] by [stackoverflow.com][5] may help.**




[6]:https://jekyllrb.com/docs/collections/
[5]:http://stackoverflow.com/questions/25526756/using-susy-with-jekyll
[4]:http://susydocs.oddbird.net/en/latest/
[3]:https://github.com/chikamichi/jekyll-compass
[2]:https://github.com/babel/jekyll-babel
[1]:http://stackoverflow.com/questions/27386169/change-site-url-to-localhost-during-jekyll-local-development


