module.exports = {
  daemon: true,
  run: [
    {
      method: "input",
      params: {
        id: "hf_token",
        title: "HuggingFace Token (Optional)",
        description: "Enter your HuggingFace token to access gated models, or leave empty for public models.",
        type: "password"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        env: {
          HF_TOKEN: "{{input.hf_token || env.HF_TOKEN}}",
          HF_HUB_ENABLE_HF_TRANSFER: "1"
        },
        message: [
          "python app.py",
        ],
        on: [{
          event: "/(http:\\/\\/[0-9.:]+)/",
          done: true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}