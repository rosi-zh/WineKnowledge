export const environment = {
    apiUrl: 'https://wine-knowledge-default-rtdb.europe-west1.firebasedatabase.app',
    authUrl: 'https://identitytoolkit.googleapis.com/v1',
    apiKey: 'AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do',

    endpoints: {
        login: 'accounts:signInWithPassword?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do',
        register: 'accounts:signUp?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do',
        profile: 'accounts:lookup?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do',
        update: 'accounts:update?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do'
    },
};
