# yahoogroups-joiner

Chrome extension to aid with the signup to Yahoo Groups in preparation for [ArchiveTeam's mass download of Yahoo! Groups](https://www.archiveteam.org/index.php?title=Yahoo!_Groups).

Works as follows:
1. User starts extension
2. Extension gets unjoined group from tracker
3. Extension displays join page in browser
4. User completes reCaptcha and clicks *Sign up*
5. Extension submits group as joined to tracker
6. `goto 2.`

To use:
1. Request a Yahoo! account from ArchiveTeam, and signin to Yahoo with it. Join `#yahoosucks` for more info.
2. [Download extension zip](https://github.com/davidferguson/yahoogroups-joiner/archive/master.zip) file, and unzip.
3. Go to the URL `chrome://extensions` in Chrome.
4. Top right corner, enable *Developer Mode*.
5. Top left corner, choose *Load Unpacked Extension*
6. Choose folder you extracted from the zip.
7. In Chrome's extension icons list, click on the `Y` and then *Start*.
8. Start solving away!

Note: This is a very early draft version. There will probably be bugs - please report them so they can be fixed!
