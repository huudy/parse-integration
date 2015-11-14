Parse.initialize("Z42YldX5GqtKjfxMa3K9bFJQ8wJXA2uCAiOqQSGR" , "bw4cSLvPryxiKoE8zluILD11G1qu4s7ipxUiijs7");
			
			 window.fbAsyncInit = function() {
				Parse.FacebookUtils.init({
				  appId      : '1513051699012449',
				  cookie     : true,
				  xfbml      : true,
				  version    : 'v2.4'
				});
				
				var fbButton = document.getElementById("fb");
				fbButton.addEventListener("click", fblogin,false);
				
				function fblogin(){
				 
					Parse.FacebookUtils.logIn(null, {
					  success: function(user) {
						if (!user.existed()) {
						  alert("User signed up and logged in through Facebook!");
						  window.location.replace("homepage.html");
						} else {
						  alert("User logged in through Facebook!");
						  window.location.replace("homepage.html");
						}
					  },
					  error: function(user, error) {
						alert("User cancelled the Facebook login or did not fully authorize.");
					  }
					});
				
				}
				
				var fbOut = document.getElementById("fbOut");
				fbOut.addEventListener("click", logOut, false);
				 
				function logOut(){
					user.logOut(null,{
						success: function(){
							window.location.replace("index.html");
						}
						
					});
					  
				}

			  
			 };

			  (function(d, s, id){
				 var js, fjs = d.getElementsByTagName(s)[0];
				 if (d.getElementById(id)) {return;}
				 js = d.createElement(s); js.id = id;
				 js.src = "https://connect.facebook.net/en_US/all.js";
				 fjs.parentNode.insertBefore(js, fjs);
			   }(document, 'script', 'facebook-jssdk'));