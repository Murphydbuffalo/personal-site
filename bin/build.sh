#!/bin/sh

rm -rf ./build
mkdir ./build

cp ./favicons/* ./build
mkdir ./build/images
cp -R ./images ./build

# For every file in the `/views` directory prepend the contents of `template.html`
# and append the closing `</body>` and `</html>` tags, and move the resulting files
# to the `/buil` directory of the project.
VIEWS=./views/*.html
for v in $VIEWS
do
  FILE=`basename $v`
  echo "Building $FILE"
  cat ./template.html > ./build/"$FILE"
  cat $v >> ./build/"$FILE"
  echo "\t</body>\n</html>\n" >> ./build/"$FILE"
done

# Concatenate and minify all files in the `/css` and `/javascript` directories.
# And move the resulting manifest files to the `/build` directory of the project.
# We make separate calls to `uglify` and `minify` (which is just a wrapper library
# that can call `uglify` if you want), because we are using the `harmony` branch
# of `uglify`. This allows us to minify ES6 JavaScript.
uglifyjs ./javascript/index.js --compress --mangle toplevel --output ./build/index.min.js
minify --output ./build/index.min.css ./css/normalize.css ./css/skeleton.css ./css/index.css

# gzip non-binary format files
echo "Gziping text files..."
gzip -9 ./build/*.html ./build/*.css ./build/*.js

# Remove .gz file extensions
ZIPPED_FILES=./build/*.gz
for z in $ZIPPED_FILES
do
  mv $z `echo $z | sed "s/\.gz//"`
done

echo "Shucky ducky."
