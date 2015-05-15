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
            title : 'Google I/O 2015 [extended]',
            subtitle : "Didn't get tickets to Google I/O? Join GDG KC & Google Fiber!",
            url : '/images/cover/io15-extended-horz-custom.png',
            button : {
                text : 'RSVP Today!',
                url : 'https://plus.google.com/events/ctggi4tsq43pp1qlsbrrc44i2fk'
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
                name : 'Adknowledge',
                url : 'https://www.adknowledge.com/',
                image : {
                    url : '../images/sponsor/adknowledge.jpg'
                }
            },
            3 : {
                id : 4,
                name : 'Orielly',
                url : 'https://www.oreilly.com/',
                image : {
                    url : '../images/sponsor/oreilly.gif'
                }
            }
        }
    };
});
