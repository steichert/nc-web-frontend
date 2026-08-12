// TEMPORARY WORKAROUND: events are served from this list instead of the backend API.
// Remove this file and restore the ApiService.getEventsByDateRange() calls in
// events-page.component.ts and events-section.component.ts once the API is back.
export const HARDCODED_EVENTS = [
    {
        state: 'Active',
        title: 'Family Movie Night',
        eventDate: '2026-08-14T17:30:00',
        eventTime: '17:30',
        venue: 'NCFC Auditorium',
        coverImageUrl: 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1784792180/events/Family%20Movie%20Night-1784792180400.png',
        description: "Bring the whole family and join us for a fun-filled Movie Night! It's a great opportunity to relax, enjoy a great film, share some snacks, and spend quality time together with our church family. We'd love to see you there—everyone is welcome!<br><br>Entrance is free, but please register so we can plan accordingly and keep track of attendance.",
        callToActionTitle: 'Register',
        callToActionLink: 'https://docs.google.com/forms/d/e/1FAIpQLSclBonT1GDPMqElB3u0l7yWjZKwf2CvoCbqECePWv4E03T_Ow/viewform?usp=header',
        contentUrl: null
    }
];
