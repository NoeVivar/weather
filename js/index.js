// // https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// // https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// Get Weather
// cheney
$.simpleWeather({
    location: 'cheney',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney i').addClass('icon-' + weather.code);
      
//       get condition code
      console.log(weather.code);
      if (weather.code>= 0 && weather.code <= 1) {
         $('body').addClass('tornado'); 
          }
        if ( weather.code == 2) {
         $('body').addClass('hurricane');   
      }
         if ( weather.code >= 3 && weather.code <= 4 ) {
         $('body').addClass('thunderstorms');   
      }
         if ( weather.code >= 5 && weather.code <= 10 ) {
         $('body').addClass('snowrain');   
      }
         if ( weather.code >= 11 && weather.code <= 12 ) {
         $('body').addClass('showers');   
      }
          if ( weather.code >= 13 && weather.code <= 16 ) {
         $('body').addClass('snow');   
      }
          if ( weather.code >= 17 && weather.code <= 18 ) {
         $('body').addClass('hail');   
      }
          if ( weather.code >= 19 && weather.code <= 22 ) {
         $('body').addClass('foggy');   
      }
          if ( weather.code >= 23 && weather.code <= 24 ) {
         $('body').addClass('windy');   
      }
          if ( weather.code == 25) {
         $('body').addClass('cold');   
      }
          if ( weather.code >= 26 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
         if ( weather.code >= 30 && weather.code <= 34 ) {
         $('body').addClass('sunny');   
      }
         if ( weather.code == 35) {
         $('body').addClass('rainhail');   
      }
      if ( weather.code == 36) {
         $('body').addClass('hot');   
      }
      if ( weather.code >= 37 && weather.code <= 39 ) {
         $('body').addClass('scatteredthunder');
      }
      if ( weather.code >= 40 && weather.code <= 47 ) {
         $('body').addClass('scatteredshowers');   
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
$.simpleWeather({
  location: 99004,
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);

    // Display Data : Day 1
    $('.forecastcheney figure:nth-child(1) .next-day').text(weather.forecast[0].day);
    $('.forecastcheney figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('.forecastcheney figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('.forecastcheney figure:nth-child(1) img').attr('src', weather.forecast[0].image);

    // Display Data : Day 2
    $('.forecastcheney figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('.forecastcheney figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('.forecastcheney figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('.forecastcheney figure:nth-child(2) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 3
    $('.forecastcheney figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('.forecastcheney figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('.forecastcheney figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('.forecastcheney figure:nth-child(3) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 4
    $('.forecastcheney figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('.forecastcheney figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('.forecastcheney figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('.forecastcheney figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('.forecastcheney figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('.forecastcheney figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('.forecastcheney figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('.forecastcheney figure:nth-child(5) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 6
    $('.forecastcheney figure:nth-child(6) .next-day').text(weather.forecast[5].day);
    $('.forecastcheney figure:nth-child(6) .low').text(weather.forecast[5].low);
    $('.forecastcheney figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('.forecastcheney figure:nth-child(6) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 7
    $('.forecastcheney figure:nth-child(7) .next-day').text(weather.forecast[6].day);
    $('.forecastcheney figure:nth-child(7) .low').text(weather.forecast[6].low);
    $('.forecastcheney figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('.forecastcheney figure:nth-child(7) img').attr('src', weather.forecast[6].image);

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});
// granger
$.simpleWeather({
    location: 'granger',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#granger .temp').text(weather.temp);
      $('#granger .city').text(weather.city);
      $('#granger i').addClass('icon-' + weather.code);
      
//       get condition code
      console.log(weather.code);
      if (weather.code>= 0 && weather.code <= 1) {
         $('body').addClass('tornado'); 
          }
        if ( weather.code == 2) {
         $('body').addClass('hurricane');   
      }
         if ( weather.code >= 3 && weather.code <= 4 ) {
         $('body').addClass('thunderstorms');   
      }
         if ( weather.code >= 5 && weather.code <= 10 ) {
         $('body').addClass('snowrain');   
      }
         if ( weather.code >= 11 && weather.code <= 12 ) {
         $('body').addClass('showers');   
      }
          if ( weather.code >= 13 && weather.code <= 16 ) {
         $('body').addClass('snow');   
      }
          if ( weather.code >= 17 && weather.code <= 18 ) {
         $('body').addClass('hail');   
      }
          if ( weather.code >= 19 && weather.code <= 22 ) {
         $('body').addClass('foggy');   
      }
          if ( weather.code >= 23 && weather.code <= 24 ) {
         $('body').addClass('windy');   
      }
          if ( weather.code == 25) {
         $('body').addClass('cold');   
      }
          if ( weather.code >= 26 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
         if ( weather.code >= 30 && weather.code <= 34 ) {
         $('body').addClass('sunny');   
      }
         if ( weather.code == 35) {
         $('body').addClass('rainhail');   
      }
      if ( weather.code == 36) {
         $('body').addClass('hot');   
      }
      if ( weather.code >= 37 && weather.code <= 39 ) {
         $('body').addClass('scatteredthunder');
      }
      if ( weather.code >= 40 && weather.code <= 47 ) {
         $('body').addClass('scatteredshowers');   
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
 
  
  });
$.simpleWeather({
  location: 98932,
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);
//       display future weather
//       Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high)
      
//       Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high)
      
//       Day3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high)
    
    //       Day3
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high)
    
      //       Day3
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high)
    
      //       Day3
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high)
    
      //       Day3
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high)

    // Display Data : Day 1
    $('.forecastgranger figure:nth-child(1) .next-day').text(weather.forecast[0].day);
    $('.forecastgranger figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('.forecastgranger figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('.forecastgranger figure:nth-child(1) img').attr('src', weather.forecast[0].image);

    // Display Data : Day 2
    $('.forecastgranger figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('.forecastgranger figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('.forecastgranger figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('.forecastgranger figure:nth-child(2) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 3
    $('.forecastgranger figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('.forecastgranger figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('.forecastgranger figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('.forecastgranger figure:nth-child(3) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 4
    $('.forecastgranger figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('.forecastgranger figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('.forecastgranger figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('.forecastgranger figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('.forecastgranger figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('.forecastgranger figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('.forecastgranger figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('.forecastgranger figure:nth-child(5) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 6
    $('.forecastgranger figure:nth-child(6) .next-day').text(weather.forecast[5].day);
    $('.forecastgranger figure:nth-child(6) .low').text(weather.forecast[5].low);
    $('.forecastgranger figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('.forecastgranger figure:nth-child(6) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 7
    $('.forecastgranger figure:nth-child(7) .next-day').text(weather.forecast[6].day);
    $('.forecastgranger figure:nth-child(7) .low').text(weather.forecast[6].low);
    $('.forecastgranger figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('.forecastgranger figure:nth-child(7) img').attr('src', weather.forecast[6].image);

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});
// get location
// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('#geo').show(); 

} else {
  
  $('#geo').hide();
  $('#geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('#geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Get Weather
var getWeather = function(location) {
  
    $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#geo .temp').text(weather.temp);
      $('#geo .city').text(weather.city);
      $('#geo img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
  $.simpleWeather({
  location: location,
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);
//       display future weather
//       Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high)
      
//       Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high)
      
//       Day3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high)
    
    //       Day4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high)
    
      //       Day5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high)
    
      //       Day6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high)
    
      //       Day7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high)

    // Display Data : Day 1
    $('.forecastregion figure:nth-child(1) .next-day').text(weather.forecast[0].day);
    $('.forecastregion figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('.forecastregion figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('.forecastregion figure:nth-child(1) img').attr('src', weather.forecast[0].image);

    // Display Data : Day 2
    $('.forecastregion figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('.forecastregion figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('.forecastregion figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('.forecastregion figure:nth-child(2) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 3
    $('.forecastregion figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('.forecastregion figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('.forecastregion figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('.forecastregion figure:nth-child(3) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 4
    $('.forecastregion figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('.forecastregion figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('.forecastregion figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('.forecastregion figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('.forecastregion figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('.forecastregion figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('.forecastregion figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('.forecastregion figure:nth-child(5) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 6
    $('.forecastregion figure:nth-child(6) .next-day').text(weather.forecast[5].day);
    $('.forecastregion figure:nth-child(6) .low').text(weather.forecast[5].low);
    $('.forecastregion figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('.forecastregion figure:nth-child(6) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 7
    $('.forecastregion figure:nth-child(7) .next-day').text(weather.forecast[6].day);
    $('.forecastregion figure:nth-child(7) .low').text(weather.forecast[6].low);
    $('.forecastregion figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('.forecastregion figure:nth-child(7) img').attr('src', weather.forecast[6].image);

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});
};




$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})