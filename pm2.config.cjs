module.exports = {
    apps: [
        {
            name: "venasclub",
            script: "./src/server.js",
            interpreter: "node",
        },
        {
            name: "venasclub-jili",
            script: "./src/index.js",
            interpreter: "node",
        },
    ],
};
