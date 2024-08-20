/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const rootPath = '/bts';
    const subPath = '/bts/:path*';
    const reverseProxyUrl =
      'https://pub-bts-bugfix-pub-0-redirec.t1d-publishing.aws.route71.net';

    const reverseProxyRootUrl = `${reverseProxyUrl}${rootPath}`;
    const reverseProxySubUrl = `${reverseProxyUrl}${subPath}`;

    const cookieRule = {
      type: 'cookie',
      key: 'bts-auth',
      // Match any 5+ character string as cookie value to let redirect continue. Auth gets checked on the BTS side.
      value: '(.{5,})',
    };
    const queryRule = {
      type: 'query',
      key: 'token',
      // Match any 5+ character string as token value to let redirect continue. Auth gets checked on the BTS side.
      value: '(.{5,})',
    };

    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        /** First check /bts for token in url param */
        {
          source: rootPath,
          has: [queryRule],
          destination: reverseProxyRootUrl,
        },
        /** Then check /bts for BTS cookie */
        {
          source: rootPath,
          has: [cookieRule],
          destination: reverseProxyRootUrl,
        },
        /** Then check /bts/:path* for token in url param */
        {
          source: subPath,
          has: [queryRule],
          destination: reverseProxySubUrl,
        },
        /** Then check /bts/:path* for BTS cookie */
        {
          source: subPath,
          has: [cookieRule],
          destination: reverseProxySubUrl,
        },
      ],
    };
  },
};

export default nextConfig;
