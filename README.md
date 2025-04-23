# TamperMonkey script to hide the Facebook news feed on mobile

## Why?

Scrolling Facebook's news feed can waste hours of time. Yet we often want to periodically check Facebook on our phones because we receive important event and group notifications.

This TamperMonkey script will hide the new feed when logging into Facebook on your mobile browser. You can still see notifications and check groups, and you can uninstall the Facebook app.

> Want to hide the feed on your computer, not your phone?  Use [News Feed Eradicator](https://chromewebstore.google.com/detail/news-feed-eradicator/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en&pli=1) instead.

## Installation

*Last tested on Edge browser on Android, 2025-04-23*

Open Edge browser on your phone.

Go to "Extensions" and install "Tampermonkey." It'll ask you to enable Developer mode which is required to install extensions.

Go to "Extensions" again, tap "Tampermonkey" to open the Tampermonkey menu.  Tap "Dashboard" to open Tampermonkey's UI.

Go to the "Utilities" tab and find "Import from URL."

Enter this URL and then tap "Install" and "Install" again to confirm:

    https://cspotcode.com/hide-facebook-feed-mobile/hide-facebook-feed-mobile.js

Open a new tab, go to facebook.com.

The new feed should instead be an empty grey region of the screen.
