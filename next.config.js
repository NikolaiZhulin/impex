const nextComposePlugins = require('next-compose-plugins');
const { withPlugins } = nextComposePlugins.extend(() => ({}));
const withImages = require('next-images');
const withSvgr = require('next-plugin-svgr');

const withSvgrConfig = {
  svgrOptions: {
    typescript: true
  }
}


const withImageConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    LANDING_URL: process.env.NEXT_PUBLIC_LANDING_URL,
    FRONT_URL: process.env.NEXT_PUBLIC_FRONT_URL,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    WALLET_CONNECTION_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECTION_PROJECT_ID,
    RAFFLE_GROUP_ID: process.env.NEXT_PUBLIC_RAFFLE_GROUP_ID,
    ALCHEMY_PROVIDER_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_PROVIDER_API_KEY
  },
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
}

const withI18n = {
  reactStrictMode: true,
  i18n:{
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    localeDetection: false,
  }
}

module.exports = withPlugins([
  [withImages, withImageConfig],
  [withSvgr, withSvgrConfig],
  withI18n
]);
