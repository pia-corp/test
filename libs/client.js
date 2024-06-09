import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
	domainName: process.env.HEADLESSCMS_DOMAIN_NAME
});
