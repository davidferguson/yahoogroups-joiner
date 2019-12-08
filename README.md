# Human-Assisted Archival of Yahoo Groups

### tl;dr - we (ArchiveTeam) need help to save as much of Yahoo Groups as possible. Link at bottom of post.

Yahoo is deleting the archives of all Yahoo Group’s on December 14 2019.

The files, photos, attachments, links, polls and calendars of all groups are only visible to group members. This content is outside the scope of a typical ArchiveTeam grab, and unless action is taken will be lost on December 14.

Additionally, to combat spam, many groups restricted what content non-members could see. Many of these groups also allowed anyone to join with no approval from an admin. Since all the content of these groups is restricted, it will not be preserved (again, unless action is taken).

Signing up to a group requires a reCaptcha to be completed. There isn't a way to automatically join groups (for understandable reasons - groups would have been overrun with spam… well, more than they were).

### We need volunteers to manually join as many groups as they can, by filling out reCaptchas.

We’ve written a Chrome extension that links to a tracker to coordinate efforts. If you’re up for completing a bunch of reCaptcha’s for us, you could really make a difference!

See the instructions below on how to help.

## How Can I Help / Use This?

### Prerequisites, or 'Before You Begin'

1. You'll need a computer with Google Chrome installed and sufficient privileges to install "unpacked" Chrome extensions.
2. Make a [new Yahoo account](https://login.yahoo.com/account/create) to be used for the archiving. Don't put in any personal information as you'll be giving control of this account to Archive Team. Please avoid using temporary email providers for the email - we lost access to over 55,000 groups when Yahoo detected this and banned our accounts. GMail, Outlook or Yahoo emails seem to work fine, or you can create a new Yahoo Mail when making the account (although this needs phone verification).
3. You now need to tell us the username and password for your account. Please submit it using [this google form](https://docs.google.com/forms/d/e/1FAIpQLSdh6wxiTbpmoMY-RIFXHPo3XV8gR8VqFS6tz4hhRcnpMR6esA/viewform?usp=sf_link)

### Setup and Installation

1. [Download the extension zip](https://github.com/davidferguson/yahoogroups-joiner/archive/master.zip) file, and unzip somewhere.
2. In Chrome, go to the URL `chrome://extensions`.
3. In the top-right corner, enable *Developer Mode* using the toggle.
4. In the top-left corner, choose *Load Unpacked Extension*.
5. Choose folder you extracted from the zip. (Don't select a file inside the folder, just the folder itself).

### Using the Extension

1. In Chrome's extension icons list in the top-right of the browser bar, click on the `Y`, ensure that the *Enabled* checkbox is ticked, then click *Start*.
2. A tab will be opened with a Yahoo Groups *search results* page. There should be a group highlighted with a red border. Click on that group (it'll open in a new tab).
3. Click the purple **+ Join Group** button in the centre-top right of the group page. (For foreign groups the name won't be *Join Group*, but it's the only purple button in that location).
4. You'll get a pop-up with some default info already entered. **Do not change any of the information in this pop-up.**
5. There will be a Google *I am not a robot* checkbox CAPTCHA in the pop-up. Complete it by clicking it and (most likely) identifying cars, buses, palm trees, or whatever else takes Google's fancy.
6. Click the purple **Send Request** button at the bottom of the pop-up.
7. The pop-up will close and the page will refresh to show the group homepage as seen by members. Congratulations - you've now joined the group and it'll most likely be saved. (Barring issues on our end, but that's our fault).
8. Almost immediately the new tab will close and you'll be taken to another *search results* page. Proceed to step 2.
9. When you've had enough, click the `Y` in the top-right of the browser bar and uncheck the *Enabled* checkbox. Close the browser window.

### Private Groups

Although best-effort has been made to ensure that the groups you'll be given to join have open membership (ie: anyone can join without the approval of the moderator of the group), sometimes one of these groups will slip through. You'll notice these groups by the *Comment to Owner* (*Please tell the group owner about yourself and why you would like to join the group (200 characters maximum)*). In these cases **please do not attempt to join the group**. Such groups are outside the scope of this project, and therefore will not be archived. (We have a [different process](https://www.archiveteam.org/index.php?title=Yahoo!_Groups#Adding_Private_Groups_to_the_Public_Archive) where administrators of private groups can request their group to be added to the public archive.) Move on to another group by clicking the `Y` extension icon and clicking *Start*.

### Adult Groups
Sometimes there will be no group shown in the *search results* page. This happens when the group is an *adult* (over-18) group (these groups don't appear in the search results page). In this situation you have two choices:

1. Don't join it: it is entirely your decision if you want to join adult groups. If you'd prefer not to, click the `Y` in the top-right of the browser bar and press *Start* again. You'll be given a new group to join.
2. Join it: if you're happy to join adult groups, then doing so is relatively simple. In the URL of the *search results* page you'll see `https://groups.yahoo.com/neo/search?query=<adult-group-name>` where `<adult-group-name>` is the name of the adult group. Change this URL to `https://groups.yahoo.com/neo/groups/<adult-group-name>/info`. Join the adult group as you would with a regular group. Note that you may need to consent to being 18 years or older in a pop-up that may appear.

## Bugs, etc...

Note: This is a very early draft version. There will probably be bugs - please report them so they can be fixed!
