#!/bin/bash

DIR=$(cd `dirname $0` && pwd)

if [ -e $DIR/env/env.dev.sh ]
then
  . $DIR/env/env.dev.sh
else
  echo "Couldn't open config file"
fi

sls deploy
