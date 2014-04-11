import datetime
from libs import PyRSS2Gen
 
rss = PyRSS2Gen.RSS2(
    title = "GDG Kansas City",
    link = "http://gdgkansascity.appspot.com/",
    description = "GDG Kansas City Events",
 
    lastBuildDate = datetime.datetime.now(),
 
    items = [
       PyRSS2Gen.RSSItem(
         title = "April Meet Up",
         link = "https://plus.google.com/b/116015988631052616691/events/cdraj4h6465heqonjncop1nv580/",
         description = "Join us on April 23rd for this month's meet up",
         guid = PyRSS2Gen.Guid("guid2"),
         pubDate = datetime.datetime(2014, 4, 23, 23, 0)),
       PyRSS2Gen.RSSItem(
         title = "DART Flight School",
         link = "https://plus.google.com/b/116015988631052616691/events/clt05htsqfvmfrqvbmuvm8455bo/",
         description = "Tech Talk and Code Lab with a focus on understanding and using Dart",
         guid = PyRSS2Gen.Guid("guid1"),
         pubDate = datetime.datetime(2014, 2, 20, 23, 0)),
    ])
 
print 'Content-Type: text/xml'
print rss.to_xml()