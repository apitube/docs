module.exports = {
    apps: [
        {
            name: 'dev:apitube:docs:serve',
            script: 'npm run dev:serve',
            instances: 1,
            autorestart: true,
            watch: false,
            out_file: '/dev/null'
        },
        {
            name: 'prod:apitube:docs:serve',
            script: 'npm run prod:serve',
            instances: 1,
            autorestart: true,
            watch: false,
            out_file: '/dev/null'
        },
    ]
};
