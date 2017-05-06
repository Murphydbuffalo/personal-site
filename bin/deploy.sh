#!/bin/sh

aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*" --include "*.html" --include "*.css" --include "*.js" --content-encoding "gzip"
aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*.html" --exclude "*.css" --exclude "*.js"
