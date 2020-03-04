var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/defaultuser/Desktop/socket/privatefile.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kolachimart.firebaseio.com"
});

var token = [
  "fv1IUKblr3Y:APA91bFi8NhbsG4sPYw440jAb_Zckz8u3idIWzkNVfmbtC1ggtTt3_lmS4299hjUnIj1HSyzpu9UjVHfpYzGG3yF-_bWYFIHrjqHSbncOmUjyZidzkbESm_Jck_10bOqs5hpGYlC85fR"
];

var payload = {
  notification: {
    title: "This is a Notification",
    body: "This is the body of Notification."
  }
};

var options = {
  priority: "high",
  timetolive: 60 * 60 * 24
};

admin
  .messaging()
  .sendToDevice(token, payload, options)
  .then(function(response) {
    console.log("Successfully gone ", response);
  })
  .catch(function(error) {
    console.log("Error While Sending Message", error);
  });
