import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5radar from "@amcharts/amcharts5/radar";

@Component({
  selector: 'app-river-graph',
  templateUrl: './river-graph.component.html',
  styleUrls: ['./river-graph.component.css']
})


export class RiverGraphComponent {
  private root: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId : any, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chart-river");

      // Create custom theme
      // https://www.amcharts.com/docs/v5/concepts/themes/#Quick_custom_theme
      const myTheme = am5.Theme.new(root);
      myTheme.rule("Label").set("fontSize", 11);
      myTheme.rule("Grid").set("strokeOpacity", 0.06);

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

      // Data
      let temperatures : any = {
        "EUROPE": [
          ["Norway", 0.849,0.854,0.861,0.869,0.883,0.881,0.887,0.893,0.904,0.909,0.915,0.914,0.917,0.923,0.932,0.931,0.934,0.936,0.937,0.937,0.94,0.942,0.941,0.944,0.944,0.947,0.95,0.954,0.956,0.957],
          ["Switzerland",0.84,0.842,0.845,0.849,0.852,0.856,0.863,0.872,0.882,0.889,0.898,0.9,0.899,0.905,0.909,0.914,0.92,0.923,0.925,0.935,0.941,0.941,0.944,0.946,0.942,0.947,0.947,0.949,0.955,0.955],
          ["Ireland", 0.773,0.777,0.782,0.791,0.798,0.805,0.811,0.819,0.851,0.859,0.867,0.873,0.881,0.889,0.898,0.904,0.906,0.909,0.911,0.906,0.901,0.902,0.908,0.917,0.928,0.935,0.943,0.947,0.951,0.955],
          ["Germany", 0.808,0.816,0.821,0.831,0.837,0.842,0.846,0.851,0.86,0.868,0.876,0.884,0.89,0.896,0.907,0.908,0.918,0.921,0.924,0.924,0.927,0.933,0.934,0.935,0.937,0.938,0.941,0.943,0.946,0.947],
          ["Iceland", 0.807,0.82,0.823,0.824,0.829,0.831,0.836,0.846,0.855,0.86,0.867,0.872,0.881,0.887,0.891,0.896,0.899,0.905,0.899,0.898,0.898,0.907,0.915,0.927,0.931,0.934,0.941,0.943,0.946,0.949],
          ["Sweden", 0.821,0.823,0.826,0.846,0.855,0.862,0.869,0.88,0.894,0.899,0.903,0.905,0.908,0.913,0.901,0.904,0.908,0.91,0.907,0.905,0.911,0.912,0.914,0.933,0.935,0.938,0.94,0.942,0.943,0.945],
          ["Netherlands",0.836,0.84,0.841,0.846,0.871,0.868,0.872,0.872,0.874,0.877,0.882,0.886,0.885,0.89,0.892,0.897,0.903,0.91,0.913,0.912,0.917,0.928,0.928,0.93,0.932,0.934,0.936,0.939,0.942,0.944],
          ["Denmark", 0.806,0.811,0.815,0.822,0.831,0.837,0.844,0.85,0.856,0.868,0.87,0.883,0.89,0.901,0.905,0.91,0.912,0.911,0.917,0.914,0.917,0.93,0.931,0.933,0.935,0.933,0.935,0.936,0.939,0.94],
          ["UK",0.781,0.794,0.807,0.82,0.833,0.846,0.851,0.856,0.862,0.868,0.874,0.878,0.881,0.885,0.892,0.897,0.896,0.899,0.903,0.906,0.912,0.906,0.904,0.921,0.925,0.923,0.924,0.926,0.928,0.932],
          ["Finland", 0.79,0.793,0.801,0.805,0.815,0.823,0.83,0.838,0.846,0.854,0.864,0.871,0.874,0.877,0.904,0.908,0.912,0.915,0.917,0.912,0.916,0.92,0.921,0.928,0.928,0.93,0.932,0.935,0.937,0.938],
        ],
        "AFRICA": [
          ["Seychelles",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.714,0.71,0.711,0.714,0.716,0.732,0.722,0.745,0.75,0.754,0.764,0.767,0.755,0.775,0.775,0.786,0.787,0.789,0.79,0.796 ],
          ["Mauritius",0.624,0.63,0.637,0.643,0.647,0.653,0.656,0.661,0.667,0.672,0.678,0.687,0.692,0.701,0.708,0.717,0.724,0.731,0.738,0.745,0.751,0.76,0.771,0.779,0.789,0.789,0.794,0.797,0.801,0.804 ],
          ["Algeria", 0.572,0.576,0.582,0.586,0.59,0.595,0.602,0.611,0.621,0.629,0.637,0.647,0.657,0.667,0.677,0.685,0.69,0.7,0.702,0.711,0.721,0.728,0.728,0.729,0.736,0.74,0.743,0.745,0.746,0.748], 
          ["South Africa", 0.627,0.634,0.642,0.648,0.65,0.653,0.65,0.646,0.64,0.635,0.631,0.611,0.619,0.619,0.619,0.622,0.626,0.632,0.646,0.655,0.664,0.665,0.675,0.685,0.693,0.701,0.703,0.705,0.707,0.709], 
          ["Tunisia", 0.567,0.573,0.581,0.587,0.598,0.605,0.614,0.621,0.632,0.643,0.651,0.659,0.664,0.671,0.681,0.688,0.694,0.7,0.707,0.709,0.716,0.718,0.72,0.723,0.726,0.729,0.731,0.734,0.738,0.74],  
          ["Botswana",0.573,0.579,0.577,0.576,0.57,0.576,0.575,0.577,0.58,0.582,0.581,0.582,0.579,0.586,0.592,0.601,0.615,0.628,0.641,0.65,0.663,0.677,0.689,0.701,0.711,0.717,0.72,0.726,0.73,0.735 ], 
          ["Libya", 0.724,0.734,0.74,0.744,0.75,0.754,0.76,0.767,0.77,0.775,0.78,0.785,0.79,0.797,0.798,0.8,0.8,0.8,0.8,0.799,0.798,0.764,0.789,0.761,0.728,0.697,0.687,0.714,0.721,0.724], 
          ["Gabon",0.613,0.618,0.617,0.619,0.622,0.624,0.626,0.628,0.63,0.625,0.621,0.624,0.626,0.627,0.626,0.632,0.632,0.637,0.639,0.646,0.652,0.657,0.666,0.673,0.682,0.685,0.69,0.694,0.697,0.703 ], 
          ["Egypt", 0.548,0.552,0.559,0.564,0.571,0.578,0.585,0.592,0.594,0.607,0.613,0.618,0.622,0.625,0.631,0.637,0.645,0.653,0.66,0.662,0.668,0.671,0.677,0.683,0.685,0.691,0.696,0.698,0.701,0.707], 
          ["Morocco", 0.457,0.463,0.467,0.473,0.484,0.487,0.498,0.502,0.509,0.519,0.529,0.541,0.551,0.562,0.572,0.58,0.586,0.594,0.602,0.608,0.616,0.626,0.635,0.644,0.652,0.658,0.667,0.673,0.68,0.686],
        ],
        "AMERICA": [
          ["Canada", 0.85,0.854,0.857,0.855,0.859,0.862,0.864,0.863,0.861,0.864,0.867,0.871,0.877,0.882,0.888,0.894,0.898,0.896,0.898,0.898,0.901,0.903,0.906,0.913,0.918,0.921,0.923,0.926,0.928,0.929],
          ["United States", 0.865,0.867,0.872,0.877,0.88,0.883,0.884,0.886,0.889,0.89,0.886,0.889,0.891,0.894,0.897,0.9,0.903,0.906,0.911,0.912,0.916,0.919,0.92,0.918,0.92,0.921,0.922,0.924,0.925,0.926],
          ["Chile", 0.706,0.715,0.722,0.715,0.72,0.728,0.735,0.742,0.743,0.75,0.756,0.767,0.769,0.776,0.785,0.791,0.791,0.804,0.814,0.822,0.803,0.815,0.821,0.826,0.837,0.842,0.845,0.847,0.849,0.851], 
          ["Colombia",0.603,0.606,0.617,0.624,0.631,0.637,0.647,0.655,0.662,0.662,0.666,0.668,0.671,0.67,0.684,0.689,0.698,0.711,0.718,0.72,0.729,0.734,0.739,0.742,0.753,0.756,0.76,0.763,0.764,0.767 ], 
          ["Argentina", 0.718,0.725,0.73,0.735,0.739,0.741,0.748,0.757,0.763,0.774,0.781,0.786,0.781,0.786,0.787,0.788,0.812,0.817,0.821,0.821,0.829,0.835,0.834,0.835,0.836,0.84,0.839,0.843,0.842,0.845],  
          ["Bahamas",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.797,0.798,0.8,0.799,0.8,0.801,0.804,0.804,0.804,0.803,0.805,0.805,0.807,0.806,0.805,0.808,0.81,0.812,0.812,0.814 ], 
          ["Uruguay", 0.694,0.699,0.702,0.705,0.711,0.712,0.718,0.729,0.737,0.739,0.743,0.747,0.749,0.752,0.755,0.758,0.763,0.765,0.769,0.775,0.782,0.789,0.793,0.8,0.803,0.806,0.81,0.814,0.816,0.817], 
          ["Barbados", 0.732,0.733,0.733,0.737,0.742,0.747,0.751,0.757,0.753,0.76,0.771,0.77,0.774,0.778,0.782,0.787,0.791,0.796,0.8,0.8,0.797,0.799,0.808,0.807,0.808,0.809,0.811,0.81,0.81,0.814], 
          ["Costa Rica", 0.665,0.672,0.68,0.687,0.692,0.697,0.701,0.707,0.713,0.717,0.721,0.725,0.728,0.731,0.735,0.738,0.745,0.753,0.761,0.762,0.765,0.778,0.783,0.788,0.796,0.797,0.801,0.804,0.808,0.81], 
          ["Panama", 0.675,0.68,0.688,0.696,0.699,0.704,0.71,0.716,0.724,0.729,0.735,0.738,0.744,0.746,0.751,0.754,0.759,0.767,0.771,0.772,0.774,0.78,0.786,0.791,0.795,0.799,0.805,0.811,0.812,0.815],
        ],
        "ASIA": [
          ["Singapore", 0.721,0.731,0.742,0.753,0.764,0.774,0.783,0.794,0.799,0.81,0.821,0.825,0.833,0.842,0.849,0.874,0.881,0.882,0.888,0.888,0.909,0.913,0.918,0.921,0.926,0.931,0.935,0.933,0.936,0.938],
          ["Japan",0.818,0.823,0.826,0.831,0.837,0.842,0.847,0.85,0.849,0.852,0.858,0.861,0.864,0.867,0.871,0.875,0.879,0.882,0.883,0.882,0.887,0.892,0.897,0.902,0.906,0.908,0.912,0.915,0.917,0.919 ],
          ["South Korea",0.732,0.743,0.75,0.76,0.772,0.783,0.793,0.805,0.802,0.813,0.823,0.829,0.837,0.844,0.853,0.86,0.868,0.875,0.88,0.877,0.889,0.895,0.898,0.901,0.904,0.907,0.91,0.912,0.914,0.916 ],
          ["United Arab Emirates", 0.723,0.735,0.738,0.745,0.755,0.764,0.765,0.766,0.769,0.776,0.782,0.787,0.792,0.798,0.803,0.809,0.814,0.819,0.821,0.819,0.82,0.826,0.832,0.838,0.847,0.859,0.864,0.881,0.889,0.89], 
          ["Qatar", 0.75,0.747,0.751,0.762,0.773,0.782,0.794,0.806,0.81,0.814,0.816,0.817,0.822,0.83,0.832,0.838,0.835,0.838,0.843,0.841,0.834,0.84,0.854,0.842,0.835,0.839,0.845,0.848,0.845,0.848], 
          ["Brunei",0.767,0.771,0.777,0.781,0.786,0.79,0.793,0.794,0.794,0.8,0.802,0.803,0.807,0.813,0.818,0.822,0.825,0.825,0.825,0.827,0.827,0.831,0.839,0.839,0.838,0.838,0.839,0.838,0.836,0.838 ],  
          ["Saudi Arabia",0.697,0.705,0.71,0.714,0.718,0.722,0.726,0.731,0.736,0.738,0.743,0.746,0.748,0.755,0.764,0.77,0.777,0.783,0.792,0.796,0.809,0.823,0.835,0.845,0.852,0.859,0.859,0.852,0.854,0.854 ], 
          ["Bahrain", 0.749,0.755,0.76,0.769,0.772,0.778,0.782,0.783,0.787,0.789,0.795,0.796,0.795,0.797,0.796,0.795,0.797,0.799,0.8,0.798,0.8,0.801,0.808,0.815,0.82,0.848,0.853,0.854,0.852,0.852], 
          ["Oman", 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.693,0.705,0.714,0.724,0.731,0.736,0.74,0.752,0.77,0.777,0.782,0.782,0.791,0.799,0.802,0.814,0.815,0.819,0.813,0.813], 
          ["Kuwait", 0.705,0.665,0.659,0.688,0.718,0.748,0.772,0.775,0.78,0.781,0.781,0.778,0.78,0.788,0.789,0.783,0.788,0.788,0.79,0.789,0.788,0.792,0.796,0.793,0.796,0.801,0.804,0.805,0.807,0.806], 
          //["Malaysia", ],
        ],
        "OCEANIA": [
          ["Australia",0.871,0.871,0.873,0.876,0.879,0.888,0.89,0.893,0.896,0.9,0.903,0.905,0.907,0.909,0.911,0.906,0.909,0.912,0.926,0.928,0.93,0.932,0.937,0.931,0.933,0.938,0.939,0.941,0.943,0.944 ],
          ["New Zealand",0.826,0.827,0.832,0.844,0.853,0.859,0.862,0.868,0.87,0.872,0.876,0.88,0.888,0.891,0.894,0.896,0.898,0.901,0.902,0.905,0.906,0.909,0.911,0.914,0.916,0.921,0.924,0.926,0.928,0.931 ],
          ["Palau", 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.744,0.747,0.751,0.755,0.758,0.77,0.774,0.78,0.781,0.782,0.786,0.793,0.795,0.821,0.825,0.82,0.822,0.822,0.822,0.826],
          ["Fiji", 0.662,0.669,0.672,0.675,0.68,0.686,0.688,0.687,0.687,0.692,0.695,0.698,0.7,0.702,0.709,0.705,0.708,0.711,0.712,0.715,0.715,0.719,0.722,0.728,0.733,0.737,0.738,0.74,0.742,0.743],
          ["Dominican Republic", 0.599,0.603,0.612,0.619,0.624,0.63,0.636,0.643,0.648,0.654,0.659,0.663,0.668,0.669,0.672,0.681,0.688,0.694,0.698,0.7,0.706,0.71,0.714,0.718,0.73,0.738,0.743,0.746,0.751,0.756],
          ["Tonga", 0.654,0.659,0.661,0.665,0.672,0.675,0.675,0.675,0.678,0.679,0.675,0.679,0.684,0.693,0.682,0.682,0.683,0.686,0.688,0.693,0.699,0.704,0.708,0.708,0.707,0.72,0.722,0.723,0.723,0.725],
          ["Samoa", 0.633,0.634,0.634,0.639,0.618,0.624,0.633,0.635,0.641,0.646,0.651,0.659,0.659,0.665,0.673,0.677,0.68,0.686,0.687,0.691,0.698,0.701,0.698,0.7,0.703,0.707,0.71,0.71,0.709,0.715],
          ["Marshall Islands", 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.699,0.702,0.704],
          ["Kiribati", 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.553,0.569,0.569,0.574,0.572,0.589,0.586,0.587,0.59,0.588,0.593,0.591,0.6,0.608,0.617,0.625,0.622,0.627,0.628,0.63],
          ["Micronesia", 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.546,0.553,0.559,0.565,0.57,0.577,0.583,0.589,0.593,0.596,0.601,0.604,0.605,0.605,0.604,0.612,0.614,0.616,0.618,0.62],
        ]
      }

      // Modify defaults
      //root.numberFormatter.set("numberFormat", "+#.0°C|#.0°C|0.0°C");

      let startYear = 1990;
      let endYear = 2019;
      let currentYear = 1990;

      let div = document.getElementById("chart-river");

      let colorSet = am5.ColorSet.new(root, {});


      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      let chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(30),
        radius: am5.percent(60),
        startAngle: 270 - 170,
        endAngle: 270 + 170,
        
      }));


      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
      let cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
        radius: am5.percent(40),
        innerRadius: -25
      }));
      cursor.lineY.set("visible", false);


      // Create axes and their renderers
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
      let xRenderer = am5radar.AxisRendererCircular.new(root, {
        minGridDistance: 5
      });

      xRenderer.labels.template.setAll({
        radius: 10,
        textType: "radial",
        centerY: am5.p50
      });

      let yRenderer = am5radar.AxisRendererRadial.new(root, {
        axisAngle: 90
      });

      yRenderer.labels.template.setAll({
        centerX: am5.p50
      });

      let categoryAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "country",
        renderer: xRenderer
      }));

      let valueAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 1,
        extraMax: 0.001,
        renderer: yRenderer
      }));


      // Create series
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
      let series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        calculateAggregates: true,
        name: "Series",
        xAxis: categoryAxis,
        yAxis: valueAxis,
        valueYField: "value" + currentYear,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{categoryX}: {valueY}"
        })
      }));

      series.columns.template.set("strokeOpacity", 0);


      // Set up heat rules
      // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
      series.set("heatRules", [{
        target: series.columns.template,
        key: "fill",
        min: am5.color(0x673AB7),
        max: am5.color(0xF44336),
        dataField: "valueY"
      }]);

      var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0x673AB7),
        endColor: am5.color(0xF44336),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5,
        height:250,
        layout: root.horizontalLayout
      }));

      // Add scrollbars
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set("scrollbarX", am5.Scrollbar.new(root, { 
        orientation: "vertical",
        
       }));
      
       let scrollbarX : any = chart.get("scrollbarX");

       scrollbarX.thumb.setAll({
         
         fillOpacity: 0.001
       });
       
      //chart.set("scrollbarY", am5.Scrollbar.new(root, { orientation: "vertical" }));

      // Add year label
      let yearLabel = chart.radarContainer.children.push(am5.Label.new(root, {
        fontSize: "1.5em",
        text: currentYear.toString(),
        centerX: am5.p50,
        centerY: am5.p50,
        fill: am5.color(0x673AB7)
      }));


      // Generate and set data
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
      let data = generateRadarData();
      series.data.setAll(data);
      categoryAxis.data.setAll(data);

      series.appear(1000);
      chart.appear(1000, 100);

      function generateRadarData() {
        let data : any = [];
        let i = 0;
        for (var continent in temperatures) {
          let continentData = temperatures[continent];

          continentData.forEach(function(country : any) {
            let rawDataItem : any = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
              rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
          });

          createRange(continent, continentData, i);
          i++;

        }
        return data;
      }


      function createRange(name : any, continentData : any, index : any) {
        let axisRange : any = categoryAxis.createAxisRange(categoryAxis.makeDataItem({above:true}));
        axisRange.get("label").setAll({ text: name });
        // first country
        axisRange.set("category", continentData[0][0]);
        // last country
        axisRange.set("endCategory", continentData[continentData.length - 1][0]);

        // every 3rd color for a bigger contrast
        let fill = axisRange.get("axisFill");
        fill.setAll({
          toggleKey: "active",
          cursorOverStyle: "pointer",
          fill: colorSet.getIndex(index * 3),
          visible: true,
          innerRadius: -25
        });
        axisRange.get("grid").set("visible", false);

        let label = axisRange.get("label");
        label.setAll({
          fill: am5.color(0xffffff),
          textType: "circular",
          radius: -16
        });

        fill.events.on("click", function(event  : any) {
          let dataItem = event.target.dataItem;
          if (event.target.get("active")) {
            categoryAxis.zoom(0, 1);
          }
          else {
            categoryAxis.zoomToCategories(dataItem.get("category"), dataItem.get("endCategory"));
          }
        });
      }


      // Create controls
      let container = chart.children.push(am5.Container.new(root, {
        y: am5.percent(95),
        centerX: am5.p50,
        x: am5.p50,
        width: am5.percent(80),
        layout: root.horizontalLayout
      }));

      let playButton = container.children.push(am5.Button.new(root, {
        themeTags: ["play"],
        centerY: am5.p50,
        marginRight: 15,
        icon: am5.Graphics.new(root, {
          themeTags: ["icon"]
        })
      }));

      playButton.events.on("click", function () {
        if (playButton.get("active")) {
          slider.set("start", slider.get("start") + 0.0001);
        }
        else {
          slider.animate({
            key: "start",
            to: 1,
            duration: 15000 * (1 - slider.get("start"))
          });
        }
      })

      let slider  : any = container.children.push(am5.Slider.new(root, {
        orientation: "horizontal",
        start: 0,
        centerY: am5.p50
      }));

      slider.on("start", function (start  : any) {
        if (start === 1) {
          playButton.set("active", false);
        }
      });

      slider.events.on("rangechanged", function () {
        updateRadarData(startYear + Math.round(slider.get("start", 0) * (endYear - startYear)));
      });
      chart.leftAxesContainer.children.push(scrollbarX);
      chart.rightAxesContainer.children.push(heatLegend)
      chart.bottomAxesContainer.children.push(playButton);
      chart.bottomAxesContainer.children.push(slider);
      
      function updateRadarData(year  : any) {
        if (currentYear != year) {
          currentYear = year;
          yearLabel.set("text", currentYear.toString());
          am5.array.each(series.dataItems, function (dataItem : any) {
            let newValue = dataItem.dataContext["value" + year];
            dataItem.set("valueY", newValue);
            dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
          });
        }
      }

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
