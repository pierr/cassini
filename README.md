cassini
===
Geographical data visualization.

## Start the server
```bash
npm start
```

## Dependencies
- Express.js to serve data
- Example client, build with brunch.io, Backbone.js, handlebars and bootstrap.

## Get some json for a country
- Get French data: http://professionnels.ign.fr/geofla#tab-3
- Use a tool in order to Convert Geo data to json geo data format.
- http://converter.mygeodata.eu/vector
- Convert it to geo.json with option: WGS84
- Use the departements.json file. 

## Css indicators
- http://cssarrowplease.com/

## Text on a svg path
http://www.w3.org/TR/SVG/text.html#TextpathLayoutRules
```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="12cm" height="3.6cm" viewBox="0 0 1000 300" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="MyPath"
          d="M 100 125 
             C 150 125 250 175 300 175
             C 350 175 450 125 500 125
             C 550 125 650 175 700 175
             C 750 175 850 125 900 125" />
  </defs>
  <desc>Example toap04 - text on a path layout rules</desc>

  <use xlink:href="#MyPath" fill="none" stroke="red"  />
  <text font-family="Verdana" font-size="60" fill="blue" letter-spacing="2" >
    <textPath xlink:href="#MyPath">
      Choose shame or get war 
    </textPath>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke="blue" stroke-width="2" />
</svg>
```
## Author
[Pierre Besson](http://pierr.github.io)

