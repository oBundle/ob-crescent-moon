export default function () {
	const csv2geojson = require("csv2geojson");

	fetch(
		"https://store-pqywb1ijst.mybigcommerce.com/content/dealers-map-csv.csv",
	)
		.then((res) => res.text())
		.then((data) => {
			let csvString = data;
			csv2geojson.csv2geojson(csvString, function (err, data) {
				if (err) {
					console.log("map csv fetch error: ", err);
				} else {
					let stores = data;
					mapboxgl.accessToken =
						"pk.eyJ1Ijoib2J1bmRsZW1nIiwiYSI6ImNrZnlqeWttYjIwbjgyenMzYjNtdzRpNDYifQ.wxXbzwNWaDrKMJl_Q-ZgBQ";

					let map = new mapboxgl.Map({
						container: "ob-map",
						style: "mapbox://styles/mapbox/outdoors-v10",
						center: [-77.034084, 38.909671],
						zoom: 4,
					});

					/**
					 * Add a marker to the map for every store listing.
					 **/
					function addMarkers() {
						/* For each feature in the GeoJSON object above: */
						stores.features.forEach(function (marker) {
							/* Create a div element for the marker. */
							var el = document.createElement("div");
							/* Assign a unique `id` to the marker. */
							el.id = "marker-" + marker.properties.id;
							/* Assign the `marker` class to each marker for styling. */
							el.className = "marker";

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
							el.addEventListener("click", function (e) {
								/* Fly to the point */
								flyToStore(marker);
								/* Close all other popups and display popup for clicked store */
								createPopUp(marker);
								/* Highlight listing in sidebar */
								var activeItem = document.getElementsByClassName("active");
								e.stopPropagation();
								if (activeItem[0]) {
									activeItem[0].classList.remove("active");
								}
								var listing = document.getElementById(
									"listing-" + marker.properties.id,
								);
								listing.classList.add("active");
							});
						});
					}

					/**
					 * Add a listing for each store to the sidebar.
					 **/
					function buildLocationList(data) {
            
            console.log('building loc list features', data.features)
						data.features.forEach(function (store, i) {
							/**
							 * Create a shortcut for `store.properties`,
							 * which will be used several times below.
							 **/
              console.log('store', store)
							var prop = store.properties;

							/* Add a new listing section to the sidebar. */
							var listings = document.getElementById("ob-map-sidebar");
							var listing = listings.appendChild(document.createElement("div"));

							/* Assign a unique `id` to the listing. */
							listing.id = "listing-" + prop.wpsl_id;
							/* Assign the `item` class to each listing for styling. */
							listing.className = "item";

							/* Add the link to the individual listing created above. */
							var link = listing.appendChild(document.createElement("a"));
							link.href = "#";
							link.className = "title";
							link.id = "link-" + prop.wpsl_id;
							link.innerHTML = prop.name;

							/* Add details to the individual listing. */
							var addressDetails = listing.appendChild(
								document.createElement("div"),
							);
							var cityDetails = listing.appendChild(
								document.createElement("div"),
							);
							var phoneDetails = listing.appendChild(
								document.createElement("div"),
							);

							addressDetails.classList.add("ob-address-details");
							cityDetails.classList.add("ob-city-details");
							phoneDetails.classList.add("ob-phone-details");
							// details.setHTML(`<h6 class="ob-text-primary ob-heading-cta-xs>${prop.name && prop.name}</h6>
							//   <p class="ob-text-primary ob-paragraph-md>${prop.address && prop.address}</p>
							//   <p class="ob-text-primary ob-paragraph-md>${prop.city && prop.city} ${prop.zip && prop.zip}</p>
							//   <h6 class="ob-text-primary ob-heading-cta-xs>${prop.phone && prop.phone}</h6>
							// `)
							addressDetails.innerHTML = prop.address;
							cityDetails.innerHTML = prop.city + " " + prop.zip;
							if (prop.phone) {
								phoneDetails.innerHTML += "Phone: " + prop.phone;
							}

							/**
							 * Listen to the element and when it is clicked, do four things:
							 * 1. Update the `currentFeature` to the store associated with the clicked link
							 * 2. Fly to the point
							 * 3. Close all other popups and display popup for clicked store
							 * 4. Highlight listing in sidebar (and remove highlight for all other listings)
							 **/
							link.addEventListener("click", function (e) {
								for (var i = 0; i < data.features.length; i++) {
									if (this.id === "link-" + data.features[i].properties.wpsl_id) {
										var clickedListing = data.features[i];
										flyToStore(clickedListing);
										createPopUp(clickedListing);
									}
								}
								var activeItem = document.getElementsByClassName("active");
								if (activeItem[0]) {
									activeItem[0].classList.remove("active");
								}
								this.parentNode.classList.add("active");
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
							zoom: 15,
						});
					}

					/**
					 * Create a Mapbox GL JS `Popup`.
					 **/
					function createPopUp(currentFeature) {
						var popUps = document.getElementsByClassName("mapboxgl-popup");
						if (popUps[0]) popUps[0].remove();
						var popup = new mapboxgl.Popup({ closeOnClick: false })
							.setLngLat(currentFeature.geometry.coordinates)
							.setHTML(
								"<h3>" +
									currentFeature.properties.name +
									"</h3>" +
									"<h4>" +
									currentFeature.properties.address +
									"</h4>" +
									"<h4>" +
									currentFeature.properties.phone +
									"</h4>",
							)
							.addTo(map);
					}

					map.on("load", function (e) {
						/**
						 * This is where your '.addLayer()' used to be, instead
						 * add only the source without styling a layer
						 */
						map.addLayer({
							id: "locations",
							type: "symbol",
							/* Add a GeoJSON source containing place coordinates and information. */
							source: {
								type: "geojson",
								data: stores,
							},
							layout: {
								"icon-image": "marker-15",
								"icon-allow-overlap": true,
							},
						});

						/**
						 * Add all the things to the page:
						 * - The location listings on the side of the page
						 * - The markers onto the map
						 */
						buildLocationList(stores);
						addMarkers();
					});
				}
			});
		});
}
