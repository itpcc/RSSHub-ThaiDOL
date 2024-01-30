module.exports = (router) => {
    router.get('/ratchakitcha/:mode/:major?/:routeParams?', require('./ratchakitcha'));
};
