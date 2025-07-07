module.exports = {
    apps: [
        {
            name: "team-loom",
            script: "npm",
            args: "run dev",
            end: {
                NODE_ENV: "development",
            }
        }
    ]
}