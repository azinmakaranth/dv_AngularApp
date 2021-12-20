import { Component, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import worldLow from "@amcharts/amcharts5-geodata/worldLow";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SharedDataService } from "../service/share-data";



@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})

export class MapChartComponent {

  private root: am5.Root;
  private countryName = '';

  constructor(
      @Inject(PLATFORM_ID) private platformId : any,
      private zone: NgZone,
      private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
      
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    
    var changeUsername = (name : string) => {
        console.log("Am here, changing")
        this.sharedDataService.changeUsername( name);
    }

    // Chart code goes in here
    this.browserOnly(() => {
      // code --->
      
      let root = am5.Root.new("chartdiv");


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);


      // Create the map chart
      // https://www.amcharts.com/docs/v5/charts/map-chart/
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic(),
        layout: root.horizontalLayout,
        rotationX: -80,
        rotationY:-15
      }));


      // Create series for background fill
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
      let backgroundSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {})
      );
      backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
      });
      backgroundSeries.data.push({
        geometry:
          am5map.getGeoRectangle(90, 180, -90, -180)
      });


      // Create polygon series
      var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: worldLow,
        valueField: "value",
        calculateAggregates: true
      }));

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "[#0000][bold]{name}[/]\n [#fff]HDI : {value}",
        toggleKey: "active",
        interactive: true
      });
      
  
      polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x8ab7ff),
        max: am5.color(0x25529a),
        key: "fill"
      }]);
      
      polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        let value : any = "value"
        let name : any = "name"
        let d :any = ev.target.dataItem?.dataContext
        if (ev.target.dataItem) { 
          changeUsername(d.name)
          heatLegend.showValue(ev.target.dataItem.get(value));
        }
      });
    
      polygonSeries.data.setAll([
      {
          "id": "AF",
          "name": "Afghanistan",
          "value": 0.498
      },
      {
          "id": "AL",
          "name": "Albania",
          "value": 0.785
      },
      {
          "id": "DZ",
          "name": "Algeria",
          "value": 0.754
      },
      {
          "id": "DZ",
          "name": "Andorra",
          "value": 0.858
      },
      {
          "id": "AO",
          "name": "Angola",
          "value": 0.581
      },
      {
          "id": "AR",
          "name": "Argentina",
          "value": 0.825
      },
      {
          "id": "AM",
          "name": "Armenia",
          "value": 0.755
      },
      {
          "id": "AU",
          "name": "Australia",
          "value": 0.939
      },
      {
          "id": "AT",
          "name": "Austria",
          "value": 0.908
      },
      {
          "id": "AZ",
          "name": "Azerbaijan",
          "value": 0.757
      },
      {
          "id": "BH",
          "name": "Bahrain",
          "value": 0.846
      },
      {
          "id": "BD",
          "name": "Bangladesh",
          "value": 0.608
      },
      {
          "id": "BY",
          "name": "Belarus",
          "value": 0.808
      },
      {
          "id": "BE",
          "name": "Belgium",
          "value": 0.916
      },
      {
          "id": "BJ",
          "name": "Benin",
          "value": 0.515
      },
      {
          "id": "BT",
          "name": "Bhutan",
          "value": 0.612
      },
      {
          "id": "BO",
          "name": "Bolivia",
          "value": 0.693
      },
      {
          "id": "BA",
          "name": "Bosnia and Herzegovina",
          "value": 0.768
      },
      {
          "id": "BW",
          "name": "Botswana",
          "value": 0.717
      },
      {
          "id": "BR",
          "name": "Brazil",
          "value": 0.759
      },
      {
          "id": "BN",
          "name": "Brunei",
          "value": 0.853
      },
      {
          "id": "BG",
          "name": "Bulgaria",
          "value": 0.813
      },
      {
          "id": "BF",
          "name": "Burkina Faso",
          "value": 0.423
      },
      {
          "id": "BI",
          "name": "Burundi",
          "value": 0.417
      },
      {
          "id": "KH",
          "name": "Cambodia",
          "value": 0.582
      },
      {
          "id": "CM",
          "name": "Cameroon",
          "value": 0.556
      },
      {
          "id": "CA",
          "name": "Canada",
          "value": 0.926
      },
      {
          "id": "CV",
          "name": "Cape Verde",
          "value": 0
      },
      {
          "id": "CF",
          "name": "Central African Rep.",
          "value": 0.367
      },
      {
          "id": "TD",
          "name": "Chad",
          "value": 0.404
      },
      {
          "id": "CL",
          "name": "Chile",
          "value": 0.843
      },
      {
          "id": "CN",
          "name": "China",
          "value": 0.752
      },
      {
          "id": "CO",
          "name": "Colombia",
          "value": 0.843
      },
      {
          "id": "KM",
          "name": "Comoros",
          "value": 0.752
      },
      {
          "id": "CD",
          "name": "Congo, Dem. Rep.",
          "value": 0.457
      },
      {
          "id": "CG",
          "name": "Congo, Rep.",
          "value": 0.606
      },
      {
          "id": "CR",
          "name": "Costa Rica",
          "value": 0.794
      },
      {
          "id": "CI",
          "name": "Cote d'Ivoire",
          "value": 0.794
      },
      {
          "id": "HR",
          "name": "Croatia",
          "value": 0.831
      },
      {
          "id": "CU",
          "name": "Cuba",
          "value": 0.777
      },
      {
          "id": "CY",
          "name": "Cyprus",
          "value": 0.869
      },
      {
          "id": "CZ",
          "name": "Czech Rep.",
          "value": 0.888
      },
      {
          "id": "DK",
          "name": "Denmark",
          "value": 0.929
      },
      {
          "id": "DJ",
          "name": "Djibouti",
          "value": 0.476
      },
      {
          "id": "DO",
          "name": "Dominican Rep.",
          "value": 0.736
      },
      {
          "id": "EC",
          "name": "Ecuador",
          "value": 0.752
      },
      {
          "id": "EG",
          "name": "Egypt",
          "value": 0.696
      },
      {
          "id": "SV",
          "name": "El Salvador",
          "value": 0.674
      },
      {
          "id": "GQ",
          "name": "Equatorial Guinea",
          "value": 0.591
      },
      {
          "id": "ER",
          "name": "Eritrea",
          "value": 0.44
      },
      {
          "id": "EE",
          "name": "Estonia",
          "value": 0.871
      },
      {
          "id": "ET",
          "name": "Ethiopia",
          "value": 0.463
      },
      {
          "id": "FJ",
          "name": "Fiji",
          "value": 0.741
      },
      {
          "id": "FI",
          "name": "Finland",
          "value": 0.92
      },
      {
          "id": "FR",
          "name": "France",
          "value": 0.901
      },
      {
          "id": "GA",
          "name": "Gabon",
          "value": 0.702
      },
      {
          "id": "GM",
          "name": "Gambia",
          "value": 0.46
      },
      {
          "id": "GE",
          "name": "Georgia",
          "value": 0.78
      },
      {
          "id": "DE",
          "name": "Germany",
          "value": 0.936
      },
      {
          "id": "GH",
          "name": "Ghana",
          "value": 0.592
      },
      {
          "id": "GR",
          "name": "Greece",
          "value": 0.87
      },
      {
          "id": "GT",
          "name": "Guatemala",
          "value": 0.65
      },
      {
          "id": "GN",
          "name": "Guinea",
          "value": 0.459
      },
      {
          "id": "GW",
          "name": "Guinea-Bissau",
          "value": 0.455
      },
      {
          "id": "GY",
          "name": "Guyana",
          "value": 0.654
      },
      {
          "id": "HT",
          "name": "Haiti",
          "value": 0.498
      },
      {
          "id": "HN",
          "name": "Honduras",
          "value": 0.617
      },
      {
          "id": "HK",
          "name": "Hong Kong, China",
          "value": 0.949
      },
      {
          "id": "HU",
          "name": "Hungary",
          "value": 0.838
      },
      {
          "id": "IS",
          "name": "Iceland",
          "value": 0.935
      },
      {
          "id": "IN",
          "name": "India",
          "value": 0.64
      },
      {
          "id": "ID",
          "name": "Indonesia",
          "value": 0.694
      },
      {
          "id": "IR",
          "name": "Iran",
          "value": 0.798
      },
      {
          "id": "IQ",
          "name": "Iraq",
          "value": 0.685
      },
      {
          "id": "IE",
          "name": "Ireland",
          "value": 0.938
      },
      {
          "id": "IL",
          "name": "Israel",
          "value": 0.903
      },
      {
          "id": "IT",
          "name": "Italy",
          "value": 0.88
      },
      {
          "id": "JM",
          "name": "Jamaica",
          "value": 0.732
      },
      {
          "id": "JP",
          "name": "Japan",
          "value": 0.909
      },
      {
          "id": "JO",
          "name": "Jordan",
          "value": 0.735
      },
      {
          "id": "KZ",
          "name": "Kazakhstan",
          "value": 0.8
      },
      {
          "id": "KE",
          "name": "Kenya",
          "value": 0.59
      },
      {
          "id": "KP",
          "name": "Korea, Dem. Rep.",
          "value": 0
      },
      {
          "id": "KR",
          "name": "Korea, Rep.",
          "value": 0.903
      },
      {
          "id": "KW",
          "name": "Kuwait",
          "value": 0.803
      },
      {
          "id": "KG",
          "name": "Kyrgyzstan",
          "value": 0.672
      },
      {
          "id": "LA",
          "name": "Laos",
          "value": 0.601
      },
      {
          "id": "LV",
          "name": "Latvia",
          "value": 0.847
      },
      {
          "id": "LB",
          "name": "Lebanon",
          "value": 0.757
      },
      {
          "id": "LS",
          "name": "Lesotho",
          "value": 0.52
      },
      {
          "id": "LR",
          "name": "Liberia",
          "value": 0.435
      },
      {
          "id": "LY",
          "name": "Libya",
          "value": 0.706
      },
      {
          "id": "LT",
          "name": "Lithuania",
          "value": 0.858
      },
      {
          "id": "LU",
          "name": "Luxembourg",
          "value": 0.904
      },
      {
          "id": "MK",
          "name": "Macedonia, FYR",
          "value": 0
      },
      {
          "id": "MG",
          "name": "Madagascar",
          "value": 0.519
      },
      {
          "id": "MW",
          "name": "Malawi",
          "value": 0.477
      },
      {
          "id": "MY",
          "name": "Malaysia",
          "value": 0.802
      },
      {
          "id": "ML",
          "name": "Mali",
          "value": 0.427
      },
      {
          "id": "MR",
          "name": "Mauritania",
          "value": 0.52
      },
      {
          "id": "MU",
          "name": "Mauritius",
          "value": 0.79
      },
      {
          "id": "MX",
          "name": "Mexico",
          "value": 0.774
      },
      {
          "id": "MD",
          "name": "Moldova",
          "value": 0.7
      },
      {
          "id": "MN",
          "name": "Mongolia",
          "value": 0.741
      },
      {
          "id": "ME",
          "name": "Montenegro",
          "value": 0.814
      },
      {
          "id": "MA",
          "name": "Morocco",
          "value": 0.667
      },
      {
          "id": "MZ",
          "name": "Mozambique",
          "value": 0.437
      },
      {
          "id": "MM",
          "name": "Myanmar",
          "value": 0.578
      },
      {
          "id": "NA",
          "name": "Namibia",
          "value": 0.647
      },
      {
          "id": "NP",
          "name": "Nepal",
          "value": 0.574
      },
      {
          "id": "NL",
          "name": "Netherlands",
          "value": 0.931
      },
      {
          "id": "NZ",
          "name": "New Zealand",
          "value": 0.917
      },
      {
          "id": "NI",
          "name": "Nicaragua",
          "value": 0.658
      },
      {
          "id": "NE",
          "name": "Niger",
          "value": 0.354
      },
      {
          "id": "NG",
          "name": "Nigeria",
          "value": 0.532
      },
      {
          "id": "NO",
          "name": "Norway",
          "value": 0.953
      },
      {
          "id": "OM",
          "name": "Oman",
          "value": 0.821
      },
      {
          "id": "PK",
          "name": "Pakistan",
          "value": 0.562
      },
      {
          "id": "PA",
          "name": "Panama",
          "value": 0.789
      },
      {
          "id": "PG",
          "name": "Papua New Guinea",
          "value": 0.544
      },
      {
          "id": "PY",
          "name": "Paraguay",
          "value": 0.702
      },
      {
          "id": "PE",
          "name": "Peru",
          "value": 0.75
      },
      {
          "id": "PH",
          "name": "Philippines",
          "value": 0.699
      },
      {
          "id": "PL",
          "name": "Poland",
          "value": 0.865
      },
      {
          "id": "PT",
          "name": "Portugal",
          "value": 0.847
      },
      {
          "id": "PR",
          "name": "Puerto Rico",
          "value": 0
      },
      {
          "id": "QA",
          "name": "Qatar",
          "value": 0.856
      },
      {
          "id": "RO",
          "name": "Romania",
          "value": 0.811
      },
      {
          "id": "RU",
          "name": "Russia",
          "value": 0.816
      },
      {
          "id": "RW",
          "name": "Rwanda",
          "value": 0.524
      },
      {
          "id": "SA",
          "name": "Saudi Arabia",
          "value": 0.853
      },
      {
          "id": "SN",
          "name": "Senegal",
          "value": 0.505
      },
      {
          "id": "RS",
          "name": "Serbia",
          "value": 0.787
      },
      {
          "id": "SL",
          "name": "Sierra Leone",
          "value": 0.419
      },
      {
          "id": "SG",
          "name": "Singapore",
          "value": 0.932
      },
      {
          "id": "SK",
          "name": "Slovak Republic",
          "value": 0.855
      },
      {
          "id": "SI",
          "name": "Slovenia",
          "value": 0.896
      },
      {
          "id": "SB",
          "name": "Solomon Islands",
          "value": 0.546
      },
      {
          "id": "SO",
          "name": "Somalia",
          "value": 0
      },
      {
          "id": "ZA",
          "name": "South Africa",
          "value": 0.699
      },
      {
          "id": "ES",
          "name": "Spain",
          "value": 0.891
      },
      {
          "id": "LK",
          "name": "Sri Lanka",
          "value": 0.77
      },
      {
          "id": "SD",
          "name": "Sudan",
          "value": 0.502
      },
      {
          "id": "SR",
          "name": "Suriname",
          "value": 0.72
      },
      {
          "id": "SZ",
          "name": "Swaziland",
          "value": 0
      },
      {
          "id": "SE",
          "name": "Sweden",
          "value": 0.933
      },
      {
          "id": "CH",
          "name": "Switzerland",
          "value": 0.944
      },
      {
          "id": "SY",
          "name": "Syria",
          "value": 0.536
      },
      {
          "id": "TW",
          "name": "Taiwan",
          "value": 0
      },
      {
          "id": "TJ",
          "name": "Tajikistan",
          "value": 0.65
      },
      {
          "id": "TZ",
          "name": "Tanzania",
          "value": 0.538
      },
      {
          "id": "TH",
          "name": "Thailand",
          "value": 0.755
      },
      {
          "id": "TG",
          "name": "Togo",
          "value": 0.503
      },
      {
          "id": "TT",
          "name": "Trinidad and Tobago",
          "value": 0.784
      },
      {
          "id": "TN",
          "name": "Tunisia",
          "value": 0.735
      },
      {
          "id": "TR",
          "name": "Turkey",
          "value": 0.791
      },
      {
          "id": "TM",
          "name": "Turkmenistan",
          "value": 0.706
      },
      {
          "id": "UG",
          "name": "Uganda",
          "value": 0.516
      },
      {
          "id": "UA",
          "name": "Ukraine",
          "value": 0.751
      },
      {
          "id": "AE",
          "name": "United Arab Emirates",
          "value": 0.863
      },
      {
          "id": "GB",
          "name": "United Kingdom",
          "value": 0.922
      },
      {
          "id": "US",
          "name": "United States",
          "value": 0.924
      },
      {
          "id": "UY",
          "name": "Uruguay",
          "value": 0.804
      },
      {
          "id": "UZ",
          "name": "Uzbekistan",
          "value": 0.71
      },
      {
          "id": "VE",
          "name": "Venezuela",
          "value": 0.761
      },
      {
          "id": "PS",
          "name": "West Bank and Gaza",
          "value": 0.1
      },
      {
          "id": "VN",
          "name": "Vietnam",
          "value": 0.694
      },
      {
          "id": "YE",
          "name": "Yemen, Rep.",
          "value": 0.452
      },
      {
          "id": "ZM",
          "name": "Zambia",
          "value": 0.588
      },
      {
          "id": "ZW",
          "name": "Zimbabwe",
          "value": 0.535
      },
      {
          "id": "ZW",
          "name": "Zimbabwe",
          "value": 0.535
      }
  
  ]);
      
      var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0x8ab7ff),
        endColor: am5.color(0x25529a),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5,
        height : 100
      }));
      

      heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
      });
      
      heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
      });
      
      // change this to template when possible
      polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
      });
      
      // Set up events
      let previousPolygon : any;

      polygonSeries.events.on("click", function (ev) {
        let name : any = "value"
        if (ev.target.dataItem) { 
            console.log(ev.target.dataItem.get(name))
        }
        console.log(ev)
        console.log(chart.invert(ev.point).latitude)
              
              chart.animate({ key: "rotationX", to: -chart.invert(ev.point).longitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
              chart.animate({ key: "rotationY", to: -chart.invert(ev.point).latitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
                
      });
      // <---- code
     
      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up root element when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

}

