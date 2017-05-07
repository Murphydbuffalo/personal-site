#!/bin/sh

rm -rf ./build/*
cp ./favicons/* ./build
mkdir ./build/images
cp -R ./images ./build

# Concatenate and minify all files in the `/css` and `/javascript` directories.
# And move the resulting manifest files to the `/build` directory of the project.
#
# We make separate calls to `uglify` and `minify` (which is just a wrapper library
# that can call `uglify` if you want), because we are using the `harmony` branch
# of `uglify`. This allows us to minify ES6 JavaScript.
#
# We also give each manifest file a unique name that includes a hash of the file
# contents of the corresponding file (either `index.css` and `index.js`).
# These unique names, combined with a very long `Cache-Control` header `maxage`
# value allow browsers to avoid making requests for our JS and CSS files for up
# to one year, so long as the contents of `index.css/js` hasn't changed.

JS_HASH=`md5 -q ./javascript/index.js`
CSS_HASH=`md5 -q ./javascript/index.js`
uglifyjs ./javascript/index.js --compress --mangle toplevel --output "./build/index-$JS_HASH.min.js"
minify --output "./build/index-$CSS_HASH.min.css" ./css/normalize.css ./css/skeleton.css ./css/index.css

# Update `template.html` to use the hash-based filenames for our CSS and JS manifest files.
JS_MANIFEST=`find ./build -name "index-*.min.js" -exec basename {} \;`
CSS_MANIFEST=`find ./build -name "index-*.min.css" -exec basename {} \;`
sed "s/index.min.js/$JS_MANIFEST/" ./template.html > ./template_with_manifests.html
sed -i "" "s/index.min.css/$CSS_MANIFEST/" ./template_with_manifests.html

# For every file in the `/views` directory prepend the contents of `template.html`
# and append the closing `</body>` and `</html>` tags, and move the resulting files
# to the `/build` directory of the project.
VIEWS=./views/*.html
for v in $VIEWS
do
  FILE=`basename $v`
  echo "Building $FILE"
  cat ./template_with_manifests.html > ./build/"$FILE"
  cat $v >> ./build/"$FILE"
  echo "\t</body>\n</html>\n" >> ./build/"$FILE"
done

if [ -z "$1" ]
then
  # gzip non-binary format files
  echo "Gziping text files..."

  gzip -9 ./build/*.html ./build/*.css ./build/*.js

  # Remove .gz file extensions
  ZIPPED_FILES=./build/*.gz
  for z in $ZIPPED_FILES
  do
    mv $z `echo $z | sed "s/\.gz//"`
  done
fi

echo "Shucky ducky."
