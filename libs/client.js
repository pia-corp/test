import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
});

export const DOMAINNAME = process.env.HEADLESSCMS_DOMAIN_NAME || 'test';
export const ENDPOINT = process.env.MICROCMS_END_POINT || 'news';
