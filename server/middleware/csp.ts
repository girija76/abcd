import helmet from 'helmet';

export const paymentPage = helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: [
			'*.prepleaf.com',
			"'unsafe-inline'",
			"'self'",
			'cdnjs.cloudflare.com',
		],
		scriptSrc: ["'sha256-JUXFWpTDJSZb2abMc5VGtNdUBRGGlrwYTfNhRCce8ro='"],
	},
});
