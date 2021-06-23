import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCurM6SnEr-ZCAO9HN4mN14qv3PAVaZrCA",
    authDomain: "nuxtproject-75fb6.firebaseapp.com",
    projectId: "nuxtproject-75fb6",
    storageBucket: "nuxtproject-75fb6.appspot.com",
    messagingSenderId: "45005416956",
    appId: "1:45005416956:web:423e5e77b94aab9f732a79",
    measurementId: "G-9EPDPEJ44K"
    // apiKey: "ここにAPIキーが入ります",
    // authDomain: "nuxt-js-firebase-studies.firebaseapp.com",
    // databaseURL: "https://nuxt-js-firebase-studies.firebaseio.com",
    // projectId: "nuxt-js-firebase-studies",
    // storageBucket: "nuxt-js-firebase-studies.appspot.com",
    // messagingSenderId: "296913232266"
  })
}

export default firebase