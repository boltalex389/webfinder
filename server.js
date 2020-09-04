var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-search-data.p.rapidapi.com/search/web?language=en&start=0&items=100&query=site%253Ahttps%253A%252F%252Famazon.com%20%2522mug%2522",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-search-data.p.rapidapi.com",
		"x-rapidapi-key": "bf85f692d7mshb2114bbb292a5d0p13d212jsna322b66fe66e"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
