#!/usr/bin/env bash

source `which virtualenvwrapper.sh`
mkvirtualenv squares
workon squares
pip install --upgrade --force-reinstall -r requirements.txt
deactivate
