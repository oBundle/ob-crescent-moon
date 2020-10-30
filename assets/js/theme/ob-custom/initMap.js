export default function () {

mapboxgl.accessToken = 'pk.eyJ1Ijoib2J1bmRsZW1nIiwiYSI6ImNrZnlqeWttYjIwbjgyenMzYjNtdzRpNDYifQ.wxXbzwNWaDrKMJl_Q-ZgBQ';

let map = new mapboxgl.Map({
  container: 'ob-map',
  style: 'mapbox://styles/mapbox/outdoors-v10',
  center: [-77.034084, 38.909671],
  zoom: 4
});

let stores = {
  "type": "FeatureCollection",
  "features": [
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.453068,49.882434 ]
   },
   "properties": {
   "id":5971,
   "name":"Play Store",
   "status":"publish",
   "permalink":"play-store",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-21 21:55:04",
   "address":"101-1950 Harvey Ave",
   "address2":"",
   "city":"Kelowna",
   "state":"BC",
   "zip":"V1Y 8J8",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.205841,42.54747 ]
   },
   "properties": {
   "id":5938,
   "name":"Moosejaw Rochester",
   "status":"publish",
   "permalink":"moosejaw-rochester",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:22:01",
   "address":"154 N Adams",
   "address2":"",
   "city":"Rochester Hills",
   "state":"MI",
   "zip":"48309",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.916329,42.390288 ]
   },
   "properties": {
   "id":5936,
   "name":"Moosejaw Grosse Point",
   "status":"publish",
   "permalink":"moosejaw-grosse-point",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:20:55",
   "address":"17037 Kercheval",
   "address2":"",
   "city":"Grosse Point",
   "state":"MI",
   "zip":"48230",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.669975,42.955272 ]
   },
   "properties": {
   "id":5934,
   "name":"Moosejaw Grand Rapids",
   "status":"publish",
   "permalink":"moosejaw-grand-rapids",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:19:35",
   "address":"410 Ionia Ave SW",
   "address2":"",
   "city":"Grand Rapids",
   "state":"MI",
   "zip":"49503",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.47673,42.733518 ]
   },
   "properties": {
   "id":5932,
   "name":"Moosejaw East Lansing",
   "status":"publish",
   "permalink":"moosejaw-east-lansing",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:18:19",
   "address":"555 E Grand River Ave",
   "address2":"",
   "city":"East Lansing",
   "state":"MI",
   "zip":"48823",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.048933,42.333834 ]
   },
   "properties": {
   "id":5930,
   "name":"Moosejaw Detroit",
   "status":"publish",
   "permalink":"moosejaw-detroit",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:17:00",
   "address":"1275 Woodward Ave",
   "address2":"",
   "city":"Detroit",
   "state":"MI",
   "zip":"48226",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.207693,42.541426 ]
   },
   "properties": {
   "id":5928,
   "name":"Moosejaw Birmingham",
   "status":"publish",
   "permalink":"moosejaw-birmingham",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:14:57",
   "address":"34288 Woodward Ave",
   "address2":"",
   "city":"Birmingham",
   "state":"MI",
   "zip":"48009",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.748279,42.278766 ]
   },
   "properties": {
   "id":5926,
   "name":"Moosejaw Ann Arbor",
   "status":"publish",
   "permalink":"moosejaw-ann-arbor",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:13:23",
   "address":"327 S Main Street",
   "address2":"",
   "city":"Ann Arbor",
   "state":"MI",
   "zip":"48104",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.656067,41.915842 ]
   },
   "properties": {
   "id":5924,
   "name":"Moosejaw Chicago",
   "status":"publish",
   "permalink":"moosejaw-chicago",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:06:02",
   "address":"1901 North Clybourn",
   "address2":"",
   "city":"Chicago",
   "state":"IL",
   "zip":"60614",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.256389,40.017899 ]
   },
   "properties": {
   "id":5922,
   "name":"Moosejaw Colorado",
   "status":"publish",
   "permalink":"moosejaw-colorado",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-19 20:04:24",
   "address":"1755 29th Street",
   "address2":"Unit 1092",
   "city":"Boulder",
   "state":"CO",
   "zip":"80301",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.570323,42.941178 ]
   },
   "properties": {
   "id":5902,
   "name":"Bill & Paul's Sporthaus",
   "status":"publish",
   "permalink":"bill-pauls-sporthaus",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:54:23",
   "address":"1200 East Paris #5",
   "address2":"",
   "city":"Grand Rapids",
   "state":"MI",
   "zip":"49546",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.054554,39.630427 ]
   },
   "properties": {
   "id":5900,
   "name":"REI Dillon",
   "status":"publish",
   "permalink":"rei-dillon",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:28:02",
   "address":"306 Dillon Ridge Rd",
   "address2":"",
   "city":"Dillon",
   "state":"CO",
   "zip":"80435",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.615038,43.110792 ]
   },
   "properties": {
   "id":5898,
   "name":"REI Rochester",
   "status":"publish",
   "permalink":"rei-rochester",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:26:46",
   "address":"450 E Henrietta Rd",
   "address2":"",
   "city":"Rochester",
   "state":"NY",
   "zip":"14620",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -147.703106,64.849659 ]
   },
   "properties": {
   "id":5896,
   "name":"REI Fairbanks",
   "status":"publish",
   "permalink":"rei-fairbanks",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:22:41",
   "address":"19 College Rd",
   "address2":"",
   "city":"Fairbanks",
   "state":"AK",
   "zip":"99701",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.065202,45.69565 ]
   },
   "properties": {
   "id":5894,
   "name":"REI Bozeman",
   "status":"publish",
   "permalink":"rei-bozeman",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:20:44",
   "address":"2220 Tschache St",
   "address2":"",
   "city":"Bozeman",
   "state":"MT",
   "zip":"59718",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.758005,42.247963 ]
   },
   "properties": {
   "id":5892,
   "name":"REI Ann Arbor",
   "status":"publish",
   "permalink":"rei-ann-arbor",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:19:02",
   "address":"970 W Eisenhower Pkwy",
   "address2":"",
   "city":"Ann Arbor",
   "state":"MI",
   "zip":"48103",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.64844,41.908092 ]
   },
   "properties": {
   "id":5890,
   "name":"REI Lincoln Park",
   "status":"publish",
   "permalink":"rei-lincoln-park",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:17:13",
   "address":"1466 N Halsted St",
   "address2":"",
   "city":"Chicago",
   "state":"IL",
   "zip":"60642",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.991026,39.963295 ]
   },
   "properties": {
   "id":5888,
   "name":"REI Westminster",
   "status":"publish",
   "permalink":"rei-westminster",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:15:41",
   "address":"14696 Delaware St",
   "address2":"",
   "city":"Westminster",
   "state":"CO",
   "zip":"80023",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.048159,47.541417 ]
   },
   "properties": {
   "id":5886,
   "name":"REI Issaquah",
   "status":"publish",
   "permalink":"rei-issaquah",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:13:28",
   "address":"735 Northwest Gilman Blvd.",
   "address2":"",
   "city":"Issaquah",
   "state":"WA",
   "zip":"98027",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.948599,35.683769 ]
   },
   "properties": {
   "id":5884,
   "name":"REI Santa Fe",
   "status":"publish",
   "permalink":"rei-santa-fe",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:11:56",
   "address":"500 Market St",
   "address2":"",
   "city":"Santa Fe",
   "state":"NM",
   "zip":"87501",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.572601,45.434698 ]
   },
   "properties": {
   "id":5882,
   "name":"REI Clackamas",
   "status":"publish",
   "permalink":"rei-clackamas",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:10:48",
   "address":"12160 SE 82nd Ave",
   "address2":"",
   "city":"Portland",
   "state":"OR",
   "zip":"97086",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.898173,40.564411 ]
   },
   "properties": {
   "id":5880,
   "name":"REI Sandy",
   "status":"publish",
   "permalink":"rei-sandy",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:09:25",
   "address":"230 W 10600 S",
   "address2":"",
   "city":"Sandy",
   "state":"UT",
   "zip":"84070",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.799774,38.933807 ]
   },
   "properties": {
   "id":5878,
   "name":"REI Colorado Springs",
   "status":"publish",
   "permalink":"rei-colorado-springs",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:08:11",
   "address":"1376 E Woodmen Rd",
   "address2":"",
   "city":"Colorado Springs",
   "state":"CO",
   "zip":"80920",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.078483,40.53169 ]
   },
   "properties": {
   "id":5876,
   "name":"REI Fort Collins",
   "status":"publish",
   "permalink":"rei-fort-collins",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:06:57",
   "address":"4025 S College Ave",
   "address2":"",
   "city":"Fort Collins",
   "state":"CO",
   "zip":"80525",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.512672,43.056624 ]
   },
   "properties": {
   "id":5874,
   "name":"REI Madison",
   "status":"publish",
   "permalink":"rei-madison",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:05:36",
   "address":"7483 W Towne Way",
   "address2":"",
   "city":"Madison",
   "state":"WI",
   "zip":"53719",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.285616,43.611792 ]
   },
   "properties": {
   "id":5872,
   "name":"REI Boise",
   "status":"publish",
   "permalink":"rei-boise",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:04:02",
   "address":"8300 W Emerald St",
   "address2":"",
   "city":"Boise",
   "state":"ID",
   "zip":"83704",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.182954,45.015986 ]
   },
   "properties": {
   "id":5870,
   "name":"REI Roseville",
   "status":"publish",
   "permalink":"rei-roseville",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:02:43",
   "address":"1955 County Rd B2 W",
   "address2":"",
   "city":"Roseville",
   "state":"MN",
   "zip":"55113",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.27328,47.830186 ]
   },
   "properties": {
   "id":5868,
   "name":"REI Alderwood",
   "status":"publish",
   "permalink":"rei-alderwood",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 22:01:16",
   "address":"3000 184th St SW",
   "address2":"",
   "city":"Lynwood",
   "state":"WA",
   "zip":"98037",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.185107,47.613509 ]
   },
   "properties": {
   "id":5866,
   "name":"REI Bellevue",
   "status":"publish",
   "permalink":"rei-bellevue",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 21:56:55",
   "address":"410 116th Ave NE",
   "address2":"",
   "city":"Bellevue",
   "state":"WA",
   "zip":"98004",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.794094,43.750504 ]
   },
   "properties": {
   "id":5864,
   "name":"Pedals & Petals",
   "status":"publish",
   "permalink":"pedals-petals",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 21:50:33",
   "address":"176 State Route 28",
   "address2":"",
   "city":"Inlet",
   "state":"NY",
   "zip":"13360",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.170493,45.798525 ]
   },
   "properties": {
   "id":5862,
   "name":"Northland Clothing Company",
   "status":"publish",
   "permalink":"northland-clothing-company",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 21:47:58",
   "address":"6991 W School St",
   "address2":"",
   "city":"Three Lakes",
   "state":"WI",
   "zip":"54562",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.714975,44.54745 ]
   },
   "properties": {
   "id":5860,
   "name":"Mathieu's Cycle & Fitness",
   "status":"publish",
   "permalink":"mathieus-cycle-fitness",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-11-15 21:45:18",
   "address":"20 Main Street",
   "address2":"",
   "city":"Oakland",
   "state":"ME",
   "zip":"04963",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.905109,43.118186 ]
   },
   "properties": {
   "id":5505,
   "name":"Yellow Wood Gear",
   "status":"publish",
   "permalink":"yellow-wood-gear",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:08",
   "address":"401 East Silver Spring Dr.",
   "address2":"Suite #100",
   "city":"Whitefish Bay",
   "state":"",
   "zip":"53217",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.240367,42.264583 ]
   },
   "properties": {
   "id":5504,
   "name":"Windham Mountain Resort",
   "status":"publish",
   "permalink":"windham-mountain-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:07",
   "address":"Route 296 & Main Street",
   "address2":"",
   "city":"Windham",
   "state":"",
   "zip":"12496",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"518-734-4700",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ 148.62043,-36.415122 ]
   },
   "properties": {
   "id":5503,
   "name":"Wilderness Sports",
   "status":"publish",
   "permalink":"wilderness-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:06",
   "address":"Shop 4 Nuggets Crossing\"",
   "address2":"",
   "city":"\"Jindabyn NSW\"",
   "state":"",
   "zip":"2627",
   "country":"",
   "country_iso":"AU",
   "hours":"",
   "phone":"612 6456 2966",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.892526,40.588921 ]
   },
   "properties": {
   "id":5502,
   "name":"Wasatch Running Center",
   "status":"publish",
   "permalink":"wasatch-running-center",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:04",
   "address":"8946 South State Street",
   "address2":"",
   "city":"Sandy",
   "state":"",
   "zip":"84070",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(801) 566-8786",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.243601,45.914622 ]
   },
   "properties": {
   "id":5501,
   "name":"Walk About Paddle",
   "status":"publish",
   "permalink":"walk-about-paddle",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:03",
   "address":"622 East Wall Street",
   "address2":"",
   "city":"Eagle River",
   "state":"",
   "zip":"54521",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(715) 479-6631",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.81844,39.188938 ]
   },
   "properties": {
   "id":5499,
   "name":"Ute Mountaineer",
   "status":"publish",
   "permalink":"ute-mountaineer",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:15:01",
   "address":"210 South Galena Street",
   "address2":"",
   "city":"Aspen",
   "state":"",
   "zip":"81611",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 925-2849",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.492937,44.021946 ]
   },
   "properties": {
   "id":5498,
   "name":"Tyrol Ski & Sports",
   "status":"publish",
   "permalink":"tyrol-ski-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:59",
   "address":"1923 2nd Street SW",
   "address2":"",
   "city":"Rochester",
   "state":"",
   "zip":"55902",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(507) 288-1683",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.855311,40.52934 ]
   },
   "properties": {
   "id":5497,
   "name":"Thin Air cycles",
   "status":"publish",
   "permalink":"thin-air-cycles",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:58",
   "address":"1223 East Draper Parkway",
   "address2":"",
   "city":"Draper",
   "state":"",
   "zip":"84020",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(801) 553-2453",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.106013,42.790648 ]
   },
   "properties": {
   "id":5494,
   "name":"The Outpost",
   "status":"publish",
   "permalink":"the-outpost",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:56",
   "address":"25 East 8th street",
   "address2":"",
   "city":"Holland",
   "state":"",
   "zip":"49423",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(616) 396-5556",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.988372,45.430165 ]
   },
   "properties": {
   "id":5493,
   "name":"The Outfitter",
   "status":"publish",
   "permalink":"the-outfitter",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:54",
   "address":"153 East Main Street",
   "address2":"",
   "city":"Harbor Springs",
   "state":"",
   "zip":"49740",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 526-2621",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.094214,45.030552 ]
   },
   "properties": {
   "id":5492,
   "name":"The House",
   "status":"publish",
   "permalink":"the-house",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:53",
   "address":"200 South Owasso Blvd East",
   "address2":"",
   "city":"St Paul",
   "state":"",
   "zip":"55126",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(800) 409-7669",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -135.055506,60.71887 ]
   },
   "properties": {
   "id":5489,
   "name":"Taku Sports",
   "status":"publish",
   "permalink":"taku-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:50",
   "address":"309 Main St",
   "address2":"",
   "city":"Whitehorse",
   "state":"",
   "zip":"Y1A 2B3",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.633467,44.179102 ]
   },
   "properties": {
   "id":5488,
   "name":"SurfSup Eco Shop",
   "status":"publish",
   "permalink":"surfsup-eco-shop",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:48",
   "address":"889 Queen St.",
   "address2":"",
   "city":"Kincardine",
   "state":"",
   "zip":"N2Z 2Y2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.000424,37.269674 ]
   },
   "properties": {
   "id":5486,
   "name":"Summit Ski Sports",
   "status":"publish",
   "permalink":"summit-ski-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:46",
   "address":"172 East Pagosa Street",
   "address2":"",
   "city":"Pagosa Springs",
   "state":"",
   "zip":"81147",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 264-2456",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.332986,39.305381 ]
   },
   "properties": {
   "id":5484,
   "name":"Sugar Bowl Ski & Sports",
   "status":"publish",
   "permalink":"sugar-bowl-ski-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:43",
   "address":"629 Sugar Bowl Rd",
   "address2":"",
   "city":"Norden",
   "state":"",
   "zip":"95724",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(530) 426-6766",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.357646,51.092964 ]
   },
   "properties": {
   "id":5482,
   "name":"Strides",
   "status":"publish",
   "permalink":"strides",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:41",
   "address":"108-1240 Railway Ave",
   "address2":"",
   "city":"Canmore",
   "state":"",
   "zip":"T1W 1P4",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.758743,53.90918 ]
   },
   "properties": {
   "id":5481,
   "name":"Stride & Glide Sports",
   "status":"publish",
   "permalink":"stride-glide-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:39",
   "address":"1671 15th Ave",
   "address2":"",
   "city":"Prince George",
   "state":"",
   "zip":"V2L 3X2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.332351,47.750485 ]
   },
   "properties": {
   "id":5480,
   "name":"Stone Harbor Wilderness",
   "status":"publish",
   "permalink":"stone-harbor-wilderness",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:38",
   "address":"20 East 1st Street",
   "address2":"",
   "city":"Grand Marais",
   "state":"",
   "zip":"55064",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(218) 387-3136",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.80415,40.469955 ]
   },
   "properties": {
   "id":5479,
   "name":"Steamboat Ski Touring Center",
   "status":"publish",
   "permalink":"steamboat-ski-touring-center",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:37",
   "address":"1230 Steamboat Blvd",
   "address2":"",
   "city":"Steamboat Springs",
   "state":"",
   "zip":"80477",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 879-8180",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.80641,40.45734 ]
   },
   "properties": {
   "id":5478,
   "name":"Steamboat Ski Resort",
   "status":"publish",
   "permalink":"steamboat-ski-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:36",
   "address":"Mount Werner Circle",
   "address2":"",
   "city":"Steamboat Springs",
   "state":"",
   "zip":"80487",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(877) 237-2628",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.965083,43.415297 ]
   },
   "properties": {
   "id":5477,
   "name":"Stable of Saginaw",
   "status":"publish",
   "permalink":"stable-of-saginaw",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:35",
   "address":"300 South Hamilton",
   "address2":"",
   "city":"Saginaw",
   "state":"",
   "zip":"48602",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(989) 799-0601",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.208927,45.555541 ]
   },
   "properties": {
   "id":5476,
   "name":"St Cloud Scheels",
   "status":"publish",
   "permalink":"st-cloud-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:33",
   "address":"Crossroads Center / 40 North Waite Avenue",
   "address2":"",
   "city":"Waite Park",
   "state":"",
   "zip":"56387",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(320) 252-9494",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.436149,49.607736 ]
   },
   "properties": {
   "id":5475,
   "name":"Spry",
   "status":"publish",
   "permalink":"spry",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:32",
   "address":"13101 - 20th Avenue",
   "address2":"",
   "city":"Blairmore",
   "state":"",
   "zip":"T0K 0E0",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"(403) 753-5024",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.328882,48.234643 ]
   },
   "properties": {
   "id":5474,
   "name":"Sportsman & Ski Haus",
   "status":"publish",
   "permalink":"sportsman-ski-haus",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:30",
   "address":"145 Hutton Ranch Road",
   "address2":"",
   "city":"Kalispell",
   "state":"",
   "zip":"59901",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 755-6484",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.398321,46.543798 ]
   },
   "properties": {
   "id":5473,
   "name":"Sports Rack",
   "status":"publish",
   "permalink":"sports-rack",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:29",
   "address":"315 West Washington St",
   "address2":"",
   "city":"Marquette",
   "state":"",
   "zip":"49855",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(906) 225-1766",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.962022,39.697406 ]
   },
   "properties": {
   "id":5472,
   "name":"Sports Plus",
   "status":"publish",
   "permalink":"sports-plus",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:28",
   "address":"1055 South Gaylord",
   "address2":"",
   "city":"Denver",
   "state":"",
   "zip":"80209",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 777-6613",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.15248,49.221203 ]
   },
   "properties": {
   "id":5470,
   "name":"Spin Sports & Plein Air",
   "status":"publish",
   "permalink":"spin-sports-plein-air-2",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:26",
   "address":"29 Place La Salle",
   "address2":"",
   "city":"Baie_Comeau",
   "state":"",
   "zip":"G4Z 1J8",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.152596,49.70266 ]
   },
   "properties": {
   "id":5468,
   "name":"Sound Runner",
   "status":"publish",
   "permalink":"sound-runner",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:23",
   "address":"1319 Pemberton Avenue",
   "address2":"",
   "city":"Squamish",
   "state":"",
   "zip":"V8B 0A3",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.088843,46.799809 ]
   },
   "properties": {
   "id":5467,
   "name":"Ski Hut",
   "status":"publish",
   "permalink":"ski-hut",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:22",
   "address":"1032 East 4th Street",
   "address2":"",
   "city":"Duluth",
   "state":"",
   "zip":"55805",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.825153,40.465557 ]
   },
   "properties": {
   "id":5466,
   "name":"Ski Haus",
   "status":"publish",
   "permalink":"ski-haus",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:21",
   "address":"1457 Pine Grove Rd",
   "address2":"",
   "city":"Steamboat Springs",
   "state":"",
   "zip":"80477",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 879-0385",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.753779,43.513865 ]
   },
   "properties": {
   "id":5465,
   "name":"Sioux Falls Scheels",
   "status":"publish",
   "permalink":"sioux-falls-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:19",
   "address":"2101 West 41st Street",
   "address2":"",
   "city":"Sioux Falls",
   "state":"",
   "zip":"57105",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(605) 334-7767",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.003621,40.411708 ]
   },
   "properties": {
   "id":5464,
   "name":"Scheels Johnstown",
   "status":"publish",
   "permalink":"scheels-johnstown",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:18",
   "address":"5250 Hahns Peak",
   "address2":"",
   "city":"Loveland",
   "state":"",
   "zip":"80538",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 663-7800",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.480988,44.00647 ]
   },
   "properties": {
   "id":5463,
   "name":"Scheels All Sports Rochester",
   "status":"publish",
   "permalink":"scheels-all-sports-rochester",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:17",
   "address":"1220 12th Street SW",
   "address2":"",
   "city":"Rochester",
   "state":"",
   "zip":"55902",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.470304,44.269051 ]
   },
   "properties": {
   "id":5461,
   "name":"Scheels All Sports",
   "status":"publish",
   "permalink":"scheels-all-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:14",
   "address":"\"Fox River Mall / 4301 W. Wisconsin Ave",
   "address2":"",
   "city":"Appleton",
   "state":"",
   "zip":"54913",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(920) 830-2977",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.440642,44.774172 ]
   },
   "properties": {
   "id":5459,
   "name":"Scheels All Sport",
   "status":"publish",
   "permalink":"scheels-all-sport",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:13",
   "address":"4710 Golf Road",
   "address2":"",
   "city":"Eau Claire",
   "state":"",
   "zip":"54701",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(715) 833-1886",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.61328,45.748805 ]
   },
   "properties": {
   "id":5460,
   "name":"Scheels All Sport - Billings",
   "status":"publish",
   "permalink":"scheels-all-sport-billings",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:13",
   "address":"1121 Shiloh Crossing Blvd",
   "address2":"",
   "city":"Billings",
   "state":"",
   "zip":"59102",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 656-9220",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.327402,43.047003 ]
   },
   "properties": {
   "id":5458,
   "name":"Rutabaga",
   "status":"publish",
   "permalink":"rutabaga",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:11",
   "address":"220 West Broadway",
   "address2":"",
   "city":"Madison",
   "state":"",
   "zip":"53716",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.376544,50.653753 ]
   },
   "properties": {
   "id":5457,
   "name":"Runners' Sole Inc.",
   "status":"publish",
   "permalink":"runners-sole-inc",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:10",
   "address":"1395 Hillside Dr.",
   "address2":"",
   "city":"Kamloops",
   "state":"",
   "zip":"V2E 2R7",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.38917,39.313393 ]
   },
   "properties": {
   "id":5456,
   "name":"Royal Gorge Cross Country Resort",
   "status":"publish",
   "permalink":"royal-gorge-cross-country-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:08",
   "address":"9411 Pahatsi Road",
   "address2":"",
   "city":"Soda Springs",
   "state":"",
   "zip":"95728",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(530) 426-3871",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.953898,44.172897 ]
   },
   "properties": {
   "id":5455,
   "name":"River Hills Scheels",
   "status":"publish",
   "permalink":"river-hills-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:07",
   "address":"\"River Hills Mall / 1850 Adams Street #404\"",
   "address2":"",
   "city":"Mankato",
   "state":"",
   "zip":"56001",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(507) 386-7767",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.684814,43.768648 ]
   },
   "properties": {
   "id":5454,
   "name":"Rhino Bikeworks",
   "status":"publish",
   "permalink":"rhino-bikeworks",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:14:05",
   "address":"1 Foster Street",
   "address2":"",
   "city":"Plymouth",
   "state":"",
   "zip":"03264",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(603) 536-3919",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.752434,45.393112 ]
   },
   "properties": {
   "id":5453,
   "name":"REI Tualatin",
   "status":"publish",
   "permalink":"rei-tualatin",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:03",
   "address":"7410 SW Bridgeport Rd",
   "address2":"",
   "city":"Tigard",
   "state":"",
   "zip":"97224",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(503) 624-8600",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.427093,47.667802 ]
   },
   "properties": {
   "id":5452,
   "name":"REI Spokane",
   "status":"publish",
   "permalink":"rei-spokane",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:02",
   "address":"1125 N Monroe St",
   "address2":"",
   "city":"Spokane",
   "state":"",
   "zip":"99201",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(509) 328-9900",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.329624,47.620306 ]
   },
   "properties": {
   "id":5451,
   "name":"REI Seattle Flagship",
   "status":"publish",
   "permalink":"rei-seattle-flagship",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:14:01",
   "address":"222 Yale Avenue North",
   "address2":"",
   "city":"Seattle",
   "state":"",
   "zip":"98109",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(206) 223-1944",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.801012,40.700833 ]
   },
   "properties": {
   "id":5450,
   "name":"REI Salt Lake City",
   "status":"publish",
   "permalink":"rei-salt-lake-city",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:59",
   "address":"3285 E 3300 S",
   "address2":"",
   "city":"Salt Lake city",
   "state":"",
   "zip":"84109",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(801) 486-2100",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.086977,42.525551 ]
   },
   "properties": {
   "id":5448,
   "name":"REI Reading",
   "status":"publish",
   "permalink":"rei-reading",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:57",
   "address":"279 Salem St",
   "address2":"",
   "city":"Reading",
   "state":"",
   "zip":"01867",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(781) 944-5103",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.685605,45.528763 ]
   },
   "properties": {
   "id":5447,
   "name":"REI Portland",
   "status":"publish",
   "permalink":"rei-portland",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:55",
   "address":"1405 NW Johnson St",
   "address2":"",
   "city":"Portland",
   "state":"",
   "zip":"97209",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(503) 221-1938",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.092185,39.620507 ]
   },
   "properties": {
   "id":5446,
   "name":"REI Lakewood",
   "status":"publish",
   "permalink":"rei-lakewood",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:54",
   "address":"5375 S Wadsworth Blvd",
   "address2":"",
   "city":"Lakewood",
   "state":"",
   "zip":"80123",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 932-0600",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.393663,42.305407 ]
   },
   "properties": {
   "id":5445,
   "name":"REI Framingham",
   "status":"publish",
   "permalink":"rei-framingham",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:52",
   "address":"375 Cochituate Rd",
   "address2":"",
   "city":"Framingham",
   "state":"",
   "zip":"01701",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(508) 270-6325",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.876074,39.569129 ]
   },
   "properties": {
   "id":5444,
   "name":"REI Englewood",
   "status":"publish",
   "permalink":"rei-englewood",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:51",
   "address":"9637 E County Line Rd",
   "address2":"",
   "city":"Englewood",
   "state":"",
   "zip":"80112",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 858-1726",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.009445,39.755329 ]
   },
   "properties": {
   "id":5443,
   "name":"REI Denver Flagship",
   "status":"publish",
   "permalink":"rei-denver-flagship",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:49",
   "address":"1416 Platte St",
   "address2":"",
   "city":"Denver",
   "state":"",
   "zip":"80202",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 756-3100",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.25979,40.019155 ]
   },
   "properties": {
   "id":5442,
   "name":"REI Boulder",
   "status":"publish",
   "permalink":"rei-boulder",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:47",
   "address":"1789 28th Street",
   "address2":"",
   "city":"Boulder",
   "state":"",
   "zip":"80301",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 583-9970",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.291533,44.860666 ]
   },
   "properties": {
   "id":5440,
   "name":"REI Bloomington Flagship",
   "status":"publish",
   "permalink":"rei-bloomington-flagship",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:45",
   "address":"750 W American Blvd",
   "address2":"",
   "city":"Bloomington",
   "state":"",
   "zip":"55420",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(952) 884-4315",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.31506,44.046326 ]
   },
   "properties": {
   "id":5439,
   "name":"REI Bend",
   "status":"publish",
   "permalink":"rei-bend",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:43",
   "address":"380 Powerhouse Dr",
   "address2":"",
   "city":"Bend",
   "state":"",
   "zip":"97702",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(541) 385-0594",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -149.908502,61.194567 ]
   },
   "properties": {
   "id":5438,
   "name":"REI Anchorage",
   "status":"publish",
   "permalink":"rei-anchorage",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:41",
   "address":"1200 W Northern Lights Blvd",
   "address2":"",
   "city":"Anchorage",
   "state":"",
   "zip":"99503",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(907) 272-4565",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.607303,35.135159 ]
   },
   "properties": {
   "id":5437,
   "name":"REI Albuquerque",
   "status":"publish",
   "permalink":"rei-albuquerque",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:39",
   "address":"1550 Mercantile Ave NE",
   "address2":"",
   "city":"Albuquerque",
   "state":"",
   "zip":"87107",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(505) 247-1191",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.212653,44.107082 ]
   },
   "properties": {
   "id":5436,
   "name":"Rapid City Scheels",
   "status":"publish",
   "permalink":"rapid-city-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:38",
   "address":"480 Rushmore Mall",
   "address2":"2200 North Maple",
   "city":"Rapid City",
   "state":"",
   "zip":"57701",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(605) 342-9033",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.814231,37.630849 ]
   },
   "properties": {
   "id":5434,
   "name":"Purgatory Ski Resort",
   "status":"publish",
   "permalink":"purgatory-ski-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:34",
   "address":"No.1 Skier Place",
   "address2":"",
   "city":"Durango",
   "state":"",
   "zip":"81301",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 247-9000",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.986462,49.686985 ]
   },
   "properties": {
   "id":5433,
   "name":"Purcell Outdoors",
   "status":"publish",
   "permalink":"purcell-outdoors",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:32",
   "address":"15- 196 Spokane St",
   "address2":"",
   "city":"Kimberley",
   "state":"",
   "zip":"V1A 2E4",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.415765,41.170776 ]
   },
   "properties": {
   "id":5431,
   "name":"Outdoor Sports Center",
   "status":"publish",
   "permalink":"outdoor-sports-center",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:28",
   "address":"80 Danbury Street",
   "address2":"",
   "city":"Wilton",
   "state":"",
   "zip":"06897",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"203-762-8324",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.212968,44.479151 ]
   },
   "properties": {
   "id":5430,
   "name":"Outdoor Gear Exchange",
   "status":"publish",
   "permalink":"outdoor-gear-exchange",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:26",
   "address":"37 Church Street",
   "address2":"",
   "city":"Burlington",
   "state":"",
   "zip":"05401",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(888) 547-4327",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.141672,51.012676 ]
   },
   "properties": {
   "id":5427,
   "name":"Norseman Ski Shop Inc.",
   "status":"publish",
   "permalink":"norseman-ski-shop-inc",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:18",
   "address":"4655 37 ST W",
   "address2":"",
   "city":"Calgary",
   "state":"",
   "zip":"T3E 3C8",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.519722,43.118403 ]
   },
   "properties": {
   "id":5426,
   "name":"Nordic Specialists",
   "status":"publish",
   "permalink":"nordic-specialists",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:16",
   "address":"1217 W. Wisconsin Ave.",
   "address2":"",
   "city":"Oconomowoc",
   "state":"",
   "zip":"53066",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"262-261-3800",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.660474,45.519634 ]
   },
   "properties": {
   "id":5425,
   "name":"Next Adventure",
   "status":"publish",
   "permalink":"next-adventure",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:14",
   "address":"426 Grand Avenue",
   "address2":"",
   "city":"Portland",
   "state":"",
   "zip":"97214",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(503) 233-0706",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.179045,39.734429 ]
   },
   "properties": {
   "id":5424,
   "name":"Mountainside Gear Rental",
   "status":"publish",
   "permalink":"mountainside-gear-rental",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:11",
   "address":"15985 South Golden Rd",
   "address2":"",
   "city":"Golden",
   "state":"",
   "zip":"80401",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 955-2290",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.044386,39.481556 ]
   },
   "properties": {
   "id":5423,
   "name":"Mountain Outfitter",
   "status":"publish",
   "permalink":"mountain-outfitter",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:09",
   "address":"112 South Ridge Street",
   "address2":"",
   "city":"Breckenridge",
   "state":"",
   "zip":"80424",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 453-2201",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.410364,47.676439 ]
   },
   "properties": {
   "id":5422,
   "name":"Mountain Gear",
   "status":"publish",
   "permalink":"mountain-gear",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:13:08",
   "address":"2002 N Division",
   "address2":"",
   "city":"Spokane",
   "state":"",
   "zip":"99207",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(509) 325-9000",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.375154,43.770181 ]
   },
   "properties": {
   "id":5420,
   "name":"Mountain Equip Co-Op  (MEC)",
   "status":"publish",
   "permalink":"mountain-equip-co-op-office-mec-17",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:13:03",
   "address":"784 Sheppard Ave E",
   "address2":"",
   "city":"North York",
   "state":"ON",
   "zip":"M2K 1C3",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.651484,45.532252 ]
   },
   "properties": {
   "id":5417,
   "name":"Mountain Equip Co-Op  (MEC)",
   "status":"publish",
   "permalink":"mountain-equip-co-op-office-mec-14",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:12:56",
   "address":"8989 Boulevard de l'Acadie",
   "address2":"",
   "city":"Montreal",
   "state":"",
   "zip":"H4N 3K1",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.392965,43.646035 ]
   },
   "properties": {
   "id":5410,
   "name":"Mountain Equip Co-Op  (MEC)",
   "status":"publish",
   "permalink":"mountain-equip-co-op-office-mec-7",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:12:39",
   "address":"400 King St W",
   "address2":"",
   "city":"Toronto",
   "state":"",
   "zip":"M5V 1K2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.080891,51.044212 ]
   },
   "properties": {
   "id":5409,
   "name":"Mountain Equip Co-Op  (MEC)",
   "status":"publish",
   "permalink":"mountain-equip-co-op-office-mec-6",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:12:37",
   "address":"830 10 Ave SW",
   "address2":"",
   "city":"Calgary",
   "state":"",
   "zip":"T2R 0A9",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.487483,53.445732 ]
   },
   "properties": {
   "id":5407,
   "name":"Mountain Equip Co-Op (MEC)",
   "status":"publish",
   "permalink":"mountain-equip-co-op-office-mec-4",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:12:32",
   "address":"1624 99 St NW",
   "address2":"",
   "city":"Edmonton",
   "state":"",
   "zip":"T6N 1M5",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.823593,38.837703 ]
   },
   "properties": {
   "id":5403,
   "name":"Mountain Chalet",
   "status":"publish",
   "permalink":"mountain-chalet",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:23",
   "address":"226 North Tejon",
   "address2":"",
   "city":"Colorado Springs",
   "state":"",
   "zip":"80903",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(719) 633-0732",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.592779,39.042121 ]
   },
   "properties": {
   "id":5402,
   "name":"Moosejaw Mountaineering",
   "status":"publish",
   "permalink":"moosejaw-mountaineering",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:21",
   "address":"439 W 47th Street",
   "address2":"",
   "city":"Kansas City",
   "state":"",
   "zip":"64112",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(816) 832-4493",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.136475,41.777637 ]
   },
   "properties": {
   "id":5400,
   "name":"Mohonk Mountain",
   "status":"publish",
   "permalink":"mohonk-mountain",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:15",
   "address":"1000 Mountain Rest",
   "address2":"",
   "city":"New Paltz",
   "state":"",
   "zip":"12561",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"845-255-1000",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.246972,44.970661 ]
   },
   "properties": {
   "id":5398,
   "name":"Midwest Mountaineering",
   "status":"publish",
   "permalink":"midwest-mountaineering",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:09",
   "address":"309 Cedar Avenue South",
   "address2":"",
   "city":"Minneapolis",
   "state":"",
   "zip":"55454",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"612-339-3433; 888-999-1077",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.412396,45.636479 ]
   },
   "properties": {
   "id":5397,
   "name":"Mel's Trading Post",
   "status":"publish",
   "permalink":"mels-trading-post",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:07",
   "address":"105 South Brown Street",
   "address2":"",
   "city":"Rhinelander",
   "state":"",
   "zip":"54501",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(715) 362-5800; (800) 236-6357 (MELS)",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.261343,40.015734 ]
   },
   "properties": {
   "id":5396,
   "name":"McGuckin's",
   "status":"publish",
   "permalink":"mcguckins",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:12:03",
   "address":"2525 Arapahoe Ave.",
   "address2":"",
   "city":"Boulder",
   "state":"",
   "zip":"80302",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 443-1822",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.08013,44.191985 ]
   },
   "properties": {
   "id":5394,
   "name":"Maine Sport Outfitter",
   "status":"publish",
   "permalink":"maine-sport-outfitter",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:11:56",
   "address":"115 Commercial Street",
   "address2":"",
   "city":"Rockport",
   "state":"",
   "zip":"04856",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(207) 236-7120",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.893141,33.421371 ]
   },
   "properties": {
   "id":5392,
   "name":"LowerGear Outdoors",
   "status":"publish",
   "permalink":"lowergear-outdoors",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:49",
   "address":"2155 East University Drive",
   "address2":"",
   "city":"Tempe",
   "state":"",
   "zip":"85281",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(480) 348-8917",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.587779,42.244494 ]
   },
   "properties": {
   "id":5391,
   "name":"Lee's",
   "status":"publish",
   "permalink":"lees",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:46",
   "address":"311 West Kilgore",
   "address2":"",
   "city":"Portage",
   "state":"",
   "zip":"49002",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(269) 381-7700",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.727835,45.400257 ]
   },
   "properties": {
   "id":5390,
   "name":"Le Bivouac",
   "status":"publish",
   "permalink":"le-bivouac",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:44",
   "address":"210 Rue Principale",
   "address2":"",
   "city":"Granby",
   "state":"",
   "zip":"J2G 2V8",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.271217,46.835412 ]
   },
   "properties": {
   "id":5389,
   "name":"La Vie Sportive Inc.",
   "status":"publish",
   "permalink":"la-vie-sportive-inc",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:43",
   "address":"600 Rue Bouvier",
   "address2":"",
   "city":"Quebec City",
   "state":"",
   "zip":"G2J 1A7",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.24475,46.809938 ]
   },
   "properties": {
   "id":5388,
   "name":"La Tulippe",
   "status":"publish",
   "permalink":"la-tulippe",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:42",
   "address":"637, de Saint- Vallier Ouest",
   "address2":"",
   "city":"Quebec City",
   "state":"",
   "zip":"G1N 1C6",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.509039,45.634557 ]
   },
   "properties": {
   "id":5387,
   "name":"La Cordee Plein Air Inc.",
   "status":"publish",
   "permalink":"la-cordee-plein-air-inc",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:40",
   "address":"405 rue Marien",
   "address2":"",
   "city":"Montreal",
   "state":"",
   "zip":"H1B 4V7",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.097118,39.989816 ]
   },
   "properties": {
   "id":5386,
   "name":"Jax Outdoor Gear",
   "status":"publish",
   "permalink":"jax-outdoor-gear-2",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:38",
   "address":"900 South Hwy 287",
   "address2":"",
   "city":"Lafayette",
   "state":"",
   "zip":"80026",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(720) 266-6160",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.074975,40.602178 ]
   },
   "properties": {
   "id":5385,
   "name":"Jax Outdoor Gear",
   "status":"publish",
   "permalink":"jax-outdoor-gear",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:37",
   "address":"1200 North College Ave",
   "address2":"",
   "city":"Ft. Collins",
   "state":"",
   "zip":"80524",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 221-0544",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.808918,37.936866 ]
   },
   "properties": {
   "id":5384,
   "name":"Jagged Edge",
   "status":"publish",
   "permalink":"jagged-edge",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:36",
   "address":"223 East Colorado Avenue",
   "address2":"",
   "city":"Telluride",
   "state":"",
   "zip":"81435",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 728-9307",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.817425,39.948798 ]
   },
   "properties": {
   "id":5382,
   "name":"Ice Box Mountain Sports",
   "status":"publish",
   "permalink":"ice-box-mountain-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:33",
   "address":"505 Zerex",
   "address2":"",
   "city":"Fraser",
   "state":"",
   "zip":"80442",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970)722-7780",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.274317,42.097329 ]
   },
   "properties": {
   "id":5381,
   "name":"Hollyloft Ski & Bike",
   "status":"publish",
   "permalink":"hollyloft-ski-bike",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:32",
   "address":"600 Fairmont Avenue",
   "address2":"",
   "city":"Jamestown",
   "state":"",
   "zip":"14701",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(716) 483-2330",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.98493,46.670809 ]
   },
   "properties": {
   "id":5378,
   "name":"Grand Marais Outfitters",
   "status":"publish",
   "permalink":"grand-marais-outfitters",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:28",
   "address":"N14277 Lake Avenue",
   "address2":"",
   "city":"Grand Marais",
   "state":"",
   "zip":"49839",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(906) 494-3333",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.068648,47.910734 ]
   },
   "properties": {
   "id":5377,
   "name":"Grand Forks Scheels",
   "status":"publish",
   "permalink":"grand-forks-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:26",
   "address":"Med Park Mall / 1375A South Columbia Rd",
   "address2":"",
   "city":"Grand Forks",
   "state":"",
   "zip":"58201",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(701) 780-9424",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.176274,44.389195 ]
   },
   "properties": {
   "id":5376,
   "name":"Gorham Hardware & Sports Center",
   "status":"publish",
   "permalink":"gorham-hardware-sports-center",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:11:25",
   "address":"96 Main Street",
   "address2":"",
   "city":"Gorham",
   "state":"",
   "zip":"03581",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(603) 466-2312",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.26789,43.653164 ]
   },
   "properties": {
   "id":5375,
   "name":"Gorham Bike & Ski",
   "status":"publish",
   "permalink":"gorham-bike-ski",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:11:24",
   "address":"693 Congress Street",
   "address2":"",
   "city":"Portland",
   "state":"",
   "zip":"04102",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(207) 773-1700",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.954325,39.206883 ]
   },
   "properties": {
   "id":5374,
   "name":"Gene Taylor Sports",
   "status":"publish",
   "permalink":"gene-taylor-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:22",
   "address":"Snowmass Village Mall, Bldg 54",
   "address2":"",
   "city":"Snowmass Village",
   "state":"",
   "zip":"81615",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 923-4336",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.077767,39.57494 ]
   },
   "properties": {
   "id":5372,
   "name":"Frisco Nordic Center",
   "status":"publish",
   "permalink":"frisco-nordic-center",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:20",
   "address":"616 Recreation Way",
   "address2":"",
   "city":"Frisco",
   "state":"",
   "zip":"80443",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.649777,41.955453 ]
   },
   "properties": {
   "id":5370,
   "name":"Fran Charles Shop",
   "status":"publish",
   "permalink":"fran-charles-shop",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:18",
   "address":"12 Congress Street",
   "address2":"",
   "city":"Bradford",
   "state":"",
   "zip":"16701",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(814) 368-8248",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.578486,43.14184 ]
   },
   "properties": {
   "id":5369,
   "name":"Fleet Feet Sports",
   "status":"publish",
   "permalink":"fleet-feet-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:16",
   "address":"155 Culver Rd, Suite 110",
   "address2":"",
   "city":"Rochester",
   "state":"",
   "zip":"14620",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(585) 697-3338",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.864373,46.857351 ]
   },
   "properties": {
   "id":5368,
   "name":"Fargo Scheels All Sport",
   "status":"publish",
   "permalink":"fargo-scheels-all-sport",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:15",
   "address":"1551 45th Street SW",
   "address2":"",
   "city":"Fargo",
   "state":"",
   "zip":"58103",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(701) 298-2918",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.670759,52.124717 ]
   },
   "properties": {
   "id":5367,
   "name":"Escape Sports",
   "status":"publish",
   "permalink":"escape-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:14",
   "address":"110 19th St",
   "address2":"",
   "city":"Saskatoon",
   "state":"",
   "zip":"S7M 1P2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.840147,43.145871 ]
   },
   "properties": {
   "id":5366,
   "name":"Equipe Sports",
   "status":"publish",
   "permalink":"equpe-sports",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:11:12",
   "address":"8749 Vt Rt 30",
   "address2":"",
   "city":"Rawsonville",
   "state":"",
   "zip":"05155",
   "country":"United States",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.58841,39.936613 ]
   },
   "properties": {
   "id":5365,
   "name":"Eldora Ski Resort",
   "status":"publish",
   "permalink":"eldora-ski-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:10",
   "address":"2861 Eldora Ski Road",
   "address2":"",
   "city":"Nederland",
   "state":"",
   "zip":"80466",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 440-8700",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.230201,43.063453 ]
   },
   "properties": {
   "id":5364,
   "name":"Earth's Edge",
   "status":"publish",
   "permalink":"earths-edge",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:09",
   "address":"222 Washington Avenue",
   "address2":"",
   "city":"Grand Haven",
   "state":"",
   "zip":"49417",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"616-844-1724",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.570185,47.122062 ]
   },
   "properties": {
   "id":5363,
   "name":"Down Wind Sports",
   "status":"publish",
   "permalink":"down-wind-sports-2",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:08",
   "address":"308 Sheldon Avenue",
   "address2":"",
   "city":"Houghton",
   "state":"",
   "zip":"49931",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(906) 482-2500",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.394497,46.54759 ]
   },
   "properties": {
   "id":5362,
   "name":"Down Wind Sports",
   "status":"publish",
   "permalink":"down-wind-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:07",
   "address":"514 North Third Street",
   "address2":"",
   "city":"Marquette",
   "state":"",
   "zip":"49855",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(906) 226-7112",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.784269,39.966331 ]
   },
   "properties": {
   "id":5361,
   "name":"Devils Thumb Ranch Nordic Center",
   "status":"publish",
   "permalink":"devils-thumb-ranch-nordic-center",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:06",
   "address":"3530 County Rd 83",
   "address2":"",
   "city":"Tabernash",
   "state":"",
   "zip":"80478",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 726-8231",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.804165,41.569929 ]
   },
   "properties": {
   "id":5360,
   "name":"Des Moines Scheels",
   "status":"publish",
   "permalink":"des-moines-scheels",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:04",
   "address":"101 Jordan Creek Parkway / Bldg 4000",
   "address2":"",
   "city":"West Des Moines",
   "state":"",
   "zip":"50266",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.335873,50.676036 ]
   },
   "properties": {
   "id":5359,
   "name":"Cycle Logic",
   "status":"publish",
   "permalink":"cycle-logic",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:03",
   "address":"222 Victoria Street",
   "address2":"",
   "city":"Kamloops",
   "state":"",
   "zip":"V2C 2A2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.250337,40.014304 ]
   },
   "properties": {
   "id":5357,
   "name":"Crystal Ski Shop",
   "status":"publish",
   "permalink":"crystal-ski-shop",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:11:01",
   "address":"3216 Arapahoe Rd",
   "address2":"",
   "city":"Boulder",
   "state":"",
   "zip":"80303",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"303-449-7669",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.702541,45.879933 ]
   },
   "properties": {
   "id":5346,
   "name":"Chequamegon Adventure",
   "status":"publish",
   "permalink":"chequamegon-adventure",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:46",
   "address":"8576 Highway 51 North",
   "address2":"",
   "city":"Minocqua",
   "state":"",
   "zip":"54548",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(715) 356-1618",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.858176,39.373479 ]
   },
   "properties": {
   "id":5345,
   "name":"Castle Rock Bike & Ski",
   "status":"publish",
   "permalink":"castle-rock-bike-ski",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:44",
   "address":"411 4th Street",
   "address2":"",
   "city":"Castle Rock",
   "state":"",
   "zip":"80104",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(303) 688-1722",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.57382,44.529129 ]
   },
   "properties": {
   "id":5344,
   "name":"Campus Cycle",
   "status":"publish",
   "permalink":"campus-cycle",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:42",
   "address":"1732 Fourth Ave",
   "address2":"",
   "city":"Stevens Point",
   "state":"",
   "zip":"54481",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(715) 341-2151",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.866036,41.691207 ]
   },
   "properties": {
   "id":5343,
   "name":"Campsaver",
   "status":"publish",
   "permalink":"campsaver",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:41",
   "address":"2280 South Heritage Drive",
   "address2":"",
   "city":"Nibley",
   "state":"",
   "zip":"84321",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(453) 578-1330",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.999602,40.151525 ]
   },
   "properties": {
   "id":5341,
   "name":"C Lazy U Ranch",
   "status":"publish",
   "permalink":"c-lazy-u-ranch",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:38",
   "address":"3640 Colorado 125",
   "address2":"",
   "city":"Granby",
   "state":"",
   "zip":"80446",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 887-3344",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.557797,42.852327 ]
   },
   "properties": {
   "id":5340,
   "name":"Burrows Specialized Sports",
   "status":"publish",
   "permalink":"burrows-specialized-sports",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:10:37",
   "address":"105 Main Street",
   "address2":"",
   "city":"Brattleboro",
   "state":"",
   "zip":"05301",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(802) 254-9430",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.061722,39.481478 ]
   },
   "properties": {
   "id":5338,
   "name":"Breckenridge Nordic Center",
   "status":"publish",
   "permalink":"breckenridge-nordic-center",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:35",
   "address":"1200 Ski Hill Road",
   "address2":"",
   "city":"Breckenridge",
   "state":"",
   "zip":"80424",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 453-6855",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.930067,45.162884 ]
   },
   "properties": {
   "id":5337,
   "name":"Boyne Outfitteres",
   "status":"publish",
   "permalink":"boyne-outfitteres",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:32",
   "address":"1 Boyne Mountain Rd",
   "address2":"",
   "city":"Boyne Falls",
   "state":"",
   "zip":"49713",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 549-7906",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.930067,45.162884 ]
   },
   "properties": {
   "id":5336,
   "name":"Boyne Mountain Resort",
   "status":"publish",
   "permalink":"boyne-mountain-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:30",
   "address":"1 Boyne Mountain Rd",
   "address2":"",
   "city":"Boyne Falls",
   "state":"",
   "zip":"49713",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 549-6925",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.935349,45.469255 ]
   },
   "properties": {
   "id":5335,
   "name":"Boyne Highlands Resort",
   "status":"publish",
   "permalink":"boyne-highlands-resort",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:28",
   "address":"600 Highlands Dr",
   "address2":"",
   "city":"Harbor Springs",
   "state":"",
   "zip":"49740",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 536-3006",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.942615,45.382859 ]
   },
   "properties": {
   "id":5334,
   "name":"Boyne Country Sports",
   "status":"publish",
   "permalink":"boyne-country-sports-4",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:27",
   "address":"1200 Bayview Rd",
   "address2":"",
   "city":"Petosky",
   "state":"",
   "zip":"49770",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 439-4906",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.623532,44.76417 ]
   },
   "properties": {
   "id":5333,
   "name":"Boyne Country Sports",
   "status":"publish",
   "permalink":"boyne-country-sports-3",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:26",
   "address":"101 E Front St",
   "address2":"",
   "city":"Traverse City",
   "state":"",
   "zip":"49684",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 941-1999",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.474919,42.492545 ]
   },
   "properties": {
   "id":5332,
   "name":"Boyne Country Sports",
   "status":"publish",
   "permalink":"boyne-country-sports-2",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:24",
   "address":"27782 Novi Rd",
   "address2":"",
   "city":"Novi",
   "state":"",
   "zip":"48377",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(248) 347-3323",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.263977,42.602328 ]
   },
   "properties": {
   "id":5331,
   "name":"Boyne Country Sports",
   "status":"publish",
   "permalink":"boyne-country-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:23",
   "address":"42881 Woodward Ave",
   "address2":"",
   "city":"Bloomfield Hills",
   "state":"",
   "zip":"48304",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(248) 338-0803",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.015587,45.369032 ]
   },
   "properties": {
   "id":5330,
   "name":"Boyne Country Clothiers",
   "status":"publish",
   "permalink":"boyne-country-clothiers",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:22",
   "address":"The Inn at Bay Harbor",
   "address2":"3600 Village Harbor Drive",
   "city":"Bay Harbor",
   "state":"",
   "zip":"49770",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 439-4006",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.861155,37.94176 ]
   },
   "properties": {
   "id":5329,
   "name":"Boot Doctor",
   "status":"publish",
   "permalink":"boot-doctor",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:21",
   "address":"315 Adams Ranch Road #1A",
   "address2":"",
   "city":"Telluride",
   "state":"",
   "zip":"81435",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"800-592-6883",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.031288,46.842899 ]
   },
   "properties": {
   "id":5328,
   "name":"Bob Ward & Sons - Missoula",
   "status":"publish",
   "permalink":"bob-ward-sons-missoula",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:20",
   "address":"3015 Paxson Street",
   "address2":"",
   "city":"Missoula",
   "state":"",
   "zip":"59801",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 728-3220",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.021754,46.620785 ]
   },
   "properties": {
   "id":5327,
   "name":"Bob Ward & Sons - Helena",
   "status":"publish",
   "permalink":"bob-ward-sons-helena",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:18",
   "address":"3323 Dredge Dr",
   "address2":"",
   "city":"Helena",
   "state":"",
   "zip":"59601",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 443-2138",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.156806,46.25948 ]
   },
   "properties": {
   "id":5326,
   "name":"Bob Ward & Sons - Hamilton",
   "status":"publish",
   "permalink":"bob-ward-sons-hamilton",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:17",
   "address":"1120 North First St",
   "address2":"",
   "city":"Hamilton",
   "state":"",
   "zip":"59840",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 363-6204",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.510705,45.983928 ]
   },
   "properties": {
   "id":5325,
   "name":"Bob Ward & Sons - Butte",
   "status":"publish",
   "permalink":"bob-ward-sons-butte",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:15",
   "address":"1925 Dewey Blvd",
   "address2":"",
   "city":"Butte",
   "state":"",
   "zip":"59701",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 494-3445",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.070815,45.710303 ]
   },
   "properties": {
   "id":5324,
   "name":"Bob Ward & Sons - Bozeman",
   "status":"publish",
   "permalink":"bob-ward-sons-bozeman",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:14",
   "address":"3011 Max Ave",
   "address2":"",
   "city":"Bozeman",
   "state":"",
   "zip":"59718",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 586-4381",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.53851,39.077669 ]
   },
   "properties": {
   "id":5323,
   "name":"Board & Buckle",
   "status":"publish",
   "permalink":"board-buckle",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:13",
   "address":"2282 North Avenue",
   "address2":"",
   "city":"Grand Junction",
   "state":"",
   "zip":"81501",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 242-9285",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.569773,42.941303 ]
   },
   "properties": {
   "id":5322,
   "name":"Bill & Paul's Sports Haus",
   "status":"publish",
   "permalink":"bill-pauls-sports-haus",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:12",
   "address":"1200 East Paris",
   "address2":"",
   "city":"Grand Rapids",
   "state":"",
   "zip":"49546",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"616-458-1684",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.583811,42.602399 ]
   },
   "properties": {
   "id":5321,
   "name":"Bicycles & Skis Unlimited",
   "status":"publish",
   "permalink":"bicycles-skis-unlimited",
   "description":"",
   "excerpt":"",
   "author":"1",
   "date":"2018-08-07 17:10:10",
   "address":"322 High Street",
   "address2":"",
   "city":"Greenfield",
   "state":"",
   "zip":"01301",
   "country":"USA",
   "country_iso":"US",
   "hours":"",
   "phone":"(413) 772-2700",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.12334,45.187543 ]
   },
   "properties": {
   "id":5320,
   "name":"Bayshore Outdoor",
   "status":"publish",
   "permalink":"bayshore-outdoor",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:09",
   "address":"655 Bayshore Drive",
   "address2":"",
   "city":"Sister Bay",
   "state":"",
   "zip":"54234",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(920) 854-7598",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.040219,46.586698 ]
   },
   "properties": {
   "id":5319,
   "name":"Base Camp",
   "status":"publish",
   "permalink":"base-camp",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:08",
   "address":"5 West Broadway",
   "address2":"",
   "city":"Helena",
   "state":"",
   "zip":"59601",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(406) 443-5360",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.619735,44.764241 ]
   },
   "properties": {
   "id":5318,
   "name":"Backcountry North",
   "status":"publish",
   "permalink":"backcountry-north",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:07",
   "address":"227 East Front Street",
   "address2":"",
   "city":"Traverse City",
   "state":"",
   "zip":"49684",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(231) 946-1339",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.120828,44.057916 ]
   },
   "properties": {
   "id":5317,
   "name":"Backcountry Gear",
   "status":"publish",
   "permalink":"backcountry-gear",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:05",
   "address":"1855 West 2nd Avenue",
   "address2":"",
   "city":"Eugene",
   "state":"",
   "zip":"97402",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(541) 485-5418 x6",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.881204,37.27711 ]
   },
   "properties": {
   "id":5316,
   "name":"Backcountry Experience",
   "status":"publish",
   "permalink":"backcountry-experience",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:04",
   "address":"1205 Camino del Rio",
   "address2":"",
   "city":"Durango",
   "state":"",
   "zip":"81301",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(970) 247-5830",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.830793,45.463755 ]
   },
   "properties": {
   "id":5314,
   "name":"Atmosphere",
   "status":"publish",
   "permalink":"atmosphere-2",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:10:01",
   "address":"6815 Aut Transcanadienne",
   "address2":"",
   "city":"Pointe-Claire",
   "state":"",
   "zip":"H9R 5J1",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.595232,41.311595 ]
   },
   "properties": {
   "id":5312,
   "name":"Atmoshere Mountainworks",
   "status":"publish",
   "permalink":"atmoshere-mountainworks",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:58",
   "address":"210 South 2nd Street",
   "address2":"",
   "city":"Laramie",
   "state":"",
   "zip":"82070",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(307) 742-1191",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.492836,41.219688 ]
   },
   "properties": {
   "id":5311,
   "name":"Appalachian Outfitters",
   "status":"publish",
   "permalink":"appalachian-outfitters",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:57",
   "address":"60 Kendall Park Road",
   "address2":"",
   "city":"Peninsula",
   "state":"",
   "zip":"44264",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"(330) 655-5444",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.654111,45.539675 ]
   },
   "properties": {
   "id":5309,
   "name":"Altitude Sports",
   "status":"publish",
   "permalink":"altitude-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:55",
   "address":"333, rue Chabanel O",
   "address2":"Suite 705",
   "city":"Montreal",
   "state":"",
   "zip":"H2N 2E7",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.106292,49.262885 ]
   },
   "properties": {
   "id":5308,
   "name":"Alpine Start Outfitters",
   "status":"publish",
   "permalink":"alpine-start-outfitters",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:53",
   "address":"68 West Broadway",
   "address2":"",
   "city":"Vancouver",
   "state":"",
   "zip":"V5Y 1P2",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.046843,39.488796 ]
   },
   "properties": {
   "id":5307,
   "name":"Alpine Sports",
   "status":"publish",
   "permalink":"alpine-sports",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:51",
   "address":"400 North Park",
   "address2":"",
   "city":"Breckenridge",
   "state":"",
   "zip":"80424",
   "country":"",
   "country_iso":"US",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.940853,49.848823 ]
   },
   "properties": {
   "id":5304,
   "name":"A & L Get Active",
   "status":"publish",
   "permalink":"a-l-get-active",
   "description":"",
   "excerpt":"",
   "author":"0",
   "date":"2018-08-07 17:09:45",
   "address":"201 Rosser Ave.",
   "address2":"",
   "city":"Brandon",
   "state":"",
   "zip":"R7A 0J8",
   "country":"Canada",
   "country_iso":"CA",
   "hours":"",
   "phone":"",
   "fax":"",
   "email":"",
   "url":"",
   "image":"0",
   "category":""
   }
 }
]
}

map.on('load', function (e) {
  /** 
   * This is where your '.addLayer()' used to be, instead
   * add only the source without styling a layer
  */
 map.addLayer({
  "id": "locations",
  "type": "symbol",
  /* Add a GeoJSON source containing place coordinates and information. */
  "source": {
    "type": "geojson",
    "data": stores
  },
  "layout": {
    "icon-image": "marker-15",
    "icon-allow-overlap": true,
  }
  });


  /**
   * Add all the things to the page:
   * - The location listings on the side of the page
   * - The markers onto the map
  */
  buildLocationList(stores);
  addMarkers();
});

/**
 * Add a marker to the map for every store listing.
**/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  stores.features.forEach(function(marker) {
    /* Create a div element for the marker. */
    var el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = "marker-" + marker.properties.id;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';
    
    /**
     * Create a marker using the div element
     * defined above and add it to the map.
    **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
    **/
    el.addEventListener('click', function(e){
      /* Fly to the point */
      flyToStore(marker);
      /* Close all other popups and display popup for clicked store */
      createPopUp(marker);
      /* Highlight listing in sidebar */
      var activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      var listing = document.getElementById('listing-' + marker.properties.id);
      listing.classList.add('active');
    });
  });
}

/**
 * Add a listing for each store to the sidebar.
**/
function buildLocationList(data) {
  data.features.forEach(function(store, i){
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
    **/
    var prop = store.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById('ob-map-sidebar');
    var listing = listings.appendChild(document.createElement('div'));

    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = "link-" + prop.id;
    link.innerHTML = prop.name;
    
    /* Add details to the individual listing. */
    var addressDetails = listing.appendChild(document.createElement('div'));
    var cityDetails = listing.appendChild(document.createElement('div'));
    var phoneDetails = listing.appendChild(document.createElement('div'));

    addressDetails.classList.add("ob-address-details");
    cityDetails.classList.add("ob-city-details");
    phoneDetails.classList.add("ob-phone-details");
    // details.setHTML(`<h6 class="ob-text-primary ob-heading-cta-xs>${prop.name && prop.name}</h6>
    //   <p class="ob-text-primary ob-paragraph-md>${prop.address && prop.address}</p>
    //   <p class="ob-text-primary ob-paragraph-md>${prop.city && prop.city} ${prop.zip && prop.zip}</p>
    //   <h6 class="ob-text-primary ob-heading-cta-xs>${prop.phone && prop.phone}</h6>
    // `)
    addressDetails.innerHTML = prop.address
    cityDetails.innerHTML = prop.city + ' ' + prop.zip;
    if (prop.phone) {
      phoneDetails.innerHTML += 'Phone: ' + prop.phone;
    }

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
    **/
    link.addEventListener('click', function(e){
      for (var i=0; i < data.features.length; i++) {
        if (this.id === "link-" + data.features[i].properties.id) {
          var clickedListing = data.features[i];
          flyToStore(clickedListing);
          createPopUp(clickedListing);
        }
      }
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  });
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
**/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

/**
 * Create a Mapbox GL JS `Popup`.
**/
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
      '<h4>' + currentFeature.properties.address + '</h4>' +
      '<h4>' + currentFeature.properties.phone + '</h4>')
    .addTo(map);
}

}