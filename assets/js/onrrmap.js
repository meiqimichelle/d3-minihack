  var mapdataviz = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([37.8, -91], 4);

  var popup = new L.Popup({ autoPan: false });

  // statesData comes from the 'revenue2013.json' included above
  var statesLayer = L.geoJson(statesData,  {
      style: getStyle,
      onEachFeature: onEachFeature
  }).addTo(mapdataviz);

  function getStyle(feature) {
      return {
          weight: 2,
          opacity: 0.1,
          color: 'black',
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.revenue)
      };
  }

  // get color depending on revenue
  function getColor(d) {
      return d > 1000000000 ? '#8c2d04' :
          d > 100000000  ? '#cc4c02' :
          d > 10000000  ? '#ec7014' :
          d > 1000000  ? '#fe9929' :
          d > 100000   ? '#fec44f' :
          d > 10   ? '#fee391' :
          d = 0   ? '#fff7bc' :
          '#ffffe5';
  }

  function onEachFeature(feature, layer) {
      layer.on({
          mousemove: mousemove,
          mouseout: mouseout,
          click: zoomToFeature
      });
  }

  var closeTooltip;

  function mousemove(e) {
      var layer = e.target;

      popup.setLatLng(e.latlng);
      popup.setContent('<div class="marker-title">' + layer.feature.properties.name + '</div>' + 
          '<div>Revenue earned in 2013</div>' + layer.feature.properties.revenueTitle );

      if (!popup._map) popup.openOn(mapdataviz);
      window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          weight: 3,
          opacity: 0.3,
          fillOpacity: 0.9
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout(e) {
      statesLayer.resetStyle(e.target);
      closeTooltip = window.setTimeout(function() {
          mapdataviz.closePopup();
      }, 100);
  }

  function zoomToFeature(e) {
      mapdataviz.fitBounds(e.target.getBounds());
  }

  mapdataviz.legendControl.addLegend(getLegendHTML());

  function getLegendHTML() {
    var grades = [0, 10, 100000, 1000000, 10000000, 100000000, 1000000000],
    labels = [],
    from, to;

    for (var i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push(
        '<li><span class="swatch" style="background:' + getColor(from + 1) + '"></span> ' +
        from + (to ? '&ndash;' + to : '+')) + '</li>';
    }

    return '<span>Resource revenues from<br/>Federal lands by state, 2013</span><ul>' + labels.join('') + '</ul>';
  }