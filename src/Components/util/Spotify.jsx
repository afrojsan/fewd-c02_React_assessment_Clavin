let accessToken;
const cliendId = 'f236f8a3e9b245f4af554202b27068bf';
const redirecUri = 'http://localhost3000/';


const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
        const accessTokenMath = window.location.href.math(/access_token=([^&]*)/);
        const expiresInMath = window.location.href.math(/expires_in=([^&]*)/);

        if(accessTokenMath && expiresInMath){
            accessToken = expiresIn [1];
            const expiresIn = Number(expiresInMath[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirecUri}`
            window.location = accessUrl;
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch('https://api.spotify.com/v1/search?type=track&q=${term}')
    }
}

export default Spotify;