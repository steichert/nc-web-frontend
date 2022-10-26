import { environment } from '../../environments/environment';

export const GET_CONNECTED_MINISTRIES = [
    {
        image: `${environment.imageUrl}/circular/get-conn-lifegroups.jpeg`,
        label: "LIFE GROUPS",
        join_team: false,
        area_type: "ministry"
    }, 
    {
        image: `${environment.imageUrl}/circular/get-conn-nckidz.jpeg`,
        label: "NC KIDZ",
        join_team: false,
        area_type: "ministry"
    },
    {
        image: `${environment.imageUrl}/circular/get-conn-teens.jpeg`,
        label: "TEENS",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "Teenagers are in a great moment of their life where they begin to make their own decisions with regards to their faith, their beliefs and the direction that they’re going to be taking with their future. We love to partner alongside families in their navigation through this potentially treacherous avenue."
            },
            {
                type: "SIMPLE",
                value: "We run a weekly podcast during the term, trying to engage with the teens in a relaxed environment, and we run frequent in-person events in an attempt to connect relationally and intentionally."
            },
            {
                type: "SIMPLE_HTML",
                value: "Check out our teens <a href=\"https://www.youtube.com/channel/UCPY77oqdadajaEWar70Fg2w\" target=\"_blank\">Green Onion Podcast Channel</a>, and keep an eye on our <a href=\"https://www.instagram.com/greenonionpodcast/\" target=\"_blank\">Instagram Page</a> for any events that may be upcoming."
            }
        ],
        join_team: false,
        area_type: "ministry"
    }, 
    {
        image: `${environment.imageUrl}/circular/get-conn-YA.jpeg`,
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
        image: `${environment.imageUrl}/circular/get-conn-hospitality.jpeg`,
        label: "HOSPITALITY",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "At New Creation there are many ways to serve as hosts to those who are attending the service. This includes Ushering, Visitor's table, Information Desk, and serving Scones & Coffee."
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
        image: `${environment.imageUrl}/circular/get-conn-creative.jpeg`,
        label: "CREATIVE",
        paragraphs: [
            {
                type: "SIMPLE",
                value: "At New Creation, we value our ability to serve through various creative outlets. These include the Worship Team, Sound Desk, A/V, and Social Media."
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
        image: `${environment.imageUrl}/circular/get-conn-missions.jpeg`,
        label: "MISSIONS",
        join_team: false,
        area_type: "serving"
    }
];

export const LIFE_GROUPS = [
    {
        host: "Nick & Lou Allen",
        location: "Greenside"
    },
    {
        host: "Daniel Cronjé & Cristine Hattingh (Young Adults)",
        location: "Robin Hills"
    },
    {
        host: "Anne Fourie",
        location: "Robin Hills"
    },
    {
        host: "Manfred & Kim Gallus",
        location: "Fontainebleau"
    },
    {
        host: "Lauren & Matt Grey",
        location: "Robin Hills"
    },
    {
        host: "Owen & Paula Hildebrand",
        location: "Robindale"
    },
    {
        host: "Rob & Marelise Hull",
        location: "Robin Hills"
    },
    {
        host: "Bev Hung (Afternoon, Ladies)",
        location: "The Kings School"
    },
    {
        host: "Dean & Pat Naidoo",
        location: "Blairgowrie"
    },
    {
        host: "Heather Potgieter",
        location: "Linden"
    },
    {
        host: "Dan & Lucy Robinson",
        location: "Randpark"
    },
    {
        host: "Roscoe & Sharon Stephen",
        location: "Windsor"
    },
    {
        host: "Steve & Dani Teichert (Young Adults)",
        location: "Robin Hills"
    },
    {
        host: "Ray & Anne Van Der Westhuizen",
        location: "Ferndale"
    }
];

export const AREAS_OF_MINISTRY = [
    {
        name: "CHILDRENS MINISTRY",
        subareas: [
            {
                name: "Babies Bible Class",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Son Kidz",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Glow Kidz",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "NC Kidz",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "412",
                contact: "piet@newcreation.co.za"
            },
            {
                name: "Jam Sessions",
                contact: "piet@newcreation.co.za"
            }
        ]
    },
    {
        name: "TEENS AND YOUNG ADULTS",
        subareas: [
            {
                name: "Teens",
                contact: "Gavin"
            },
            {
                name: "Young Adults",
                contact: "Gavin"
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
                name: "Coffee Bar",
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