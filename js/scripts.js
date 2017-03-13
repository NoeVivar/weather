// Get the weather
$.simpleWeather({
  location: 97982,
  unit: 'f',
  success:function(weather){
//   Weather
   console.log(weather); 
// Display    
    
 $('.city').text(weather.city);   
 $('.state').text(weather.region);
 $('.temp').text(weather.temp);
 $('.country').text(weather.country)
 $('.thumb img').attr('src', weather.image);
    
  },
  error: function(error){
  console.log('No Weather Found');
  }
  