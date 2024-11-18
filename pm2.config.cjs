module.exports = {
    apps: [
        {
            name: "venasclub",
            script: "./src/server.js",
            env_production: {
                NODE_ENV: "production",
            },
            interpreter: "node",
        },
        // {
        //     name: "venasclub-jili",
        //     script: "./src/index.js",
        //     env_production: {
        //         NODE_ENV: "production",
        //     },
        //     interpreter: "node",
        // },
    ],
};
