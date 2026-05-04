module.exports = {
  run: [
    {
      method: "script.stop",
      params: {
        uri: "start.js"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "start.js"
      }
    }
  ]
}
