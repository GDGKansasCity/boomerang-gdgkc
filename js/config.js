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
            title : 'Android Study Jam 2016',
            subtitle : "Starting March 12th, attend for free training and build your first native Android app!",
            url : '/images/cover/study_jams_02.2015.png',
            button : {
                text : 'Register',
                url : 'http://goo.gl/forms/NwqaxYL2LA'
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
                    url : '../images/sponsor/googlefiber.png'
                }
            },
            2 : {
                id : 3,
                name : 'Women Techmakers',
                url : 'https://www.womentechmakers.com/',
                image : {
                    url : '../images/sponsor/wtm.png'
                }
            },
            3 : {
                id : 4,
                name : 'Missouri Western State University',
                url : 'https://www.missouriwestern.edu/psychology/graduate',
                image : {
                    url : '../images/sponsor/mwsu.png'
                }
            },
            4 : {
                id : 5,
                name : 'The Nerdery',
                url : 'https://nerdery.com',
                image : {
                    url : '../images/sponsor/nerdery.png'
                }
            },
            5 : {
                id : 6,
                name : 'Swappa, LLC',
                url : 'https://swappa.com/',
                image : {
                    url : '../images/sponsor/swappa.png'
                }
            }
        }
    };
});
