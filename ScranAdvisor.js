const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findByName = function(restaurantName){
    return this.restaurants.find((restaurant) => {
        return restaurant.name === restaurantName;
    })
}

ScranAdvisor.prototype.findAllNames = function(){
    return this.restaurants.map((restaurant) => restaurant.name);
}

module.exports = ScranAdvisor;