import { emailConfig } from "src/config/prod/email.config";

export const environment = {
    production: true,
    baseUrl: 'https://www.newcreation.co.za',
    emailDetails: emailConfig,
    backendBaseUrl: 'https://new-creation-backend.herokuapp.com',
    ncApiUrl: 'https://new-creation-backend.herokuapp.com/nc-api',
    imageUrl: 'https://new-creation-backend.herokuapp.com/static/images'
};
