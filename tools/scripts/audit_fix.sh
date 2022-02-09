#!/bin/sh
npm install --package-lock-only
npm audit fix
rm yarn.lock
yarn import
rm package-lock.json
