FROM node:24-trixie AS build-stage

WORKDIR /app

ARG VITE_ENABLE_POSTHOG=false
ENV VITE_ENABLE_POSTHOG=${VITE_ENABLE_POSTHOG}

RUN apt update && apt install -y ca-certificates curl
RUN update-ca-certificates
RUN apt update && apt install -y build-essential python3 python3-setuptools curl

RUN corepack enable

COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

RUN pnpm -F @proj-airi/stage-web run build && \
    pnpm -F @proj-airi/docs run build:base && \
    mv ./docs/.vitepress/dist ./apps/stage-web/dist/docs && \
    pnpm -F @proj-airi/stage-ui run story:build && \
    mv ./packages/stage-ui/.histoire/dist ./apps/stage-web/dist/ui

FROM nginx:1.27-alpine AS production-stage

COPY --from=build-stage /app/apps/stage-web/dist /usr/share/nginx/html
COPY apps/stage-web/nginx/nginx.conf /etc/nginx/nginx.conf
COPY apps/stage-web/nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY apps/stage-web/nginx/docker-entrypoint-wrapper.sh /docker-entrypoint-wrapper.sh
RUN chmod +x /docker-entrypoint-wrapper.sh

# NOTICE:
# Rendered config output dir must be writable at container start (the
# entrypoint's envsubst step runs then, not at build time) but the
# runtime rootfs is read-only apart from /tmp.
# Root cause: default NGINX_ENVSUBST_OUTPUT_DIR is /etc/nginx/conf.d,
# which is not writable outside the build stage.
# Source: nginx:1.27-alpine /docker-entrypoint.d/20-envsubst-on-templates.sh.
# Removal condition: platform ships a writable /etc/nginx tree at runtime.
ENV NGINX_ENVSUBST_OUTPUT_DIR=/tmp/conf.d

# Static assets only need to be readable by the non-root nginx user;
# no writable state lives under /usr/share/nginx/html at runtime.
RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx

ENTRYPOINT ["/docker-entrypoint-wrapper.sh"]
CMD ["nginx", "-g", "daemon off;"]
