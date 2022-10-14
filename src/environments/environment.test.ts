import { emailConfig } from "src/config/test/email.config";

export const environment = {
    production: false,
    emailDetails: emailConfig,
    apiUrl: '../api/database-request.php',
    ncApiUrl: './api/nc-api',
    imageUrl: './api/static/images'
};
