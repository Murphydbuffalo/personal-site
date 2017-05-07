#!/bin/sh

aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*" --include "*.html"  --content-encoding "gzip"
aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*" --include "*.css" --include "*.js" --content-encoding "gzip" --cache-control "max-age=31536000"
aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*" --include "images/*" --cache-control "max-age=31536000"
aws s3 sync ./build s3://www.danmurphy.codes --acl public-read --exclude "*.html" --exclude "*.css" --exclude "*.js" --exclude "images/*"
