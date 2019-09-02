const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    webpack: (config, {dev}) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loaders: [
                'file-loader?outputPath=static/', 
            ],
            
        })

        return config;
    }
});
