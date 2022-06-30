exports.Artist = (name, mbid, url,
                image_small, image_medium, image_large,
                image_extralarge,image_mega) => 
{
    var artist = {};

    artist.name = name;
    artist.mbid = mbid;
    artist.url = url;
    artist.image_small = image_small;
    artist.image_medium = image_medium;
    artist.image_large = image_large;
    artist.image_extralarge = image_extralarge;
    artist.image_mega = image_mega;

    return artist;
}
