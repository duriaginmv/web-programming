function DateFunc(date) {
    let day =
        date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let month =
        date.getMonth() > 9
            ? date.getMonth() + 1
            : '0' + (date.getMonth() + 1);
    let year = date.getFullYear();
    let dateRes = date + '.' + month + '.' + year;
    return dateRes;
}

export function URL() {
    let date = new Date();
    const start = DateFunc(date);
    date.setDate(date.getDate() + 5);
    const end = DateFunc(date);

    let key = process.env.REACT_APP_NASA_API_KEY;
    if (!key) {
        key = 'DEMO_KEY';
    }

    let API_URL =
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=' +
        start +
        '&end_date=' +
        end +
        '&api_key=' +
        key;
    return API_URL;
}

export function AsteroidsArray(data) {
    let array = [];
    for (let Date in data.near_earth_objects) {
        for (let Name in data.near_earth_objects[Date]) {
            let asteroid_data = data.near_earth_objects[Date][Name];
            array.push({
                name: asteroid_data.name,
                date: asteroid_data.close_approach_data[0]
                    .close_approach_date,
                distance:
                    asteroid_data.close_approach_data[0].miss_distance.kilometers.toFixed(
                        2
                    ),
                size: (
                    (asteroid_data.estimated_diameter.meters
                        .estimated_diameter_min +
                        asteroid_data.estimated_diameter.meters
                            .estimated_diameter_max) /
                    2
                ).toFixed(2),
                danger: asteroid_data.is_potentially_hazardous_asteroid
                    ? 'опасен'
                    : 'не опасен',
            });
        }
    }
    return array;
}
