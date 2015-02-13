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
        'cover' : {
            title : 'Developing Android Apps: Android Fundamentals',
            subtitle : 'Sign up for the Udacity course and join us for a seven week course covering developing Android apps!',
            url : '/images/cover/study_jams_02.2015.png',
            button : {
                text : 'Sign Up Today!',
                url : 'http://gdgkansascity.github.io/studyjam15/'
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
