export const GET_CONNECTED_MINISTRIES = [
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420293/static/connect/get-conn-lifegroups_w6z21t.jpg',
        label: "LIFE GROUPS",
        join_team: false,
        area_type: "ministry"
    }, 
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420278/static/connect/get-conn-nckidz_imicqf.jpg',
        label: "NC KIDZ",
        join_team: false,
        area_type: "ministry"
    },
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420242/static/connect/get-conn-teens_m5qs7r.jpg',
        label: "TEENS",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "Teenagers are in a great moment of their life where they begin to make their own decisions with regards to their faith, their beliefs and the direction that they’re going to be taking with their future. We love to partner alongside families in their navigation through this potentially treacherous avenue."
            },
            {
                type: "SIMPLE",
                value: "We place a big emphasis on community, and have weekly in-person gatherings from 18:30 to 21:00 every Friday. These gatherings include games, worship, preaching and life groups."
            },
            {
                type: "SIMPLE_HTML",
                value: "Check out our teens <a href=\"https://www.instagram.com/ncyouth_jhb/\" target=\"_blank\">Instagram Page</a> for any events that may be upcoming."
            }
        ],
        join_team: false,
        area_type: "ministry"
    }, 
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673418428/static/connect/connect-young-adults-circle_anlbld.jpg',
        label: "YOUNG ADULTS",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "We are constantly creating a space for the young adults to engage with and encounter their faith with God in a safer, more contemporary environment. Aimed at the 17-30 year old season of life, the challenges can often be unique, requiring more relatable advice. Multiple Life Groups meet together on a weekly basis, and we have young adult events every second week."
            },
            {
                type: "SIMPLE_HTML",
                value: "Go follow us on our <a href=\"https://www.instagram.com/ncfcyoungadults/\" target=\"_blank\">Instagram Page</a> to stay up to date with what we’re up to."
            }
        ],
        join_team: false,
        area_type: "ministry"
    }
];

export const GET_CONNECTED_SERVING = [
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420302/static/connect/get-conn-hospitality_ls1efh.jpg',
        label: "HOSPITALITY",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "At New Creation there are many ways to serve as hosts to those who are attending the service. This includes Ushering, Visitor's table, Information Desk, Barista Bar, and serving Tea & Scones."
            },
            {
                type: "SIMPLE_HTML",
                value: "If you are interested in serving or would like to find out more, please contact Teresa at <b>011 792 1151</b>, or <b>admin@newcreation.co.za</b>."
            }
        ],
        join_team: true,
        area_type: "serving"
    }, 
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420320/static/connect/get-conn-creative_w82u1u.jpg',
        label: "CREATIVE",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "At New Creation, we value our ability to serve through various creative outlets. These include the Worship Team, Sound Desk, A/V, Social Media, and Online Stream Production."
            },
            {
                type: "SIMPLE_HTML",
                value: "If you are interested in any of these areas or would like to find out more, please contact Teresa at <b>011 792 1151</b>, or <b>admin@newcreation.co.za</b>."
            }
        ],
        join_team: true,
        area_type: "serving"
    },
    {
        image: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673420286/static/connect/get-conn-missions_xx24em.jpg',
        label: "MISSIONS",
        join_team: false,
        area_type: "serving"
    }
];

export const AREAS_OF_MINISTRY = [
    {
        name: "CHILDRENS MINISTRY",
        subareas: [
            {
                name: "Babies Bible Class (Ages 0 - 3)",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Son Kidz (Ages 3 - 4)",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Glow Kidz (Ages 4 - 5)",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "NC Kidz Sunday (Ages 6 - 12)",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Friday Jam Sessions (Ages 6 - 13)",
                contact: "piet@newcreation.co.za"
            }
        ]
    },
    {
        name: "TEENS AND YOUNG ADULTS",
        subareas: [
            {
                name: "Teens (Grades 8 - 12)",
                contact: "Wessley"
            },
            {
                name: "Young Adults (Ages 18+)",
                contact: "Justin"
            }
        ]
    }
];

export const AREAS_OF_SERVICE = [
    {
        name: "HOST SERVICES",
        subareas: [
            {
                name: "Ushers & Greeters",
                contact: "Elise Duff"
            },
            {
                name: "Barista Bar",
                contact: "Matt Carter"
            },
            {
                name: "Tea, Coffee & Scones",
                contact: "Teresa"
            },
            {
                name: "Visitors Table",
                contact: "Teresa"
            },
            {
                name: "Information Desk",
                contact: "Teresa"
            }
        ]
    },
    {
        name: "WORSHIP",
        subareas: [
            {
                name: "Instrument",
                contact: "Lauren"
            },
            {
                name: "Vocals",
                contact: "Lauren"
            },
            {
                name: "Sound Desk",
                contact: "Lauren"
            }
        ]
    },
    {
        name: "PRODUCTION",
        subareas: [
            {
                name: "Online Stream Production",
                contact: "Phil"
            },
            {
                name: "Sound Desk",
                contact: "Piet"
            },
            {
                name: "A/V",
                contact: "Piet"
            },
            {
                name: "Social Media",
                contact: "Maliane"
            }
        ]
    }
];