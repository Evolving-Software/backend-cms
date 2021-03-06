module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'hosting.evolvingsoftware.io'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'backend'),
        username: env('DATABASE_USERNAME', 'evolvingadmin'),
        password: env('DATABASE_PASSWORD', 'Spr!ng202!'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
