class API {
    // method to make request to the API of food trucks
    async getData() {

        // definition of request type and credentials
        var miInit = { 
            method: 'GET',
            data: {
                "$limit" : 5000,
                "$$app_token" : "2h26kj1jp4c0bl3iv0636s07v10zauqnbsbc53jjrlgcydnasp"
            }
            };
        
        // request to the API and JSON format to process the information that is
        const data = await (await fetch('https://data.sfgov.org/resource/rqzj-sfat.json', miInit)).json();

        return {
            data
        }
    }
}