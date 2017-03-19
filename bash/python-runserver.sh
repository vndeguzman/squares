#!/usr/bin/env bash

source `which virtualenvwrapper.sh`
workon squares
pkill -1 -f ./manage.py
python ./manage.py runserver 0.0.0.0:8000
deactivate
