module.exports = {
  async headers() {
    return [
      {
        // Подходит для всех маршрутов API
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://e-commerceshop-hzbt.vercel.app/",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, next-router-prefetch, rsc",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["utfs.io"],
  },
};
