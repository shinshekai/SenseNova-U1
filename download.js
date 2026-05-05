module.exports = {
  run: [
    {
      method: "input",
      params: {
        id: "hf_token",
        title: "HuggingFace Token (Optional)",
        description: "SenseNova-U1-8B-MoT is public, but if you experience rate limits, provide your token here.",
        type: "password"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "app/env",
        env: {
          HF_TOKEN: "{{input.hf_token}}",
          HF_HUB_ENABLE_HF_TRANSFER: "1"
        },
        message: [
          "huggingface-cli download sensenova/SenseNova-U1-8B-MoT --local-dir models/SenseNova-U1-8B-MoT"
        ]
      }
    }
  ]
}