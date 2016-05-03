/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */
var productPrices = getProductsByLocation(21.3069, -157.8583);


for (var i=0; i < productPrices.responseJSON.products.length; i++){

var display_name = productPrices.responseJSON.products[i].display_name;
var display_nameHeader = document.createElement('h1');
display_nameHeader.innerHTML = display_name;
document.body.appendChild(display_nameHeader);

console.log(productPrices.responseJSON.products[i]);

var priceObject = productPrices.responseJSON.products[i].price_details;

var RidePrice = priceCheck(productPrices.responseJSON.products[i].price_details , 25);
console.log(RidePrice);
var PriceRide = document.createElement('div');
PriceRide.innerHTML = RidePrice;
document.body.appendChild(PriceRide);

var RidePrice2 = priceCheck2(productPrices.responseJSON.products[i].price_details , 60);
console.log(RidePrice2);
var PriceRide2 = document.createElement('div');
PriceRide2.innerHTML = RidePrice2;
document.body.appendChild(PriceRide2);
}

function priceCheck (details , distance) {
  var base = details.base;
  var cost = details.cost_per_distance;
  console.log('Price for ' + distance + ' miles');
  return cost * distance;
}

function priceCheck2 (details , time) {
  var base = details.base;
  var cost = details.cost_per_minute;
  console.log('Price for ' + time + ' minutes');
  return cost * time;
}

function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}

/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: './products',
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}
