module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || 'nosso_secret',
    expiresIn: '1d',
  },
};
