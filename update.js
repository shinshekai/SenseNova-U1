module.exports = {
  run: [
    // Pull latest changes from the repository
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git pull"
        ]
      }
    },
    // Reinstall dependencies in case requirements changed
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -e .",
          "uv pip install gradio pillow numpy"
        ]
      }
    }
  ]
}