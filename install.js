module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    // Step 1: Clone the SenseNova-U1 repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/shinshekai/SenseNova-U1.git app"
        ],
        on: [{
          event: "/already exists and is not an empty directory/",
          done: true
        }]
      }
    },
    // Step 2: Install Python dependencies using uv via requirements.txt
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        env: {
          HF_HUB_ENABLE_HF_TRANSFER: "1",
          PIP_PROGRESS_BAR: "on"
        },
        message: [
          "uv pip install -e .",
          "uv pip install -r ../requirements.txt"
        ]
      }
    },
    // Step 3: Install PyTorch with CUDA support via torch.js
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",
          venv: "env"
        }
      }
    },
    // Step 4: Download the model weights explicitly
    {
      method: "script.start",
      params: {
        uri: "download.js"
      }
    },
    // Step 5: Link the virtual environment for Pinokio to detect installation state
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}