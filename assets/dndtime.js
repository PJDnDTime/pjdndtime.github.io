// Load dynamic web content
function loadContent() {
  var dynamicContent = location.hash.substr( 1 );
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200 ) {
      document.getElementById( "DnDTimeAjaxObject" ).innerHTML = this.responseText;
      showhide();
    }
  };
  xhttp.open( "GET", dynamicContent + ".txt", true );
  xhttp.send();
  window.scrollTo( 0, 0 );
}

// Check for changed anchor navigation
window.addEventListener( "hashchange", loadContent );

// Navigation bar responsive scaling
function navFunction() {
  var x = document.getElementById( "topnavigationbar" );
  var y = document.getElementById( "dropdown" );
  if ( x.className === "topnav" ) {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Hide & show sign-ups based on date and time
function showhide() {
  var d = new Date();
  var dd = d.getDay();
  var signupON = document.getElementById( 'signupEnabled' );
  var signupOFF = document.getElementById( 'signupDisabled' );
  signupON.style.display = ( signupON.style.display == 'block' ) && ( ( dd == 4 ) || ( dd == 5 ) || ( dd == 6 ) ) ? 'none' : 'block';
  signupOFF.style.display = ( signupOFF.style.display == 'none' ) && ( ( dd == 4 ) || ( dd == 5 ) || ( dd == 6 ) ) ? 'block' : 'none';
}
