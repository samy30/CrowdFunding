import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyChWrq4Updr4t9HCK5lThiObCA8A5nVq4Y",
    authDomain: "crowdfunding-310cf.firebaseapp.com",
    databaseURL: "https://crowdfunding-310cf.firebaseio.com",
    projectId: "crowdfunding-310cf",
    storageBucket: "crowdfunding-310cf.appspot.com",
    messagingSenderId: "192074861370",
    appId: "1:192074861370:web:c2cca8606205f25b"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();