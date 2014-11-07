boomerang.factory('Config', function () {
    return {
        //modify these
        'name'          : 'GDG Kansas City',
        'id'            : '116015988631052616691', // Google+ id
        'google_api'    : 'AIzaSyDeKGXPKWtQ8uyfyoCfW6f1ZL0NW0lGtS0',
        'pwa_id'        : '', // picasa web album id, must belong to Google+ id above
        'domain'        : 'gdgkc.org',// custom domain or [your app].appspot.com
        'youtube'       : 'GDGKansasCity', // YouTube handle
        'twitter'       : 'GDGKansasCity', // Twitter handle
        'meetup'        : 'GDG-Kansas-City', // MeetUp handle
        'facebook'      : '', // Facebook handle
        'cover' : {
            title : 'DevFestKC 2014',
            subtitle : 'Join us Nov. 15th for a fun filled day spanning many different Google developer tools and platforms, plus cool prizes!!',
            url : '/images/devfestkc14.png',
            button : {
                text : 'Register Now!',
                url : 'http://www.eventbrite.com/e/devfestkc-2014-tickets-13599461355?ref=ebtnebregn'
            }
        },
        'sponsors' : {
            0 : {
                id : 1,
                name : 'Google Developers',
                url : 'https://developers.google.com/',
                image : {
                    url : '../images/Google-Developers.png'
                }
            },
            1 : {
                id : 2,
                name : 'Google Fiber',
                url : 'https://fiber.google.com',
                image : {
                    url : '../images/google-fiber.jpg'
                }
            },
            2 : {
                id : 3,
                name : 'Adknowledge',
                url : 'https://www.adknowledge.com/',
                image : {
                    url : '../images/adknowledge.jpg'
                }
            },
            3 : {
                id : 4,
                name : 'Orielly',
                url : 'https://www.oreilly.com/',
                image : {
                    url : '../images/oreilly.gif'
                }
            }
        }
    };
});
