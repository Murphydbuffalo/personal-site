#!/bin/sh

# Exit the script if any command within it returns with an error.
set -e

./bin/build.sh

aws s3 sync ./build s3://danmurphy.codes --acl public-read \
                                         --exclude "*" \
                                         --include "*.html" \

aws s3 sync ./build s3://danmurphy.codes --acl public-read \
                                         --exclude "*" \
                                         --include "*.css" \
                                         --cache-control "max-age=31536000"

aws s3 sync ./build s3://danmurphy.codes --acl public-read \
                                         --exclude "*" \
                                         --include "images/*" \
                                         --cache-control "max-age=31536000"

# Upload remaining files (favicons) as-is.
aws s3 sync ./build s3://danmurphy.codes --acl public-read \
                                         --exclude "*.html" \
                                         --exclude "*.css" \
                                         --exclude "*.js" \
                                         --exclude "images/*"
