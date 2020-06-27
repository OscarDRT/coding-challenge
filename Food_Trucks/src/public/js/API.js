class API {
    async getData() {
        var miInit = { 
            method: 'GET',
            data: {
                "$limit" : 5000,
                "$$app_token" : "2h26kj1jp4c0bl3iv0636s07v10zauqnbsbc53jjrlgcydnasp"
            }
            };
        
        const data = await (await fetch('https://data.sfgov.org/resource/rqzj-sfat.json', miInit)).json();

        return {
            data
        }
    }
}