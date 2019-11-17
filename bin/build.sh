#!/bin/sh

# Exit the script if any command within it returns with an error.
set -e

mkdir -p ./build
rm -rf ./build/*
cp -R ./favicons/* ./images ./build
cp template.html ./build/index.html

# Concatenate and minify all CSS and JS files move the resulting manifest file
# to the `/build` directory of the project.
#
# We also give the manifest file a unique name that includes the hash of the file
# contents. These unique names, combined with setting the `Cache-Control`
# header's `maxage` value allow browsers to avoid making requests for our CSS
# for up to one year, so long as the file contents of haven't changed.
CSS_HASH=`./node_modules/md5-file/cli.js ./css/index.css`
./node_modules/uglifycss/uglifycss --output "./build/index-$CSS_HASH.min.css" ./css/normalize.css ./css/skeleton.css ./css/index.css

CSS_FILENAME=`find ./build -name "index-*.min.css" -exec basename {} \;`
sed -i "" "s/index.min.css/$CSS_FILENAME/" ./build/index.html

JS_HASH=`./node_modules/md5-file/cli.js ./js/index.js`
./node_modules/@babel/cli/bin/babel.js ./js/index.js ./js/swiped-events.js --out-file "./build/index-$JS_HASH.min.js"

JS_FILENAME=`find ./build -name "index-*.min.js" -exec basename {} \;`
sed -i "" "s/index.min.js/$JS_FILENAME/" ./build/index.html

echo "Shucky ducky."
