#!/bin/bash
mkdir pgdata
docker run --name mds_postgres \
 -p 5432:5432 \
 -e POSTGRES_PASSWORD=password \
 -e POSTGRES_USER=user \
 -e POSTGRES_DB=appdb \
 -v $PWD/pgdata:/var/lib/postgresql/data \
 -d postgres:10.1