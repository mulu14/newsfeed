const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rss",
    createProxyMiddleware({
      target: "https://www.dn.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/rss/kultur",
    createProxyMiddleware({
      target: "https://www.dn.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/rss/sport",
    createProxyMiddleware({
      target: "https://www.dn.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/rss/debatt",
    createProxyMiddleware({
      target: "https://www.dn.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/nyheter",
    createProxyMiddleware({
      target: "https://feeds.expressen.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/noje",
    createProxyMiddleware({
      target: "https://feeds.expressen.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/motor",
    createProxyMiddleware({
      target: "https://feeds.expressen.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/gt/ledare",
    createProxyMiddleware({
      target: "https://feeds.expressen.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/kvp/kultur",
    createProxyMiddleware({
      target: "https://feeds.expressen.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/rss.xml",
    createProxyMiddleware({
      target: "https://www.hd.se",
      changeOrigin: true,
    })
  );
  app.use(
    "/rss.xml",
    createProxyMiddleware({
      target: "https://www.sydsvenskan.se/rss.xml",
      changeOrigin: true,
    })
  );
};
