import { Component, Inject, NgZone, Output, PLATFORM_ID } from "@angular/core";
import { getLocaleDateFormat, isPlatformBrowser } from "@angular/common";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5pie from "@amcharts/amcharts5/Percent";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SharedDataService } from "../service/share-data";

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.css']
})
export class RadialChartComponent  {


  private root: am5.Root;
  public countryName : string = '';

  constructor(@Inject(PLATFORM_ID) private platformId : any, private zone: NgZone, private sharedDataService : SharedDataService) {
  
  }
    
  getCountryName() {
      return this.countryName
  }
  ngOnInit() {
    this.sharedDataService.username.subscribe(result => {
        console.log('Inside ngOnit', result)
        this.countryName = result
        if (this.root) {
            this.root.dispose();
            const output = document.getElementById('countryName')
            if( output) {
                output.innerHTML = "Country : " + this.countryName
            }
            
            this.root = this.createChart();

        }
        
      });  

  }
  getFilteredData = ()=> {
    let data = [
        {
            country: "Afghanistan",
            cat: "World Happiness Report Score",
            val :2.66
        },
        {
            country: "Afghanistan",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Afghanistan",
            cat: "Health Expenditure",
            val :10.3
        },
        {
            country: "Afghanistan",
            cat: "Education Expenditure",
            val :3.8
        },
        {
            country: "Afghanistan",
            cat: "Unemployment",
            val :8.5
        },
        {
            country: "Afghanistan",
            cat: "Government Expenditure",
            val :26.3
        },
        {
            country: "Afghanistan",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Afghanistan",
            cat: "Government Integrity",
            val :26.2
        },
        {
            country: "Afghanistan",
            cat: "Property Rights Score",
            val :17.9
        },
        {
            country: "Afghanistan",
            cat: "Tax Burden Score",
            val :91.8
        },
        {
            country: "Afghanistan",
            cat: "Overall Economic Freedom Score",
            val :51.3
        },
        {
            country: "Afghanistan",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Afghanistan",
            cat: "Women Representation in Govt.",
            val :27.7
        },
        {
            country: "Albania",
            cat: "World Happiness Report Score",
            val :4.64
        },
        {
            country: "Albania",
            cat: "GDP Per Capita",
            val :0.33
        },
        {
            country: "Albania",
            cat: "Health Expenditure",
            val :6.8
        },
        {
            country: "Albania",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Albania",
            cat: "Unemployment",
            val :16.3
        },
        {
            country: "Albania",
            cat: "Government Expenditure",
            val :30.1
        },
        {
            country: "Albania",
            cat: "Judicial Effectiveness Score",
            val :25.4
        },
        {
            country: "Albania",
            cat: "Government Integrity",
            val :39.9
        },
        {
            country: "Albania",
            cat: "Property Rights Score",
            val :54.1
        },
        {
            country: "Albania",
            cat: "Tax Burden Score",
            val :85.1
        },
        {
            country: "Albania",
            cat: "Overall Economic Freedom Score",
            val :64.5
        },
        {
            country: "Albania",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Albania",
            cat: "Women Representation in Govt.",
            val :27.9
        },
        {
            country: "Algeria",
            cat: "World Happiness Report Score",
            val :5.25
        },
        {
            country: "Algeria",
            cat: "GDP Per Capita",
            val :0.41
        },
        {
            country: "Algeria",
            cat: "Health Expenditure",
            val :7.1
        },
        {
            country: "Algeria",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Algeria",
            cat: "Unemployment",
            val :11.2
        },
        {
            country: "Algeria",
            cat: "Government Expenditure",
            val :42.5
        },
        {
            country: "Algeria",
            cat: "Judicial Effectiveness Score",
            val :35.2
        },
        {
            country: "Algeria",
            cat: "Government Integrity",
            val :29
        },
        {
            country: "Algeria",
            cat: "Property Rights Score",
            val :27.8
        },
        {
            country: "Algeria",
            cat: "Tax Burden Score",
            val :74
        },
        {
            country: "Algeria",
            cat: "Overall Economic Freedom Score",
            val :44.7
        },
        {
            country: "Algeria",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Algeria",
            cat: "Women Representation in Govt.",
            val :25.8
        },
        {
            country: "Andorra",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Health Expenditure",
            val :12
        },
        {
            country: "Andorra",
            cat: "Education Expenditure",
            val :3
        },
        {
            country: "Andorra",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "Women Representation in Govt.",
            val :32.1
        },
        {
            country: "Angola",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Angola",
            cat: "GDP Per Capita",
            val :0.19
        },
        {
            country: "Angola",
            cat: "Health Expenditure",
            val :2.9
        },
        {
            country: "Angola",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Angola",
            cat: "Unemployment",
            val :6.6
        },
        {
            country: "Angola",
            cat: "Government Expenditure",
            val :32.1
        },
        {
            country: "Angola",
            cat: "Judicial Effectiveness Score",
            val :25.4
        },
        {
            country: "Angola",
            cat: "Government Integrity",
            val :18.9
        },
        {
            country: "Angola",
            cat: "Property Rights Score",
            val :36
        },
        {
            country: "Angola",
            cat: "Tax Burden Score",
            val :82.4
        },
        {
            country: "Angola",
            cat: "Overall Economic Freedom Score",
            val :48.6
        },
        {
            country: "Angola",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Angola",
            cat: "Women Representation in Govt.",
            val :38.2
        },
        {
            country: "Antigua & Barbuda",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Health Expenditure",
            val :4.8
        },
        {
            country: "Antigua & Barbuda",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "Women Representation in Govt.",
            val :11.1
        },
        {
            country: "Argentina",
            cat: "World Happiness Report Score",
            val :6.04
        },
        {
            country: "Argentina",
            cat: "GDP Per Capita",
            val :0.55
        },
        {
            country: "Argentina",
            cat: "Health Expenditure",
            val :2.9
        },
        {
            country: "Argentina",
            cat: "Education Expenditure",
            val :5.4
        },
        {
            country: "Argentina",
            cat: "Unemployment",
            val :6.6
        },
        {
            country: "Argentina",
            cat: "Government Expenditure",
            val :38.5
        },
        {
            country: "Argentina",
            cat: "Judicial Effectiveness Score",
            val :44.5
        },
        {
            country: "Argentina",
            cat: "Government Integrity",
            val :32.6
        },
        {
            country: "Argentina",
            cat: "Property Rights Score",
            val :40.8
        },
        {
            country: "Argentina",
            cat: "Tax Burden Score",
            val :65.7
        },
        {
            country: "Argentina",
            cat: "Overall Economic Freedom Score",
            val :52.3
        },
        {
            country: "Argentina",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Argentina",
            cat: "Women Representation in Govt.",
            val :38.9
        },
        {
            country: "Armenia",
            cat: "World Happiness Report Score",
            val :4.29
        },
        {
            country: "Armenia",
            cat: "GDP Per Capita",
            val :0.24
        },
        {
            country: "Armenia",
            cat: "Health Expenditure",
            val :10.1
        },
        {
            country: "Armenia",
            cat: "Education Expenditure",
            val :2.2
        },
        {
            country: "Armenia",
            cat: "Unemployment",
            val :16.8
        },
        {
            country: "Armenia",
            cat: "Government Expenditure",
            val :25.8
        },
        {
            country: "Armenia",
            cat: "Judicial Effectiveness Score",
            val :47.4
        },
        {
            country: "Armenia",
            cat: "Government Integrity",
            val :40.5
        },
        {
            country: "Armenia",
            cat: "Property Rights Score",
            val :55.3
        },
        {
            country: "Armenia",
            cat: "Tax Burden Score",
            val :84.7
        },
        {
            country: "Armenia",
            cat: "Overall Economic Freedom Score",
            val :68.7
        },
        {
            country: "Armenia",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Armenia",
            cat: "Women Representation in Govt.",
            val :18.1
        },
        {
            country: "Australia",
            cat: "World Happiness Report Score",
            val :7.26
        },
        {
            country: "Australia",
            cat: "GDP Per Capita",
            val :1.35
        },
        {
            country: "Australia",
            cat: "Health Expenditure",
            val :9.4
        },
        {
            country: "Australia",
            cat: "Education Expenditure",
            val :5.2
        },
        {
            country: "Australia",
            cat: "Unemployment",
            val :5.7
        },
        {
            country: "Australia",
            cat: "Government Expenditure",
            val :36
        },
        {
            country: "Australia",
            cat: "Judicial Effectiveness Score",
            val :93.4
        },
        {
            country: "Australia",
            cat: "Government Integrity",
            val :77.4
        },
        {
            country: "Australia",
            cat: "Property Rights Score",
            val :78.7
        },
        {
            country: "Australia",
            cat: "Tax Burden Score",
            val :63
        },
        {
            country: "Australia",
            cat: "Overall Economic Freedom Score",
            val :80.9
        },
        {
            country: "Australia",
            cat: "Financial Freedom Score",
            val :90
        },
        {
            country: "Australia",
            cat: "Women Representation in Govt.",
            val :28.7
        },
        {
            country: "Austria",
            cat: "World Happiness Report Score",
            val :7.29
        },
        {
            country: "Austria",
            cat: "GDP Per Capita",
            val :1.32
        },
        {
            country: "Austria",
            cat: "Health Expenditure",
            val :10.3
        },
        {
            country: "Austria",
            cat: "Education Expenditure",
            val :5.4
        },
        {
            country: "Austria",
            cat: "Unemployment",
            val :6.1
        },
        {
            country: "Austria",
            cat: "Government Expenditure",
            val :51.8
        },
        {
            country: "Austria",
            cat: "Judicial Effectiveness Score",
            val :80.9
        },
        {
            country: "Austria",
            cat: "Government Integrity",
            val :73.5
        },
        {
            country: "Austria",
            cat: "Property Rights Score",
            val :83.5
        },
        {
            country: "Austria",
            cat: "Tax Burden Score",
            val :49.9
        },
        {
            country: "Austria",
            cat: "Overall Economic Freedom Score",
            val :71.8
        },
        {
            country: "Austria",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Austria",
            cat: "Women Representation in Govt.",
            val :30.6
        },
        {
            country: "Azerbaijan",
            cat: "World Happiness Report Score",
            val :5.15
        },
        {
            country: "Azerbaijan",
            cat: "GDP Per Capita",
            val :0.48
        },
        {
            country: "Azerbaijan",
            cat: "Health Expenditure",
            val :6.7
        },
        {
            country: "Azerbaijan",
            cat: "Education Expenditure",
            val :2.6
        },
        {
            country: "Azerbaijan",
            cat: "Unemployment",
            val :5.1
        },
        {
            country: "Azerbaijan",
            cat: "Government Expenditure",
            val :36.8
        },
        {
            country: "Azerbaijan",
            cat: "Judicial Effectiveness Score",
            val :36.8
        },
        {
            country: "Azerbaijan",
            cat: "Government Integrity",
            val :39.9
        },
        {
            country: "Azerbaijan",
            cat: "Property Rights Score",
            val :53.6
        },
        {
            country: "Azerbaijan",
            cat: "Tax Burden Score",
            val :87.5
        },
        {
            country: "Azerbaijan",
            cat: "Overall Economic Freedom Score",
            val :64.3
        },
        {
            country: "Azerbaijan",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Azerbaijan",
            cat: "Women Representation in Govt.",
            val :16.8
        },
        {
            country: "Bahamas",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Bahamas",
            cat: "GDP Per Capita",
            val :0.68
        },
        {
            country: "Bahamas",
            cat: "Health Expenditure",
            val :7.4
        },
        {
            country: "Bahamas",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Bahamas",
            cat: "Unemployment",
            val :15.3
        },
        {
            country: "Bahamas",
            cat: "Government Expenditure",
            val :23.8
        },
        {
            country: "Bahamas",
            cat: "Judicial Effectiveness Score",
            val :53.5
        },
        {
            country: "Bahamas",
            cat: "Government Integrity",
            val :50.9
        },
        {
            country: "Bahamas",
            cat: "Property Rights Score",
            val :46.5
        },
        {
            country: "Bahamas",
            cat: "Tax Burden Score",
            val :96.5
        },
        {
            country: "Bahamas",
            cat: "Overall Economic Freedom Score",
            val :63.3
        },
        {
            country: "Bahamas",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Bahamas",
            cat: "Women Representation in Govt.",
            val :12.8
        },
        {
            country: "Bahrain",
            cat: "World Happiness Report Score",
            val :6.23
        },
        {
            country: "Bahrain",
            cat: "GDP Per Capita",
            val :1.4
        },
        {
            country: "Bahrain",
            cat: "Health Expenditure",
            val :5.2
        },
        {
            country: "Bahrain",
            cat: "Education Expenditure",
            val :2.5
        },
        {
            country: "Bahrain",
            cat: "Unemployment",
            val :1.3
        },
        {
            country: "Bahrain",
            cat: "Government Expenditure",
            val :33.4
        },
        {
            country: "Bahrain",
            cat: "Judicial Effectiveness Score",
            val :55.1
        },
        {
            country: "Bahrain",
            cat: "Government Integrity",
            val :51.8
        },
        {
            country: "Bahrain",
            cat: "Property Rights Score",
            val :62.1
        },
        {
            country: "Bahrain",
            cat: "Tax Burden Score",
            val :99.9
        },
        {
            country: "Bahrain",
            cat: "Overall Economic Freedom Score",
            val :67.7
        },
        {
            country: "Bahrain",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Bahrain",
            cat: "Women Representation in Govt.",
            val :7.5
        },
        {
            country: "Bangladesh",
            cat: "World Happiness Report Score",
            val :4.31
        },
        {
            country: "Bangladesh",
            cat: "GDP Per Capita",
            val :0.11
        },
        {
            country: "Bangladesh",
            cat: "Health Expenditure",
            val :2.6
        },
        {
            country: "Bangladesh",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Bangladesh",
            cat: "Unemployment",
            val :4.1
        },
        {
            country: "Bangladesh",
            cat: "Government Expenditure",
            val :13.9
        },
        {
            country: "Bangladesh",
            cat: "Judicial Effectiveness Score",
            val :32.6
        },
        {
            country: "Bangladesh",
            cat: "Government Integrity",
            val :21.2
        },
        {
            country: "Bangladesh",
            cat: "Property Rights Score",
            val :32.4
        },
        {
            country: "Bangladesh",
            cat: "Tax Burden Score",
            val :72.7
        },
        {
            country: "Bangladesh",
            cat: "Overall Economic Freedom Score",
            val :55.1
        },
        {
            country: "Bangladesh",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Bangladesh",
            cat: "Women Representation in Govt.",
            val :20.3
        },
        {
            country: "Barbados",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Barbados",
            cat: "GDP Per Capita",
            val :0.47
        },
        {
            country: "Barbados",
            cat: "Health Expenditure",
            val :7.5
        },
        {
            country: "Barbados",
            cat: "Education Expenditure",
            val :6.2
        },
        {
            country: "Barbados",
            cat: "Unemployment",
            val :11.4
        },
        {
            country: "Barbados",
            cat: "Government Expenditure",
            val :45
        },
        {
            country: "Barbados",
            cat: "Judicial Effectiveness Score",
            val :54.4
        },
        {
            country: "Barbados",
            cat: "Government Integrity",
            val :53.8
        },
        {
            country: "Barbados",
            cat: "Property Rights Score",
            val :51.4
        },
        {
            country: "Barbados",
            cat: "Tax Burden Score",
            val :74
        },
        {
            country: "Barbados",
            cat: "Overall Economic Freedom Score",
            val :57
        },
        {
            country: "Barbados",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Barbados",
            cat: "Women Representation in Govt.",
            val :16.7
        },
        {
            country: "Belarus",
            cat: "World Happiness Report Score",
            val :5.55
        },
        {
            country: "Belarus",
            cat: "GDP Per Capita",
            val :0.5
        },
        {
            country: "Belarus",
            cat: "Health Expenditure",
            val :6.1
        },
        {
            country: "Belarus",
            cat: "Education Expenditure",
            val :4.8
        },
        {
            country: "Belarus",
            cat: "Unemployment",
            val :0.5
        },
        {
            country: "Belarus",
            cat: "Government Expenditure",
            val :41.7
        },
        {
            country: "Belarus",
            cat: "Judicial Effectiveness Score",
            val :57.3
        },
        {
            country: "Belarus",
            cat: "Government Integrity",
            val :42
        },
        {
            country: "Belarus",
            cat: "Property Rights Score",
            val :53.5
        },
        {
            country: "Belarus",
            cat: "Tax Burden Score",
            val :89.8
        },
        {
            country: "Belarus",
            cat: "Overall Economic Freedom Score",
            val :58.1
        },
        {
            country: "Belarus",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Belarus",
            cat: "Women Representation in Govt.",
            val :34.5
        },
        {
            country: "Belgium",
            cat: "World Happiness Report Score",
            val :6.93
        },
        {
            country: "Belgium",
            cat: "GDP Per Capita",
            val :1.24
        },
        {
            country: "Belgium",
            cat: "Health Expenditure",
            val :10.5
        },
        {
            country: "Belgium",
            cat: "Education Expenditure",
            val :6.6
        },
        {
            country: "Belgium",
            cat: "Unemployment",
            val :8.3
        },
        {
            country: "Belgium",
            cat: "Government Expenditure",
            val :54.1
        },
        {
            country: "Belgium",
            cat: "Judicial Effectiveness Score",
            val :69.5
        },
        {
            country: "Belgium",
            cat: "Government Integrity",
            val :70.9
        },
        {
            country: "Belgium",
            cat: "Property Rights Score",
            val :81.2
        },
        {
            country: "Belgium",
            cat: "Tax Burden Score",
            val :44
        },
        {
            country: "Belgium",
            cat: "Overall Economic Freedom Score",
            val :67.5
        },
        {
            country: "Belgium",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Belgium",
            cat: "Women Representation in Govt.",
            val :38
        },
        {
            country: "Belize",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Belize",
            cat: "GDP Per Capita",
            val :0.23
        },
        {
            country: "Belize",
            cat: "Health Expenditure",
            val :6.2
        },
        {
            country: "Belize",
            cat: "Education Expenditure",
            val :6.5
        },
        {
            country: "Belize",
            cat: "Unemployment",
            val :11
        },
        {
            country: "Belize",
            cat: "Government Expenditure",
            val :33.9
        },
        {
            country: "Belize",
            cat: "Judicial Effectiveness Score",
            val :53.5
        },
        {
            country: "Belize",
            cat: "Government Integrity",
            val :34.7
        },
        {
            country: "Belize",
            cat: "Property Rights Score",
            val :42.1
        },
        {
            country: "Belize",
            cat: "Tax Burden Score",
            val :80
        },
        {
            country: "Belize",
            cat: "Overall Economic Freedom Score",
            val :57.1
        },
        {
            country: "Belize",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Belize",
            cat: "Women Representation in Govt.",
            val :9.4
        },
        {
            country: "Benin",
            cat: "World Happiness Report Score",
            val :4.85
        },
        {
            country: "Benin",
            cat: "GDP Per Capita",
            val :0.06
        },
        {
            country: "Benin",
            cat: "Health Expenditure",
            val :4
        },
        {
            country: "Benin",
            cat: "Education Expenditure",
            val :4.3
        },
        {
            country: "Benin",
            cat: "Unemployment",
            val :1
        },
        {
            country: "Benin",
            cat: "Government Expenditure",
            val :21.9
        },
        {
            country: "Benin",
            cat: "Judicial Effectiveness Score",
            val :31.3
        },
        {
            country: "Benin",
            cat: "Government Integrity",
            val :30.2
        },
        {
            country: "Benin",
            cat: "Property Rights Score",
            val :35.5
        },
        {
            country: "Benin",
            cat: "Tax Burden Score",
            val :67.4
        },
        {
            country: "Benin",
            cat: "Overall Economic Freedom Score",
            val :56.7
        },
        {
            country: "Benin",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Benin",
            cat: "Women Representation in Govt.",
            val :7.2
        },
        {
            country: "Bhutan",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Bhutan",
            cat: "GDP Per Capita",
            val :0.23
        },
        {
            country: "Bhutan",
            cat: "Health Expenditure",
            val :3.5
        },
        {
            country: "Bhutan",
            cat: "Education Expenditure",
            val :5.9
        },
        {
            country: "Bhutan",
            cat: "Unemployment",
            val :2.4
        },
        {
            country: "Bhutan",
            cat: "Government Expenditure",
            val :30.5
        },
        {
            country: "Bhutan",
            cat: "Judicial Effectiveness Score",
            val :51.6
        },
        {
            country: "Bhutan",
            cat: "Government Integrity",
            val :50.9
        },
        {
            country: "Bhutan",
            cat: "Property Rights Score",
            val :60.9
        },
        {
            country: "Bhutan",
            cat: "Tax Burden Score",
            val :83
        },
        {
            country: "Bhutan",
            cat: "Overall Economic Freedom Score",
            val :61.8
        },
        {
            country: "Bhutan",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Bhutan",
            cat: "Women Representation in Govt.",
            val :8.5
        },
        {
            country: "Bolivia",
            cat: "World Happiness Report Score",
            val :5.65
        },
        {
            country: "Bolivia",
            cat: "GDP Per Capita",
            val :0.2
        },
        {
            country: "Bolivia",
            cat: "Health Expenditure",
            val :6.4
        },
        {
            country: "Bolivia",
            cat: "Education Expenditure",
            val :7.3
        },
        {
            country: "Bolivia",
            cat: "Unemployment",
            val :3.7
        },
        {
            country: "Bolivia",
            cat: "Government Expenditure",
            val :42.2
        },
        {
            country: "Bolivia",
            cat: "Judicial Effectiveness Score",
            val :11.4
        },
        {
            country: "Bolivia",
            cat: "Government Integrity",
            val :23.1
        },
        {
            country: "Bolivia",
            cat: "Property Rights Score",
            val :19
        },
        {
            country: "Bolivia",
            cat: "Tax Burden Score",
            val :85.7
        },
        {
            country: "Bolivia",
            cat: "Overall Economic Freedom Score",
            val :44.1
        },
        {
            country: "Bolivia",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Bolivia",
            cat: "Women Representation in Govt.",
            val :53.1
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "World Happiness Report Score",
            val :5.09
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "GDP Per Capita",
            val :0.3
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Health Expenditure",
            val :9.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Unemployment",
            val :25.8
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Government Expenditure",
            val :44.1
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Judicial Effectiveness Score",
            val :43.7
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Government Integrity",
            val :28.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Property Rights Score",
            val :39.5
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Tax Burden Score",
            val :83.5
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Overall Economic Freedom Score",
            val :61.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "Women Representation in Govt.",
            val :21.4
        },
        {
            country: "Botswana",
            cat: "World Happiness Report Score",
            val :3.5
        },
        {
            country: "Botswana",
            cat: "GDP Per Capita",
            val :0.47
        },
        {
            country: "Botswana",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Botswana",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Botswana",
            cat: "Unemployment",
            val :18.4
        },
        {
            country: "Botswana",
            cat: "Government Expenditure",
            val :34.9
        },
        {
            country: "Botswana",
            cat: "Judicial Effectiveness Score",
            val :54.7
        },
        {
            country: "Botswana",
            cat: "Government Integrity",
            val :56.6
        },
        {
            country: "Botswana",
            cat: "Property Rights Score",
            val :57.7
        },
        {
            country: "Botswana",
            cat: "Tax Burden Score",
            val :76.1
        },
        {
            country: "Botswana",
            cat: "Overall Economic Freedom Score",
            val :69.9
        },
        {
            country: "Botswana",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Botswana",
            cat: "Women Representation in Govt.",
            val :9.5
        },
        {
            country: "Brazil",
            cat: "World Happiness Report Score",
            val :6.33
        },
        {
            country: "Brazil",
            cat: "GDP Per Capita",
            val :0.42
        },
        {
            country: "Brazil",
            cat: "Health Expenditure",
            val :8.9
        },
        {
            country: "Brazil",
            cat: "Education Expenditure",
            val :5.9
        },
        {
            country: "Brazil",
            cat: "Unemployment",
            val :11.5
        },
        {
            country: "Brazil",
            cat: "Government Expenditure",
            val :40.5
        },
        {
            country: "Brazil",
            cat: "Judicial Effectiveness Score",
            val :55.5
        },
        {
            country: "Brazil",
            cat: "Government Integrity",
            val :31.4
        },
        {
            country: "Brazil",
            cat: "Property Rights Score",
            val :55.8
        },
        {
            country: "Brazil",
            cat: "Tax Burden Score",
            val :70.6
        },
        {
            country: "Brazil",
            cat: "Overall Economic Freedom Score",
            val :51.4
        },
        {
            country: "Brazil",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Brazil",
            cat: "Women Representation in Govt.",
            val :10.7
        },
        {
            country: "Brunei",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Brunei",
            cat: "GDP Per Capita",
            val :2.12
        },
        {
            country: "Brunei",
            cat: "Health Expenditure",
            val :2.6
        },
        {
            country: "Brunei",
            cat: "Education Expenditure",
            val :3.4
        },
        {
            country: "Brunei",
            cat: "Unemployment",
            val :2
        },
        {
            country: "Brunei",
            cat: "Government Expenditure",
            val :37.5
        },
        {
            country: "Brunei",
            cat: "Judicial Effectiveness Score",
            val :57.1
        },
        {
            country: "Brunei",
            cat: "Government Integrity",
            val :45.4
        },
        {
            country: "Brunei",
            cat: "Property Rights Score",
            val :56.6
        },
        {
            country: "Brunei",
            cat: "Tax Burden Score",
            val :85.6
        },
        {
            country: "Brunei",
            cat: "Overall Economic Freedom Score",
            val :64.2
        },
        {
            country: "Brunei",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Brunei",
            cat: "Women Representation in Govt.",
            val :9.1
        },
        {
            country: "Bulgaria",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Bulgaria",
            cat: "GDP Per Capita",
            val :0.56
        },
        {
            country: "Bulgaria",
            cat: "Health Expenditure",
            val :8.2
        },
        {
            country: "Bulgaria",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Bulgaria",
            cat: "Unemployment",
            val :8
        },
        {
            country: "Bulgaria",
            cat: "Government Expenditure",
            val :36.3
        },
        {
            country: "Bulgaria",
            cat: "Judicial Effectiveness Score",
            val :42.5
        },
        {
            country: "Bulgaria",
            cat: "Government Integrity",
            val :38.2
        },
        {
            country: "Bulgaria",
            cat: "Property Rights Score",
            val :63.6
        },
        {
            country: "Bulgaria",
            cat: "Tax Burden Score",
            val :90.9
        },
        {
            country: "Bulgaria",
            cat: "Overall Economic Freedom Score",
            val :68.3
        },
        {
            country: "Bulgaria",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Bulgaria",
            cat: "Women Representation in Govt.",
            val :23.8
        },
        {
            country: "Burkina Faso",
            cat: "World Happiness Report Score",
            val :4.65
        },
        {
            country: "Burkina Faso",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Burkina Faso",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Burkina Faso",
            cat: "Education Expenditure",
            val :4.6
        },
        {
            country: "Burkina Faso",
            cat: "Unemployment",
            val :3
        },
        {
            country: "Burkina Faso",
            cat: "Government Expenditure",
            val :23.3
        },
        {
            country: "Burkina Faso",
            cat: "Judicial Effectiveness Score",
            val :47.1
        },
        {
            country: "Burkina Faso",
            cat: "Government Integrity",
            val :31.8
        },
        {
            country: "Burkina Faso",
            cat: "Property Rights Score",
            val :42.1
        },
        {
            country: "Burkina Faso",
            cat: "Tax Burden Score",
            val :80.6
        },
        {
            country: "Burkina Faso",
            cat: "Overall Economic Freedom Score",
            val :60
        },
        {
            country: "Burkina Faso",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Burkina Faso",
            cat: "Women Representation in Govt.",
            val :11
        },
        {
            country: "Burundi",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Burundi",
            cat: "GDP Per Capita",
            val :0.02
        },
        {
            country: "Burundi",
            cat: "Health Expenditure",
            val :8.2
        },
        {
            country: "Burundi",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Burundi",
            cat: "Unemployment",
            val :1.6
        },
        {
            country: "Burundi",
            cat: "Government Expenditure",
            val :26.7
        },
        {
            country: "Burundi",
            cat: "Judicial Effectiveness Score",
            val :21.7
        },
        {
            country: "Burundi",
            cat: "Government Integrity",
            val :26.2
        },
        {
            country: "Burundi",
            cat: "Property Rights Score",
            val :17.6
        },
        {
            country: "Burundi",
            cat: "Tax Burden Score",
            val :71
        },
        {
            country: "Burundi",
            cat: "Overall Economic Freedom Score",
            val :50.9
        },
        {
            country: "Burundi",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Burundi",
            cat: "Women Representation in Govt.",
            val :36.4
        },
        {
            country: "Cabo Verde",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Cabo Verde",
            cat: "GDP Per Capita",
            val :0.18
        },
        {
            country: "Cabo Verde",
            cat: "Health Expenditure",
            val :4.9
        },
        {
            country: "Cabo Verde",
            cat: "Education Expenditure",
            val :5
        },
        {
            country: "Cabo Verde",
            cat: "Unemployment",
            val :10.5
        },
        {
            country: "Cabo Verde",
            cat: "Government Expenditure",
            val :30.8
        },
        {
            country: "Cabo Verde",
            cat: "Judicial Effectiveness Score",
            val :52
        },
        {
            country: "Cabo Verde",
            cat: "Government Integrity",
            val :42.8
        },
        {
            country: "Cabo Verde",
            cat: "Property Rights Score",
            val :42.1
        },
        {
            country: "Cabo Verde",
            cat: "Tax Burden Score",
            val :74
        },
        {
            country: "Cabo Verde",
            cat: "Overall Economic Freedom Score",
            val :60
        },
        {
            country: "Cabo Verde",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Cabo Verde",
            cat: "Women Representation in Govt.",
            val :23.6
        },
        {
            country: "Cambodia",
            cat: "World Happiness Report Score",
            val :4.59
        },
        {
            country: "Cambodia",
            cat: "GDP Per Capita",
            val :0.1
        },
        {
            country: "Cambodia",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Cambodia",
            cat: "Education Expenditure",
            val :1.9
        },
        {
            country: "Cambodia",
            cat: "Unemployment",
            val :0.3
        },
        {
            country: "Cambodia",
            cat: "Government Expenditure",
            val :21.2
        },
        {
            country: "Cambodia",
            cat: "Judicial Effectiveness Score",
            val :24.5
        },
        {
            country: "Cambodia",
            cat: "Government Integrity",
            val :17.7
        },
        {
            country: "Cambodia",
            cat: "Property Rights Score",
            val :36
        },
        {
            country: "Cambodia",
            cat: "Tax Burden Score",
            val :89.8
        },
        {
            country: "Cambodia",
            cat: "Overall Economic Freedom Score",
            val :58.7
        },
        {
            country: "Cambodia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Cambodia",
            cat: "Women Representation in Govt.",
            val :20.3
        },
        {
            country: "Cameroon",
            cat: "World Happiness Report Score",
            val :5.07
        },
        {
            country: "Cameroon",
            cat: "GDP Per Capita",
            val :0.09
        },
        {
            country: "Cameroon",
            cat: "Health Expenditure",
            val :5.1
        },
        {
            country: "Cameroon",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Cameroon",
            cat: "Unemployment",
            val :4.5
        },
        {
            country: "Cameroon",
            cat: "Government Expenditure",
            val :21.6
        },
        {
            country: "Cameroon",
            cat: "Judicial Effectiveness Score",
            val :29.4
        },
        {
            country: "Cameroon",
            cat: "Government Integrity",
            val :23.4
        },
        {
            country: "Cameroon",
            cat: "Property Rights Score",
            val :40.6
        },
        {
            country: "Cameroon",
            cat: "Tax Burden Score",
            val :73.7
        },
        {
            country: "Cameroon",
            cat: "Overall Economic Freedom Score",
            val :51.9
        },
        {
            country: "Cameroon",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Cameroon",
            cat: "Women Representation in Govt.",
            val :31.1
        },
        {
            country: "Canada",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Canada",
            cat: "GDP Per Capita",
            val :1.28
        },
        {
            country: "Canada",
            cat: "Health Expenditure",
            val :10.4
        },
        {
            country: "Canada",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Canada",
            cat: "Unemployment",
            val :7.1
        },
        {
            country: "Canada",
            cat: "Government Expenditure",
            val :39.9
        },
        {
            country: "Canada",
            cat: "Judicial Effectiveness Score",
            val :77.1
        },
        {
            country: "Canada",
            cat: "Government Integrity",
            val :78.3
        },
        {
            country: "Canada",
            cat: "Property Rights Score",
            val :87.5
        },
        {
            country: "Canada",
            cat: "Tax Burden Score",
            val :76.7
        },
        {
            country: "Canada",
            cat: "Overall Economic Freedom Score",
            val :77.7
        },
        {
            country: "Canada",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Canada",
            cat: "Women Representation in Govt.",
            val :26.3
        },
        {
            country: "Central African Republic",
            cat: "World Happiness Report Score",
            val :3.48
        },
        {
            country: "Central African Republic",
            cat: "GDP Per Capita",
            val :0.02
        },
        {
            country: "Central African Republic",
            cat: "Health Expenditure",
            val :4.8
        },
        {
            country: "Central African Republic",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Central African Republic",
            cat: "Unemployment",
            val :6.9
        },
        {
            country: "Central African Republic",
            cat: "Government Expenditure",
            val :13.4
        },
        {
            country: "Central African Republic",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Central African Republic",
            cat: "Government Integrity",
            val :24.6
        },
        {
            country: "Central African Republic",
            cat: "Property Rights Score",
            val :17.9
        },
        {
            country: "Central African Republic",
            cat: "Tax Burden Score",
            val :64.6
        },
        {
            country: "Central African Republic",
            cat: "Overall Economic Freedom Score",
            val :49.2
        },
        {
            country: "Central African Republic",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Central African Republic",
            cat: "Women Representation in Govt.",
            val :8.6
        },
        {
            country: "Chad",
            cat: "World Happiness Report Score",
            val :4.56
        },
        {
            country: "Chad",
            cat: "GDP Per Capita",
            val :0.07
        },
        {
            country: "Chad",
            cat: "Health Expenditure",
            val :4.6
        },
        {
            country: "Chad",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Chad",
            cat: "Unemployment",
            val :5.8
        },
        {
            country: "Chad",
            cat: "Government Expenditure",
            val :17.7
        },
        {
            country: "Chad",
            cat: "Judicial Effectiveness Score",
            val :24.1
        },
        {
            country: "Chad",
            cat: "Government Integrity",
            val :23.1
        },
        {
            country: "Chad",
            cat: "Property Rights Score",
            val :25.1
        },
        {
            country: "Chad",
            cat: "Tax Burden Score",
            val :44.8
        },
        {
            country: "Chad",
            cat: "Overall Economic Freedom Score",
            val :49.3
        },
        {
            country: "Chad",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Chad",
            cat: "Women Representation in Govt.",
            val :12.8
        },
        {
            country: "Chile",
            cat: "World Happiness Report Score",
            val :6.32
        },
        {
            country: "Chile",
            cat: "GDP Per Capita",
            val :0.66
        },
        {
            country: "Chile",
            cat: "Health Expenditure",
            val :8.1
        },
        {
            country: "Chile",
            cat: "Education Expenditure",
            val :4.7
        },
        {
            country: "Chile",
            cat: "Unemployment",
            val :6.6
        },
        {
            country: "Chile",
            cat: "Government Expenditure",
            val :25
        },
        {
            country: "Chile",
            cat: "Judicial Effectiveness Score",
            val :63.4
        },
        {
            country: "Chile",
            cat: "Government Integrity",
            val :61.2
        },
        {
            country: "Chile",
            cat: "Property Rights Score",
            val :67.9
        },
        {
            country: "Chile",
            cat: "Tax Burden Score",
            val :78
        },
        {
            country: "Chile",
            cat: "Overall Economic Freedom Score",
            val :75.2
        },
        {
            country: "Chile",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Chile",
            cat: "Women Representation in Govt.",
            val :15.8
        },
        {
            country: "China",
            cat: "World Happiness Report Score",
            val :5.1
        },
        {
            country: "China",
            cat: "GDP Per Capita",
            val :0.42
        },
        {
            country: "China",
            cat: "Health Expenditure",
            val :5.3
        },
        {
            country: "China",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "China",
            cat: "Unemployment",
            val :4.6
        },
        {
            country: "China",
            cat: "Government Expenditure",
            val :30.7
        },
        {
            country: "China",
            cat: "Judicial Effectiveness Score",
            val :65.4
        },
        {
            country: "China",
            cat: "Government Integrity",
            val :47.3
        },
        {
            country: "China",
            cat: "Property Rights Score",
            val :46.7
        },
        {
            country: "China",
            cat: "Tax Burden Score",
            val :70.4
        },
        {
            country: "China",
            cat: "Overall Economic Freedom Score",
            val :57.8
        },
        {
            country: "China",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "China",
            cat: "Women Representation in Govt.",
            val :24.2
        },
        {
            country: "Colombia",
            cat: "World Happiness Report Score",
            val :6.16
        },
        {
            country: "Colombia",
            cat: "GDP Per Capita",
            val :0.39
        },
        {
            country: "Colombia",
            cat: "Health Expenditure",
            val :6.2
        },
        {
            country: "Colombia",
            cat: "Education Expenditure",
            val :4.7
        },
        {
            country: "Colombia",
            cat: "Unemployment",
            val :9.9
        },
        {
            country: "Colombia",
            cat: "Government Expenditure",
            val :29.2
        },
        {
            country: "Colombia",
            cat: "Judicial Effectiveness Score",
            val :36.4
        },
        {
            country: "Colombia",
            cat: "Government Integrity",
            val :33.4
        },
        {
            country: "Colombia",
            cat: "Property Rights Score",
            val :60.7
        },
        {
            country: "Colombia",
            cat: "Tax Burden Score",
            val :80.3
        },
        {
            country: "Colombia",
            cat: "Overall Economic Freedom Score",
            val :68.9
        },
        {
            country: "Colombia",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Colombia",
            cat: "Women Representation in Govt.",
            val :18.7
        },
        {
            country: "Comoros",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Comoros",
            cat: "GDP Per Capita",
            val :0.04
        },
        {
            country: "Comoros",
            cat: "Health Expenditure",
            val :8
        },
        {
            country: "Comoros",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Comoros",
            cat: "Unemployment",
            val :20
        },
        {
            country: "Comoros",
            cat: "Government Expenditure",
            val :27.2
        },
        {
            country: "Comoros",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Comoros",
            cat: "Government Integrity",
            val :27.5
        },
        {
            country: "Comoros",
            cat: "Property Rights Score",
            val :36.7
        },
        {
            country: "Comoros",
            cat: "Tax Burden Score",
            val :59.7
        },
        {
            country: "Comoros",
            cat: "Overall Economic Freedom Score",
            val :56.2
        },
        {
            country: "Comoros",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Comoros",
            cat: "Women Representation in Govt.",
            val :6.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "World Happiness Report Score",
            val :4.31
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "GDP Per Capita",
            val :0.02
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Health Expenditure",
            val :4.3
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Unemployment",
            val :3.6
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Government Expenditure",
            val :13.2
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Judicial Effectiveness Score",
            val :23.9
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Government Integrity",
            val :27.3
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Property Rights Score",
            val :24.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Tax Burden Score",
            val :73.2
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Overall Economic Freedom Score",
            val :52.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "Women Representation in Govt.",
            val :8.9
        },
        {
            country: "Congo (Rep.)",
            cat: "World Happiness Report Score",
            val :4.88
        },
        {
            country: "Congo (Rep.)",
            cat: "GDP Per Capita",
            val :0.18
        },
        {
            country: "Congo (Rep.)",
            cat: "Health Expenditure",
            val :3.4
        },
        {
            country: "Congo (Rep.)",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Congo (Rep.)",
            cat: "Unemployment",
            val :11.2
        },
        {
            country: "Congo (Rep.)",
            cat: "Government Expenditure",
            val :47.1
        },
        {
            country: "Congo (Rep.)",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Congo (Rep.)",
            cat: "Government Integrity",
            val :24.6
        },
        {
            country: "Congo (Rep.)",
            cat: "Property Rights Score",
            val :32.4
        },
        {
            country: "Congo (Rep.)",
            cat: "Tax Burden Score",
            val :60.8
        },
        {
            country: "Congo (Rep.)",
            cat: "Overall Economic Freedom Score",
            val :38.9
        },
        {
            country: "Congo (Rep.)",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Congo (Rep.)",
            cat: "Women Representation in Govt.",
            val :11.3
        },
        {
            country: "Costa Rica",
            cat: "World Happiness Report Score",
            val :7.23
        },
        {
            country: "Costa Rica",
            cat: "GDP Per Capita",
            val :0.45
        },
        {
            country: "Costa Rica",
            cat: "Health Expenditure",
            val :8.1
        },
        {
            country: "Costa Rica",
            cat: "Education Expenditure",
            val :6.9
        },
        {
            country: "Costa Rica",
            cat: "Unemployment",
            val :9
        },
        {
            country: "Costa Rica",
            cat: "Government Expenditure",
            val :19.3
        },
        {
            country: "Costa Rica",
            cat: "Judicial Effectiveness Score",
            val :57.8
        },
        {
            country: "Costa Rica",
            cat: "Government Integrity",
            val :51.8
        },
        {
            country: "Costa Rica",
            cat: "Property Rights Score",
            val :54.8
        },
        {
            country: "Costa Rica",
            cat: "Tax Burden Score",
            val :79.3
        },
        {
            country: "Costa Rica",
            cat: "Overall Economic Freedom Score",
            val :65.6
        },
        {
            country: "Costa Rica",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Costa Rica",
            cat: "Women Representation in Govt.",
            val :35.1
        },
        {
            country: "Cote d'Ivoire",
            cat: "World Happiness Report Score",
            val :5.04
        },
        {
            country: "Cote d'Ivoire",
            cat: "GDP Per Capita",
            val :0.1
        },
        {
            country: "Cote d'Ivoire",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "Education Expenditure",
            val :4.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "Unemployment",
            val :9.3
        },
        {
            country: "Cote d'Ivoire",
            cat: "Government Expenditure",
            val :22.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "Judicial Effectiveness Score",
            val :44.2
        },
        {
            country: "Cote d'Ivoire",
            cat: "Government Integrity",
            val :36.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "Property Rights Score",
            val :39.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "Tax Burden Score",
            val :76.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "Overall Economic Freedom Score",
            val :62
        },
        {
            country: "Cote d'Ivoire",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Cote d'Ivoire",
            cat: "Women Representation in Govt.",
            val :10.6
        },
        {
            country: "Croatia",
            cat: "World Happiness Report Score",
            val :5.34
        },
        {
            country: "Croatia",
            cat: "GDP Per Capita",
            val :0.63
        },
        {
            country: "Croatia",
            cat: "Health Expenditure",
            val :7.4
        },
        {
            country: "Croatia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Croatia",
            cat: "Unemployment",
            val :13.5
        },
        {
            country: "Croatia",
            cat: "Government Expenditure",
            val :47.4
        },
        {
            country: "Croatia",
            cat: "Judicial Effectiveness Score",
            val :56.5
        },
        {
            country: "Croatia",
            cat: "Government Integrity",
            val :40.5
        },
        {
            country: "Croatia",
            cat: "Property Rights Score",
            val :65.9
        },
        {
            country: "Croatia",
            cat: "Tax Burden Score",
            val :66
        },
        {
            country: "Croatia",
            cat: "Overall Economic Freedom Score",
            val :61
        },
        {
            country: "Croatia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Croatia",
            cat: "Women Representation in Govt.",
            val :18.5
        },
        {
            country: "Cuba",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "GDP Per Capita",
            val :0.34
        },
        {
            country: "Cuba",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "Unemployment",
            val :2.9
        },
        {
            country: "Cuba",
            cat: "Government Expenditure",
            val :62.4
        },
        {
            country: "Cuba",
            cat: "Judicial Effectiveness Score",
            val :10
        },
        {
            country: "Cuba",
            cat: "Government Integrity",
            val :38.1
        },
        {
            country: "Cuba",
            cat: "Property Rights Score",
            val :29.7
        },
        {
            country: "Cuba",
            cat: "Tax Burden Score",
            val :49
        },
        {
            country: "Cuba",
            cat: "Overall Economic Freedom Score",
            val :31.9
        },
        {
            country: "Cuba",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Cuba",
            cat: "Women Representation in Govt.",
            val :48.9
        },
        {
            country: "Cyprus",
            cat: "World Happiness Report Score",
            val :6.06
        },
        {
            country: "Cyprus",
            cat: "GDP Per Capita",
            val :0.96
        },
        {
            country: "Cyprus",
            cat: "Health Expenditure",
            val :6.8
        },
        {
            country: "Cyprus",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Cyprus",
            cat: "Unemployment",
            val :11.7
        },
        {
            country: "Cyprus",
            cat: "Government Expenditure",
            val :39.6
        },
        {
            country: "Cyprus",
            cat: "Judicial Effectiveness Score",
            val :56.7
        },
        {
            country: "Cyprus",
            cat: "Government Integrity",
            val :41.3
        },
        {
            country: "Cyprus",
            cat: "Property Rights Score",
            val :71.2
        },
        {
            country: "Cyprus",
            cat: "Tax Burden Score",
            val :75.2
        },
        {
            country: "Cyprus",
            cat: "Overall Economic Freedom Score",
            val :67.8
        },
        {
            country: "Cyprus",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Cyprus",
            cat: "Women Representation in Govt.",
            val :17.9
        },
        {
            country: "Czech Republic",
            cat: "World Happiness Report Score",
            val :6.79
        },
        {
            country: "Czech Republic",
            cat: "GDP Per Capita",
            val :0.92
        },
        {
            country: "Czech Republic",
            cat: "Health Expenditure",
            val :7.3
        },
        {
            country: "Czech Republic",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Czech Republic",
            cat: "Unemployment",
            val :4
        },
        {
            country: "Czech Republic",
            cat: "Government Expenditure",
            val :41.4
        },
        {
            country: "Czech Republic",
            cat: "Judicial Effectiveness Score",
            val :57.9
        },
        {
            country: "Czech Republic",
            cat: "Government Integrity",
            val :51.1
        },
        {
            country: "Czech Republic",
            cat: "Property Rights Score",
            val :73
        },
        {
            country: "Czech Republic",
            cat: "Tax Burden Score",
            val :82.9
        },
        {
            country: "Czech Republic",
            cat: "Overall Economic Freedom Score",
            val :74.2
        },
        {
            country: "Czech Republic",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Czech Republic",
            cat: "Women Representation in Govt.",
            val :20
        },
        {
            country: "Denmark",
            cat: "World Happiness Report Score",
            val :7.59
        },
        {
            country: "Denmark",
            cat: "GDP Per Capita",
            val :1.32
        },
        {
            country: "Denmark",
            cat: "Health Expenditure",
            val :10.3
        },
        {
            country: "Denmark",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Denmark",
            cat: "Unemployment",
            val :6.1
        },
        {
            country: "Denmark",
            cat: "Government Expenditure",
            val :54.6
        },
        {
            country: "Denmark",
            cat: "Judicial Effectiveness Score",
            val :83.6
        },
        {
            country: "Denmark",
            cat: "Government Integrity",
            val :84.1
        },
        {
            country: "Denmark",
            cat: "Property Rights Score",
            val :84.8
        },
        {
            country: "Denmark",
            cat: "Tax Burden Score",
            val :41.4
        },
        {
            country: "Denmark",
            cat: "Overall Economic Freedom Score",
            val :76.6
        },
        {
            country: "Denmark",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Denmark",
            cat: "Women Representation in Govt.",
            val :37.4
        },
        {
            country: "Djibouti",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Djibouti",
            cat: "GDP Per Capita",
            val :0.09
        },
        {
            country: "Djibouti",
            cat: "Health Expenditure",
            val :4.4
        },
        {
            country: "Djibouti",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Djibouti",
            cat: "Unemployment",
            val :6.6
        },
        {
            country: "Djibouti",
            cat: "Government Expenditure",
            val :49.3
        },
        {
            country: "Djibouti",
            cat: "Judicial Effectiveness Score",
            val :13.8
        },
        {
            country: "Djibouti",
            cat: "Government Integrity",
            val :29
        },
        {
            country: "Djibouti",
            cat: "Property Rights Score",
            val :19
        },
        {
            country: "Djibouti",
            cat: "Tax Burden Score",
            val :69.8
        },
        {
            country: "Djibouti",
            cat: "Overall Economic Freedom Score",
            val :45.1
        },
        {
            country: "Djibouti",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Djibouti",
            cat: "Women Representation in Govt.",
            val :10.8
        },
        {
            country: "Dominica",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "GDP Per Capita",
            val :0.31
        },
        {
            country: "Dominica",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Dominica",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "Government Expenditure",
            val :34.2
        },
        {
            country: "Dominica",
            cat: "Judicial Effectiveness Score",
            val :69.2
        },
        {
            country: "Dominica",
            cat: "Government Integrity",
            val :49.9
        },
        {
            country: "Dominica",
            cat: "Property Rights Score",
            val :48.6
        },
        {
            country: "Dominica",
            cat: "Tax Burden Score",
            val :72.9
        },
        {
            country: "Dominica",
            cat: "Overall Economic Freedom Score",
            val :64.5
        },
        {
            country: "Dominica",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Dominica",
            cat: "Women Representation in Govt.",
            val :25
        },
        {
            country: "Dominican Republic",
            cat: "World Happiness Report Score",
            val :5.61
        },
        {
            country: "Dominican Republic",
            cat: "GDP Per Capita",
            val :0.44
        },
        {
            country: "Dominican Republic",
            cat: "Health Expenditure",
            val :6.2
        },
        {
            country: "Dominican Republic",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Dominican Republic",
            cat: "Unemployment",
            val :14.4
        },
        {
            country: "Dominican Republic",
            cat: "Government Expenditure",
            val :17.7
        },
        {
            country: "Dominican Republic",
            cat: "Judicial Effectiveness Score",
            val :23.1
        },
        {
            country: "Dominican Republic",
            cat: "Government Integrity",
            val :26.2
        },
        {
            country: "Dominican Republic",
            cat: "Property Rights Score",
            val :51.7
        },
        {
            country: "Dominican Republic",
            cat: "Tax Burden Score",
            val :84.6
        },
        {
            country: "Dominican Republic",
            cat: "Overall Economic Freedom Score",
            val :61.6
        },
        {
            country: "Dominican Republic",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Dominican Republic",
            cat: "Women Representation in Govt.",
            val :26.8
        },
        {
            country: "Ecuador",
            cat: "World Happiness Report Score",
            val :5.84
        },
        {
            country: "Ecuador",
            cat: "GDP Per Capita",
            val :0.31
        },
        {
            country: "Ecuador",
            cat: "Health Expenditure",
            val :6.8
        },
        {
            country: "Ecuador",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Ecuador",
            cat: "Unemployment",
            val :5.4
        },
        {
            country: "Ecuador",
            cat: "Government Expenditure",
            val :39.8
        },
        {
            country: "Ecuador",
            cat: "Judicial Effectiveness Score",
            val :23.3
        },
        {
            country: "Ecuador",
            cat: "Government Integrity",
            val :30.2
        },
        {
            country: "Ecuador",
            cat: "Property Rights Score",
            val :36.7
        },
        {
            country: "Ecuador",
            cat: "Tax Burden Score",
            val :79.4
        },
        {
            country: "Ecuador",
            cat: "Overall Economic Freedom Score",
            val :48.5
        },
        {
            country: "Ecuador",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Ecuador",
            cat: "Women Representation in Govt.",
            val :38
        },
        {
            country: "Egypt",
            cat: "World Happiness Report Score",
            val :3.93
        },
        {
            country: "Egypt",
            cat: "GDP Per Capita",
            val :0.35
        },
        {
            country: "Egypt",
            cat: "Health Expenditure",
            val :7.3
        },
        {
            country: "Egypt",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Egypt",
            cat: "Unemployment",
            val :12
        },
        {
            country: "Egypt",
            cat: "Government Expenditure",
            val :34.1
        },
        {
            country: "Egypt",
            cat: "Judicial Effectiveness Score",
            val :52.5
        },
        {
            country: "Egypt",
            cat: "Government Integrity",
            val :32.2
        },
        {
            country: "Egypt",
            cat: "Property Rights Score",
            val :32.7
        },
        {
            country: "Egypt",
            cat: "Tax Burden Score",
            val :84.2
        },
        {
            country: "Egypt",
            cat: "Overall Economic Freedom Score",
            val :53.4
        },
        {
            country: "Egypt",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Egypt",
            cat: "Women Representation in Govt.",
            val :14.9
        },
        {
            country: "El Salvador",
            cat: "World Happiness Report Score",
            val :6.34
        },
        {
            country: "El Salvador",
            cat: "GDP Per Capita",
            val :0.25
        },
        {
            country: "El Salvador",
            cat: "Health Expenditure",
            val :10.3
        },
        {
            country: "El Salvador",
            cat: "Education Expenditure",
            val :3.4
        },
        {
            country: "El Salvador",
            cat: "Unemployment",
            val :6.3
        },
        {
            country: "El Salvador",
            cat: "Government Expenditure",
            val :21.3
        },
        {
            country: "El Salvador",
            cat: "Judicial Effectiveness Score",
            val :35.4
        },
        {
            country: "El Salvador",
            cat: "Government Integrity",
            val :25.2
        },
        {
            country: "El Salvador",
            cat: "Property Rights Score",
            val :37.3
        },
        {
            country: "El Salvador",
            cat: "Tax Burden Score",
            val :78.9
        },
        {
            country: "El Salvador",
            cat: "Overall Economic Freedom Score",
            val :63.2
        },
        {
            country: "El Salvador",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "El Salvador",
            cat: "Women Representation in Govt.",
            val :32.1
        },
        {
            country: "Equatorial Guinea",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Equatorial Guinea",
            cat: "GDP Per Capita",
            val :1.06
        },
        {
            country: "Equatorial Guinea",
            cat: "Health Expenditure",
            val :4.4
        },
        {
            country: "Equatorial Guinea",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Equatorial Guinea",
            cat: "Unemployment",
            val :7.3
        },
        {
            country: "Equatorial Guinea",
            cat: "Government Expenditure",
            val :36.1
        },
        {
            country: "Equatorial Guinea",
            cat: "Judicial Effectiveness Score",
            val :17.6
        },
        {
            country: "Equatorial Guinea",
            cat: "Government Integrity",
            val :26.2
        },
        {
            country: "Equatorial Guinea",
            cat: "Property Rights Score",
            val :29.8
        },
        {
            country: "Equatorial Guinea",
            cat: "Tax Burden Score",
            val :69.6
        },
        {
            country: "Equatorial Guinea",
            cat: "Overall Economic Freedom Score",
            val :42
        },
        {
            country: "Equatorial Guinea",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Equatorial Guinea",
            cat: "Women Representation in Govt.",
            val :24
        },
        {
            country: "Eritrea",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Eritrea",
            cat: "GDP Per Capita",
            val :0.04
        },
        {
            country: "Eritrea",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Eritrea",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Eritrea",
            cat: "Unemployment",
            val :7.3
        },
        {
            country: "Eritrea",
            cat: "Government Expenditure",
            val :28.5
        },
        {
            country: "Eritrea",
            cat: "Judicial Effectiveness Score",
            val :13.8
        },
        {
            country: "Eritrea",
            cat: "Government Integrity",
            val :23.4
        },
        {
            country: "Eritrea",
            cat: "Property Rights Score",
            val :35.5
        },
        {
            country: "Eritrea",
            cat: "Tax Burden Score",
            val :79.9
        },
        {
            country: "Eritrea",
            cat: "Overall Economic Freedom Score",
            val :41.7
        },
        {
            country: "Eritrea",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Eritrea",
            cat: "Women Representation in Govt.",
            val :22
        },
        {
            country: "Estonia",
            cat: "World Happiness Report Score",
            val :5.94
        },
        {
            country: "Estonia",
            cat: "GDP Per Capita",
            val :0.81
        },
        {
            country: "Estonia",
            cat: "Health Expenditure",
            val :6.2
        },
        {
            country: "Estonia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Estonia",
            cat: "Unemployment",
            val :6.9
        },
        {
            country: "Estonia",
            cat: "Government Expenditure",
            val :39.8
        },
        {
            country: "Estonia",
            cat: "Judicial Effectiveness Score",
            val :83.9
        },
        {
            country: "Estonia",
            cat: "Government Integrity",
            val :75.7
        },
        {
            country: "Estonia",
            cat: "Property Rights Score",
            val :80.4
        },
        {
            country: "Estonia",
            cat: "Tax Burden Score",
            val :80.7
        },
        {
            country: "Estonia",
            cat: "Overall Economic Freedom Score",
            val :78.8
        },
        {
            country: "Estonia",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Estonia",
            cat: "Women Representation in Govt.",
            val :26.7
        },
        {
            country: "Eswatini",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Eswatini",
            cat: "GDP Per Capita",
            val :0.27
        },
        {
            country: "Eswatini",
            cat: "Health Expenditure",
            val :7
        },
        {
            country: "Eswatini",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Eswatini",
            cat: "Unemployment",
            val :25.3
        },
        {
            country: "Eswatini",
            cat: "Government Expenditure",
            val :34.1
        },
        {
            country: "Eswatini",
            cat: "Judicial Effectiveness Score",
            val :35.3
        },
        {
            country: "Eswatini",
            cat: "Government Integrity",
            val :26.9
        },
        {
            country: "Eswatini",
            cat: "Property Rights Score",
            val :55.3
        },
        {
            country: "Eswatini",
            cat: "Tax Burden Score",
            val :74.8
        },
        {
            country: "Eswatini",
            cat: "Overall Economic Freedom Score",
            val :55.9
        },
        {
            country: "Eswatini",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Eswatini",
            cat: "Women Representation in Govt.",
            val :6.2
        },
        {
            country: "Ethiopia",
            cat: "World Happiness Report Score",
            val :4.18
        },
        {
            country: "Ethiopia",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Ethiopia",
            cat: "Health Expenditure",
            val :4
        },
        {
            country: "Ethiopia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Ethiopia",
            cat: "Unemployment",
            val :5.7
        },
        {
            country: "Ethiopia",
            cat: "Government Expenditure",
            val :17.7
        },
        {
            country: "Ethiopia",
            cat: "Judicial Effectiveness Score",
            val :37.6
        },
        {
            country: "Ethiopia",
            cat: "Government Integrity",
            val :37.7
        },
        {
            country: "Ethiopia",
            cat: "Property Rights Score",
            val :31.1
        },
        {
            country: "Ethiopia",
            cat: "Tax Burden Score",
            val :76.5
        },
        {
            country: "Ethiopia",
            cat: "Overall Economic Freedom Score",
            val :52.8
        },
        {
            country: "Ethiopia",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Ethiopia",
            cat: "Women Representation in Govt.",
            val :38.8
        },
        {
            country: "Fiji",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Fiji",
            cat: "GDP Per Capita",
            val :0.26
        },
        {
            country: "Fiji",
            cat: "Health Expenditure",
            val :3.6
        },
        {
            country: "Fiji",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Fiji",
            cat: "Unemployment",
            val :7.9
        },
        {
            country: "Fiji",
            cat: "Government Expenditure",
            val :32.6
        },
        {
            country: "Fiji",
            cat: "Judicial Effectiveness Score",
            val :47.1
        },
        {
            country: "Fiji",
            cat: "Government Integrity",
            val :34.8
        },
        {
            country: "Fiji",
            cat: "Property Rights Score",
            val :68.3
        },
        {
            country: "Fiji",
            cat: "Tax Burden Score",
            val :81.4
        },
        {
            country: "Fiji",
            cat: "Overall Economic Freedom Score",
            val :62
        },
        {
            country: "Fiji",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Fiji",
            cat: "Women Representation in Govt.",
            val :16
        },
        {
            country: "Finland",
            cat: "World Happiness Report Score",
            val :7.79
        },
        {
            country: "Finland",
            cat: "GDP Per Capita",
            val :1.16
        },
        {
            country: "Finland",
            cat: "Health Expenditure",
            val :9.4
        },
        {
            country: "Finland",
            cat: "Education Expenditure",
            val :7.2
        },
        {
            country: "Finland",
            cat: "Unemployment",
            val :9
        },
        {
            country: "Finland",
            cat: "Government Expenditure",
            val :57.1
        },
        {
            country: "Finland",
            cat: "Judicial Effectiveness Score",
            val :82.7
        },
        {
            country: "Finland",
            cat: "Government Integrity",
            val :89.8
        },
        {
            country: "Finland",
            cat: "Property Rights Score",
            val :89
        },
        {
            country: "Finland",
            cat: "Tax Burden Score",
            val :66.5
        },
        {
            country: "Finland",
            cat: "Overall Economic Freedom Score",
            val :74.1
        },
        {
            country: "Finland",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Finland",
            cat: "Women Representation in Govt.",
            val :42
        },
        {
            country: "France",
            cat: "World Happiness Report Score",
            val :6.64
        },
        {
            country: "France",
            cat: "GDP Per Capita",
            val :1.17
        },
        {
            country: "France",
            cat: "Health Expenditure",
            val :11.1
        },
        {
            country: "France",
            cat: "Education Expenditure",
            val :5.5
        },
        {
            country: "France",
            cat: "Unemployment",
            val :10
        },
        {
            country: "France",
            cat: "Government Expenditure",
            val :57
        },
        {
            country: "France",
            cat: "Judicial Effectiveness Score",
            val :72.7
        },
        {
            country: "France",
            cat: "Government Integrity",
            val :65.1
        },
        {
            country: "France",
            cat: "Property Rights Score",
            val :84
        },
        {
            country: "France",
            cat: "Tax Burden Score",
            val :47.3
        },
        {
            country: "France",
            cat: "Overall Economic Freedom Score",
            val :63.9
        },
        {
            country: "France",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "France",
            cat: "Women Representation in Govt.",
            val :39
        },
        {
            country: "Gabon",
            cat: "World Happiness Report Score",
            val :4.78
        },
        {
            country: "Gabon",
            cat: "GDP Per Capita",
            val :0.52
        },
        {
            country: "Gabon",
            cat: "Health Expenditure",
            val :2.7
        },
        {
            country: "Gabon",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Gabon",
            cat: "Unemployment",
            val :18.5
        },
        {
            country: "Gabon",
            cat: "Government Expenditure",
            val :22.6
        },
        {
            country: "Gabon",
            cat: "Judicial Effectiveness Score",
            val :27.8
        },
        {
            country: "Gabon",
            cat: "Government Integrity",
            val :33.4
        },
        {
            country: "Gabon",
            cat: "Property Rights Score",
            val :29.9
        },
        {
            country: "Gabon",
            cat: "Tax Burden Score",
            val :74.3
        },
        {
            country: "Gabon",
            cat: "Overall Economic Freedom Score",
            val :58
        },
        {
            country: "Gabon",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Gabon",
            cat: "Women Representation in Govt.",
            val :17.1
        },
        {
            country: "Gambia, The",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Gambia, The",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Gambia, The",
            cat: "Health Expenditure",
            val :6.6
        },
        {
            country: "Gambia, The",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Gambia, The",
            cat: "Unemployment",
            val :29.7
        },
        {
            country: "Gambia, The",
            cat: "Government Expenditure",
            val :29.4
        },
        {
            country: "Gambia, The",
            cat: "Judicial Effectiveness Score",
            val :38.8
        },
        {
            country: "Gambia, The",
            cat: "Government Integrity",
            val :36.8
        },
        {
            country: "Gambia, The",
            cat: "Property Rights Score",
            val :34.4
        },
        {
            country: "Gambia, The",
            cat: "Tax Burden Score",
            val :71.9
        },
        {
            country: "Gambia, The",
            cat: "Overall Economic Freedom Score",
            val :52.3
        },
        {
            country: "Gambia, The",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Gambia, The",
            cat: "Women Representation in Govt.",
            val :10.3
        },
        {
            country: "Georgia",
            cat: "World Happiness Report Score",
            val :4.45
        },
        {
            country: "Georgia",
            cat: "GDP Per Capita",
            val :0.28
        },
        {
            country: "Georgia",
            cat: "Health Expenditure",
            val :7.9
        },
        {
            country: "Georgia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Georgia",
            cat: "Unemployment",
            val :11.6
        },
        {
            country: "Georgia",
            cat: "Government Expenditure",
            val :29.8
        },
        {
            country: "Georgia",
            cat: "Judicial Effectiveness Score",
            val :64.2
        },
        {
            country: "Georgia",
            cat: "Government Integrity",
            val :61.8
        },
        {
            country: "Georgia",
            cat: "Property Rights Score",
            val :62.8
        },
        {
            country: "Georgia",
            cat: "Tax Burden Score",
            val :87
        },
        {
            country: "Georgia",
            cat: "Overall Economic Freedom Score",
            val :76.2
        },
        {
            country: "Georgia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Georgia",
            cat: "Women Representation in Govt.",
            val :16
        },
        {
            country: "Germany",
            cat: "World Happiness Report Score",
            val :7.07
        },
        {
            country: "Germany",
            cat: "GDP Per Capita",
            val :1.32
        },
        {
            country: "Germany",
            cat: "Health Expenditure",
            val :11.2
        },
        {
            country: "Germany",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Germany",
            cat: "Unemployment",
            val :4.3
        },
        {
            country: "Germany",
            cat: "Government Expenditure",
            val :44.2
        },
        {
            country: "Germany",
            cat: "Judicial Effectiveness Score",
            val :78
        },
        {
            country: "Germany",
            cat: "Government Integrity",
            val :75.3
        },
        {
            country: "Germany",
            cat: "Property Rights Score",
            val :81
        },
        {
            country: "Germany",
            cat: "Tax Burden Score",
            val :61.3
        },
        {
            country: "Germany",
            cat: "Overall Economic Freedom Score",
            val :74.2
        },
        {
            country: "Germany",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Germany",
            cat: "Women Representation in Govt.",
            val :37
        },
        {
            country: "Ghana",
            cat: "World Happiness Report Score",
            val :5.48
        },
        {
            country: "Ghana",
            cat: "GDP Per Capita",
            val :0.12
        },
        {
            country: "Ghana",
            cat: "Health Expenditure",
            val :5.9
        },
        {
            country: "Ghana",
            cat: "Education Expenditure",
            val :6.2
        },
        {
            country: "Ghana",
            cat: "Unemployment",
            val :5.8
        },
        {
            country: "Ghana",
            cat: "Government Expenditure",
            val :26.5
        },
        {
            country: "Ghana",
            cat: "Judicial Effectiveness Score",
            val :43.7
        },
        {
            country: "Ghana",
            cat: "Government Integrity",
            val :32.9
        },
        {
            country: "Ghana",
            cat: "Property Rights Score",
            val :48.9
        },
        {
            country: "Ghana",
            cat: "Tax Burden Score",
            val :83.5
        },
        {
            country: "Ghana",
            cat: "Overall Economic Freedom Score",
            val :56
        },
        {
            country: "Ghana",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Ghana",
            cat: "Women Representation in Govt.",
            val :12.7
        },
        {
            country: "Greece",
            cat: "World Happiness Report Score",
            val :5.15
        },
        {
            country: "Greece",
            cat: "GDP Per Capita",
            val :0.73
        },
        {
            country: "Greece",
            cat: "Health Expenditure",
            val :8.4
        },
        {
            country: "Greece",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Greece",
            cat: "Unemployment",
            val :23.9
        },
        {
            country: "Greece",
            cat: "Government Expenditure",
            val :51.3
        },
        {
            country: "Greece",
            cat: "Judicial Effectiveness Score",
            val :59
        },
        {
            country: "Greece",
            cat: "Government Integrity",
            val :37.9
        },
        {
            country: "Greece",
            cat: "Property Rights Score",
            val :52.3
        },
        {
            country: "Greece",
            cat: "Tax Burden Score",
            val :60.4
        },
        {
            country: "Greece",
            cat: "Overall Economic Freedom Score",
            val :57.3
        },
        {
            country: "Greece",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Greece",
            cat: "Women Representation in Govt.",
            val :18.3
        },
        {
            country: "Grenada",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Health Expenditure",
            val :5
        },
        {
            country: "Grenada",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "Women Representation in Govt.",
            val :33.3
        },
        {
            country: "Guatemala",
            cat: "World Happiness Report Score",
            val :6.33
        },
        {
            country: "Guatemala",
            cat: "GDP Per Capita",
            val :0.22
        },
        {
            country: "Guatemala",
            cat: "Health Expenditure",
            val :5.7
        },
        {
            country: "Guatemala",
            cat: "Education Expenditure",
            val :2.9
        },
        {
            country: "Guatemala",
            cat: "Unemployment",
            val :2.4
        },
        {
            country: "Guatemala",
            cat: "Government Expenditure",
            val :12.5
        },
        {
            country: "Guatemala",
            cat: "Judicial Effectiveness Score",
            val :33.1
        },
        {
            country: "Guatemala",
            cat: "Government Integrity",
            val :27.3
        },
        {
            country: "Guatemala",
            cat: "Property Rights Score",
            val :40.4
        },
        {
            country: "Guatemala",
            cat: "Tax Burden Score",
            val :79.2
        },
        {
            country: "Guatemala",
            cat: "Overall Economic Freedom Score",
            val :63.4
        },
        {
            country: "Guatemala",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Guatemala",
            cat: "Women Representation in Govt.",
            val :12.7
        },
        {
            country: "Guinea",
            cat: "World Happiness Report Score",
            val :4.87
        },
        {
            country: "Guinea",
            cat: "GDP Per Capita",
            val :0.03
        },
        {
            country: "Guinea",
            cat: "Health Expenditure",
            val :4.5
        },
        {
            country: "Guinea",
            cat: "Education Expenditure",
            val :2.4
        },
        {
            country: "Guinea",
            cat: "Unemployment",
            val :6.8
        },
        {
            country: "Guinea",
            cat: "Government Expenditure",
            val :25.4
        },
        {
            country: "Guinea",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Guinea",
            cat: "Government Integrity",
            val :26.9
        },
        {
            country: "Guinea",
            cat: "Property Rights Score",
            val :32.4
        },
        {
            country: "Guinea",
            cat: "Tax Burden Score",
            val :65.9
        },
        {
            country: "Guinea",
            cat: "Overall Economic Freedom Score",
            val :52.2
        },
        {
            country: "Guinea",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Guinea",
            cat: "Women Representation in Govt.",
            val :21.9
        },
        {
            country: "Guinea-Bissau",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Guinea-Bissau",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Guinea-Bissau",
            cat: "Health Expenditure",
            val :6.9
        },
        {
            country: "Guinea-Bissau",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Guinea-Bissau",
            cat: "Unemployment",
            val :6.5
        },
        {
            country: "Guinea-Bissau",
            cat: "Government Expenditure",
            val :21.9
        },
        {
            country: "Guinea-Bissau",
            cat: "Judicial Effectiveness Score",
            val :53.5
        },
        {
            country: "Guinea-Bissau",
            cat: "Government Integrity",
            val :27.3
        },
        {
            country: "Guinea-Bissau",
            cat: "Property Rights Score",
            val :31.1
        },
        {
            country: "Guinea-Bissau",
            cat: "Tax Burden Score",
            val :86.4
        },
        {
            country: "Guinea-Bissau",
            cat: "Overall Economic Freedom Score",
            val :56.9
        },
        {
            country: "Guinea-Bissau",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Guinea-Bissau",
            cat: "Women Representation in Govt.",
            val :13.7
        },
        {
            country: "Guyana",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Guyana",
            cat: "GDP Per Capita",
            val :0.22
        },
        {
            country: "Guyana",
            cat: "Health Expenditure",
            val :4.5
        },
        {
            country: "Guyana",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Guyana",
            cat: "Unemployment",
            val :11.4
        },
        {
            country: "Guyana",
            cat: "Government Expenditure",
            val :31.2
        },
        {
            country: "Guyana",
            cat: "Judicial Effectiveness Score",
            val :42.5
        },
        {
            country: "Guyana",
            cat: "Government Integrity",
            val :34.8
        },
        {
            country: "Guyana",
            cat: "Property Rights Score",
            val :42.1
        },
        {
            country: "Guyana",
            cat: "Tax Burden Score",
            val :68.4
        },
        {
            country: "Guyana",
            cat: "Overall Economic Freedom Score",
            val :58.7
        },
        {
            country: "Guyana",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Guyana",
            cat: "Women Representation in Govt.",
            val :31.9
        },
        {
            country: "Haiti",
            cat: "World Happiness Report Score",
            val :3.82
        },
        {
            country: "Haiti",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Haiti",
            cat: "Health Expenditure",
            val :6.9
        },
        {
            country: "Haiti",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Haiti",
            cat: "Unemployment",
            val :13.2
        },
        {
            country: "Haiti",
            cat: "Government Expenditure",
            val :21.9
        },
        {
            country: "Haiti",
            cat: "Judicial Effectiveness Score",
            val :42.5
        },
        {
            country: "Haiti",
            cat: "Government Integrity",
            val :24.6
        },
        {
            country: "Haiti",
            cat: "Property Rights Score",
            val :25.1
        },
        {
            country: "Haiti",
            cat: "Tax Burden Score",
            val :80.1
        },
        {
            country: "Haiti",
            cat: "Overall Economic Freedom Score",
            val :55.8
        },
        {
            country: "Haiti",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Haiti",
            cat: "Women Representation in Govt.",
            val :2.5
        },
        {
            country: "Honduras",
            cat: "World Happiness Report Score",
            val :6.02
        },
        {
            country: "Honduras",
            cat: "GDP Per Capita",
            val :0.15
        },
        {
            country: "Honduras",
            cat: "Health Expenditure",
            val :7.6
        },
        {
            country: "Honduras",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Honduras",
            cat: "Unemployment",
            val :6.3
        },
        {
            country: "Honduras",
            cat: "Government Expenditure",
            val :27.9
        },
        {
            country: "Honduras",
            cat: "Judicial Effectiveness Score",
            val :34.5
        },
        {
            country: "Honduras",
            cat: "Government Integrity",
            val :28.2
        },
        {
            country: "Honduras",
            cat: "Property Rights Score",
            val :44.3
        },
        {
            country: "Honduras",
            cat: "Tax Burden Score",
            val :82.8
        },
        {
            country: "Honduras",
            cat: "Overall Economic Freedom Score",
            val :60.6
        },
        {
            country: "Honduras",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Honduras",
            cat: "Women Representation in Govt.",
            val :25.8
        },
        {
            country: "Hungary",
            cat: "World Happiness Report Score",
            val :6.07
        },
        {
            country: "Hungary",
            cat: "GDP Per Capita",
            val :0.76
        },
        {
            country: "Hungary",
            cat: "Health Expenditure",
            val :7.2
        },
        {
            country: "Hungary",
            cat: "Education Expenditure",
            val :4.6
        },
        {
            country: "Hungary",
            cat: "Unemployment",
            val :5.2
        },
        {
            country: "Hungary",
            cat: "Government Expenditure",
            val :48.5
        },
        {
            country: "Hungary",
            cat: "Judicial Effectiveness Score",
            val :57.1
        },
        {
            country: "Hungary",
            cat: "Government Integrity",
            val :36.4
        },
        {
            country: "Hungary",
            cat: "Property Rights Score",
            val :57.6
        },
        {
            country: "Hungary",
            cat: "Tax Burden Score",
            val :78.6
        },
        {
            country: "Hungary",
            cat: "Overall Economic Freedom Score",
            val :66.7
        },
        {
            country: "Hungary",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Hungary",
            cat: "Women Representation in Govt.",
            val :10.1
        },
        {
            country: "Iceland",
            cat: "World Happiness Report Score",
            val :7.48
        },
        {
            country: "Iceland",
            cat: "GDP Per Capita",
            val :1.35
        },
        {
            country: "Iceland",
            cat: "Health Expenditure",
            val :8.6
        },
        {
            country: "Iceland",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Iceland",
            cat: "Unemployment",
            val :3.8
        },
        {
            country: "Iceland",
            cat: "Government Expenditure",
            val :43.1
        },
        {
            country: "Iceland",
            cat: "Judicial Effectiveness Score",
            val :72.6
        },
        {
            country: "Iceland",
            cat: "Government Integrity",
            val :77.3
        },
        {
            country: "Iceland",
            cat: "Property Rights Score",
            val :86.7
        },
        {
            country: "Iceland",
            cat: "Tax Burden Score",
            val :72.1
        },
        {
            country: "Iceland",
            cat: "Overall Economic Freedom Score",
            val :77
        },
        {
            country: "Iceland",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Iceland",
            cat: "Women Representation in Govt.",
            val :47.6
        },
        {
            country: "India",
            cat: "World Happiness Report Score",
            val :4.05
        },
        {
            country: "India",
            cat: "GDP Per Capita",
            val :0.18
        },
        {
            country: "India",
            cat: "Health Expenditure",
            val :3.9
        },
        {
            country: "India",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "India",
            cat: "Unemployment",
            val :3.5
        },
        {
            country: "India",
            cat: "Government Expenditure",
            val :27.3
        },
        {
            country: "India",
            cat: "Judicial Effectiveness Score",
            val :54.3
        },
        {
            country: "India",
            cat: "Government Integrity",
            val :47.2
        },
        {
            country: "India",
            cat: "Property Rights Score",
            val :55.4
        },
        {
            country: "India",
            cat: "Tax Burden Score",
            val :79.4
        },
        {
            country: "India",
            cat: "Overall Economic Freedom Score",
            val :54.5
        },
        {
            country: "India",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "India",
            cat: "Women Representation in Govt.",
            val :11.8
        },
        {
            country: "Indonesia",
            cat: "World Happiness Report Score",
            val :5.1
        },
        {
            country: "Indonesia",
            cat: "GDP Per Capita",
            val :0.32
        },
        {
            country: "Indonesia",
            cat: "Health Expenditure",
            val :3.3
        },
        {
            country: "Indonesia",
            cat: "Education Expenditure",
            val :3.3
        },
        {
            country: "Indonesia",
            cat: "Unemployment",
            val :5.6
        },
        {
            country: "Indonesia",
            cat: "Government Expenditure",
            val :17.6
        },
        {
            country: "Indonesia",
            cat: "Judicial Effectiveness Score",
            val :45.2
        },
        {
            country: "Indonesia",
            cat: "Government Integrity",
            val :42.8
        },
        {
            country: "Indonesia",
            cat: "Property Rights Score",
            val :49.3
        },
        {
            country: "Indonesia",
            cat: "Tax Burden Score",
            val :83.7
        },
        {
            country: "Indonesia",
            cat: "Overall Economic Freedom Score",
            val :64.2
        },
        {
            country: "Indonesia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Indonesia",
            cat: "Women Representation in Govt.",
            val :19.8
        },
        {
            country: "Iran",
            cat: "World Happiness Report Score",
            val :4.72
        },
        {
            country: "Iran",
            cat: "GDP Per Capita",
            val :0.5
        },
        {
            country: "Iran",
            cat: "Health Expenditure",
            val :7.6
        },
        {
            country: "Iran",
            cat: "Education Expenditure",
            val :2.8
        },
        {
            country: "Iran",
            cat: "Unemployment",
            val :11.3
        },
        {
            country: "Iran",
            cat: "Government Expenditure",
            val :17.2
        },
        {
            country: "Iran",
            cat: "Judicial Effectiveness Score",
            val :35.3
        },
        {
            country: "Iran",
            cat: "Government Integrity",
            val :32.6
        },
        {
            country: "Iran",
            cat: "Property Rights Score",
            val :32.5
        },
        {
            country: "Iran",
            cat: "Tax Burden Score",
            val :81
        },
        {
            country: "Iran",
            cat: "Overall Economic Freedom Score",
            val :50.9
        },
        {
            country: "Iran",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Iran",
            cat: "Women Representation in Govt.",
            val :5.9
        },
        {
            country: "Iraq",
            cat: "World Happiness Report Score",
            val :4.46
        },
        {
            country: "Iraq",
            cat: "GDP Per Capita",
            val :0.49
        },
        {
            country: "Iraq",
            cat: "Health Expenditure",
            val :3.4
        },
        {
            country: "Iraq",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "Unemployment",
            val :16
        },
        {
            country: "Iraq",
            cat: "Government Expenditure",
            val :42.7
        },
        {
            country: "Iraq",
            cat: "Judicial Effectiveness Score",
            val :11.4
        },
        {
            country: "Iraq",
            cat: "Government Integrity",
            val :23.4
        },
        {
            country: "Iraq",
            cat: "Property Rights Score",
            val :36.7
        },
        {
            country: "Iraq",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "Women Representation in Govt.",
            val :25.3
        },
        {
            country: "Ireland",
            cat: "World Happiness Report Score",
            val :7.06
        },
        {
            country: "Ireland",
            cat: "GDP Per Capita",
            val :1.91
        },
        {
            country: "Ireland",
            cat: "Health Expenditure",
            val :7.8
        },
        {
            country: "Ireland",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Ireland",
            cat: "Unemployment",
            val :8.1
        },
        {
            country: "Ireland",
            cat: "Government Expenditure",
            val :31.9
        },
        {
            country: "Ireland",
            cat: "Judicial Effectiveness Score",
            val :79
        },
        {
            country: "Ireland",
            cat: "Government Integrity",
            val :79
        },
        {
            country: "Ireland",
            cat: "Property Rights Score",
            val :87.7
        },
        {
            country: "Ireland",
            cat: "Tax Burden Score",
            val :76.1
        },
        {
            country: "Ireland",
            cat: "Overall Economic Freedom Score",
            val :80.4
        },
        {
            country: "Ireland",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Ireland",
            cat: "Women Representation in Govt.",
            val :22.2
        },
        {
            country: "Israel",
            cat: "World Happiness Report Score",
            val :7.33
        },
        {
            country: "Israel",
            cat: "GDP Per Capita",
            val :0.97
        },
        {
            country: "Israel",
            cat: "Health Expenditure",
            val :7.4
        },
        {
            country: "Israel",
            cat: "Education Expenditure",
            val :5.7
        },
        {
            country: "Israel",
            cat: "Unemployment",
            val :5.6
        },
        {
            country: "Israel",
            cat: "Government Expenditure",
            val :40.1
        },
        {
            country: "Israel",
            cat: "Judicial Effectiveness Score",
            val :83.1
        },
        {
            country: "Israel",
            cat: "Government Integrity",
            val :61.2
        },
        {
            country: "Israel",
            cat: "Property Rights Score",
            val :78.2
        },
        {
            country: "Israel",
            cat: "Tax Burden Score",
            val :60.9
        },
        {
            country: "Israel",
            cat: "Overall Economic Freedom Score",
            val :72.2
        },
        {
            country: "Israel",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Israel",
            cat: "Women Representation in Govt.",
            val :27.5
        },
        {
            country: "Italy",
            cat: "World Happiness Report Score",
            val :6.2
        },
        {
            country: "Italy",
            cat: "GDP Per Capita",
            val :1.01
        },
        {
            country: "Italy",
            cat: "Health Expenditure",
            val :9
        },
        {
            country: "Italy",
            cat: "Education Expenditure",
            val :4.1
        },
        {
            country: "Italy",
            cat: "Unemployment",
            val :11.5
        },
        {
            country: "Italy",
            cat: "Government Expenditure",
            val :50.3
        },
        {
            country: "Italy",
            cat: "Judicial Effectiveness Score",
            val :60.9
        },
        {
            country: "Italy",
            cat: "Government Integrity",
            val :40.1
        },
        {
            country: "Italy",
            cat: "Property Rights Score",
            val :71.2
        },
        {
            country: "Italy",
            cat: "Tax Burden Score",
            val :55.2
        },
        {
            country: "Italy",
            cat: "Overall Economic Freedom Score",
            val :62.5
        },
        {
            country: "Italy",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Italy",
            cat: "Women Representation in Govt.",
            val :31
        },
        {
            country: "Jamaica",
            cat: "World Happiness Report Score",
            val :5.89
        },
        {
            country: "Jamaica",
            cat: "GDP Per Capita",
            val :0.25
        },
        {
            country: "Jamaica",
            cat: "Health Expenditure",
            val :5.9
        },
        {
            country: "Jamaica",
            cat: "Education Expenditure",
            val :6
        },
        {
            country: "Jamaica",
            cat: "Unemployment",
            val :13.3
        },
        {
            country: "Jamaica",
            cat: "Government Expenditure",
            val :27.6
        },
        {
            country: "Jamaica",
            cat: "Judicial Effectiveness Score",
            val :56.6
        },
        {
            country: "Jamaica",
            cat: "Government Integrity",
            val :39.4
        },
        {
            country: "Jamaica",
            cat: "Property Rights Score",
            val :60.9
        },
        {
            country: "Jamaica",
            cat: "Tax Burden Score",
            val :80
        },
        {
            country: "Jamaica",
            cat: "Overall Economic Freedom Score",
            val :69.1
        },
        {
            country: "Jamaica",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Jamaica",
            cat: "Women Representation in Govt.",
            val :17.5
        },
        {
            country: "Japan",
            cat: "World Happiness Report Score",
            val :5.91
        },
        {
            country: "Japan",
            cat: "GDP Per Capita",
            val :1.14
        },
        {
            country: "Japan",
            cat: "Health Expenditure",
            val :10.9
        },
        {
            country: "Japan",
            cat: "Education Expenditure",
            val :3.6
        },
        {
            country: "Japan",
            cat: "Unemployment",
            val :3.1
        },
        {
            country: "Japan",
            cat: "Government Expenditure",
            val :39.1
        },
        {
            country: "Japan",
            cat: "Judicial Effectiveness Score",
            val :73.2
        },
        {
            country: "Japan",
            cat: "Government Integrity",
            val :79.2
        },
        {
            country: "Japan",
            cat: "Property Rights Score",
            val :86
        },
        {
            country: "Japan",
            cat: "Tax Burden Score",
            val :67.4
        },
        {
            country: "Japan",
            cat: "Overall Economic Freedom Score",
            val :72.3
        },
        {
            country: "Japan",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Japan",
            cat: "Women Representation in Govt.",
            val :9.3
        },
        {
            country: "Jordan",
            cat: "World Happiness Report Score",
            val :4.81
        },
        {
            country: "Jordan",
            cat: "GDP Per Capita",
            val :0.34
        },
        {
            country: "Jordan",
            cat: "Health Expenditure",
            val :6.3
        },
        {
            country: "Jordan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Jordan",
            cat: "Unemployment",
            val :13.2
        },
        {
            country: "Jordan",
            cat: "Government Expenditure",
            val :32
        },
        {
            country: "Jordan",
            cat: "Judicial Effectiveness Score",
            val :57.3
        },
        {
            country: "Jordan",
            cat: "Government Integrity",
            val :51.9
        },
        {
            country: "Jordan",
            cat: "Property Rights Score",
            val :57.6
        },
        {
            country: "Jordan",
            cat: "Tax Burden Score",
            val :92.4
        },
        {
            country: "Jordan",
            cat: "Overall Economic Freedom Score",
            val :64.9
        },
        {
            country: "Jordan",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Jordan",
            cat: "Women Representation in Govt.",
            val :15.4
        },
        {
            country: "Kazakhstan",
            cat: "World Happiness Report Score",
            val :5.88
        },
        {
            country: "Kazakhstan",
            cat: "GDP Per Capita",
            val :0.69
        },
        {
            country: "Kazakhstan",
            cat: "Health Expenditure",
            val :3.9
        },
        {
            country: "Kazakhstan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Kazakhstan",
            cat: "Unemployment",
            val :5.2
        },
        {
            country: "Kazakhstan",
            cat: "Government Expenditure",
            val :22.2
        },
        {
            country: "Kazakhstan",
            cat: "Judicial Effectiveness Score",
            val :58.1
        },
        {
            country: "Kazakhstan",
            cat: "Government Integrity",
            val :44.6
        },
        {
            country: "Kazakhstan",
            cat: "Property Rights Score",
            val :56
        },
        {
            country: "Kazakhstan",
            cat: "Tax Burden Score",
            val :92.6
        },
        {
            country: "Kazakhstan",
            cat: "Overall Economic Freedom Score",
            val :69.1
        },
        {
            country: "Kazakhstan",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Kazakhstan",
            cat: "Women Representation in Govt.",
            val :27.1
        },
        {
            country: "Kenya",
            cat: "World Happiness Report Score",
            val :4.48
        },
        {
            country: "Kenya",
            cat: "GDP Per Capita",
            val :0.09
        },
        {
            country: "Kenya",
            cat: "Health Expenditure",
            val :5.2
        },
        {
            country: "Kenya",
            cat: "Education Expenditure",
            val :5.3
        },
        {
            country: "Kenya",
            cat: "Unemployment",
            val :11
        },
        {
            country: "Kenya",
            cat: "Government Expenditure",
            val :27.4
        },
        {
            country: "Kenya",
            cat: "Judicial Effectiveness Score",
            val :44
        },
        {
            country: "Kenya",
            cat: "Government Integrity",
            val :27.5
        },
        {
            country: "Kenya",
            cat: "Property Rights Score",
            val :47.9
        },
        {
            country: "Kenya",
            cat: "Tax Burden Score",
            val :78.5
        },
        {
            country: "Kenya",
            cat: "Overall Economic Freedom Score",
            val :54.7
        },
        {
            country: "Kenya",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Kenya",
            cat: "Women Representation in Govt.",
            val :21.8
        },
        {
            country: "Kiribati",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Kiribati",
            cat: "Health Expenditure",
            val :7.6
        },
        {
            country: "Kiribati",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "Government Expenditure",
            val :117.6
        },
        {
            country: "Kiribati",
            cat: "Judicial Effectiveness Score",
            val :35.3
        },
        {
            country: "Kiribati",
            cat: "Government Integrity",
            val :37.9
        },
        {
            country: "Kiribati",
            cat: "Property Rights Score",
            val :45
        },
        {
            country: "Kiribati",
            cat: "Tax Burden Score",
            val :72.4
        },
        {
            country: "Kiribati",
            cat: "Overall Economic Freedom Score",
            val :50.8
        },
        {
            country: "Kiribati",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Kiribati",
            cat: "Women Representation in Govt.",
            val :6.5
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Unemployment",
            val :4.3
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Judicial Effectiveness Score",
            val :5
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Government Integrity",
            val :25.2
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Property Rights Score",
            val :29.8
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Tax Burden Score",
            val :0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Overall Economic Freedom Score",
            val :5.8
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Financial Freedom Score",
            val :0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "Women Representation in Govt.",
            val :16.3
        },
        {
            country: "Korea (Rep.)",
            cat: "World Happiness Report Score",
            val :5.87
        },
        {
            country: "Korea (Rep.)",
            cat: "GDP Per Capita",
            val :1.04
        },
        {
            country: "Korea (Rep.)",
            cat: "Health Expenditure",
            val :7.4
        },
        {
            country: "Korea (Rep.)",
            cat: "Education Expenditure",
            val :5.1
        },
        {
            country: "Korea (Rep.)",
            cat: "Unemployment",
            val :3.7
        },
        {
            country: "Korea (Rep.)",
            cat: "Government Expenditure",
            val :32.3
        },
        {
            country: "Korea (Rep.)",
            cat: "Judicial Effectiveness Score",
            val :63.7
        },
        {
            country: "Korea (Rep.)",
            cat: "Government Integrity",
            val :49.9
        },
        {
            country: "Korea (Rep.)",
            cat: "Property Rights Score",
            val :79.4
        },
        {
            country: "Korea (Rep.)",
            cat: "Tax Burden Score",
            val :73.3
        },
        {
            country: "Korea (Rep.)",
            cat: "Overall Economic Freedom Score",
            val :73.8
        },
        {
            country: "Korea (Rep.)",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Korea (Rep.)",
            cat: "Women Representation in Govt.",
            val :17
        },
        {
            country: "Kosovo",
            cat: "World Happiness Report Score",
            val :6.15
        },
        {
            country: "Kosovo",
            cat: "GDP Per Capita",
            val :0.26
        },
        {
            country: "Kosovo",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "Government Expenditure",
            val :27.1
        },
        {
            country: "Kosovo",
            cat: "Judicial Effectiveness Score",
            val :59
        },
        {
            country: "Kosovo",
            cat: "Government Integrity",
            val :45.4
        },
        {
            country: "Kosovo",
            cat: "Property Rights Score",
            val :52.3
        },
        {
            country: "Kosovo",
            cat: "Tax Burden Score",
            val :93.2
        },
        {
            country: "Kosovo",
            cat: "Overall Economic Freedom Score",
            val :66.6
        },
        {
            country: "Kosovo",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Kosovo",
            cat: "Women Representation in Govt.",
            val :0.0
        },
        {
            country: "Kuwait",
            cat: "World Happiness Report Score",
            val :6.09
        },
        {
            country: "Kuwait",
            cat: "GDP Per Capita",
            val :1.98
        },
        {
            country: "Kuwait",
            cat: "Health Expenditure",
            val :4
        },
        {
            country: "Kuwait",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Kuwait",
            cat: "Unemployment",
            val :2.4
        },
        {
            country: "Kuwait",
            cat: "Government Expenditure",
            val :51.5
        },
        {
            country: "Kuwait",
            cat: "Judicial Effectiveness Score",
            val :53.5
        },
        {
            country: "Kuwait",
            cat: "Government Integrity",
            val :36.6
        },
        {
            country: "Kuwait",
            cat: "Property Rights Score",
            val :52
        },
        {
            country: "Kuwait",
            cat: "Tax Burden Score",
            val :97.7
        },
        {
            country: "Kuwait",
            cat: "Overall Economic Freedom Score",
            val :62.2
        },
        {
            country: "Kuwait",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Kuwait",
            cat: "Women Representation in Govt.",
            val :3.1
        },
        {
            country: "Kyrgyzstan",
            cat: "World Happiness Report Score",
            val :5.63
        },
        {
            country: "Kyrgyzstan",
            cat: "GDP Per Capita",
            val :0.1
        },
        {
            country: "Kyrgyzstan",
            cat: "Health Expenditure",
            val :8.2
        },
        {
            country: "Kyrgyzstan",
            cat: "Education Expenditure",
            val :5.5
        },
        {
            country: "Kyrgyzstan",
            cat: "Unemployment",
            val :7.7
        },
        {
            country: "Kyrgyzstan",
            cat: "Government Expenditure",
            val :37.3
        },
        {
            country: "Kyrgyzstan",
            cat: "Judicial Effectiveness Score",
            val :22.1
        },
        {
            country: "Kyrgyzstan",
            cat: "Government Integrity",
            val :29.4
        },
        {
            country: "Kyrgyzstan",
            cat: "Property Rights Score",
            val :50.2
        },
        {
            country: "Kyrgyzstan",
            cat: "Tax Burden Score",
            val :93.8
        },
        {
            country: "Kyrgyzstan",
            cat: "Overall Economic Freedom Score",
            val :62.8
        },
        {
            country: "Kyrgyzstan",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Kyrgyzstan",
            cat: "Women Representation in Govt.",
            val :19.2
        },
        {
            country: "Laos",
            cat: "World Happiness Report Score",
            val :4.62
        },
        {
            country: "Laos",
            cat: "GDP Per Capita",
            val :0.16
        },
        {
            country: "Laos",
            cat: "Health Expenditure",
            val :2.8
        },
        {
            country: "Laos",
            cat: "Education Expenditure",
            val :2.9
        },
        {
            country: "Laos",
            cat: "Unemployment",
            val :1.5
        },
        {
            country: "Laos",
            cat: "Government Expenditure",
            val :26.3
        },
        {
            country: "Laos",
            cat: "Judicial Effectiveness Score",
            val :41.4
        },
        {
            country: "Laos",
            cat: "Government Integrity",
            val :33.1
        },
        {
            country: "Laos",
            cat: "Property Rights Score",
            val :34.1
        },
        {
            country: "Laos",
            cat: "Tax Burden Score",
            val :86.7
        },
        {
            country: "Laos",
            cat: "Overall Economic Freedom Score",
            val :53.6
        },
        {
            country: "Laos",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Laos",
            cat: "Women Representation in Govt.",
            val :27.5
        },
        {
            country: "Latvia",
            cat: "World Happiness Report Score",
            val :6.09
        },
        {
            country: "Latvia",
            cat: "GDP Per Capita",
            val :0.71
        },
        {
            country: "Latvia",
            cat: "Health Expenditure",
            val :5.8
        },
        {
            country: "Latvia",
            cat: "Education Expenditure",
            val :5.3
        },
        {
            country: "Latvia",
            cat: "Unemployment",
            val :9.9
        },
        {
            country: "Latvia",
            cat: "Government Expenditure",
            val :37
        },
        {
            country: "Latvia",
            cat: "Judicial Effectiveness Score",
            val :58.9
        },
        {
            country: "Latvia",
            cat: "Government Integrity",
            val :45.4
        },
        {
            country: "Latvia",
            cat: "Property Rights Score",
            val :68.3
        },
        {
            country: "Latvia",
            cat: "Tax Burden Score",
            val :84
        },
        {
            country: "Latvia",
            cat: "Overall Economic Freedom Score",
            val :73.6
        },
        {
            country: "Latvia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Latvia",
            cat: "Women Representation in Govt.",
            val :16
        },
        {
            country: "Lebanon",
            cat: "World Happiness Report Score",
            val :5.15
        },
        {
            country: "Lebanon",
            cat: "GDP Per Capita",
            val :0.51
        },
        {
            country: "Lebanon",
            cat: "Health Expenditure",
            val :7.4
        },
        {
            country: "Lebanon",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Lebanon",
            cat: "Unemployment",
            val :6.8
        },
        {
            country: "Lebanon",
            cat: "Government Expenditure",
            val :26.9
        },
        {
            country: "Lebanon",
            cat: "Judicial Effectiveness Score",
            val :33.6
        },
        {
            country: "Lebanon",
            cat: "Government Integrity",
            val :20.2
        },
        {
            country: "Lebanon",
            cat: "Property Rights Score",
            val :39.7
        },
        {
            country: "Lebanon",
            cat: "Tax Burden Score",
            val :91.9
        },
        {
            country: "Lebanon",
            cat: "Overall Economic Freedom Score",
            val :53.2
        },
        {
            country: "Lebanon",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Lebanon",
            cat: "Women Representation in Govt.",
            val :3.1
        },
        {
            country: "Lesotho",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Lesotho",
            cat: "GDP Per Capita",
            val :0.1
        },
        {
            country: "Lesotho",
            cat: "Health Expenditure",
            val :8.4
        },
        {
            country: "Lesotho",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Lesotho",
            cat: "Unemployment",
            val :27.4
        },
        {
            country: "Lesotho",
            cat: "Government Expenditure",
            val :50.4
        },
        {
            country: "Lesotho",
            cat: "Judicial Effectiveness Score",
            val :52.7
        },
        {
            country: "Lesotho",
            cat: "Government Integrity",
            val :32.9
        },
        {
            country: "Lesotho",
            cat: "Property Rights Score",
            val :49.4
        },
        {
            country: "Lesotho",
            cat: "Tax Burden Score",
            val :48.2
        },
        {
            country: "Lesotho",
            cat: "Overall Economic Freedom Score",
            val :53.9
        },
        {
            country: "Lesotho",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Lesotho",
            cat: "Women Representation in Govt.",
            val :22.9
        },
        {
            country: "Liberia",
            cat: "World Happiness Report Score",
            val :4.42
        },
        {
            country: "Liberia",
            cat: "GDP Per Capita",
            val :0.02
        },
        {
            country: "Liberia",
            cat: "Health Expenditure",
            val :15.2
        },
        {
            country: "Liberia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Liberia",
            cat: "Unemployment",
            val :4
        },
        {
            country: "Liberia",
            cat: "Government Expenditure",
            val :36.8
        },
        {
            country: "Liberia",
            cat: "Judicial Effectiveness Score",
            val :42.4
        },
        {
            country: "Liberia",
            cat: "Government Integrity",
            val :32
        },
        {
            country: "Liberia",
            cat: "Property Rights Score",
            val :28.2
        },
        {
            country: "Liberia",
            cat: "Tax Burden Score",
            val :77.5
        },
        {
            country: "Liberia",
            cat: "Overall Economic Freedom Score",
            val :50.9
        },
        {
            country: "Liberia",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Liberia",
            cat: "Women Representation in Govt.",
            val :12.3
        },
        {
            country: "Libya",
            cat: "World Happiness Report Score",
            val :5.65
        },
        {
            country: "Libya",
            cat: "GDP Per Capita",
            val :0.24
        },
        {
            country: "Libya",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Libya",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Libya",
            cat: "Unemployment",
            val :19.2
        },
        {
            country: "Libya",
            cat: "Government Expenditure",
            val :92.9
        },
        {
            country: "Libya",
            cat: "Judicial Effectiveness Score",
            val :22.1
        },
        {
            country: "Libya",
            cat: "Government Integrity",
            val :23.1
        },
        {
            country: "Libya",
            cat: "Property Rights Score",
            val :5.2
        },
        {
            country: "Libya",
            cat: "Tax Burden Score",
            val :90.5
        },
        {
            country: "Libya",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Libya",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Libya",
            cat: "Women Representation in Govt.",
            val :16
        },
        {
            country: "Liechtenstein",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "GDP Per Capita",
            val :4.42
        },
        {
            country: "Liechtenstein",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Unemployment",
            val :2.4
        },
        {
            country: "Liechtenstein",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Liechtenstein",
            cat: "Women Representation in Govt.",
            val :12
        },
        {
            country: "Lithuania",
            cat: "World Happiness Report Score",
            val :6.27
        },
        {
            country: "Lithuania",
            cat: "GDP Per Capita",
            val :0.83
        },
        {
            country: "Lithuania",
            cat: "Health Expenditure",
            val :6.5
        },
        {
            country: "Lithuania",
            cat: "Education Expenditure",
            val :4.5
        },
        {
            country: "Lithuania",
            cat: "Unemployment",
            val :9.2
        },
        {
            country: "Lithuania",
            cat: "Government Expenditure",
            val :34.7
        },
        {
            country: "Lithuania",
            cat: "Judicial Effectiveness Score",
            val :66.7
        },
        {
            country: "Lithuania",
            cat: "Government Integrity",
            val :50.9
        },
        {
            country: "Lithuania",
            cat: "Property Rights Score",
            val :73.8
        },
        {
            country: "Lithuania",
            cat: "Tax Burden Score",
            val :86.4
        },
        {
            country: "Lithuania",
            cat: "Overall Economic Freedom Score",
            val :75.3
        },
        {
            country: "Lithuania",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Lithuania",
            cat: "Women Representation in Govt.",
            val :21.3
        },
        {
            country: "Luxembourg",
            cat: "World Happiness Report Score",
            val :7.06
        },
        {
            country: "Luxembourg",
            cat: "GDP Per Capita",
            val :2.86
        },
        {
            country: "Luxembourg",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Luxembourg",
            cat: "Education Expenditure",
            val :4
        },
        {
            country: "Luxembourg",
            cat: "Unemployment",
            val :5.9
        },
        {
            country: "Luxembourg",
            cat: "Government Expenditure",
            val :41.4
        },
        {
            country: "Luxembourg",
            cat: "Judicial Effectiveness Score",
            val :77.9
        },
        {
            country: "Luxembourg",
            cat: "Government Integrity",
            val :79
        },
        {
            country: "Luxembourg",
            cat: "Property Rights Score",
            val :82.7
        },
        {
            country: "Luxembourg",
            cat: "Tax Burden Score",
            val :65.1
        },
        {
            country: "Luxembourg",
            cat: "Overall Economic Freedom Score",
            val :76.4
        },
        {
            country: "Luxembourg",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Luxembourg",
            cat: "Women Representation in Govt.",
            val :28.3
        },
        {
            country: "Macedonia",
            cat: "World Happiness Report Score",
            val :5.23
        },
        {
            country: "Macedonia",
            cat: "GDP Per Capita",
            val :0.4
        },
        {
            country: "Macedonia",
            cat: "Health Expenditure",
            val :6.1
        },
        {
            country: "Macedonia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Macedonia",
            cat: "Unemployment",
            val :26.7
        },
        {
            country: "Macedonia",
            cat: "Government Expenditure",
            val :31.5
        },
        {
            country: "Macedonia",
            cat: "Judicial Effectiveness Score",
            val :57
        },
        {
            country: "Macedonia",
            cat: "Government Integrity",
            val :47.4
        },
        {
            country: "Macedonia",
            cat: "Property Rights Score",
            val :64.8
        },
        {
            country: "Macedonia",
            cat: "Tax Burden Score",
            val :91.6
        },
        {
            country: "Macedonia",
            cat: "Overall Economic Freedom Score",
            val :71.3
        },
        {
            country: "Macedonia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Macedonia",
            cat: "Women Representation in Govt.",
            val :34.2
        },
        {
            country: "Madagascar",
            cat: "World Happiness Report Score",
            val :4.08
        },
        {
            country: "Madagascar",
            cat: "GDP Per Capita",
            val :0.04
        },
        {
            country: "Madagascar",
            cat: "Health Expenditure",
            val :5.2
        },
        {
            country: "Madagascar",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Madagascar",
            cat: "Unemployment",
            val :2.1
        },
        {
            country: "Madagascar",
            cat: "Government Expenditure",
            val :15.4
        },
        {
            country: "Madagascar",
            cat: "Judicial Effectiveness Score",
            val :21.4
        },
        {
            country: "Madagascar",
            cat: "Government Integrity",
            val :17.8
        },
        {
            country: "Madagascar",
            cat: "Property Rights Score",
            val :33.2
        },
        {
            country: "Madagascar",
            cat: "Tax Burden Score",
            val :90.3
        },
        {
            country: "Madagascar",
            cat: "Overall Economic Freedom Score",
            val :56.8
        },
        {
            country: "Madagascar",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Madagascar",
            cat: "Women Representation in Govt.",
            val :19.2
        },
        {
            country: "Malawi",
            cat: "World Happiness Report Score",
            val :3.42
        },
        {
            country: "Malawi",
            cat: "GDP Per Capita",
            val :0.03
        },
        {
            country: "Malawi",
            cat: "Health Expenditure",
            val :9.3
        },
        {
            country: "Malawi",
            cat: "Education Expenditure",
            val :4.8
        },
        {
            country: "Malawi",
            cat: "Unemployment",
            val :6.7
        },
        {
            country: "Malawi",
            cat: "Government Expenditure",
            val :31.3
        },
        {
            country: "Malawi",
            cat: "Judicial Effectiveness Score",
            val :47.1
        },
        {
            country: "Malawi",
            cat: "Government Integrity",
            val :28.9
        },
        {
            country: "Malawi",
            cat: "Property Rights Score",
            val :33.1
        },
        {
            country: "Malawi",
            cat: "Tax Burden Score",
            val :76.9
        },
        {
            country: "Malawi",
            cat: "Overall Economic Freedom Score",
            val :52
        },
        {
            country: "Malawi",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Malawi",
            cat: "Women Representation in Govt.",
            val :16.7
        },
        {
            country: "Malaysia",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Malaysia",
            cat: "GDP Per Capita",
            val :0.75
        },
        {
            country: "Malaysia",
            cat: "Health Expenditure",
            val :4
        },
        {
            country: "Malaysia",
            cat: "Education Expenditure",
            val :5.2
        },
        {
            country: "Malaysia",
            cat: "Unemployment",
            val :3.3
        },
        {
            country: "Malaysia",
            cat: "Government Expenditure",
            val :24.9
        },
        {
            country: "Malaysia",
            cat: "Judicial Effectiveness Score",
            val :65.2
        },
        {
            country: "Malaysia",
            cat: "Government Integrity",
            val :54.8
        },
        {
            country: "Malaysia",
            cat: "Property Rights Score",
            val :83.8
        },
        {
            country: "Malaysia",
            cat: "Tax Burden Score",
            val :85.6
        },
        {
            country: "Malaysia",
            cat: "Overall Economic Freedom Score",
            val :74.5
        },
        {
            country: "Malaysia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Malaysia",
            cat: "Women Representation in Govt.",
            val :10.4
        },
        {
            country: "Maldives",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Maldives",
            cat: "GDP Per Capita",
            val :0.43
        },
        {
            country: "Maldives",
            cat: "Health Expenditure",
            val :11.5
        },
        {
            country: "Maldives",
            cat: "Education Expenditure",
            val :3.5
        },
        {
            country: "Maldives",
            cat: "Unemployment",
            val :3.2
        },
        {
            country: "Maldives",
            cat: "Government Expenditure",
            val :42.6
        },
        {
            country: "Maldives",
            cat: "Judicial Effectiveness Score",
            val :38.8
        },
        {
            country: "Maldives",
            cat: "Government Integrity",
            val :36.6
        },
        {
            country: "Maldives",
            cat: "Property Rights Score",
            val :45
        },
        {
            country: "Maldives",
            cat: "Tax Burden Score",
            val :94.3
        },
        {
            country: "Maldives",
            cat: "Overall Economic Freedom Score",
            val :51.1
        },
        {
            country: "Maldives",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Maldives",
            cat: "Women Representation in Govt.",
            val :5.9
        },
        {
            country: "Mali",
            cat: "World Happiness Report Score",
            val :4.74
        },
        {
            country: "Mali",
            cat: "GDP Per Capita",
            val :0.06
        },
        {
            country: "Mali",
            cat: "Health Expenditure",
            val :5.8
        },
        {
            country: "Mali",
            cat: "Education Expenditure",
            val :3.6
        },
        {
            country: "Mali",
            cat: "Unemployment",
            val :8.1
        },
        {
            country: "Mali",
            cat: "Government Expenditure",
            val :22.2
        },
        {
            country: "Mali",
            cat: "Judicial Effectiveness Score",
            val :32.4
        },
        {
            country: "Mali",
            cat: "Government Integrity",
            val :31.4
        },
        {
            country: "Mali",
            cat: "Property Rights Score",
            val :31.9
        },
        {
            country: "Mali",
            cat: "Tax Burden Score",
            val :68.1
        },
        {
            country: "Mali",
            cat: "Overall Economic Freedom Score",
            val :57.6
        },
        {
            country: "Mali",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Mali",
            cat: "Women Representation in Govt.",
            val :8.8
        },
        {
            country: "Malta",
            cat: "World Happiness Report Score",
            val :6.68
        },
        {
            country: "Malta",
            cat: "GDP Per Capita",
            val :1.1
        },
        {
            country: "Malta",
            cat: "Health Expenditure",
            val :9.6
        },
        {
            country: "Malta",
            cat: "Education Expenditure",
            val :7.2
        },
        {
            country: "Malta",
            cat: "Unemployment",
            val :5.3
        },
        {
            country: "Malta",
            cat: "Government Expenditure",
            val :40.4
        },
        {
            country: "Malta",
            cat: "Judicial Effectiveness Score",
            val :62.8
        },
        {
            country: "Malta",
            cat: "Government Integrity",
            val :49.9
        },
        {
            country: "Malta",
            cat: "Property Rights Score",
            val :68.1
        },
        {
            country: "Malta",
            cat: "Tax Burden Score",
            val :64.7
        },
        {
            country: "Malta",
            cat: "Overall Economic Freedom Score",
            val :68.5
        },
        {
            country: "Malta",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Malta",
            cat: "Women Representation in Govt.",
            val :11.9
        },
        {
            country: "Marshall Islands",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Health Expenditure",
            val :22.1
        },
        {
            country: "Marshall Islands",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "Women Representation in Govt.",
            val :9.1
        },
        {
            country: "Mauritania",
            cat: "World Happiness Report Score",
            val :4.68
        },
        {
            country: "Mauritania",
            cat: "GDP Per Capita",
            val :0.12
        },
        {
            country: "Mauritania",
            cat: "Health Expenditure",
            val :4.6
        },
        {
            country: "Mauritania",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Mauritania",
            cat: "Unemployment",
            val :11.7
        },
        {
            country: "Mauritania",
            cat: "Government Expenditure",
            val :30.1
        },
        {
            country: "Mauritania",
            cat: "Judicial Effectiveness Score",
            val :17.6
        },
        {
            country: "Mauritania",
            cat: "Government Integrity",
            val :28.9
        },
        {
            country: "Mauritania",
            cat: "Property Rights Score",
            val :23.9
        },
        {
            country: "Mauritania",
            cat: "Tax Burden Score",
            val :75.9
        },
        {
            country: "Mauritania",
            cat: "Overall Economic Freedom Score",
            val :54
        },
        {
            country: "Mauritania",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Mauritania",
            cat: "Women Representation in Govt.",
            val :25.2
        },
        {
            country: "Mauritius",
            cat: "World Happiness Report Score",
            val :6.17
        },
        {
            country: "Mauritius",
            cat: "GDP Per Capita",
            val :0.56
        },
        {
            country: "Mauritius",
            cat: "Health Expenditure",
            val :5.5
        },
        {
            country: "Mauritius",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Mauritius",
            cat: "Unemployment",
            val :7.8
        },
        {
            country: "Mauritius",
            cat: "Government Expenditure",
            val :25.4
        },
        {
            country: "Mauritius",
            cat: "Judicial Effectiveness Score",
            val :69.6
        },
        {
            country: "Mauritius",
            cat: "Government Integrity",
            val :52.1
        },
        {
            country: "Mauritius",
            cat: "Property Rights Score",
            val :68.7
        },
        {
            country: "Mauritius",
            cat: "Tax Burden Score",
            val :91
        },
        {
            country: "Mauritius",
            cat: "Overall Economic Freedom Score",
            val :75.1
        },
        {
            country: "Mauritius",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Mauritius",
            cat: "Women Representation in Govt.",
            val :11.6
        },
        {
            country: "Mexico",
            cat: "World Happiness Report Score",
            val :6.41
        },
        {
            country: "Mexico",
            cat: "GDP Per Capita",
            val :0.52
        },
        {
            country: "Mexico",
            cat: "Health Expenditure",
            val :5.9
        },
        {
            country: "Mexico",
            cat: "Education Expenditure",
            val :5.3
        },
        {
            country: "Mexico",
            cat: "Unemployment",
            val :4
        },
        {
            country: "Mexico",
            cat: "Government Expenditure",
            val :27
        },
        {
            country: "Mexico",
            cat: "Judicial Effectiveness Score",
            val :39
        },
        {
            country: "Mexico",
            cat: "Government Integrity",
            val :26.9
        },
        {
            country: "Mexico",
            cat: "Property Rights Score",
            val :58.6
        },
        {
            country: "Mexico",
            cat: "Tax Burden Score",
            val :75.7
        },
        {
            country: "Mexico",
            cat: "Overall Economic Freedom Score",
            val :64.8
        },
        {
            country: "Mexico",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Mexico",
            cat: "Women Representation in Govt.",
            val :42.6
        },
        {
            country: "Micronesia",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "GDP Per Capita",
            val :0.09
        },
        {
            country: "Micronesia",
            cat: "Health Expenditure",
            val :13.1
        },
        {
            country: "Micronesia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "Government Expenditure",
            val :55.6
        },
        {
            country: "Micronesia",
            cat: "Judicial Effectiveness Score",
            val :25.4
        },
        {
            country: "Micronesia",
            cat: "Government Integrity",
            val :38.8
        },
        {
            country: "Micronesia",
            cat: "Property Rights Score",
            val :5.2
        },
        {
            country: "Micronesia",
            cat: "Tax Burden Score",
            val :93.2
        },
        {
            country: "Micronesia",
            cat: "Overall Economic Freedom Score",
            val :52.3
        },
        {
            country: "Micronesia",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Micronesia",
            cat: "Women Representation in Govt.",
            val :0
        },
        {
            country: "Moldova",
            cat: "World Happiness Report Score",
            val :5.33
        },
        {
            country: "Moldova",
            cat: "GDP Per Capita",
            val :0.15
        },
        {
            country: "Moldova",
            cat: "Health Expenditure",
            val :10.2
        },
        {
            country: "Moldova",
            cat: "Education Expenditure",
            val :7.5
        },
        {
            country: "Moldova",
            cat: "Unemployment",
            val :5
        },
        {
            country: "Moldova",
            cat: "Government Expenditure",
            val :38
        },
        {
            country: "Moldova",
            cat: "Judicial Effectiveness Score",
            val :26.3
        },
        {
            country: "Moldova",
            cat: "Government Integrity",
            val :26.6
        },
        {
            country: "Moldova",
            cat: "Property Rights Score",
            val :53.5
        },
        {
            country: "Moldova",
            cat: "Tax Burden Score",
            val :85.3
        },
        {
            country: "Moldova",
            cat: "Overall Economic Freedom Score",
            val :58.4
        },
        {
            country: "Moldova",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Moldova",
            cat: "Women Representation in Govt.",
            val :22.8
        },
        {
            country: "Monaco",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Health Expenditure",
            val :2
        },
        {
            country: "Monaco",
            cat: "Education Expenditure",
            val :1
        },
        {
            country: "Monaco",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "Women Representation in Govt.",
            val :20.8
        },
        {
            country: "Mongolia",
            cat: "World Happiness Report Score",
            val :5.33
        },
        {
            country: "Mongolia",
            cat: "GDP Per Capita",
            val :0.34
        },
        {
            country: "Mongolia",
            cat: "Health Expenditure",
            val :3.9
        },
        {
            country: "Mongolia",
            cat: "Education Expenditure",
            val :4.7
        },
        {
            country: "Mongolia",
            cat: "Unemployment",
            val :6.7
        },
        {
            country: "Mongolia",
            cat: "Government Expenditure",
            val :37.8
        },
        {
            country: "Mongolia",
            cat: "Judicial Effectiveness Score",
            val :30.9
        },
        {
            country: "Mongolia",
            cat: "Government Integrity",
            val :34.8
        },
        {
            country: "Mongolia",
            cat: "Property Rights Score",
            val :51
        },
        {
            country: "Mongolia",
            cat: "Tax Burden Score",
            val :88.4
        },
        {
            country: "Mongolia",
            cat: "Overall Economic Freedom Score",
            val :55.7
        },
        {
            country: "Mongolia",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Mongolia",
            cat: "Women Representation in Govt.",
            val :17.1
        },
        {
            country: "Montenegro",
            cat: "World Happiness Report Score",
            val :5.61
        },
        {
            country: "Montenegro",
            cat: "GDP Per Capita",
            val :0.46
        },
        {
            country: "Montenegro",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Montenegro",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Montenegro",
            cat: "Unemployment",
            val :17.5
        },
        {
            country: "Montenegro",
            cat: "Government Expenditure",
            val :46.3
        },
        {
            country: "Montenegro",
            cat: "Judicial Effectiveness Score",
            val :51.3
        },
        {
            country: "Montenegro",
            cat: "Government Integrity",
            val :38.1
        },
        {
            country: "Montenegro",
            cat: "Property Rights Score",
            val :54.2
        },
        {
            country: "Montenegro",
            cat: "Tax Burden Score",
            val :85.2
        },
        {
            country: "Montenegro",
            cat: "Overall Economic Freedom Score",
            val :64.3
        },
        {
            country: "Montenegro",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Montenegro",
            cat: "Women Representation in Govt.",
            val :23.5
        },
        {
            country: "Morocco",
            cat: "World Happiness Report Score",
            val :5.31
        },
        {
            country: "Morocco",
            cat: "GDP Per Capita",
            val :0.23
        },
        {
            country: "Morocco",
            cat: "Health Expenditure",
            val :5.5
        },
        {
            country: "Morocco",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Morocco",
            cat: "Unemployment",
            val :10
        },
        {
            country: "Morocco",
            cat: "Government Expenditure",
            val :31.4
        },
        {
            country: "Morocco",
            cat: "Judicial Effectiveness Score",
            val :44.3
        },
        {
            country: "Morocco",
            cat: "Government Integrity",
            val :41.3
        },
        {
            country: "Morocco",
            cat: "Property Rights Score",
            val :53.8
        },
        {
            country: "Morocco",
            cat: "Tax Burden Score",
            val :70.5
        },
        {
            country: "Morocco",
            cat: "Overall Economic Freedom Score",
            val :61.9
        },
        {
            country: "Morocco",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Morocco",
            cat: "Women Representation in Govt.",
            val :20.5
        },
        {
            country: "Mozambique",
            cat: "World Happiness Report Score",
            val :4.28
        },
        {
            country: "Mozambique",
            cat: "GDP Per Capita",
            val :0.03
        },
        {
            country: "Mozambique",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Mozambique",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Mozambique",
            cat: "Unemployment",
            val :24.4
        },
        {
            country: "Mozambique",
            cat: "Government Expenditure",
            val :36.2
        },
        {
            country: "Mozambique",
            cat: "Judicial Effectiveness Score",
            val :36.3
        },
        {
            country: "Mozambique",
            cat: "Government Integrity",
            val :28.2
        },
        {
            country: "Mozambique",
            cat: "Property Rights Score",
            val :35.4
        },
        {
            country: "Mozambique",
            cat: "Tax Burden Score",
            val :70.6
        },
        {
            country: "Mozambique",
            cat: "Overall Economic Freedom Score",
            val :46.3
        },
        {
            country: "Mozambique",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Mozambique",
            cat: "Women Representation in Govt.",
            val :39.6
        },
        {
            country: "Myanmar",
            cat: "World Happiness Report Score",
            val :4.15
        },
        {
            country: "Myanmar",
            cat: "GDP Per Capita",
            val :0.16
        },
        {
            country: "Myanmar",
            cat: "Health Expenditure",
            val :4.9
        },
        {
            country: "Myanmar",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Myanmar",
            cat: "Unemployment",
            val :0.8
        },
        {
            country: "Myanmar",
            cat: "Government Expenditure",
            val :22.6
        },
        {
            country: "Myanmar",
            cat: "Judicial Effectiveness Score",
            val :17.6
        },
        {
            country: "Myanmar",
            cat: "Government Integrity",
            val :28.2
        },
        {
            country: "Myanmar",
            cat: "Property Rights Score",
            val :32.5
        },
        {
            country: "Myanmar",
            cat: "Tax Burden Score",
            val :86.3
        },
        {
            country: "Myanmar",
            cat: "Overall Economic Freedom Score",
            val :53.9
        },
        {
            country: "Myanmar",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Myanmar",
            cat: "Women Representation in Govt.",
            val :10.2
        },
        {
            country: "Namibia",
            cat: "World Happiness Report Score",
            val :4.44
        },
        {
            country: "Namibia",
            cat: "GDP Per Capita",
            val :0.31
        },
        {
            country: "Namibia",
            cat: "Health Expenditure",
            val :8.9
        },
        {
            country: "Namibia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Namibia",
            cat: "Unemployment",
            val :25.6
        },
        {
            country: "Namibia",
            cat: "Government Expenditure",
            val :40.7
        },
        {
            country: "Namibia",
            cat: "Judicial Effectiveness Score",
            val :54.2
        },
        {
            country: "Namibia",
            cat: "Government Integrity",
            val :45.4
        },
        {
            country: "Namibia",
            cat: "Property Rights Score",
            val :56.6
        },
        {
            country: "Namibia",
            cat: "Tax Burden Score",
            val :63
        },
        {
            country: "Namibia",
            cat: "Overall Economic Freedom Score",
            val :58.5
        },
        {
            country: "Namibia",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Namibia",
            cat: "Women Representation in Govt.",
            val :41.3
        },
        {
            country: "Nauru",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Health Expenditure",
            val :4.8
        },
        {
            country: "Nauru",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "Women Representation in Govt.",
            val :10.5
        },
        {
            country: "Nepal",
            cat: "World Happiness Report Score",
            val :4.74
        },
        {
            country: "Nepal",
            cat: "GDP Per Capita",
            val :0.07
        },
        {
            country: "Nepal",
            cat: "Health Expenditure",
            val :6.1
        },
        {
            country: "Nepal",
            cat: "Education Expenditure",
            val :4
        },
        {
            country: "Nepal",
            cat: "Unemployment",
            val :3.2
        },
        {
            country: "Nepal",
            cat: "Government Expenditure",
            val :20.3
        },
        {
            country: "Nepal",
            cat: "Judicial Effectiveness Score",
            val :36.2
        },
        {
            country: "Nepal",
            cat: "Government Integrity",
            val :24.6
        },
        {
            country: "Nepal",
            cat: "Property Rights Score",
            val :37.5
        },
        {
            country: "Nepal",
            cat: "Tax Burden Score",
            val :84.2
        },
        {
            country: "Nepal",
            cat: "Overall Economic Freedom Score",
            val :54.1
        },
        {
            country: "Nepal",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Nepal",
            cat: "Women Representation in Govt.",
            val :29.6
        },
        {
            country: "Netherlands",
            cat: "World Happiness Report Score",
            val :7.46
        },
        {
            country: "Netherlands",
            cat: "GDP Per Capita",
            val :1.41
        },
        {
            country: "Netherlands",
            cat: "Health Expenditure",
            val :10.7
        },
        {
            country: "Netherlands",
            cat: "Education Expenditure",
            val :5.5
        },
        {
            country: "Netherlands",
            cat: "Unemployment",
            val :6.2
        },
        {
            country: "Netherlands",
            cat: "Government Expenditure",
            val :45
        },
        {
            country: "Netherlands",
            cat: "Judicial Effectiveness Score",
            val :74.1
        },
        {
            country: "Netherlands",
            cat: "Government Integrity",
            val :86
        },
        {
            country: "Netherlands",
            cat: "Property Rights Score",
            val :87.9
        },
        {
            country: "Netherlands",
            cat: "Tax Burden Score",
            val :52.5
        },
        {
            country: "Netherlands",
            cat: "Overall Economic Freedom Score",
            val :76.2
        },
        {
            country: "Netherlands",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Netherlands",
            cat: "Women Representation in Govt.",
            val :36
        },
        {
            country: "New Zealand",
            cat: "World Happiness Report Score",
            val :7.33
        },
        {
            country: "New Zealand",
            cat: "GDP Per Capita",
            val :1.03
        },
        {
            country: "New Zealand",
            cat: "Health Expenditure",
            val :9.3
        },
        {
            country: "New Zealand",
            cat: "Education Expenditure",
            val :6.4
        },
        {
            country: "New Zealand",
            cat: "Unemployment",
            val :5.2
        },
        {
            country: "New Zealand",
            cat: "Government Expenditure",
            val :41
        },
        {
            country: "New Zealand",
            cat: "Judicial Effectiveness Score",
            val :88.4
        },
        {
            country: "New Zealand",
            cat: "Government Integrity",
            val :95.7
        },
        {
            country: "New Zealand",
            cat: "Property Rights Score",
            val :95.1
        },
        {
            country: "New Zealand",
            cat: "Tax Burden Score",
            val :70.5
        },
        {
            country: "New Zealand",
            cat: "Overall Economic Freedom Score",
            val :84.2
        },
        {
            country: "New Zealand",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "New Zealand",
            cat: "Women Representation in Govt.",
            val :34.2
        },
        {
            country: "Nicaragua",
            cat: "World Happiness Report Score",
            val :6.48
        },
        {
            country: "Nicaragua",
            cat: "GDP Per Capita",
            val :0.15
        },
        {
            country: "Nicaragua",
            cat: "Health Expenditure",
            val :7.8
        },
        {
            country: "Nicaragua",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Nicaragua",
            cat: "Unemployment",
            val :5.9
        },
        {
            country: "Nicaragua",
            cat: "Government Expenditure",
            val :25.8
        },
        {
            country: "Nicaragua",
            cat: "Judicial Effectiveness Score",
            val :19
        },
        {
            country: "Nicaragua",
            cat: "Government Integrity",
            val :24.2
        },
        {
            country: "Nicaragua",
            cat: "Property Rights Score",
            val :29.8
        },
        {
            country: "Nicaragua",
            cat: "Tax Burden Score",
            val :77.2
        },
        {
            country: "Nicaragua",
            cat: "Overall Economic Freedom Score",
            val :58.9
        },
        {
            country: "Nicaragua",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Nicaragua",
            cat: "Women Representation in Govt.",
            val :45.7
        },
        {
            country: "Niger",
            cat: "World Happiness Report Score",
            val :4.62
        },
        {
            country: "Niger",
            cat: "GDP Per Capita",
            val :0.03
        },
        {
            country: "Niger",
            cat: "Health Expenditure",
            val :7.2
        },
        {
            country: "Niger",
            cat: "Education Expenditure",
            val :6.7
        },
        {
            country: "Niger",
            cat: "Unemployment",
            val :2.6
        },
        {
            country: "Niger",
            cat: "Government Expenditure",
            val :30.1
        },
        {
            country: "Niger",
            cat: "Judicial Effectiveness Score",
            val :32.6
        },
        {
            country: "Niger",
            cat: "Government Integrity",
            val :30.4
        },
        {
            country: "Niger",
            cat: "Property Rights Score",
            val :37.4
        },
        {
            country: "Niger",
            cat: "Tax Burden Score",
            val :73.3
        },
        {
            country: "Niger",
            cat: "Overall Economic Freedom Score",
            val :49.5
        },
        {
            country: "Niger",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Niger",
            cat: "Women Representation in Govt.",
            val :17
        },
        {
            country: "Nigeria",
            cat: "World Happiness Report Score",
            val :5.32
        },
        {
            country: "Nigeria",
            cat: "GDP Per Capita",
            val :0.16
        },
        {
            country: "Nigeria",
            cat: "Health Expenditure",
            val :3.6
        },
        {
            country: "Nigeria",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Nigeria",
            cat: "Unemployment",
            val :5
        },
        {
            country: "Nigeria",
            cat: "Government Expenditure",
            val :11
        },
        {
            country: "Nigeria",
            cat: "Judicial Effectiveness Score",
            val :39.6
        },
        {
            country: "Nigeria",
            cat: "Government Integrity",
            val :14.4
        },
        {
            country: "Nigeria",
            cat: "Property Rights Score",
            val :38
        },
        {
            country: "Nigeria",
            cat: "Tax Burden Score",
            val :84.4
        },
        {
            country: "Nigeria",
            cat: "Overall Economic Freedom Score",
            val :58.5
        },
        {
            country: "Nigeria",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Nigeria",
            cat: "Women Representation in Govt.",
            val :5.6
        },
        {
            country: "Norway",
            cat: "World Happiness Report Score",
            val :7.58
        },
        {
            country: "Norway",
            cat: "GDP Per Capita",
            val :1.91
        },
        {
            country: "Norway",
            cat: "Health Expenditure",
            val :10
        },
        {
            country: "Norway",
            cat: "Education Expenditure",
            val :7.7
        },
        {
            country: "Norway",
            cat: "Unemployment",
            val :4.8
        },
        {
            country: "Norway",
            cat: "Government Expenditure",
            val :48.6
        },
        {
            country: "Norway",
            cat: "Judicial Effectiveness Score",
            val :86
        },
        {
            country: "Norway",
            cat: "Government Integrity",
            val :93.6
        },
        {
            country: "Norway",
            cat: "Property Rights Score",
            val :86.4
        },
        {
            country: "Norway",
            cat: "Tax Burden Score",
            val :56.4
        },
        {
            country: "Norway",
            cat: "Overall Economic Freedom Score",
            val :74.3
        },
        {
            country: "Norway",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Norway",
            cat: "Women Representation in Govt.",
            val :39.6
        },
        {
            country: "Oman",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Oman",
            cat: "GDP Per Capita",
            val :1.29
        },
        {
            country: "Oman",
            cat: "Health Expenditure",
            val :2.7
        },
        {
            country: "Oman",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Oman",
            cat: "Unemployment",
            val :17.5
        },
        {
            country: "Oman",
            cat: "Government Expenditure",
            val :50
        },
        {
            country: "Oman",
            cat: "Judicial Effectiveness Score",
            val :57.4
        },
        {
            country: "Oman",
            cat: "Government Integrity",
            val :51.5
        },
        {
            country: "Oman",
            cat: "Property Rights Score",
            val :59.5
        },
        {
            country: "Oman",
            cat: "Tax Burden Score",
            val :98.5
        },
        {
            country: "Oman",
            cat: "Overall Economic Freedom Score",
            val :61
        },
        {
            country: "Oman",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Oman",
            cat: "Women Representation in Govt.",
            val :1.2
        },
        {
            country: "Pakistan",
            cat: "World Happiness Report Score",
            val :5.83
        },
        {
            country: "Pakistan",
            cat: "GDP Per Capita",
            val :0.14
        },
        {
            country: "Pakistan",
            cat: "Health Expenditure",
            val :2.7
        },
        {
            country: "Pakistan",
            cat: "Education Expenditure",
            val :2.5
        },
        {
            country: "Pakistan",
            cat: "Unemployment",
            val :5.9
        },
        {
            country: "Pakistan",
            cat: "Government Expenditure",
            val :19.8
        },
        {
            country: "Pakistan",
            cat: "Judicial Effectiveness Score",
            val :34
        },
        {
            country: "Pakistan",
            cat: "Government Integrity",
            val :27.3
        },
        {
            country: "Pakistan",
            cat: "Property Rights Score",
            val :36
        },
        {
            country: "Pakistan",
            cat: "Tax Burden Score",
            val :78.5
        },
        {
            country: "Pakistan",
            cat: "Overall Economic Freedom Score",
            val :54.4
        },
        {
            country: "Pakistan",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Pakistan",
            cat: "Women Representation in Govt.",
            val :20.6
        },
        {
            country: "Palau",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Health Expenditure",
            val :10.6
        },
        {
            country: "Palau",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "Women Representation in Govt.",
            val :12.5
        },
        {
            country: "Panama",
            cat: "World Happiness Report Score",
            val :6.57
        },
        {
            country: "Panama",
            cat: "GDP Per Capita",
            val :0.63
        },
        {
            country: "Panama",
            cat: "Health Expenditure",
            val :7
        },
        {
            country: "Panama",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Panama",
            cat: "Unemployment",
            val :5.8
        },
        {
            country: "Panama",
            cat: "Government Expenditure",
            val :23.1
        },
        {
            country: "Panama",
            cat: "Judicial Effectiveness Score",
            val :29.4
        },
        {
            country: "Panama",
            cat: "Government Integrity",
            val :38.8
        },
        {
            country: "Panama",
            cat: "Property Rights Score",
            val :60.9
        },
        {
            country: "Panama",
            cat: "Tax Burden Score",
            val :85
        },
        {
            country: "Panama",
            cat: "Overall Economic Freedom Score",
            val :67
        },
        {
            country: "Panama",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Panama",
            cat: "Women Representation in Govt.",
            val :18.3
        },
        {
            country: "Papua New Guinea",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Papua New Guinea",
            cat: "GDP Per Capita",
            val :0.1
        },
        {
            country: "Papua New Guinea",
            cat: "Health Expenditure",
            val :3.8
        },
        {
            country: "Papua New Guinea",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Papua New Guinea",
            cat: "Unemployment",
            val :2.5
        },
        {
            country: "Papua New Guinea",
            cat: "Government Expenditure",
            val :24.5
        },
        {
            country: "Papua New Guinea",
            cat: "Judicial Effectiveness Score",
            val :55.1
        },
        {
            country: "Papua New Guinea",
            cat: "Government Integrity",
            val :33.1
        },
        {
            country: "Papua New Guinea",
            cat: "Property Rights Score",
            val :38
        },
        {
            country: "Papua New Guinea",
            cat: "Tax Burden Score",
            val :71.1
        },
        {
            country: "Papua New Guinea",
            cat: "Overall Economic Freedom Score",
            val :55.7
        },
        {
            country: "Papua New Guinea",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Papua New Guinea",
            cat: "Women Representation in Govt.",
            val :0
        },
        {
            country: "Paraguay",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Paraguay",
            cat: "GDP Per Capita",
            val :0.26
        },
        {
            country: "Paraguay",
            cat: "Health Expenditure",
            val :7.8
        },
        {
            country: "Paraguay",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Paraguay",
            cat: "Unemployment",
            val :5.4
        },
        {
            country: "Paraguay",
            cat: "Government Expenditure",
            val :24.4
        },
        {
            country: "Paraguay",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Paraguay",
            cat: "Government Integrity",
            val :28.3
        },
        {
            country: "Paraguay",
            cat: "Property Rights Score",
            val :38.3
        },
        {
            country: "Paraguay",
            cat: "Tax Burden Score",
            val :96.1
        },
        {
            country: "Paraguay",
            cat: "Overall Economic Freedom Score",
            val :62.1
        },
        {
            country: "Paraguay",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Paraguay",
            cat: "Women Representation in Govt.",
            val :13.8
        },
        {
            country: "Peru",
            cat: "World Happiness Report Score",
            val :5.71
        },
        {
            country: "Peru",
            cat: "GDP Per Capita",
            val :0.36
        },
        {
            country: "Peru",
            cat: "Health Expenditure",
            val :5.3
        },
        {
            country: "Peru",
            cat: "Education Expenditure",
            val :3.7
        },
        {
            country: "Peru",
            cat: "Unemployment",
            val :4.9
        },
        {
            country: "Peru",
            cat: "Government Expenditure",
            val :21.9
        },
        {
            country: "Peru",
            cat: "Judicial Effectiveness Score",
            val :33.5
        },
        {
            country: "Peru",
            cat: "Government Integrity",
            val :36.6
        },
        {
            country: "Peru",
            cat: "Property Rights Score",
            val :56.9
        },
        {
            country: "Peru",
            cat: "Tax Burden Score",
            val :80.6
        },
        {
            country: "Peru",
            cat: "Overall Economic Freedom Score",
            val :68.7
        },
        {
            country: "Peru",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Peru",
            cat: "Women Representation in Govt.",
            val :27.7
        },
        {
            country: "Philippines",
            cat: "World Happiness Report Score",
            val :5.59
        },
        {
            country: "Philippines",
            cat: "GDP Per Capita",
            val :0.21
        },
        {
            country: "Philippines",
            cat: "Health Expenditure",
            val :4.4
        },
        {
            country: "Philippines",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Philippines",
            cat: "Unemployment",
            val :5.9
        },
        {
            country: "Philippines",
            cat: "Government Expenditure",
            val :18.9
        },
        {
            country: "Philippines",
            cat: "Judicial Effectiveness Score",
            val :38.2
        },
        {
            country: "Philippines",
            cat: "Government Integrity",
            val :34.4
        },
        {
            country: "Philippines",
            cat: "Property Rights Score",
            val :45
        },
        {
            country: "Philippines",
            cat: "Tax Burden Score",
            val :78.9
        },
        {
            country: "Philippines",
            cat: "Overall Economic Freedom Score",
            val :65
        },
        {
            country: "Philippines",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Philippines",
            cat: "Women Representation in Govt.",
            val :29.5
        },
        {
            country: "Poland",
            cat: "World Happiness Report Score",
            val :6.2
        },
        {
            country: "Poland",
            cat: "GDP Per Capita",
            val :0.76
        },
        {
            country: "Poland",
            cat: "Health Expenditure",
            val :6.3
        },
        {
            country: "Poland",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Poland",
            cat: "Unemployment",
            val :6.2
        },
        {
            country: "Poland",
            cat: "Government Expenditure",
            val :41.7
        },
        {
            country: "Poland",
            cat: "Judicial Effectiveness Score",
            val :56.6
        },
        {
            country: "Poland",
            cat: "Government Integrity",
            val :50.9
        },
        {
            country: "Poland",
            cat: "Property Rights Score",
            val :61.8
        },
        {
            country: "Poland",
            cat: "Tax Burden Score",
            val :75.9
        },
        {
            country: "Poland",
            cat: "Overall Economic Freedom Score",
            val :68.5
        },
        {
            country: "Poland",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Poland",
            cat: "Women Representation in Govt.",
            val :28
        },
        {
            country: "Portugal",
            cat: "World Happiness Report Score",
            val :5.71
        },
        {
            country: "Portugal",
            cat: "GDP Per Capita",
            val :0.8
        },
        {
            country: "Portugal",
            cat: "Health Expenditure",
            val :9
        },
        {
            country: "Portugal",
            cat: "Education Expenditure",
            val :5.1
        },
        {
            country: "Portugal",
            cat: "Unemployment",
            val :11.2
        },
        {
            country: "Portugal",
            cat: "Government Expenditure",
            val :48.4
        },
        {
            country: "Portugal",
            cat: "Judicial Effectiveness Score",
            val :70.1
        },
        {
            country: "Portugal",
            cat: "Government Integrity",
            val :56.8
        },
        {
            country: "Portugal",
            cat: "Property Rights Score",
            val :69.2
        },
        {
            country: "Portugal",
            cat: "Tax Burden Score",
            val :59.8
        },
        {
            country: "Portugal",
            cat: "Overall Economic Freedom Score",
            val :63.4
        },
        {
            country: "Portugal",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Portugal",
            cat: "Women Representation in Govt.",
            val :34.8
        },
        {
            country: "Qatar",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Qatar",
            cat: "GDP Per Capita",
            val :3.52
        },
        {
            country: "Qatar",
            cat: "Health Expenditure",
            val :2.7
        },
        {
            country: "Qatar",
            cat: "Education Expenditure",
            val :3.6
        },
        {
            country: "Qatar",
            cat: "Unemployment",
            val :0.2
        },
        {
            country: "Qatar",
            cat: "Government Expenditure",
            val :36.4
        },
        {
            country: "Qatar",
            cat: "Judicial Effectiveness Score",
            val :59.8
        },
        {
            country: "Qatar",
            cat: "Government Integrity",
            val :71.6
        },
        {
            country: "Qatar",
            cat: "Property Rights Score",
            val :70.3
        },
        {
            country: "Qatar",
            cat: "Tax Burden Score",
            val :99.6
        },
        {
            country: "Qatar",
            cat: "Overall Economic Freedom Score",
            val :72.6
        },
        {
            country: "Qatar",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Qatar",
            cat: "Women Representation in Govt.",
            val :0
        },
        {
            country: "Romania",
            cat: "World Happiness Report Score",
            val :6.09
        },
        {
            country: "Romania",
            cat: "GDP Per Capita",
            val :0.62
        },
        {
            country: "Romania",
            cat: "Health Expenditure",
            val :10.6
        },
        {
            country: "Romania",
            cat: "Education Expenditure",
            val :3.1
        },
        {
            country: "Romania",
            cat: "Unemployment",
            val :6.4
        },
        {
            country: "Romania",
            cat: "Government Expenditure",
            val :33.2
        },
        {
            country: "Romania",
            cat: "Judicial Effectiveness Score",
            val :59.7
        },
        {
            country: "Romania",
            cat: "Government Integrity",
            val :40
        },
        {
            country: "Romania",
            cat: "Property Rights Score",
            val :61
        },
        {
            country: "Romania",
            cat: "Tax Burden Score",
            val :87.3
        },
        {
            country: "Romania",
            cat: "Overall Economic Freedom Score",
            val :69.4
        },
        {
            country: "Romania",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Romania",
            cat: "Women Representation in Govt.",
            val :20.7
        },
        {
            country: "Russia",
            cat: "World Happiness Report Score",
            val :5.58
        },
        {
            country: "Russia",
            cat: "GDP Per Capita",
            val :0.73
        },
        {
            country: "Russia",
            cat: "Health Expenditure",
            val :7
        },
        {
            country: "Russia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Russia",
            cat: "Unemployment",
            val :5.7
        },
        {
            country: "Russia",
            cat: "Government Expenditure",
            val :35.3
        },
        {
            country: "Russia",
            cat: "Judicial Effectiveness Score",
            val :46.9
        },
        {
            country: "Russia",
            cat: "Government Integrity",
            val :38.1
        },
        {
            country: "Russia",
            cat: "Property Rights Score",
            val :48.7
        },
        {
            country: "Russia",
            cat: "Tax Burden Score",
            val :85.8
        },
        {
            country: "Russia",
            cat: "Overall Economic Freedom Score",
            val :58.2
        },
        {
            country: "Russia",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Russia",
            cat: "Women Representation in Govt.",
            val :15.8
        },
        {
            country: "Rwanda",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Rwanda",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Rwanda",
            cat: "Health Expenditure",
            val :3.8
        },
        {
            country: "Rwanda",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Rwanda",
            cat: "Unemployment",
            val :2.5
        },
        {
            country: "Rwanda",
            cat: "Government Expenditure",
            val :27.2
        },
        {
            country: "Rwanda",
            cat: "Judicial Effectiveness Score",
            val :79.6
        },
        {
            country: "Rwanda",
            cat: "Government Integrity",
            val :61.2
        },
        {
            country: "Rwanda",
            cat: "Property Rights Score",
            val :69.8
        },
        {
            country: "Rwanda",
            cat: "Tax Burden Score",
            val :75.8
        },
        {
            country: "Rwanda",
            cat: "Overall Economic Freedom Score",
            val :69.1
        },
        {
            country: "Rwanda",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Rwanda",
            cat: "Women Representation in Govt.",
            val :61.3
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Health Expenditure",
            val :5.6
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "Women Representation in Govt.",
            val :13.3
        },
        {
            country: "Saint Lucia",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Saint Lucia",
            cat: "GDP Per Capita",
            val :0.32
        },
        {
            country: "Saint Lucia",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Saint Lucia",
            cat: "Education Expenditure",
            val :4.3
        },
        {
            country: "Saint Lucia",
            cat: "Unemployment",
            val :19.8
        },
        {
            country: "Saint Lucia",
            cat: "Government Expenditure",
            val :30.3
        },
        {
            country: "Saint Lucia",
            cat: "Judicial Effectiveness Score",
            val :69.2
        },
        {
            country: "Saint Lucia",
            cat: "Government Integrity",
            val :50.9
        },
        {
            country: "Saint Lucia",
            cat: "Property Rights Score",
            val :67.9
        },
        {
            country: "Saint Lucia",
            cat: "Tax Burden Score",
            val :75.5
        },
        {
            country: "Saint Lucia",
            cat: "Overall Economic Freedom Score",
            val :67.6
        },
        {
            country: "Saint Lucia",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Saint Lucia",
            cat: "Women Representation in Govt.",
            val :16.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "GDP Per Capita",
            val :0.31
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Health Expenditure",
            val :4.2
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Unemployment",
            val :19.3
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Government Expenditure",
            val :30.1
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Judicial Effectiveness Score",
            val :69.2
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Government Integrity",
            val :51.5
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Property Rights Score",
            val :36.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Tax Burden Score",
            val :72.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Overall Economic Freedom Score",
            val :67.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "Women Representation in Govt.",
            val :13
        },
        {
            country: "Samoa",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Samoa",
            cat: "GDP Per Capita",
            val :0.15
        },
        {
            country: "Samoa",
            cat: "Health Expenditure",
            val :7.8
        },
        {
            country: "Samoa",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Samoa",
            cat: "Unemployment",
            val :7.2
        },
        {
            country: "Samoa",
            cat: "Government Expenditure",
            val :38.7
        },
        {
            country: "Samoa",
            cat: "Judicial Effectiveness Score",
            val :38.8
        },
        {
            country: "Samoa",
            cat: "Government Integrity",
            val :40.1
        },
        {
            country: "Samoa",
            cat: "Property Rights Score",
            val :53.1
        },
        {
            country: "Samoa",
            cat: "Tax Burden Score",
            val :79.9
        },
        {
            country: "Samoa",
            cat: "Overall Economic Freedom Score",
            val :61.5
        },
        {
            country: "Samoa",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Samoa",
            cat: "Women Representation in Govt.",
            val :10
        },
        {
            country: "San Marino",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Health Expenditure",
            val :5.3
        },
        {
            country: "San Marino",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "Women Representation in Govt.",
            val :26.7
        },
        {
            country: "Sao Tome and Principe",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Sao Tome and Principe",
            cat: "GDP Per Capita",
            val :0.08
        },
        {
            country: "Sao Tome and Principe",
            cat: "Health Expenditure",
            val :4.4
        },
        {
            country: "Sao Tome and Principe",
            cat: "Education Expenditure",
            val :3.7
        },
        {
            country: "Sao Tome and Principe",
            cat: "Unemployment",
            val :13.6
        },
        {
            country: "Sao Tome and Principe",
            cat: "Government Expenditure",
            val :31.9
        },
        {
            country: "Sao Tome and Principe",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Sao Tome and Principe",
            cat: "Government Integrity",
            val :39.4
        },
        {
            country: "Sao Tome and Principe",
            cat: "Property Rights Score",
            val :38
        },
        {
            country: "Sao Tome and Principe",
            cat: "Tax Burden Score",
            val :82
        },
        {
            country: "Sao Tome and Principe",
            cat: "Overall Economic Freedom Score",
            val :53.6
        },
        {
            country: "Sao Tome and Principe",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Sao Tome and Principe",
            cat: "Women Representation in Govt.",
            val :18.2
        },
        {
            country: "Saudi Arabia",
            cat: "World Happiness Report Score",
            val :6.29
        },
        {
            country: "Saudi Arabia",
            cat: "GDP Per Capita",
            val :1.52
        },
        {
            country: "Saudi Arabia",
            cat: "Health Expenditure",
            val :6.3
        },
        {
            country: "Saudi Arabia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Saudi Arabia",
            cat: "Unemployment",
            val :5.5
        },
        {
            country: "Saudi Arabia",
            cat: "Government Expenditure",
            val :40
        },
        {
            country: "Saudi Arabia",
            cat: "Judicial Effectiveness Score",
            val :60.2
        },
        {
            country: "Saudi Arabia",
            cat: "Government Integrity",
            val :49.9
        },
        {
            country: "Saudi Arabia",
            cat: "Property Rights Score",
            val :53.1
        },
        {
            country: "Saudi Arabia",
            cat: "Tax Burden Score",
            val :99.7
        },
        {
            country: "Saudi Arabia",
            cat: "Overall Economic Freedom Score",
            val :59.6
        },
        {
            country: "Saudi Arabia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Saudi Arabia",
            cat: "Women Representation in Govt.",
            val :19.9
        },
        {
            country: "Senegal",
            cat: "World Happiness Report Score",
            val :4.68
        },
        {
            country: "Senegal",
            cat: "GDP Per Capita",
            val :0.07
        },
        {
            country: "Senegal",
            cat: "Health Expenditure",
            val :9
        },
        {
            country: "Senegal",
            cat: "Education Expenditure",
            val :7.4
        },
        {
            country: "Senegal",
            cat: "Unemployment",
            val :9.5
        },
        {
            country: "Senegal",
            cat: "Government Expenditure",
            val :30.2
        },
        {
            country: "Senegal",
            cat: "Judicial Effectiveness Score",
            val :40.4
        },
        {
            country: "Senegal",
            cat: "Government Integrity",
            val :42.6
        },
        {
            country: "Senegal",
            cat: "Property Rights Score",
            val :41.3
        },
        {
            country: "Senegal",
            cat: "Tax Burden Score",
            val :68.5
        },
        {
            country: "Senegal",
            cat: "Overall Economic Freedom Score",
            val :55.7
        },
        {
            country: "Senegal",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Senegal",
            cat: "Women Representation in Govt.",
            val :41.8
        },
        {
            country: "Serbia",
            cat: "World Happiness Report Score",
            val :5.12
        },
        {
            country: "Serbia",
            cat: "GDP Per Capita",
            val :0.4
        },
        {
            country: "Serbia",
            cat: "Health Expenditure",
            val :9.4
        },
        {
            country: "Serbia",
            cat: "Education Expenditure",
            val :4.2
        },
        {
            country: "Serbia",
            cat: "Unemployment",
            val :16.5
        },
        {
            country: "Serbia",
            cat: "Government Expenditure",
            val :44.5
        },
        {
            country: "Serbia",
            cat: "Judicial Effectiveness Score",
            val :48.2
        },
        {
            country: "Serbia",
            cat: "Government Integrity",
            val :36.5
        },
        {
            country: "Serbia",
            cat: "Property Rights Score",
            val :46.2
        },
        {
            country: "Serbia",
            cat: "Tax Burden Score",
            val :83.5
        },
        {
            country: "Serbia",
            cat: "Overall Economic Freedom Score",
            val :62.5
        },
        {
            country: "Serbia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Serbia",
            cat: "Women Representation in Govt.",
            val :34.4
        },
        {
            country: "Seychelles",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "GDP Per Capita",
            val :0.76
        },
        {
            country: "Seychelles",
            cat: "Health Expenditure",
            val :3.4
        },
        {
            country: "Seychelles",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "Government Expenditure",
            val :35.1
        },
        {
            country: "Seychelles",
            cat: "Judicial Effectiveness Score",
            val :38.8
        },
        {
            country: "Seychelles",
            cat: "Government Integrity",
            val :38.8
        },
        {
            country: "Seychelles",
            cat: "Property Rights Score",
            val :60.7
        },
        {
            country: "Seychelles",
            cat: "Tax Burden Score",
            val :73.4
        },
        {
            country: "Seychelles",
            cat: "Overall Economic Freedom Score",
            val :61.6
        },
        {
            country: "Seychelles",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Seychelles",
            cat: "Women Representation in Govt.",
            val :21.2
        },
        {
            country: "Sierra Leone",
            cat: "World Happiness Report Score",
            val :4.09
        },
        {
            country: "Sierra Leone",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Sierra Leone",
            cat: "Health Expenditure",
            val :18.3
        },
        {
            country: "Sierra Leone",
            cat: "Education Expenditure",
            val :2.7
        },
        {
            country: "Sierra Leone",
            cat: "Unemployment",
            val :3
        },
        {
            country: "Sierra Leone",
            cat: "Government Expenditure",
            val :18.4
        },
        {
            country: "Sierra Leone",
            cat: "Judicial Effectiveness Score",
            val :29.6
        },
        {
            country: "Sierra Leone",
            cat: "Government Integrity",
            val :22
        },
        {
            country: "Sierra Leone",
            cat: "Property Rights Score",
            val :33.6
        },
        {
            country: "Sierra Leone",
            cat: "Tax Burden Score",
            val :79.9
        },
        {
            country: "Sierra Leone",
            cat: "Overall Economic Freedom Score",
            val :51.8
        },
        {
            country: "Sierra Leone",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Sierra Leone",
            cat: "Women Representation in Govt.",
            val :12.4
        },
        {
            country: "Singapore",
            cat: "World Happiness Report Score",
            val :6.38
        },
        {
            country: "Singapore",
            cat: "GDP Per Capita",
            val :2.42
        },
        {
            country: "Singapore",
            cat: "Health Expenditure",
            val :4.3
        },
        {
            country: "Singapore",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Singapore",
            cat: "Unemployment",
            val :1.8
        },
        {
            country: "Singapore",
            cat: "Government Expenditure",
            val :17.7
        },
        {
            country: "Singapore",
            cat: "Judicial Effectiveness Score",
            val :90.9
        },
        {
            country: "Singapore",
            cat: "Government Integrity",
            val :91.2
        },
        {
            country: "Singapore",
            cat: "Property Rights Score",
            val :98.4
        },
        {
            country: "Singapore",
            cat: "Tax Burden Score",
            val :90.4
        },
        {
            country: "Singapore",
            cat: "Overall Economic Freedom Score",
            val :88.8
        },
        {
            country: "Singapore",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Singapore",
            cat: "Women Representation in Govt.",
            val :23
        },
        {
            country: "Slovakia",
            cat: "World Happiness Report Score",
            val :6.37
        },
        {
            country: "Slovakia",
            cat: "GDP Per Capita",
            val :0.86
        },
        {
            country: "Slovakia",
            cat: "Health Expenditure",
            val :6.9
        },
        {
            country: "Slovakia",
            cat: "Education Expenditure",
            val :4.2
        },
        {
            country: "Slovakia",
            cat: "Unemployment",
            val :10
        },
        {
            country: "Slovakia",
            cat: "Government Expenditure",
            val :43.1
        },
        {
            country: "Slovakia",
            cat: "Judicial Effectiveness Score",
            val :38.8
        },
        {
            country: "Slovakia",
            cat: "Government Integrity",
            val :38.2
        },
        {
            country: "Slovakia",
            cat: "Property Rights Score",
            val :68.2
        },
        {
            country: "Slovakia",
            cat: "Tax Burden Score",
            val :78.9
        },
        {
            country: "Slovakia",
            cat: "Overall Economic Freedom Score",
            val :65.3
        },
        {
            country: "Slovakia",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Slovakia",
            cat: "Women Representation in Govt.",
            val :20
        },
        {
            country: "Slovenia",
            cat: "World Happiness Report Score",
            val :6.17
        },
        {
            country: "Slovenia",
            cat: "GDP Per Capita",
            val :0.88
        },
        {
            country: "Slovenia",
            cat: "Health Expenditure",
            val :8.5
        },
        {
            country: "Slovenia",
            cat: "Education Expenditure",
            val :5.3
        },
        {
            country: "Slovenia",
            cat: "Unemployment",
            val :8.7
        },
        {
            country: "Slovenia",
            cat: "Government Expenditure",
            val :47.9
        },
        {
            country: "Slovenia",
            cat: "Judicial Effectiveness Score",
            val :57.7
        },
        {
            country: "Slovenia",
            cat: "Government Integrity",
            val :52.1
        },
        {
            country: "Slovenia",
            cat: "Property Rights Score",
            val :76.6
        },
        {
            country: "Slovenia",
            cat: "Tax Burden Score",
            val :58.7
        },
        {
            country: "Slovenia",
            cat: "Overall Economic Freedom Score",
            val :64.8
        },
        {
            country: "Slovenia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Slovenia",
            cat: "Women Representation in Govt.",
            val :36.7
        },
        {
            country: "Solomon Islands",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Solomon Islands",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Solomon Islands",
            cat: "Health Expenditure",
            val :8
        },
        {
            country: "Solomon Islands",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Solomon Islands",
            cat: "Unemployment",
            val :31.4
        },
        {
            country: "Solomon Islands",
            cat: "Government Expenditure",
            val :46.3
        },
        {
            country: "Solomon Islands",
            cat: "Judicial Effectiveness Score",
            val :57.3
        },
        {
            country: "Solomon Islands",
            cat: "Government Integrity",
            val :36.8
        },
        {
            country: "Solomon Islands",
            cat: "Property Rights Score",
            val :49.4
        },
        {
            country: "Solomon Islands",
            cat: "Tax Burden Score",
            val :65.5
        },
        {
            country: "Solomon Islands",
            cat: "Overall Economic Freedom Score",
            val :57.5
        },
        {
            country: "Solomon Islands",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Solomon Islands",
            cat: "Women Representation in Govt.",
            val :2
        },
        {
            country: "Somalia",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Unemployment",
            val :6.6
        },
        {
            country: "Somalia",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Judicial Effectiveness Score",
            val :25.4
        },
        {
            country: "Somalia",
            cat: "Government Integrity",
            val :17.8
        },
        {
            country: "Somalia",
            cat: "Property Rights Score",
            val :33.1
        },
        {
            country: "Somalia",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "Women Representation in Govt.",
            val :24.4
        },
        {
            country: "South Africa",
            cat: "World Happiness Report Score",
            val :4.51
        },
        {
            country: "South Africa",
            cat: "GDP Per Capita",
            val :0.36
        },
        {
            country: "South Africa",
            cat: "Health Expenditure",
            val :8.2
        },
        {
            country: "South Africa",
            cat: "Education Expenditure",
            val :6
        },
        {
            country: "South Africa",
            cat: "Unemployment",
            val :25.9
        },
        {
            country: "South Africa",
            cat: "Government Expenditure",
            val :32.6
        },
        {
            country: "South Africa",
            cat: "Judicial Effectiveness Score",
            val :65.9
        },
        {
            country: "South Africa",
            cat: "Government Integrity",
            val :45.4
        },
        {
            country: "South Africa",
            cat: "Property Rights Score",
            val :67.7
        },
        {
            country: "South Africa",
            cat: "Tax Burden Score",
            val :62.5
        },
        {
            country: "South Africa",
            cat: "Overall Economic Freedom Score",
            val :63
        },
        {
            country: "South Africa",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "South Africa",
            cat: "Women Representation in Govt.",
            val :42
        },
        {
            country: "South Sudan",
            cat: "World Happiness Report Score",
            val :2.82
        },
        {
            country: "South Sudan",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Health Expenditure",
            val :2.5
        },
        {
            country: "South Sudan",
            cat: "Education Expenditure",
            val :1.7
        },
        {
            country: "South Sudan",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "Women Representation in Govt.",
            val :28.5
        },
        {
            country: "Spain",
            cat: "World Happiness Report Score",
            val :6.23
        },
        {
            country: "Spain",
            cat: "GDP Per Capita",
            val :1
        },
        {
            country: "Spain",
            cat: "Health Expenditure",
            val :9.2
        },
        {
            country: "Spain",
            cat: "Education Expenditure",
            val :4.3
        },
        {
            country: "Spain",
            cat: "Unemployment",
            val :19.4
        },
        {
            country: "Spain",
            cat: "Government Expenditure",
            val :43.7
        },
        {
            country: "Spain",
            cat: "Judicial Effectiveness Score",
            val :62
        },
        {
            country: "Spain",
            cat: "Government Integrity",
            val :51.5
        },
        {
            country: "Spain",
            cat: "Property Rights Score",
            val :73.1
        },
        {
            country: "Spain",
            cat: "Tax Burden Score",
            val :62
        },
        {
            country: "Spain",
            cat: "Overall Economic Freedom Score",
            val :65.1
        },
        {
            country: "Spain",
            cat: "Financial Freedom Score",
            val :70
        },
        {
            country: "Spain",
            cat: "Women Representation in Govt.",
            val :39.1
        },
        {
            country: "Sri Lanka",
            cat: "World Happiness Report Score",
            val :4.33
        },
        {
            country: "Sri Lanka",
            cat: "GDP Per Capita",
            val :0.34
        },
        {
            country: "Sri Lanka",
            cat: "Health Expenditure",
            val :3
        },
        {
            country: "Sri Lanka",
            cat: "Education Expenditure",
            val :1.9
        },
        {
            country: "Sri Lanka",
            cat: "Unemployment",
            val :5
        },
        {
            country: "Sri Lanka",
            cat: "Government Expenditure",
            val :18.9
        },
        {
            country: "Sri Lanka",
            cat: "Judicial Effectiveness Score",
            val :52
        },
        {
            country: "Sri Lanka",
            cat: "Government Integrity",
            val :30.7
        },
        {
            country: "Sri Lanka",
            cat: "Property Rights Score",
            val :46.5
        },
        {
            country: "Sri Lanka",
            cat: "Tax Burden Score",
            val :84.9
        },
        {
            country: "Sri Lanka",
            cat: "Overall Economic Freedom Score",
            val :57.8
        },
        {
            country: "Sri Lanka",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Sri Lanka",
            cat: "Women Representation in Govt.",
            val :5.8
        },
        {
            country: "Sudan",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Sudan",
            cat: "GDP Per Capita",
            val :0.12
        },
        {
            country: "Sudan",
            cat: "Health Expenditure",
            val :6.3
        },
        {
            country: "Sudan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Sudan",
            cat: "Unemployment",
            val :13.3
        },
        {
            country: "Sudan",
            cat: "Government Expenditure",
            val :12.5
        },
        {
            country: "Sudan",
            cat: "Judicial Effectiveness Score",
            val :21.4
        },
        {
            country: "Sudan",
            cat: "Government Integrity",
            val :21.2
        },
        {
            country: "Sudan",
            cat: "Property Rights Score",
            val :27.8
        },
        {
            country: "Sudan",
            cat: "Tax Burden Score",
            val :85.9
        },
        {
            country: "Sudan",
            cat: "Overall Economic Freedom Score",
            val :49.4
        },
        {
            country: "Sudan",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Sudan",
            cat: "Women Representation in Govt.",
            val :30.5
        },
        {
            country: "Suriname",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Suriname",
            cat: "GDP Per Capita",
            val :0.39
        },
        {
            country: "Suriname",
            cat: "Health Expenditure",
            val :6.5
        },
        {
            country: "Suriname",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Suriname",
            cat: "Unemployment",
            val :10
        },
        {
            country: "Suriname",
            cat: "Government Expenditure",
            val :28.1
        },
        {
            country: "Suriname",
            cat: "Judicial Effectiveness Score",
            val :21.4
        },
        {
            country: "Suriname",
            cat: "Government Integrity",
            val :39.9
        },
        {
            country: "Suriname",
            cat: "Property Rights Score",
            val :39.7
        },
        {
            country: "Suriname",
            cat: "Tax Burden Score",
            val :71.4
        },
        {
            country: "Suriname",
            cat: "Overall Economic Freedom Score",
            val :48.1
        },
        {
            country: "Suriname",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Suriname",
            cat: "Women Representation in Govt.",
            val :25.5
        },
        {
            country: "Sweden",
            cat: "World Happiness Report Score",
            val :7.29
        },
        {
            country: "Sweden",
            cat: "GDP Per Capita",
            val :1.37
        },
        {
            country: "Sweden",
            cat: "Health Expenditure",
            val :11
        },
        {
            country: "Sweden",
            cat: "Education Expenditure",
            val :7.7
        },
        {
            country: "Sweden",
            cat: "Unemployment",
            val :7.1
        },
        {
            country: "Sweden",
            cat: "Government Expenditure",
            val :50.6
        },
        {
            country: "Sweden",
            cat: "Judicial Effectiveness Score",
            val :88.2
        },
        {
            country: "Sweden",
            cat: "Government Integrity",
            val :92.9
        },
        {
            country: "Sweden",
            cat: "Property Rights Score",
            val :92.6
        },
        {
            country: "Sweden",
            cat: "Tax Burden Score",
            val :43.9
        },
        {
            country: "Sweden",
            cat: "Overall Economic Freedom Score",
            val :76.3
        },
        {
            country: "Sweden",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "Sweden",
            cat: "Women Representation in Govt.",
            val :43.6
        },
        {
            country: "Switzerland",
            cat: "World Happiness Report Score",
            val :7.47
        },
        {
            country: "Switzerland",
            cat: "GDP Per Capita",
            val :1.64
        },
        {
            country: "Switzerland",
            cat: "Health Expenditure",
            val :12.1
        },
        {
            country: "Switzerland",
            cat: "Education Expenditure",
            val :5.1
        },
        {
            country: "Switzerland",
            cat: "Unemployment",
            val :4.6
        },
        {
            country: "Switzerland",
            cat: "Government Expenditure",
            val :34
        },
        {
            country: "Switzerland",
            cat: "Judicial Effectiveness Score",
            val :82.1
        },
        {
            country: "Switzerland",
            cat: "Government Integrity",
            val :82.8
        },
        {
            country: "Switzerland",
            cat: "Property Rights Score",
            val :84.2
        },
        {
            country: "Switzerland",
            cat: "Tax Burden Score",
            val :70.5
        },
        {
            country: "Switzerland",
            cat: "Overall Economic Freedom Score",
            val :81.7
        },
        {
            country: "Switzerland",
            cat: "Financial Freedom Score",
            val :90
        },
        {
            country: "Switzerland",
            cat: "Women Representation in Govt.",
            val :32.5
        },
        {
            country: "Syria",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Health Expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Unemployment",
            val :14.3
        },
        {
            country: "Syria",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Judicial Effectiveness Score",
            val :22.1
        },
        {
            country: "Syria",
            cat: "Government Integrity",
            val :23.1
        },
        {
            country: "Syria",
            cat: "Property Rights Score",
            val :36.7
        },
        {
            country: "Syria",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "Women Representation in Govt.",
            val :13.2
        },
        {
            country: "Taiwan",
            cat: "World Happiness Report Score",
            val :6.36
        },
        {
            country: "Taiwan",
            cat: "GDP Per Capita",
            val :1.32
        },
        {
            country: "Taiwan",
            cat: "Health Expenditure",
            val :6.9
        },
        {
            country: "Taiwan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Taiwan",
            cat: "Unemployment",
            val :4
        },
        {
            country: "Taiwan",
            cat: "Government Expenditure",
            val :17.8
        },
        {
            country: "Taiwan",
            cat: "Judicial Effectiveness Score",
            val :69.2
        },
        {
            country: "Taiwan",
            cat: "Government Integrity",
            val :70.9
        },
        {
            country: "Taiwan",
            cat: "Property Rights Score",
            val :84.3
        },
        {
            country: "Taiwan",
            cat: "Tax Burden Score",
            val :76.1
        },
        {
            country: "Taiwan",
            cat: "Overall Economic Freedom Score",
            val :76.6
        },
        {
            country: "Taiwan",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Taiwan",
            cat: "Women Representation in Govt.",
            val :0.0
        },
        {
            country: "Tajikistan",
            cat: "World Happiness Report Score",
            val :5.83
        },
        {
            country: "Tajikistan",
            cat: "GDP Per Capita",
            val :0.08
        },
        {
            country: "Tajikistan",
            cat: "Health Expenditure",
            val :6.1
        },
        {
            country: "Tajikistan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Tajikistan",
            cat: "Unemployment",
            val :10.8
        },
        {
            country: "Tajikistan",
            cat: "Government Expenditure",
            val :30.9
        },
        {
            country: "Tajikistan",
            cat: "Judicial Effectiveness Score",
            val :50.3
        },
        {
            country: "Tajikistan",
            cat: "Government Integrity",
            val :38.2
        },
        {
            country: "Tajikistan",
            cat: "Property Rights Score",
            val :46.8
        },
        {
            country: "Tajikistan",
            cat: "Tax Burden Score",
            val :91.8
        },
        {
            country: "Tajikistan",
            cat: "Overall Economic Freedom Score",
            val :58.3
        },
        {
            country: "Tajikistan",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Tajikistan",
            cat: "Women Representation in Govt.",
            val :19
        },
        {
            country: "Tanzania",
            cat: "World Happiness Report Score",
            val :3.35
        },
        {
            country: "Tanzania",
            cat: "GDP Per Capita",
            val :0.08
        },
        {
            country: "Tanzania",
            cat: "Health Expenditure",
            val :3.8
        },
        {
            country: "Tanzania",
            cat: "Education Expenditure",
            val :3.5
        },
        {
            country: "Tanzania",
            cat: "Unemployment",
            val :2.6
        },
        {
            country: "Tanzania",
            cat: "Government Expenditure",
            val :18.5
        },
        {
            country: "Tanzania",
            cat: "Judicial Effectiveness Score",
            val :34.7
        },
        {
            country: "Tanzania",
            cat: "Government Integrity",
            val :31.8
        },
        {
            country: "Tanzania",
            cat: "Property Rights Score",
            val :38
        },
        {
            country: "Tanzania",
            cat: "Tax Burden Score",
            val :79.8
        },
        {
            country: "Tanzania",
            cat: "Overall Economic Freedom Score",
            val :59.9
        },
        {
            country: "Tanzania",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Tanzania",
            cat: "Women Representation in Govt.",
            val :36.4
        },
        {
            country: "Thailand",
            cat: "World Happiness Report Score",
            val :5.94
        },
        {
            country: "Thailand",
            cat: "GDP Per Capita",
            val :0.47
        },
        {
            country: "Thailand",
            cat: "Health Expenditure",
            val :3.1
        },
        {
            country: "Thailand",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Thailand",
            cat: "Unemployment",
            val :0.6
        },
        {
            country: "Thailand",
            cat: "Government Expenditure",
            val :22
        },
        {
            country: "Thailand",
            cat: "Judicial Effectiveness Score",
            val :45.3
        },
        {
            country: "Thailand",
            cat: "Government Integrity",
            val :34.7
        },
        {
            country: "Thailand",
            cat: "Property Rights Score",
            val :48.6
        },
        {
            country: "Thailand",
            cat: "Tax Burden Score",
            val :81.3
        },
        {
            country: "Thailand",
            cat: "Overall Economic Freedom Score",
            val :67.1
        },
        {
            country: "Thailand",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Thailand",
            cat: "Women Representation in Govt.",
            val :4.8
        },
        {
            country: "Timor-Leste",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Timor-Leste",
            cat: "GDP Per Capita",
            val :0.12
        },
        {
            country: "Timor-Leste",
            cat: "Health Expenditure",
            val :3.1
        },
        {
            country: "Timor-Leste",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Timor-Leste",
            cat: "Unemployment",
            val :4
        },
        {
            country: "Timor-Leste",
            cat: "Government Expenditure",
            val :48
        },
        {
            country: "Timor-Leste",
            cat: "Judicial Effectiveness Score",
            val :13.8
        },
        {
            country: "Timor-Leste",
            cat: "Government Integrity",
            val :32
        },
        {
            country: "Timor-Leste",
            cat: "Property Rights Score",
            val :29.9
        },
        {
            country: "Timor-Leste",
            cat: "Tax Burden Score",
            val :97.4
        },
        {
            country: "Timor-Leste",
            cat: "Overall Economic Freedom Score",
            val :48.1
        },
        {
            country: "Timor-Leste",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Timor-Leste",
            cat: "Women Representation in Govt.",
            val :32.3
        },
        {
            country: "Togo",
            cat: "World Happiness Report Score",
            val :4.36
        },
        {
            country: "Togo",
            cat: "GDP Per Capita",
            val :0.04
        },
        {
            country: "Togo",
            cat: "Health Expenditure",
            val :6.6
        },
        {
            country: "Togo",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Togo",
            cat: "Unemployment",
            val :6.8
        },
        {
            country: "Togo",
            cat: "Government Expenditure",
            val :29.8
        },
        {
            country: "Togo",
            cat: "Judicial Effectiveness Score",
            val :28.2
        },
        {
            country: "Togo",
            cat: "Government Integrity",
            val :31.4
        },
        {
            country: "Togo",
            cat: "Property Rights Score",
            val :32.7
        },
        {
            country: "Togo",
            cat: "Tax Burden Score",
            val :64.3
        },
        {
            country: "Togo",
            cat: "Overall Economic Freedom Score",
            val :47.8
        },
        {
            country: "Togo",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Togo",
            cat: "Women Representation in Govt.",
            val :17.6
        },
        {
            country: "Tonga",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Tonga",
            cat: "GDP Per Capita",
            val :0.15
        },
        {
            country: "Tonga",
            cat: "Health Expenditure",
            val :5.9
        },
        {
            country: "Tonga",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Tonga",
            cat: "Unemployment",
            val :4.9
        },
        {
            country: "Tonga",
            cat: "Government Expenditure",
            val :32.3
        },
        {
            country: "Tonga",
            cat: "Judicial Effectiveness Score",
            val :25.4
        },
        {
            country: "Tonga",
            cat: "Government Integrity",
            val :40.5
        },
        {
            country: "Tonga",
            cat: "Property Rights Score",
            val :62.1
        },
        {
            country: "Tonga",
            cat: "Tax Burden Score",
            val :85.4
        },
        {
            country: "Tonga",
            cat: "Overall Economic Freedom Score",
            val :63.1
        },
        {
            country: "Tonga",
            cat: "Financial Freedom Score",
            val :20
        },
        {
            country: "Tonga",
            cat: "Women Representation in Govt.",
            val :3.8
        },
        {
            country: "Trinidad and Tobago",
            cat: "World Happiness Report Score",
            val :6.19
        },
        {
            country: "Trinidad and Tobago",
            cat: "GDP Per Capita",
            val :0.88
        },
        {
            country: "Trinidad and Tobago",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Trinidad and Tobago",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Trinidad and Tobago",
            cat: "Unemployment",
            val :3.9
        },
        {
            country: "Trinidad and Tobago",
            cat: "Government Expenditure",
            val :39
        },
        {
            country: "Trinidad and Tobago",
            cat: "Judicial Effectiveness Score",
            val :49.8
        },
        {
            country: "Trinidad and Tobago",
            cat: "Government Integrity",
            val :33.1
        },
        {
            country: "Trinidad and Tobago",
            cat: "Property Rights Score",
            val :54.9
        },
        {
            country: "Trinidad and Tobago",
            cat: "Tax Burden Score",
            val :83.5
        },
        {
            country: "Trinidad and Tobago",
            cat: "Overall Economic Freedom Score",
            val :57.7
        },
        {
            country: "Trinidad and Tobago",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Trinidad and Tobago",
            cat: "Women Representation in Govt.",
            val :31
        },
        {
            country: "Tunisia",
            cat: "World Happiness Report Score",
            val :4.12
        },
        {
            country: "Tunisia",
            cat: "GDP Per Capita",
            val :0.32
        },
        {
            country: "Tunisia",
            cat: "Health Expenditure",
            val :6.7
        },
        {
            country: "Tunisia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Tunisia",
            cat: "Unemployment",
            val :14.8
        },
        {
            country: "Tunisia",
            cat: "Government Expenditure",
            val :28.6
        },
        {
            country: "Tunisia",
            cat: "Judicial Effectiveness Score",
            val :41.7
        },
        {
            country: "Tunisia",
            cat: "Government Integrity",
            val :36.8
        },
        {
            country: "Tunisia",
            cat: "Property Rights Score",
            val :49.4
        },
        {
            country: "Tunisia",
            cat: "Tax Burden Score",
            val :73
        },
        {
            country: "Tunisia",
            cat: "Overall Economic Freedom Score",
            val :58.9
        },
        {
            country: "Tunisia",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Tunisia",
            cat: "Women Representation in Govt.",
            val :31.3
        },
        {
            country: "Turkey",
            cat: "World Happiness Report Score",
            val :5.61
        },
        {
            country: "Turkey",
            cat: "GDP Per Capita",
            val :0.69
        },
        {
            country: "Turkey",
            cat: "Health Expenditure",
            val :4.1
        },
        {
            country: "Turkey",
            cat: "Education Expenditure",
            val :4.4
        },
        {
            country: "Turkey",
            cat: "Unemployment",
            val :10.3
        },
        {
            country: "Turkey",
            cat: "Government Expenditure",
            val :32.6
        },
        {
            country: "Turkey",
            cat: "Judicial Effectiveness Score",
            val :54.5
        },
        {
            country: "Turkey",
            cat: "Government Integrity",
            val :42
        },
        {
            country: "Turkey",
            cat: "Property Rights Score",
            val :54.7
        },
        {
            country: "Turkey",
            cat: "Tax Burden Score",
            val :74.7
        },
        {
            country: "Turkey",
            cat: "Overall Economic Freedom Score",
            val :65.4
        },
        {
            country: "Turkey",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "Turkey",
            cat: "Women Representation in Govt.",
            val :14.6
        },
        {
            country: "Turkmenistan",
            cat: "World Happiness Report Score",
            val :5.23
        },
        {
            country: "Turkmenistan",
            cat: "GDP Per Capita",
            val :0.48
        },
        {
            country: "Turkmenistan",
            cat: "Health Expenditure",
            val :6.3
        },
        {
            country: "Turkmenistan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Turkmenistan",
            cat: "Unemployment",
            val :8.6
        },
        {
            country: "Turkmenistan",
            cat: "Government Expenditure",
            val :16.1
        },
        {
            country: "Turkmenistan",
            cat: "Judicial Effectiveness Score",
            val :5
        },
        {
            country: "Turkmenistan",
            cat: "Government Integrity",
            val :27.3
        },
        {
            country: "Turkmenistan",
            cat: "Property Rights Score",
            val :29.8
        },
        {
            country: "Turkmenistan",
            cat: "Tax Burden Score",
            val :95.9
        },
        {
            country: "Turkmenistan",
            cat: "Overall Economic Freedom Score",
            val :47.1
        },
        {
            country: "Turkmenistan",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Turkmenistan",
            cat: "Women Representation in Govt.",
            val :25.8
        },
        {
            country: "Tuvalu",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "GDP Per Capita",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Health Expenditure",
            val :15
        },
        {
            country: "Tuvalu",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Unemployment",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Government Expenditure",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Judicial Effectiveness Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Government Integrity",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Property Rights Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "Women Representation in Govt.",
            val :6.7
        },
        {
            country: "Uganda",
            cat: "World Happiness Report Score",
            val :4
        },
        {
            country: "Uganda",
            cat: "GDP Per Capita",
            val :0.06
        },
        {
            country: "Uganda",
            cat: "Health Expenditure",
            val :7.3
        },
        {
            country: "Uganda",
            cat: "Education Expenditure",
            val :2.3
        },
        {
            country: "Uganda",
            cat: "Unemployment",
            val :2.3
        },
        {
            country: "Uganda",
            cat: "Government Expenditure",
            val :17.4
        },
        {
            country: "Uganda",
            cat: "Judicial Effectiveness Score",
            val :40.3
        },
        {
            country: "Uganda",
            cat: "Government Integrity",
            val :28.3
        },
        {
            country: "Uganda",
            cat: "Property Rights Score",
            val :43.5
        },
        {
            country: "Uganda",
            cat: "Tax Burden Score",
            val :73
        },
        {
            country: "Uganda",
            cat: "Overall Economic Freedom Score",
            val :62
        },
        {
            country: "Uganda",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Uganda",
            cat: "Women Representation in Govt.",
            val :34.3
        },
        {
            country: "Ukraine",
            cat: "World Happiness Report Score",
            val :4.31
        },
        {
            country: "Ukraine",
            cat: "GDP Per Capita",
            val :0.23
        },
        {
            country: "Ukraine",
            cat: "Health Expenditure",
            val :6.1
        },
        {
            country: "Ukraine",
            cat: "Education Expenditure",
            val :5.9
        },
        {
            country: "Ukraine",
            cat: "Unemployment",
            val :8.9
        },
        {
            country: "Ukraine",
            cat: "Government Expenditure",
            val :42.8
        },
        {
            country: "Ukraine",
            cat: "Judicial Effectiveness Score",
            val :29.5
        },
        {
            country: "Ukraine",
            cat: "Government Integrity",
            val :29
        },
        {
            country: "Ukraine",
            cat: "Property Rights Score",
            val :41
        },
        {
            country: "Ukraine",
            cat: "Tax Burden Score",
            val :80.2
        },
        {
            country: "Ukraine",
            cat: "Overall Economic Freedom Score",
            val :51.9
        },
        {
            country: "Ukraine",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Ukraine",
            cat: "Women Representation in Govt.",
            val :12.3
        },
        {
            country: "United Arab Emirates",
            cat: "World Happiness Report Score",
            val :7.04
        },
        {
            country: "United Arab Emirates",
            cat: "GDP Per Capita",
            val :1.87
        },
        {
            country: "United Arab Emirates",
            cat: "Health Expenditure",
            val :3.5
        },
        {
            country: "United Arab Emirates",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "United Arab Emirates",
            cat: "Unemployment",
            val :3.7
        },
        {
            country: "United Arab Emirates",
            cat: "Government Expenditure",
            val :31.2
        },
        {
            country: "United Arab Emirates",
            cat: "Judicial Effectiveness Score",
            val :83.4
        },
        {
            country: "United Arab Emirates",
            cat: "Government Integrity",
            val :77.3
        },
        {
            country: "United Arab Emirates",
            cat: "Property Rights Score",
            val :76.3
        },
        {
            country: "United Arab Emirates",
            cat: "Tax Burden Score",
            val :98.4
        },
        {
            country: "United Arab Emirates",
            cat: "Overall Economic Freedom Score",
            val :77.6
        },
        {
            country: "United Arab Emirates",
            cat: "Financial Freedom Score",
            val :60
        },
        {
            country: "United Arab Emirates",
            cat: "Women Representation in Govt.",
            val :22.5
        },
        {
            country: "United Kingdom",
            cat: "World Happiness Report Score",
            val :7.1
        },
        {
            country: "United Kingdom",
            cat: "GDP Per Capita",
            val :1.17
        },
        {
            country: "United Kingdom",
            cat: "Health Expenditure",
            val :9.9
        },
        {
            country: "United Kingdom",
            cat: "Education Expenditure",
            val :5.7
        },
        {
            country: "United Kingdom",
            cat: "Unemployment",
            val :4.8
        },
        {
            country: "United Kingdom",
            cat: "Government Expenditure",
            val :43
        },
        {
            country: "United Kingdom",
            cat: "Judicial Effectiveness Score",
            val :93.8
        },
        {
            country: "United Kingdom",
            cat: "Government Integrity",
            val :79
        },
        {
            country: "United Kingdom",
            cat: "Property Rights Score",
            val :92.2
        },
        {
            country: "United Kingdom",
            cat: "Tax Burden Score",
            val :65.2
        },
        {
            country: "United Kingdom",
            cat: "Overall Economic Freedom Score",
            val :78
        },
        {
            country: "United Kingdom",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "United Kingdom",
            cat: "Women Representation in Govt.",
            val :32
        },
        {
            country: "United States",
            cat: "World Happiness Report Score",
            val :6.99
        },
        {
            country: "United States",
            cat: "GDP Per Capita",
            val :1.58
        },
        {
            country: "United States",
            cat: "Health Expenditure",
            val :16.8
        },
        {
            country: "United States",
            cat: "Education Expenditure",
            val :5
        },
        {
            country: "United States",
            cat: "Unemployment",
            val :4.9
        },
        {
            country: "United States",
            cat: "Government Expenditure",
            val :38.1
        },
        {
            country: "United States",
            cat: "Judicial Effectiveness Score",
            val :76.9
        },
        {
            country: "United States",
            cat: "Government Integrity",
            val :71.9
        },
        {
            country: "United States",
            cat: "Property Rights Score",
            val :79.3
        },
        {
            country: "United States",
            cat: "Tax Burden Score",
            val :65.1
        },
        {
            country: "United States",
            cat: "Overall Economic Freedom Score",
            val :75.7
        },
        {
            country: "United States",
            cat: "Financial Freedom Score",
            val :80
        },
        {
            country: "United States",
            cat: "Women Representation in Govt.",
            val :19.4
        },
        {
            country: "Uruguay",
            cat: "World Happiness Report Score",
            val :6.34
        },
        {
            country: "Uruguay",
            cat: "GDP Per Capita",
            val :0.59
        },
        {
            country: "Uruguay",
            cat: "Health Expenditure",
            val :9.2
        },
        {
            country: "Uruguay",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Uruguay",
            cat: "Unemployment",
            val :8.2
        },
        {
            country: "Uruguay",
            cat: "Government Expenditure",
            val :32.4
        },
        {
            country: "Uruguay",
            cat: "Judicial Effectiveness Score",
            val :67
        },
        {
            country: "Uruguay",
            cat: "Government Integrity",
            val :71.6
        },
        {
            country: "Uruguay",
            cat: "Property Rights Score",
            val :69.3
        },
        {
            country: "Uruguay",
            cat: "Tax Burden Score",
            val :78
        },
        {
            country: "Uruguay",
            cat: "Overall Economic Freedom Score",
            val :69.2
        },
        {
            country: "Uruguay",
            cat: "Financial Freedom Score",
            val :30
        },
        {
            country: "Uruguay",
            cat: "Women Representation in Govt.",
            val :20.2
        },
        {
            country: "Uzbekistan",
            cat: "World Happiness Report Score",
            val :6.42
        },
        {
            country: "Uzbekistan",
            cat: "GDP Per Capita",
            val :0.18
        },
        {
            country: "Uzbekistan",
            cat: "Health Expenditure",
            val :6.2
        },
        {
            country: "Uzbekistan",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Uzbekistan",
            cat: "Unemployment",
            val :8.9
        },
        {
            country: "Uzbekistan",
            cat: "Government Expenditure",
            val :33.9
        },
        {
            country: "Uzbekistan",
            cat: "Judicial Effectiveness Score",
            val :35.3
        },
        {
            country: "Uzbekistan",
            cat: "Government Integrity",
            val :24.2
        },
        {
            country: "Uzbekistan",
            cat: "Property Rights Score",
            val :48.7
        },
        {
            country: "Uzbekistan",
            cat: "Tax Burden Score",
            val :91
        },
        {
            country: "Uzbekistan",
            cat: "Overall Economic Freedom Score",
            val :51.5
        },
        {
            country: "Uzbekistan",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Uzbekistan",
            cat: "Women Representation in Govt.",
            val :16
        },
        {
            country: "Vanuatu",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Vanuatu",
            cat: "GDP Per Capita",
            val :0.07
        },
        {
            country: "Vanuatu",
            cat: "Health Expenditure",
            val :3.5
        },
        {
            country: "Vanuatu",
            cat: "Education Expenditure",
            val :4.9
        },
        {
            country: "Vanuatu",
            cat: "Unemployment",
            val :5.4
        },
        {
            country: "Vanuatu",
            cat: "Government Expenditure",
            val :26.8
        },
        {
            country: "Vanuatu",
            cat: "Judicial Effectiveness Score",
            val :47.1
        },
        {
            country: "Vanuatu",
            cat: "Government Integrity",
            val :75.4
        },
        {
            country: "Vanuatu",
            cat: "Property Rights Score",
            val :67.9
        },
        {
            country: "Vanuatu",
            cat: "Tax Burden Score",
            val :97
        },
        {
            country: "Vanuatu",
            cat: "Overall Economic Freedom Score",
            val :69.5
        },
        {
            country: "Vanuatu",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Vanuatu",
            cat: "Women Representation in Govt.",
            val :0
        },
        {
            country: "Venezuela",
            cat: "World Happiness Report Score",
            val :0.0
        },
        {
            country: "Venezuela",
            cat: "GDP Per Capita",
            val :0.38
        },
        {
            country: "Venezuela",
            cat: "Health Expenditure",
            val :3.2
        },
        {
            country: "Venezuela",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Venezuela",
            cat: "Unemployment",
            val :6.9
        },
        {
            country: "Venezuela",
            cat: "Government Expenditure",
            val :37.7
        },
        {
            country: "Venezuela",
            cat: "Judicial Effectiveness Score",
            val :13.8
        },
        {
            country: "Venezuela",
            cat: "Government Integrity",
            val :7.5
        },
        {
            country: "Venezuela",
            cat: "Property Rights Score",
            val :5.2
        },
        {
            country: "Venezuela",
            cat: "Tax Burden Score",
            val :72.5
        },
        {
            country: "Venezuela",
            cat: "Overall Economic Freedom Score",
            val :25.2
        },
        {
            country: "Venezuela",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Venezuela",
            cat: "Women Representation in Govt.",
            val :22.2
        },
        {
            country: "Vietnam",
            cat: "World Happiness Report Score",
            val :5.18
        },
        {
            country: "Vietnam",
            cat: "GDP Per Capita",
            val :0.18
        },
        {
            country: "Vietnam",
            cat: "Health Expenditure",
            val :5.7
        },
        {
            country: "Vietnam",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Vietnam",
            cat: "Unemployment",
            val :2.2
        },
        {
            country: "Vietnam",
            cat: "Government Expenditure",
            val :29.4
        },
        {
            country: "Vietnam",
            cat: "Judicial Effectiveness Score",
            val :36.3
        },
        {
            country: "Vietnam",
            cat: "Government Integrity",
            val :30.4
        },
        {
            country: "Vietnam",
            cat: "Property Rights Score",
            val :46.4
        },
        {
            country: "Vietnam",
            cat: "Tax Burden Score",
            val :79.7
        },
        {
            country: "Vietnam",
            cat: "Overall Economic Freedom Score",
            val :53.1
        },
        {
            country: "Vietnam",
            cat: "Financial Freedom Score",
            val :40
        },
        {
            country: "Vietnam",
            cat: "Women Representation in Govt.",
            val :26.7
        },
        {
            country: "Yemen",
            cat: "World Happiness Report Score",
            val :3.25
        },
        {
            country: "Yemen",
            cat: "GDP Per Capita",
            val :0.07
        },
        {
            country: "Yemen",
            cat: "Health Expenditure",
            val :6
        },
        {
            country: "Yemen",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "Unemployment",
            val :17.1
        },
        {
            country: "Yemen",
            cat: "Government Expenditure",
            val :25.2
        },
        {
            country: "Yemen",
            cat: "Judicial Effectiveness Score",
            val :16.6
        },
        {
            country: "Yemen",
            cat: "Government Integrity",
            val :21.2
        },
        {
            country: "Yemen",
            cat: "Property Rights Score",
            val :17.9
        },
        {
            country: "Yemen",
            cat: "Tax Burden Score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "Overall Economic Freedom Score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "Financial Freedom Score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "Women Representation in Govt.",
            val :0
        },
        {
            country: "Zambia",
            cat: "World Happiness Report Score",
            val :3.93
        },
        {
            country: "Zambia",
            cat: "GDP Per Capita",
            val :0.11
        },
        {
            country: "Zambia",
            cat: "Health Expenditure",
            val :5.4
        },
        {
            country: "Zambia",
            cat: "Education Expenditure",
            val :0.0
        },
        {
            country: "Zambia",
            cat: "Unemployment",
            val :7.5
        },
        {
            country: "Zambia",
            cat: "Government Expenditure",
            val :25.7
        },
        {
            country: "Zambia",
            cat: "Judicial Effectiveness Score",
            val :40.6
        },
        {
            country: "Zambia",
            cat: "Government Integrity",
            val :36.3
        },
        {
            country: "Zambia",
            cat: "Property Rights Score",
            val :46
        },
        {
            country: "Zambia",
            cat: "Tax Burden Score",
            val :72.1
        },
        {
            country: "Zambia",
            cat: "Overall Economic Freedom Score",
            val :54.3
        },
        {
            country: "Zambia",
            cat: "Financial Freedom Score",
            val :50
        },
        {
            country: "Zambia",
            cat: "Women Representation in Govt.",
            val :18
        },
        {
            country: "Zimbabwe",
            cat: "World Happiness Report Score",
            val :3.64
        },
        {
            country: "Zimbabwe",
            cat: "GDP Per Capita",
            val :0.05
        },
        {
            country: "Zimbabwe",
            cat: "Health Expenditure",
            val :10.3
        },
        {
            country: "Zimbabwe",
            cat: "Education Expenditure",
            val :7.5
        },
        {
            country: "Zimbabwe",
            cat: "Unemployment",
            val :5.1
        },
        {
            country: "Zimbabwe",
            cat: "Government Expenditure",
            val :30.6
        },
        {
            country: "Zimbabwe",
            cat: "Judicial Effectiveness Score",
            val :33
        },
        {
            country: "Zimbabwe",
            cat: "Government Integrity",
            val :18.9
        },
        {
            country: "Zimbabwe",
            cat: "Property Rights Score",
            val :27.6
        },
        {
            country: "Zimbabwe",
            cat: "Tax Burden Score",
            val :61.1
        },
        {
            country: "Zimbabwe",
            cat: "Overall Economic Freedom Score",
            val :44
        },
        {
            country: "Zimbabwe",
            cat: "Financial Freedom Score",
            val :10
        },
        {
            country: "Zimbabwe",
            cat: "Women Representation in Govt.",
            val :32.6
        }
    ];
    
    return data.filter( d => d.country == this.countryName )
  }

  createChart = ()=>{
    let root = am5.Root.new("chartdiv_rad");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
    am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(am5pie.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(am5pie.PieSeries.new(root, {
    name: "Series",
    valueField: "val",
    categoryField: "cat"
    }));

    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(  this.getFilteredData());

    // Disabling labels and ticks
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // Adding gradients
    series.slices.template.set("strokeOpacity", 0);
    series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
        brighten: -0.8
    }, {
        brighten: -0.8
    }, {
        brighten: -0.5
    }, {
        brighten: 0
    }, {
        brighten: -0.5
    }]
    }));

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    marginTop: 15,
    marginBottom: 15,
    layout: root.verticalLayout,
    verticalScrollbar: am5.Scrollbar.new(root, {
        orientation: "vertical"
      }),
      height: am5.percent(100)
    }));

    legend.labels.template.setAll({
        fontSize: 13,
        fontWeight: "300"
      });
      
      
    legend.valueLabels.template.setAll({
        fontSize: 13,
        fontWeight: "400"
    });

    legend.markers.template.setAll({
        width: 12,
        height: 12
    });

    legend.data.setAll(series.dataItems);


    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    return root
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
      console.log("Test")
      this.root = this.createChart();
     
    // Chart code goes in here
    
      // code --->
    
      // <---- code
      
    
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
