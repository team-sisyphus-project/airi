# Hestia 게시용 — preview.toml(model=static)과 동일 의도: 커밋된 정적 빌드
# apps/stage-web/dist를 정적 서버로 서빙한다(빌드 없음, SPA fallback 포함).
FROM node:20-alpine
RUN npm i -g serve@14.2.5
WORKDIR /app
COPY apps/stage-web/dist ./dist
USER node
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-3000}"]
