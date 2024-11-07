/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "imgur.com",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

export default nextConfig;
