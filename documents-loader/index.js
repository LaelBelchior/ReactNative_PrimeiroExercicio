var axios = require('axios');

var fs = require('fs');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    var obj = JSON.parse(fs.readFileSync('/Users/yago.azedias/Documents/github/hospitaja/documents-loader/municipais.geojson', 'utf8'));

    for (let i = 0; i < obj.length; i++) {
        document = obj[i]

        let properties = Object.keys(document.properties).reduce((prev, current) =>
            ({ ...prev, [current.toLowerCase()]: document.properties[current]}), {})

        let body = {
            lat: document.geometry["coordinates"][0],
            long: document.geometry["coordinates"][1],
            ...properties
        }

        var config = {
            method: 'post',
            url: 'https://hospitalja.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/hospitalja/documents',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer private-pfvjb3ghc4vvpyzztbew56ax'
            },
            data: JSON.stringify(body)
        };

        axios(config)
            .then(async (response) => {
                console.log(`Success: ${JSON.stringify(response.data)}`);
                await sleep(500);
            })
            .catch(function (error) {
                console.error(`Error: ${error}`);
            });
    }
}

main()