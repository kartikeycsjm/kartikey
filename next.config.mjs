export default {
    webpack: (config, { isServer }) => {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      });
      if (isServer) {
        return config;
      }
      return config;
    },
  };
  