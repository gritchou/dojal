# Coding Dojo Browser Extensions

This repository holds the code of the coding dojo on [Browser Extensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions).

Trainer: Jean-François Grand

# Exercise 1 Hello World

Display "hello world" in a popup

## Requirements

- Have a cool icon (owl.png 128px)
- Display some cool text (“Where are my cookies Louis?”)
- Set homepage url
- Add a keyboard shortcut to open popup

## Useful Links

- [Browser Extensions on MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)
- [manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)
- Manifest Entry [browser_action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/browser_action)
- Manifest Entry [homepage_url](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/homepage_url)
- Manifest Entry [commands](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/commands)

# Exercise 2 Background Script and Context Menu

Search selected text on giphy

## Requirements

- Add a Context Menu entry
- Context Menu entry must be updated with selected text
- Open new Tab with giphy search

## Useful Links

- [Giphy!](https://giphy.com/)
- Manifest Entry [background](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/background)
- Manifest [permissions](https://developer.mozilla.org/fr/Add-ons/WebExtensions/manifest.json/permissions)
- Chrome [Tabs API](https://developer.chrome.com/extensions/tabs#manifest)
- Chrome [Context Menu API](https://developer.chrome.com/apps/contextMenus)

# Exercise 3 From Giphy API to clipboard

Transform selected text to clipboard gif

## Requirements

- Get an API key from giphy
- Get background page from chrome extension API
- Add a textarea or input to the page to interact with clipboard
- Take only first result returned by API
- Spam rocket chat channels with gifs
- Enjoy

## Useful Links

- [Giphy API](https://developers.giphy.com/)
- Manifest [permissions](https://developer.mozilla.org/fr/Add-ons/WebExtensions/manifest.json/permissions)
- [Send method from XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)
- [chrome.extension API](https://developer.chrome.com/extensions/extension)
- [Create an Element in Document](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- Interact with the [clipboard](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard)

## Credits

Icon made by [Freepik](http://www.freepik.com) from www.flaticon.com
