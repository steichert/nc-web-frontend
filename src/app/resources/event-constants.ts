// TEMPORARY WORKAROUND: events are served from this list instead of the backend API.
// Remove this file and restore the ApiService.getEventsByDateRange() calls in
// events-page.component.ts and events-section.component.ts once the API is back.
export const HARDCODED_EVENTS = [
    {
        state: 'Active',
        title: 'Connect Sunday',
        eventDate: '2026-08-30T00:00:00',
        eventTime: null,
        venue: 'U2',
        coverImageUrl: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1779959854/events/Connect%20Portrait-1779959854582.png',
        description: "Join us for CONNECT on the 30th of August.<br><br>If you've been attending church for a while and are looking to take the next step, we invite you to begin the membership process. Becoming a member is more than just a formality—it's a way to grow in faith, build community, and actively participate in the mission and vision God has given us.",
        callToActionTitle: 'Sign Up',
        callToActionLink: 'https://newcreationfamilychurch.churchcenter.com/people/forms/838871',
        contentUrl: null
    },
    {
        state: 'Active',
        title: "Managing Our Finances: God's Way",
        eventDate: '2026-09-04T00:00:00',
        eventTime: null,
        venue: null,
        coverImageUrl: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1785326010/events/WhatsApp%20Image%202026-07-29%20at%2012-1785326010832.jpg',
        description: '4 &amp; 5 September<br><br>The Bible is packed with wise counsel about your financial life today.<br><br>In this study you will hear from five renowned experts on the subject of biblical financial management.',
        callToActionTitle: 'Register',
        callToActionLink: 'https://www.quicket.co.za/events/389152-finance-course/?ref=events-list#/',
        contentUrl: null
    }
];
