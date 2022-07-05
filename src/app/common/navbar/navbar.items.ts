export const navbarItems = {
    homePage: {
        items: [
            {
                name: 'ABOUT',
                routerLink: '/about',
                dropdownItems: [],
            },
            {
                name: 'SERVICES',
                routerLink: '/services',
                dropdownItems: [],
            },
            {
                name: 'VISITORS',
                routerLink: '/visitors',
                dropdownItems: [],
            },
            {
                name: 'GIVING',
                routerLink: '/giving',
                dropdownItems: [],
            },
            {
                name: 'MEDIA',
                routerLink: '/media',
                dropdownItems: [
                    {
                        name: 'SERMONS'
                    },
                    {
                        name: 'PODCASTS'
                    }
                ],
            },
            {
                name: 'EVENTS',
                routerLink: '/events',
                dropdownItems: [],
            },
            {
                name: 'CONNECT',
                routerLink: '/connect',
                dropdownItems: [],
            },
            {
                name: 'CONTACT',
                routerLink: null,
                dropdownItems: [],
            },
        ],
    },
};
