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

// ScranAdvisor.prototype.findMostCommonCuisine = function(){
//     // make a list of how many of each cuisine 
//     let cuisineTypes = []; //e.g. [{cuisine : "Indian", count : 3}, {cuisine : "British", count : 1}]
//     this.restaurants.forEach(restaurant => {
//         restaurant.cuisines.forEach((cuisineType) => {
//             // if cuisine is already in the list of cuisineTypes, increment the count
//             // else create a new cuisine type and set counter to 1
//             if (!cuisineTypes.includes({cuisineType : }) ){
//                 cuisineTypes.
//             } else {
//                 cuisineTypes.push({cuisine : cuisineType, count : 1})
//             }
//         });
//     }); 

//     // return largest element
// }

ScranAdvisor.prototype.findAllByPartialName = function(restaurantName){
    return this.restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(restaurantName.toLowerCase());
    })
}

module.exports = ScranAdvisor;