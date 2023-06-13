module.exports = {
    packagerConfig: {},
    rebuildConfig: {},
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'YUN73R',
                    name: 'electron_app'
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
