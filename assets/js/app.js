// Initialize Firebase
var config = {
  databaseURL: "https://ada-firebase.firebaseio.com",
  projectId: "ada-firebase"
};
firebase.initializeApp(config);
var database = firebase.database();

Reveal.initialize({
	history: true		// Every slide will change the URL
});

var position = ''
var hash = ''

var positionNow = database.ref('slide');
positionNow.on('child_changed', function (snapshot) {
  position = snapshot.val().position
  console.log('ini position dari database',position);
  window.location.hash = position
})

$(window).on('hashchange', function(){
  hash = window.location.hash;
  database.ref('slide').child(1+ '/position').set(hash)
});
