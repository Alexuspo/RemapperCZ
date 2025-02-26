#!/bin/bash
# This script will be used to build the site
# For local development, run:
# pip install -r requirements.txt
# mkdocs build

# For Vercel deployment, we're using the static files in the public directory
mkdir -p public
cp -r docs/* public/
