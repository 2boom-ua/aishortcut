<div align="center">  
    <img src="https://github.com/2boom-ua/aishortcut/blob/main/icons/icon-128.png?raw=true" alt="" width="128" height="128">
</div>

# AI Shortcuts

A lightweight browser extension that provides quick access to frequently used websites and services from a compact popup menu.

![Version](https://img.shields.io/badge/version-2.4-green.svg)

## Features

* Compact popup interface
* Quick access to frequently used websites
* Website icons and names
* Automatic sorting by usage frequency
* Light and dark theme support
* Opens links in a new browser tab
* Local click statistics
* Configuration stored in a single JSON file
* No external services or background processes

## How it works

The popup loads the menu configuration from `settings.json`.

The extension currently uses items from the `four` section of the configuration. Each item contains:

* `link` — destination URL
* `name` — displayed name
* `icon` — path to the menu icon

When a link is opened, its usage counter is stored in `localStorage`. The menu is then sorted by the number of clicks, with the most frequently used items displayed first.

## Installation

### Chrome / Edge

1. Download or clone the repository.
2. Open the browser extensions page:

   * Chrome: `chrome://extensions/`
   * Edge: `edge://extensions/`
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the extension directory.

## Project structure

```text
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── settings.json
├── icons/
└── README.md
```

## Configuration

Website entries are stored in `settings.json`.

Example:

```json
{
  "link": "https://example.com/",
  "name": "Example",
  "icon": "/icons/example.svg"
}
```

The configuration file can contain multiple sections for different groups of shortcuts.

## Interface

The popup uses a compact 290px-wide layout with a simple list of shortcuts. Each item displays an icon, name, and URL. The link icon appears when hovering over an item.

The interface automatically follows the browser's light/dark color scheme.

## Permissions

The extension requires only the `tabs` permission.

No additional permissions are required for the popup itself.

## Author

© 2boom 2025–2026
