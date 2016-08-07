#!/bin/sh
# Copyright 2016, Ryan Kelly. All Rights Reserved.

if [ ! -e virtualenv ]; then
    virtualenv virtualenv
fi

. virtualenv/bin/activate

pip install botocore
