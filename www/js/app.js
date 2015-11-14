// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

	/*function start(){
	var button = document.getElementById("btn");
	button.addEventListener("click", newUser, false);
	}*/
	
	
	function newUser(){
	
	Parse.initialize("Z42YldX5GqtKjfxMa3K9bFJQ8wJXA2uCAiOqQSGR" , "bw4cSLvPryxiKoE8zluILD11G1qu4s7ipxUiijs7");
	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	var email = document.getElementById("email").value;
	var user = new Parse.User();
		user.set("username", name);
		user.set("password", pass);
		user.set("email", email);
		  
		// other fields can be set just like with Parse.Object
		user.set("obciiagniecia", "3555-0000");
		  
		user.signUp(null, {
		  success: function(user) {
			// Hooray! Let them use the app now. 
			window.location.replace("homepage.html");
		  },
		  error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		  }
		});
	}
	
	function login(){
		Parse.initialize("Z42YldX5GqtKjfxMa3K9bFJQ8wJXA2uCAiOqQSGR" , "bw4cSLvPryxiKoE8zluILD11G1qu4s7ipxUiijs7");
		var name = document.getElementById("username").value;
		var pass = document.getElementById("pass").value;
		
		Parse.User.logIn(name, pass, {
			success: function(user) {
			  // Do stuff after successful login.
			  console.log(user);
			  window.alert("success! logged in as: " + user.getUsername());
			   window.location.replace("homepage.html");
			},
			error: function(user, error) {
				console.log(error);
			  // The login failed. Check error to see why.
			  window.alert("error!");
			}
		});	
	}
  // window.addEventListener("load", start, false);
