// Request Options, see https://github.com/axios/axios

module.exports = {
  method: "POST",
  url: "https://google.com",
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    userId: "222",
  }),
};
