#!/usr/bin/env bash

source `which virtualenvwrapper.sh`
workon squares
python ./manage.py migrate
echo "from authentication.models import Account; Account.objects.filter(email='admin@squares.com').delete(); Account.objects.create_superuser('admin@squares.com', 'admin', 'admin')" | python manage.py shell
deactivate
