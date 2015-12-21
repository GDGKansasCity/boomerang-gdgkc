boomerang.factory('Config', function () {
    return {
        //modify these
        'name'          : 'GDG Kansas City',
        'id'            : '116015988631052616691', // Google+ id
        'google_api'    : 'AIzaSyDeKGXPKWtQ8uyfyoCfW6f1ZL0NW0lGtS0',
        'meetup_api'    : '311d71d6e6b4c3a3b2b2b7c71145d7e',
        'pwa_id'        : '', // picasa web album id, must belong to Google+ id above
        'domain'        : 'gdgkc.org',// custom domain or [your app].appspot.com
        'youtube'       : 'GDGKansasCity', // YouTube handle
        'twitter'       : 'GDGKansasCity', // Twitter handle
        'meetup'        : 'GDG-Kansas-City', // MeetUp handle
        'facebook'      : 'GDGKansasCity', // Facebook handle
        'github'        : 'GDGKansasCity', // GitHub handle
        'cover' : {
            title : 'DevFest KC - February 20th!',
            subtitle : "Attend Mobile and Web sessions lead by the experts and have lots fun!",
            url : '/images/cover/devfest-2016.png',
            button : {
                text : 'More Info',
                url : 'https://devfest.gdgkc.org/'
            }
        },
        'sponsors' : {
            0 : {
                id : 1,
                name : 'Google Developers',
                url : 'https://developers.google.com/',
                image : {
                    url : '../images/sponsor/Google-Developers.png'
                }
            },
            1 : {
                id : 2,
                name : 'Google Fiber',
                url : 'https://fiber.google.com',
                image : {
                    url : '../images/sponsor/google-fiber.jpg'
                }
            },
            2 : {
                id : 3,
                name : 'Women Techmakers',
                url : 'https://www.womentechmakers.com/',
                image : {
                    url : '../images/sponsor/wtm.png'
                }
            }
        }
    };
});
