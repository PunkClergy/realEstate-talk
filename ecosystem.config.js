module.exports = {
  apps: [
    {
      name: 'SIT AI',
      script: './server.js',
      instances: 1,
      max_restarts: 10,
      env: {
        NODE_ENV: 'production',
        NODE_PORT: 5000,
        REACT_APP_ENV: 'test',
      },
      watch: false,
      merge_logs: true,
      exec_mode: 'cluster',
      max_memory_restart: '500M',
      instance_var: 'NODE_APP_INSTANCE',
    },
  ],
};
