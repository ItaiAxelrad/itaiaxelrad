---
title: Three Terrain
date: 2020-02-06
tags: ["personal",'three.js', 'programing', 'data', 'visualization', 'javascript', 'lambda', 'functions']
---

# Three.js Terrain

I stumbled upon a [beautiful CodePen](https://codepen.io/kevinnewcombe/pen/XMVoKv) by Kevin Newcombe a couple years ago. It uses [three.js](https://threejs.org/) to visualize Google Maps API data. The CodePen was interactive, and featured a dropdown to select from several mountainous locations to move between.

After reading through the code, and Kevin's brief [write up](https://codepen.io/kevinnewcombe/post/visualizing-elevation-data-with-three-js), I had an idea. I wanted to replace the dropdown and pre-process data with a real time, client side render of anywhere in the world.

As Kevin noted, there were two main hurddles.

1. It takes a few minutes to retrieve and process all the data
2. The API allows 1.2 million (free) requests per day, and each location uses 22,500 requests, meaning we could only hit it about 55 times in 24 hour window.

Kevin reached for a php script to pre-process the data at this point. I began to think of solutions to the above problems.

First, I reduced the 150 by 150 grid to 100 by 100, yielding 10,000 requests per location. Not great, but a start. After searching throught the [Elevations API](https://developers.google.com/maps/documentation/elevation/overview) I discovered the path request which returns a series of connected points along the specified path. While the resolution suffers as a result, I can cut down the number of requests to 101. The first request captures the points along a bounding edge with 100 samples. Then, we can iterate over the samples and request a path perpendicular with equal length and sample points.

show graphic here

## Search Input

```js
// add the search box event listener
export async function getSearch() {
  const input = document.getElementById('searchBox');
  const autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    const place = autocomplete.getPlace();
    const centerPoint = {
      name: place.name,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    console.log(`Searching geolocation of ${centerPoint.name}`);
    doWork(centerPoint);
  });
}
```

## Compute Offset Bounds

```js
// compute offset from from searchBox
export const getCenter = async(center) => {
  console.log('computing offset bounds and path');
  // get from user search box & geocode later
  const sphere = google.maps.geometry.spherical;
  const point = new google.maps.LatLng(center.lat, center.lng);
  const north = sphere.computeOffset(point, offset, 0);
  // get top left corner then top right
  const pointNW = sphere.computeOffset(north, offset, 270);
  const pointNE = sphere.computeOffset(pointNW, offset * 2, 90);
  // get the NW to NE sample path
  const path = `${pointNW.lat()},${pointNW.lng()}|${pointNE.lat()},${pointNE.lng()}`
  // const pathURL = `${API_URL}?path=${path}&samples=${samples}&key=${API_TOKEN}`;
  return path;
}
```

## References

- <https://observablehq.com/@mourner/martin-real-time-rtin-terrain-mesh>
- <https://blog.mapbox.com/bringing-3d-terrain-to-the-browser-with-three-js-410068138357?gi=d1cc6a0c7423>
- <https://medium.com/@zubazor/visualizing-a-mountain-using-three-js-landsat-and-srtm-26275c920e34>
- <http://www.smartjava.org/content/threejs-render-real-world-terrain-heightmap-using-open-data/>
- <https://flothesof.github.io/Paris-3D-model-using-elevation-API-and-OpenSCAD.html>
- <https://www.lukaszielinski.de/blog/posts/2014/11/07/webgl-creating-a-landscape-mesh-with-three-dot-js-using-a-png-heightmap/>
- <https://developer.here.com/blog/visualizing-large-scale-terrain-with-open-source-tool-tin-terrain>
- <https://blog.mastermaps.com/2013/10/terrain-building-with-threejs-part-1.html>
- <https://blog.mastermaps.com/2013/10/terrain-building-with-threejs.html>

## Public Repositories

- <https://github.com/w3reality/three-geo>
- <https://github.com/urbica/martin>
- <https://github.com/mapbox/martini>
- <https://github.com/heremaps/quantized-mesh-viewer>
- <https://github.com/turban/webgl-terrain/tree/master>
