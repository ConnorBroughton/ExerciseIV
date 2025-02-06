mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9yYnJvdWdodG9uIiwiYSI6ImNtNmllajk3dDA4MnYya29vcmRhZ3pmMmkifQ.rVteR2UEyh7d5e4JIP3zCA'; 

const map = new mapboxgl.Map({
    container: 'my-map', 
    style: 'mapbox://styles/connorbroughton/cm6sd3166004k01s1fm7066xc', // Map style (Toronto Catholic School Board)
    center: [-79.39865237301687, 43.662343395037766], // Toronto
    zoom: 12 
});

map.on('load', () => {
    // Add GeoJSON data source
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.39865237301687, 43.662343395037766]
                    }
                }
            ]
        }
    });

    // layer for the GeoJSON point
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    // data source from GeoJSON file (replace URL with your actual repository link)
    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://yourusername.github.io/ExerciseIV/buildings.geojson'
    });

    // Add layer for GeoJSON file
    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });

    map.addSource('census-tracts', {
        'type': 'vector',
        'url': 'mapbox://connorbroughton.4dejn6if'
    });
    map.addLayer({
        'id': 'toronto',
        'type': 'fill', 
        'source': 'census-tracts', 
        'paint': {
        'fill-color': '#888888', // Test alternative colours and style properties
        'fill-opacity': 0.4,
        'fill-outline-color': 'black'
        },
        'source-layer': 'map-9rdnln'
        },
        'uoft-buildings'
        );
})