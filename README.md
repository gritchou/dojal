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

# Exercise 4 Options Page

Create an options page to customize giphy api call

## Requirements

- Customize number of results wanted
- Options must open in a separate tab
- Options must be stored using storage api
- Options must be persisted in options page
- Allow switch between Search and Random giphy api

## Useful Links

- Manifest Entry [options_ui](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/options_ui)
- [Chrome storage API](https://developer.chrome.com/apps/storage)
- [input HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
- [radio HTML Element](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/radio)

# Exercise 5 Browser Action Popup

Create a popup that displays Gifs and has a button to let user copy to clipboard

## Requirements

- Word to search will be stored in an input in the options page
- Runtime API should be used to discuss with the popup
- Number of results to display will be stored in the options page aswell
- One button per gif will let user copy url to clipboard


## Useful Links

- [Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Manifest Entry [browser_action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/browser_action)
- [button HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
- [Runtime sendMessage](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/sendMessage)
- [Runtime onMessage](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/onMessage)

# Exercise 6 Content Script

Replace all image in a website by gifs

## Requirements

- Free For All

## Useful Links

- None

## Credits

Icon made by [Freepik](http://www.freepik.com) from www.flaticon.com
