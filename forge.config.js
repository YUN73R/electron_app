module.exports = {
    packagerConfig: {},
    rebuildConfig: {},
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'yun73r',
                    name: 'https://github.com/YUN73R/electron_app.git'
                },
                prerelease: false,
                draft: true
            }
        }
    ],
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                certificateFile: './cert.pfx',
                certificatePassword: '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'
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
};
