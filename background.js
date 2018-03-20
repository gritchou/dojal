const GIPHY_API = 'https://api.giphy.com';
const GIPHY_KEY = 'INSERT_YOUR_API_KEY_HERE';

const gifit = (info, tab) => {
    if (info.menuItemId === 'gifit') {
        const text = info.selectionText;

        // Do some cool stuff here (and ask cookies to Louis)!!!
    }
}

chrome.contextMenus.create({
    id: 'gifit',
    title: 'Transform "%s" to clipboard gif',
    contexts: ['selection'],
    onclick: gifit,
});
