# SenseNova-U1 Image for Pinokio

A high-quality, professional-grade image generation and editing UI powered by **SenseNova-U1-8B-MoT**.

Run it locally with one click through Pinokio.

## 🚀 About

This application brings the power of **SenseNova-U1** to your desktop. SenseNova-U1 is an open-source unified multimodal model capable of producing stunning, high-resolution visuals from text prompts or existing images using its novel NEO-Unify architecture.

Built for **Pinokio**, this app offers a fully-featured **Gradio** interface that handles model downloading, environment setup, and inference automatically.

## ✨ Features

- **🎨 Text-to-Image Generation**: Create detailed, high-resolution images from simple text descriptions.
  - Supports resolutions up to 2048x2048
  - Multiple aspect ratios: 1:1, 16:9, 9:16, 3:2, 2:3, 4:3, 3:4, 2:1, 1:2, 3:1, 1:3

- **🖼️ Image-to-Image Editing**: Transform existing images using text prompts.
  - Change styles, backgrounds, or details
  - Smart resize handling for optimal quality

- **🧠 Think Mode (Reasoning)**: Enable chain-of-thought reasoning before generation for improved quality, especially for complex prompts and infographics.

- **🎛️ Advanced Controls**: Full control over generation parameters:
  - **Resolution**: Pre-configured aspect ratio buckets
  - **Quality**: Tune Inference Steps, CFG Scale, Timestep Shift
  - **CFG Norm**: Choose between none, global, channel, or cfg_zero_star
  - **Seed Control**: Randomize or lock seeds for reproducible results

- **💾 Auto-Saving**: All generated images are automatically saved to the `output/` directory with timestamps.

## 🛠️ System Requirements

- **OS**: Windows, Linux, or macOS
- **GPU**: NVIDIA GPU with **16GB+ VRAM** recommended (The model is ~8B parameters but requires significant VRAM for high-resolution generation)
- **Storage**: At least **40GB** of free disk space (for model weights and environment)
- **Python**: 3.10 or higher (managed automatically by Pinokio)

## 📦 How to Run

### Option 1: One-Click Install (Pinokio)

1. Download and install [Pinokio](https://pinokio.computer/).
2. Navigate to the **Discover** page or paste this repository URL into the Pinokio browser:
   ```
   https://github.com/your-username/SenseNova-U1-Image
   ```
3. Click **Install**.
4. Once installed, click **Start**.

### Option 2: Manual Update / Reset

- **Update**: If a new version is released, click "Update" in the dashboard to pull the latest code and reinstall dependencies.
- **Reset**: If things break, use the "Reset" button to reinstall the environment (this won't delete your `output/` images).

## 🔧 API Documentation

### JavaScript API

You can programmatically interact with the Gradio interface:

```javascript
// Example: Generate an image via the Gradio client
const client = await gradio.client("http://127.0.0.1:7860");
const result = await client.predict("/text_to_image", {
  prompt: "A serene mountain landscape at sunset",
  resolution_key: "16:9 (2720x1536)",
  seed: 42,
  randomize_seed: false,
  num_inference_steps: 50,
  cfg_scale: 4.0,
  cfg_norm: "none",
  timestep_shift: 3.0,
  think_mode: false
});
console.log(result.data);
```

### Python API

```python
from gradio_client import Client

client = Client("http://127.0.0.1:7860")
result = client.predict(
    prompt="A futuristic cityscape with neon lights",
    resolution_key="16:9 (2720x1536)",
    seed=42,
    randomize_seed=False,
    num_inference_steps=50,
    cfg_scale=4.0,
    cfg_norm="none",
    timestep_shift=3.0,
    think_mode=False,
    api_name="/text_to_image"
)
print(result)
```

### cURL API

```bash
curl -X POST http://127.0.0.1:7860/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "fn_index": 0,
    "data": [
      "A beautiful sunset over the ocean",
      "1:1 (2048x2048)",
      42,
      false,
      50,
      4.0,
      "none",
      3.0,
      false
    ]
  }'
```

## 📁 Project Structure

```
project-root/
├── app/                 # Application logic
│   └── app.py          # Gradio web interface
├── install.js          # Installation script
├── start.js            # Launch script
├── update.js           # Update script
├── reset.js            # Reset dependencies script
├── download.js         # Model weight download script
├── restart.js          # Auto app restart script
├── torch.js            # Torch and CUDA dependencies script
├── pinokio.js          # UI generator script
├── pinokio.json        # Metadata
└── README.md           # Documentation
```

## ⚖️ License

**Software License**: This application logic (UI and launcher scripts) is licensed under the MIT License.

**Model License**: The **SenseNova-U1** model weights are released by **SenseTime** under their respective license. Please verify your usage complies with the model's official license at Hugging Face.

## 🤝 Attribution

This project is built using:

- [SenseNova-U1](https://github.com/OpenSenseNova/SenseNova-U1) by SenseTime
- [Gradio](https://github.com/gradio-app/gradio)
- [Transformers](https://github.com/huggingface/transformers)
- [PyTorch](https://pytorch.org/)

---

Created with ❤️ by Shinshekai for the Pinokio Community
