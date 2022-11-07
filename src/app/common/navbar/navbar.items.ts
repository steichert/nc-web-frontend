export const navbarItems = {
    homePage: {
        items: [
            {
                name: 'ABOUT',
                routerLink: '/about',
                dropdownItems: [],
                show: true
            },
            {
                name: 'SERVICES',
                routerLink: '/services',
                dropdownItems: [],
                show: true
            },
            {
                name: 'VISITORS',
                routerLink: '/visitors',
                dropdownItems: [],
                show: true
            },
            {
                name: 'GIVING',
                routerLink: '/giving',
                dropdownItems: [],
                show: true
            },
            {
                name: 'SERMONS',
                routerLink: '/sermons',
                dropdownItems: [],
                show: true
            },
            {
                name: 'EVENTS',
                routerLink: '/events',
                dropdownItems: [],
                show: true
            },
            {
                name: 'CONNECT',
                routerLink: '/connect',
                dropdownItems: [],
                show: true
            },
            {
                name: 'CONTACT',
                routerLink: '/contact',
                dropdownItems: [],
                show: true
            },
            {
                name: 'ADMIN',
                routerLink: '/admin',
                dropdownItems: [],
                show: `isLoggedInAdminUser()`
            }
        ],
    },
    ncKids: {
        items: [
            {
                name: 'KIDZ HOME',
                routerLink: '/nc-kidz',
                dropdownItems: [],
                show: true
            },
            {
                name: 'BABIES',
                routerLink: '/nc-kidz/babies',
                dropdownItems: [],
                show: true
            },
            {
                name: 'SONKIDZ',
                routerLink: '/nc-kidz/sonkidz',
                dropdownItems: [],
                show: true
            },
            {
                name: 'GLOWKIDZ',
                routerLink: '/nc-kidz/glowkidz',
                dropdownItems: [],
                show: true
            },
            {
                name: 'SUNDAY',
                routerLink: '/nc-kidz/sunday',
                dropdownItems: [],
                show: true
            },
            {
                name: 'JAM',
                routerLink: '/nc-kidz/jam',
                dropdownItems: [],
                show: true
            },
            {
                name: '412',
                routerLink: '/nc-kidz/412',
                dropdownItems: [],
                show: true
            },
        ]
    }
};
