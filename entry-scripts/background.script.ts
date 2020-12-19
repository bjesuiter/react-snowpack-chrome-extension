import { showSimpleNotification } from '@chrome/notification-service';

// Code to run when extension gets installed
chrome.runtime.onInstalled.addListener(async function () {
	console.log('Extension installed successfully');
});

chrome.browserAction.onClicked.addListener(
	/**
	 * @param currentTab see https://developer.chrome.com/extensions/tabs#type-Tab
	 */
	async (currentTab) => {
		chrome.tabs.create({ url: `chrome-extension://${chrome.runtime.id}/options.html` });
		showSimpleNotification('Clicked!', 'Extension was clicked');
	}
);
