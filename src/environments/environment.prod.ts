import { emailConfig } from "src/config/prod/email.config";

export const environment = {
    production: true,
    emailDetails: emailConfig,
    ncApiUrl: 'https://new-creation-backend.herokuapp.com/nc-api',
    imageUrl: 'https://new-creation-backend.herokuapp.com/static/images'
};
