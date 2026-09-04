#!/bin/sh
set -e
# NOTICE:
# nginx:1.27-alpine's docker-entrypoint.d/20-envsubst-on-templates.sh
# checks `[ -w "$NGINX_ENVSUBST_OUTPUT_DIR" ]` BEFORE it mkdir -p's
# that directory. On this platform /tmp/conf.d does not exist at
# container start, so the check fails, the script logs an ERROR and
# skips rendering entirely, and nginx starts with zero server blocks
# (never binds $PORT).
# Root cause: nginxinc/docker-nginx entrypoint/20-envsubst-on-templates.sh,
# auto_envsubst() — the writability test runs before its own
# `mkdir -p "$output_dir/$subdir"`.
# Removal condition: upstream reorders the check after mkdir -p, or
# this image stops depending on NGINX_ENVSUBST_OUTPUT_DIR pre-existing.
mkdir -p /tmp/conf.d
exec /docker-entrypoint.sh "$@"
