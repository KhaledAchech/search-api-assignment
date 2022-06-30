const axios = require('axios');
const artist_model = require('../models/artist');
const csv_handler = require('../utils/csv_handler');

// > I've decomposed the api url request and saved it in a .env file to secure my api key
// > and to have a more readable request string.
require('dotenv/config')
const last_fm_url = process.env.SEARCH_URL;
const my_key = process.env.API_KEY;
const data_format = process.env.FORMAT;

exports.getByName =  (req, res) =>{

    var searchTerm = req.params.name;

    // I've chosed to use axios simply because the implementation is easier and faster than using the Http module.
    axios.get(last_fm_url+searchTerm+my_key+data_format)
        .then(result => {

            var artists = result.data.results.artistmatches.artist;
            if (artists.length === 0)
            {
                artists = retrieveJsonData(searchTerm);
                if (artists.length === 0) // => basicaly saying if the json artists result array is also empty.
                {
                    res.status(404).send("No artists found with the given name not found.");
                }
                else
                {
                    res.send(artists);
                    saveArtists(artists,searchTerm);
                }
            }
            else
            {
                res.send(artists);
                saveArtists(artists,searchTerm);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

// > In case the last.fm api didn't provide any result for the given searchterm
// > let's try the json data file.
retrieveJsonData = (searchTerm)=>{

    const data = require('../data/artists.json');
    var foundArtists = new Array();

    data.artists.forEach(artist => {
        if (artist.name.includes(searchTerm))
        // > I've noticed that some artist don't have some attributs filled in so I've replaced the nulled values
        // > so I've replaced the nulled values by "N/A" for "not applicable".
            foundArtists.push(artist_model.Artist(artist.name, artist.mbid ? artist.mbid : "N/A",
                                     artist.url ? artist.url : "N/A",
                                     artist.image[0]["#text"] ? artist.image[0]["#text"] : "N/A",
                                     artist.image[1]["#text"] ? artist.image[1]["#text"] : "N/A", 
                                     artist.image[2]["#text"] ? artist.image[2]["#text"] : "N/A",
                                     artist.image[3]["#text"] ? artist.image[3]["#text"] : "N/A",
                                     artist.image[4]["#text"] ? artist.image[4]["#text"] : "N/A"));
    });

    return foundArtists;
}


// > 0 for the small images, 1 for the meduim ones, 2 for the large ones, 
// > 3 for the extra large ones and 4 for the mega ones.
saveArtists = (artists,searchTerm)=>{

    var data = new Array();

    artists.forEach(artist => {
        data.push(artist_model.Artist(artist.name, artist.mbid ? artist.mbid : "N/A",
                                     artist.url ? artist.url : "N/A",
                                     artist.image[0]["#text"] ? artist.image[0]["#text"] : "N/A",
                                     artist.image[1]["#text"] ? artist.image[1]["#text"] : "N/A", 
                                     artist.image[2]["#text"] ? artist.image[2]["#text"] : "N/A",
                                     artist.image[3]["#text"] ? artist.image[3]["#text"] : "N/A",
                                     artist.image[4]["#text"] ? artist.image[4]["#text"] : "N/A"));
    });
    csv_handler.writeData(data,searchTerm);
}
