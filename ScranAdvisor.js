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

ScranAdvisor.prototype.findByTown = function(town){
    return this.restaurants.filter((restaurant) => {
        return restaurant.location.town === town;
    })
}

ScranAdvisor.prototype.findMostCommonCuisine = function(){
    // Disclaimer: there is definitely a better way to do this. I had trouble with referencing the cuisine types as I wanted them so
    // I decided to split the pairs of cuisine and count into two separate lists which risks them not being updated together.
    // make lists of how many of each cuisine 
    let cuisineTypes = []; //e.g. [{cuisine : "Indian", count : 3}, {cuisine : "British", count : 1}] (ideally)
    let cuisineTypesCounter = [];
    // go through each restaurant
    this.restaurants.forEach(restaurant => {
        // go through each cuisine type for that restaurant
        restaurant.cuisines.forEach((cuisineType) => {
            // if cuisine is already in the list of cuisineTypes, increment the count
            // else create a new cuisine type and set counter to 1
            if (cuisineTypes.includes(cuisineType) ){
                let index = cuisineTypes.indexOf(cuisineType)
                cuisineTypesCounter[index] ++;
            } else {
                cuisineTypes.push(cuisineType);
                cuisineTypesCounter.push(1);
            }
        });
    }); 

    // return most popular cuisine type
    max = Math.max.apply(null, cuisineTypesCounter);
    maxIndex = cuisineTypesCounter.indexOf(max);
    return cuisineTypes[maxIndex];
}

ScranAdvisor.prototype.findAllByPartialName = function(restaurantName){
    return this.restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(restaurantName.toLowerCase());
    })
}

module.exports = ScranAdvisor;