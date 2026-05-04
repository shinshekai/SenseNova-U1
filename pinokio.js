module.exports = {
  version: "6.0.0",
  title: "SenseNova-U1 Image",
  description: "High-quality image generation and editing powered by SenseNova-U1-8B-MoT. Supports text-to-image, image-to-image editing, and reasoning mode.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = info.running("start.js")
    let url = info.local("start.js")?.url

    if (installed) {
      if (running) {
        return [{
          icon: "fa-solid fa-rocket",
          text: "Open Web UI",
          href: url,
          default: true
        }, {
          icon: "fa-solid fa-rotate-right",
          text: "Update",
          href: "update.js"
        }, {
          icon: "fa-solid fa-trash-can",
          text: "Reset",
          href: "reset.js"
        }]
      } else {
        return [{
          icon: "fa-solid fa-play",
          text: "Start",
          href: "start.js",
          default: true
        }, {
          icon: "fa-solid fa-rotate-right",
          text: "Update",
          href: "update.js"
        }, {
          icon: "fa-solid fa-trash-can",
          text: "Reset",
          href: "reset.js"
        }]
      }
    } else {
      return [{
        icon: "fa-solid fa-download",
        text: "Install",
        href: "install.js",
        default: true
      }]
    }
  }
}