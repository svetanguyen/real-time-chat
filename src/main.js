import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBeedSY34ZbJg7ek60ct3B165IRNMJVS18",
  authDomain: "real-chat-2bee8.firebaseapp.com",
  projectId: "real-chat-2bee8",
  storageBucket: "real-chat-2bee8.appspot.com",
  messagingSenderId: "97353079560",
  appId: "1:97353079560:web:e5bf8fc7b2895c6b6e6abd"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots: true
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
