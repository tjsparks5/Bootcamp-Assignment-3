/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
   Listing.find({name: 'Library West'}, function(err, listing){
     if(err) throw err;
     console.log(listing);
   });
};

var removeCable = function() {
   Listing.findOneAndRemove({code: 'CABL'}, function(err, listing){
     if(err) throw err;
     console.log(listing);
   });
};

var updatePhelpsLab = function() {
   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd Gainesville, FL 32611'}, function(err, listing){
     if(err) throw err;
   });

   Listing.find({name: 'Phelps Laboratory'}, function(err, listing){
     if(err) throw err;
     console.log(listing);
   });
};

var retrieveAllListings = function() {
   Listing.find({}, function(err, listings){
     if(err) throw err;
     console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
