module.exports = {
  run: [
    // Remove virtual environment
    {
      method: "shell.run",
      params: {
        message: [
          "{{platform === 'win32' ? 'rmdir /s /q env' : 'rm -rf env'}}"
        ]
      }
    },
    // Remove cloned app directory
    {
      method: "shell.run",
      params: {
        message: [
          "{{platform === 'win32' ? 'rmdir /s /q app' : 'rm -rf app'}}"
        ]
      }
    }
  ]
}