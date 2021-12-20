import { Component, Inject, NgZone, PLATFORM_ID } from "@angular/core";
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
  private countryName : string = '';

  constructor(@Inject(PLATFORM_ID) private platformId : any, private zone: NgZone, private sharedDataService : SharedDataService) {
  
  }
    
  
  ngOnInit() {
    this.sharedDataService.username.subscribe(result => {
        console.log('Inside ngOnit', result)
        this.countryName = result
        if (this.root) {
            this.root.dispose();
            this.root = this.createChart();

        }
        
      });  
    console.log('Inside')
    
  }
  getFilteredData = ()=> {
    let data = [
        {
            country: "Afghanistan",
            cat: "world_happiness_report_score",
            val :2.66
        },
        {
            country: "Afghanistan",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Afghanistan",
            cat: "health_expenditure",
            val :10.3
        },
        {
            country: "Afghanistan",
            cat: "education_expenditure",
            val :3.8
        },
        {
            country: "Afghanistan",
            cat: "unemployment",
            val :8.5
        },
        {
            country: "Afghanistan",
            cat: "government_expenditure",
            val :26.3
        },
        {
            country: "Afghanistan",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Afghanistan",
            cat: "government_integrity",
            val :26.2
        },
        {
            country: "Afghanistan",
            cat: "property_rights_score",
            val :17.9
        },
        {
            country: "Afghanistan",
            cat: "tax_burden_score",
            val :91.8
        },
        {
            country: "Afghanistan",
            cat: "overall_economic_freedom_score",
            val :51.3
        },
        {
            country: "Afghanistan",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Afghanistan",
            cat: "women_MPs",
            val :27.7
        },
        {
            country: "Albania",
            cat: "world_happiness_report_score",
            val :4.64
        },
        {
            country: "Albania",
            cat: "GDP_per_capita",
            val :0.33
        },
        {
            country: "Albania",
            cat: "health_expenditure",
            val :6.8
        },
        {
            country: "Albania",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Albania",
            cat: "unemployment",
            val :16.3
        },
        {
            country: "Albania",
            cat: "government_expenditure",
            val :30.1
        },
        {
            country: "Albania",
            cat: "judicial_effectiveness_score",
            val :25.4
        },
        {
            country: "Albania",
            cat: "government_integrity",
            val :39.9
        },
        {
            country: "Albania",
            cat: "property_rights_score",
            val :54.1
        },
        {
            country: "Albania",
            cat: "tax_burden_score",
            val :85.1
        },
        {
            country: "Albania",
            cat: "overall_economic_freedom_score",
            val :64.5
        },
        {
            country: "Albania",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Albania",
            cat: "women_MPs",
            val :27.9
        },
        {
            country: "Algeria",
            cat: "world_happiness_report_score",
            val :5.25
        },
        {
            country: "Algeria",
            cat: "GDP_per_capita",
            val :0.41
        },
        {
            country: "Algeria",
            cat: "health_expenditure",
            val :7.1
        },
        {
            country: "Algeria",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Algeria",
            cat: "unemployment",
            val :11.2
        },
        {
            country: "Algeria",
            cat: "government_expenditure",
            val :42.5
        },
        {
            country: "Algeria",
            cat: "judicial_effectiveness_score",
            val :35.2
        },
        {
            country: "Algeria",
            cat: "government_integrity",
            val :29
        },
        {
            country: "Algeria",
            cat: "property_rights_score",
            val :27.8
        },
        {
            country: "Algeria",
            cat: "tax_burden_score",
            val :74
        },
        {
            country: "Algeria",
            cat: "overall_economic_freedom_score",
            val :44.7
        },
        {
            country: "Algeria",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Algeria",
            cat: "women_MPs",
            val :25.8
        },
        {
            country: "Andorra",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "health_expenditure",
            val :12
        },
        {
            country: "Andorra",
            cat: "education_expenditure",
            val :3
        },
        {
            country: "Andorra",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Andorra",
            cat: "women_MPs",
            val :32.1
        },
        {
            country: "Angola",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Angola",
            cat: "GDP_per_capita",
            val :0.19
        },
        {
            country: "Angola",
            cat: "health_expenditure",
            val :2.9
        },
        {
            country: "Angola",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Angola",
            cat: "unemployment",
            val :6.6
        },
        {
            country: "Angola",
            cat: "government_expenditure",
            val :32.1
        },
        {
            country: "Angola",
            cat: "judicial_effectiveness_score",
            val :25.4
        },
        {
            country: "Angola",
            cat: "government_integrity",
            val :18.9
        },
        {
            country: "Angola",
            cat: "property_rights_score",
            val :36
        },
        {
            country: "Angola",
            cat: "tax_burden_score",
            val :82.4
        },
        {
            country: "Angola",
            cat: "overall_economic_freedom_score",
            val :48.6
        },
        {
            country: "Angola",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Angola",
            cat: "women_MPs",
            val :38.2
        },
        {
            country: "Antigua & Barbuda",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "health_expenditure",
            val :4.8
        },
        {
            country: "Antigua & Barbuda",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Antigua & Barbuda",
            cat: "women_MPs",
            val :11.1
        },
        {
            country: "Argentina",
            cat: "world_happiness_report_score",
            val :6.04
        },
        {
            country: "Argentina",
            cat: "GDP_per_capita",
            val :0.55
        },
        {
            country: "Argentina",
            cat: "health_expenditure",
            val :2.9
        },
        {
            country: "Argentina",
            cat: "education_expenditure",
            val :5.4
        },
        {
            country: "Argentina",
            cat: "unemployment",
            val :6.6
        },
        {
            country: "Argentina",
            cat: "government_expenditure",
            val :38.5
        },
        {
            country: "Argentina",
            cat: "judicial_effectiveness_score",
            val :44.5
        },
        {
            country: "Argentina",
            cat: "government_integrity",
            val :32.6
        },
        {
            country: "Argentina",
            cat: "property_rights_score",
            val :40.8
        },
        {
            country: "Argentina",
            cat: "tax_burden_score",
            val :65.7
        },
        {
            country: "Argentina",
            cat: "overall_economic_freedom_score",
            val :52.3
        },
        {
            country: "Argentina",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Argentina",
            cat: "women_MPs",
            val :38.9
        },
        {
            country: "Armenia",
            cat: "world_happiness_report_score",
            val :4.29
        },
        {
            country: "Armenia",
            cat: "GDP_per_capita",
            val :0.24
        },
        {
            country: "Armenia",
            cat: "health_expenditure",
            val :10.1
        },
        {
            country: "Armenia",
            cat: "education_expenditure",
            val :2.2
        },
        {
            country: "Armenia",
            cat: "unemployment",
            val :16.8
        },
        {
            country: "Armenia",
            cat: "government_expenditure",
            val :25.8
        },
        {
            country: "Armenia",
            cat: "judicial_effectiveness_score",
            val :47.4
        },
        {
            country: "Armenia",
            cat: "government_integrity",
            val :40.5
        },
        {
            country: "Armenia",
            cat: "property_rights_score",
            val :55.3
        },
        {
            country: "Armenia",
            cat: "tax_burden_score",
            val :84.7
        },
        {
            country: "Armenia",
            cat: "overall_economic_freedom_score",
            val :68.7
        },
        {
            country: "Armenia",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Armenia",
            cat: "women_MPs",
            val :18.1
        },
        {
            country: "Australia",
            cat: "world_happiness_report_score",
            val :7.26
        },
        {
            country: "Australia",
            cat: "GDP_per_capita",
            val :1.35
        },
        {
            country: "Australia",
            cat: "health_expenditure",
            val :9.4
        },
        {
            country: "Australia",
            cat: "education_expenditure",
            val :5.2
        },
        {
            country: "Australia",
            cat: "unemployment",
            val :5.7
        },
        {
            country: "Australia",
            cat: "government_expenditure",
            val :36
        },
        {
            country: "Australia",
            cat: "judicial_effectiveness_score",
            val :93.4
        },
        {
            country: "Australia",
            cat: "government_integrity",
            val :77.4
        },
        {
            country: "Australia",
            cat: "property_rights_score",
            val :78.7
        },
        {
            country: "Australia",
            cat: "tax_burden_score",
            val :63
        },
        {
            country: "Australia",
            cat: "overall_economic_freedom_score",
            val :80.9
        },
        {
            country: "Australia",
            cat: "financial_freedom_score",
            val :90
        },
        {
            country: "Australia",
            cat: "women_MPs",
            val :28.7
        },
        {
            country: "Austria",
            cat: "world_happiness_report_score",
            val :7.29
        },
        {
            country: "Austria",
            cat: "GDP_per_capita",
            val :1.32
        },
        {
            country: "Austria",
            cat: "health_expenditure",
            val :10.3
        },
        {
            country: "Austria",
            cat: "education_expenditure",
            val :5.4
        },
        {
            country: "Austria",
            cat: "unemployment",
            val :6.1
        },
        {
            country: "Austria",
            cat: "government_expenditure",
            val :51.8
        },
        {
            country: "Austria",
            cat: "judicial_effectiveness_score",
            val :80.9
        },
        {
            country: "Austria",
            cat: "government_integrity",
            val :73.5
        },
        {
            country: "Austria",
            cat: "property_rights_score",
            val :83.5
        },
        {
            country: "Austria",
            cat: "tax_burden_score",
            val :49.9
        },
        {
            country: "Austria",
            cat: "overall_economic_freedom_score",
            val :71.8
        },
        {
            country: "Austria",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Austria",
            cat: "women_MPs",
            val :30.6
        },
        {
            country: "Azerbaijan",
            cat: "world_happiness_report_score",
            val :5.15
        },
        {
            country: "Azerbaijan",
            cat: "GDP_per_capita",
            val :0.48
        },
        {
            country: "Azerbaijan",
            cat: "health_expenditure",
            val :6.7
        },
        {
            country: "Azerbaijan",
            cat: "education_expenditure",
            val :2.6
        },
        {
            country: "Azerbaijan",
            cat: "unemployment",
            val :5.1
        },
        {
            country: "Azerbaijan",
            cat: "government_expenditure",
            val :36.8
        },
        {
            country: "Azerbaijan",
            cat: "judicial_effectiveness_score",
            val :36.8
        },
        {
            country: "Azerbaijan",
            cat: "government_integrity",
            val :39.9
        },
        {
            country: "Azerbaijan",
            cat: "property_rights_score",
            val :53.6
        },
        {
            country: "Azerbaijan",
            cat: "tax_burden_score",
            val :87.5
        },
        {
            country: "Azerbaijan",
            cat: "overall_economic_freedom_score",
            val :64.3
        },
        {
            country: "Azerbaijan",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Azerbaijan",
            cat: "women_MPs",
            val :16.8
        },
        {
            country: "Bahamas",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Bahamas",
            cat: "GDP_per_capita",
            val :0.68
        },
        {
            country: "Bahamas",
            cat: "health_expenditure",
            val :7.4
        },
        {
            country: "Bahamas",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Bahamas",
            cat: "unemployment",
            val :15.3
        },
        {
            country: "Bahamas",
            cat: "government_expenditure",
            val :23.8
        },
        {
            country: "Bahamas",
            cat: "judicial_effectiveness_score",
            val :53.5
        },
        {
            country: "Bahamas",
            cat: "government_integrity",
            val :50.9
        },
        {
            country: "Bahamas",
            cat: "property_rights_score",
            val :46.5
        },
        {
            country: "Bahamas",
            cat: "tax_burden_score",
            val :96.5
        },
        {
            country: "Bahamas",
            cat: "overall_economic_freedom_score",
            val :63.3
        },
        {
            country: "Bahamas",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Bahamas",
            cat: "women_MPs",
            val :12.8
        },
        {
            country: "Bahrain",
            cat: "world_happiness_report_score",
            val :6.23
        },
        {
            country: "Bahrain",
            cat: "GDP_per_capita",
            val :1.4
        },
        {
            country: "Bahrain",
            cat: "health_expenditure",
            val :5.2
        },
        {
            country: "Bahrain",
            cat: "education_expenditure",
            val :2.5
        },
        {
            country: "Bahrain",
            cat: "unemployment",
            val :1.3
        },
        {
            country: "Bahrain",
            cat: "government_expenditure",
            val :33.4
        },
        {
            country: "Bahrain",
            cat: "judicial_effectiveness_score",
            val :55.1
        },
        {
            country: "Bahrain",
            cat: "government_integrity",
            val :51.8
        },
        {
            country: "Bahrain",
            cat: "property_rights_score",
            val :62.1
        },
        {
            country: "Bahrain",
            cat: "tax_burden_score",
            val :99.9
        },
        {
            country: "Bahrain",
            cat: "overall_economic_freedom_score",
            val :67.7
        },
        {
            country: "Bahrain",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Bahrain",
            cat: "women_MPs",
            val :7.5
        },
        {
            country: "Bangladesh",
            cat: "world_happiness_report_score",
            val :4.31
        },
        {
            country: "Bangladesh",
            cat: "GDP_per_capita",
            val :0.11
        },
        {
            country: "Bangladesh",
            cat: "health_expenditure",
            val :2.6
        },
        {
            country: "Bangladesh",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Bangladesh",
            cat: "unemployment",
            val :4.1
        },
        {
            country: "Bangladesh",
            cat: "government_expenditure",
            val :13.9
        },
        {
            country: "Bangladesh",
            cat: "judicial_effectiveness_score",
            val :32.6
        },
        {
            country: "Bangladesh",
            cat: "government_integrity",
            val :21.2
        },
        {
            country: "Bangladesh",
            cat: "property_rights_score",
            val :32.4
        },
        {
            country: "Bangladesh",
            cat: "tax_burden_score",
            val :72.7
        },
        {
            country: "Bangladesh",
            cat: "overall_economic_freedom_score",
            val :55.1
        },
        {
            country: "Bangladesh",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Bangladesh",
            cat: "women_MPs",
            val :20.3
        },
        {
            country: "Barbados",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Barbados",
            cat: "GDP_per_capita",
            val :0.47
        },
        {
            country: "Barbados",
            cat: "health_expenditure",
            val :7.5
        },
        {
            country: "Barbados",
            cat: "education_expenditure",
            val :6.2
        },
        {
            country: "Barbados",
            cat: "unemployment",
            val :11.4
        },
        {
            country: "Barbados",
            cat: "government_expenditure",
            val :45
        },
        {
            country: "Barbados",
            cat: "judicial_effectiveness_score",
            val :54.4
        },
        {
            country: "Barbados",
            cat: "government_integrity",
            val :53.8
        },
        {
            country: "Barbados",
            cat: "property_rights_score",
            val :51.4
        },
        {
            country: "Barbados",
            cat: "tax_burden_score",
            val :74
        },
        {
            country: "Barbados",
            cat: "overall_economic_freedom_score",
            val :57
        },
        {
            country: "Barbados",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Barbados",
            cat: "women_MPs",
            val :16.7
        },
        {
            country: "Belarus",
            cat: "world_happiness_report_score",
            val :5.55
        },
        {
            country: "Belarus",
            cat: "GDP_per_capita",
            val :0.5
        },
        {
            country: "Belarus",
            cat: "health_expenditure",
            val :6.1
        },
        {
            country: "Belarus",
            cat: "education_expenditure",
            val :4.8
        },
        {
            country: "Belarus",
            cat: "unemployment",
            val :0.5
        },
        {
            country: "Belarus",
            cat: "government_expenditure",
            val :41.7
        },
        {
            country: "Belarus",
            cat: "judicial_effectiveness_score",
            val :57.3
        },
        {
            country: "Belarus",
            cat: "government_integrity",
            val :42
        },
        {
            country: "Belarus",
            cat: "property_rights_score",
            val :53.5
        },
        {
            country: "Belarus",
            cat: "tax_burden_score",
            val :89.8
        },
        {
            country: "Belarus",
            cat: "overall_economic_freedom_score",
            val :58.1
        },
        {
            country: "Belarus",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Belarus",
            cat: "women_MPs",
            val :34.5
        },
        {
            country: "Belgium",
            cat: "world_happiness_report_score",
            val :6.93
        },
        {
            country: "Belgium",
            cat: "GDP_per_capita",
            val :1.24
        },
        {
            country: "Belgium",
            cat: "health_expenditure",
            val :10.5
        },
        {
            country: "Belgium",
            cat: "education_expenditure",
            val :6.6
        },
        {
            country: "Belgium",
            cat: "unemployment",
            val :8.3
        },
        {
            country: "Belgium",
            cat: "government_expenditure",
            val :54.1
        },
        {
            country: "Belgium",
            cat: "judicial_effectiveness_score",
            val :69.5
        },
        {
            country: "Belgium",
            cat: "government_integrity",
            val :70.9
        },
        {
            country: "Belgium",
            cat: "property_rights_score",
            val :81.2
        },
        {
            country: "Belgium",
            cat: "tax_burden_score",
            val :44
        },
        {
            country: "Belgium",
            cat: "overall_economic_freedom_score",
            val :67.5
        },
        {
            country: "Belgium",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Belgium",
            cat: "women_MPs",
            val :38
        },
        {
            country: "Belize",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Belize",
            cat: "GDP_per_capita",
            val :0.23
        },
        {
            country: "Belize",
            cat: "health_expenditure",
            val :6.2
        },
        {
            country: "Belize",
            cat: "education_expenditure",
            val :6.5
        },
        {
            country: "Belize",
            cat: "unemployment",
            val :11
        },
        {
            country: "Belize",
            cat: "government_expenditure",
            val :33.9
        },
        {
            country: "Belize",
            cat: "judicial_effectiveness_score",
            val :53.5
        },
        {
            country: "Belize",
            cat: "government_integrity",
            val :34.7
        },
        {
            country: "Belize",
            cat: "property_rights_score",
            val :42.1
        },
        {
            country: "Belize",
            cat: "tax_burden_score",
            val :80
        },
        {
            country: "Belize",
            cat: "overall_economic_freedom_score",
            val :57.1
        },
        {
            country: "Belize",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Belize",
            cat: "women_MPs",
            val :9.4
        },
        {
            country: "Benin",
            cat: "world_happiness_report_score",
            val :4.85
        },
        {
            country: "Benin",
            cat: "GDP_per_capita",
            val :0.06
        },
        {
            country: "Benin",
            cat: "health_expenditure",
            val :4
        },
        {
            country: "Benin",
            cat: "education_expenditure",
            val :4.3
        },
        {
            country: "Benin",
            cat: "unemployment",
            val :1
        },
        {
            country: "Benin",
            cat: "government_expenditure",
            val :21.9
        },
        {
            country: "Benin",
            cat: "judicial_effectiveness_score",
            val :31.3
        },
        {
            country: "Benin",
            cat: "government_integrity",
            val :30.2
        },
        {
            country: "Benin",
            cat: "property_rights_score",
            val :35.5
        },
        {
            country: "Benin",
            cat: "tax_burden_score",
            val :67.4
        },
        {
            country: "Benin",
            cat: "overall_economic_freedom_score",
            val :56.7
        },
        {
            country: "Benin",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Benin",
            cat: "women_MPs",
            val :7.2
        },
        {
            country: "Bhutan",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Bhutan",
            cat: "GDP_per_capita",
            val :0.23
        },
        {
            country: "Bhutan",
            cat: "health_expenditure",
            val :3.5
        },
        {
            country: "Bhutan",
            cat: "education_expenditure",
            val :5.9
        },
        {
            country: "Bhutan",
            cat: "unemployment",
            val :2.4
        },
        {
            country: "Bhutan",
            cat: "government_expenditure",
            val :30.5
        },
        {
            country: "Bhutan",
            cat: "judicial_effectiveness_score",
            val :51.6
        },
        {
            country: "Bhutan",
            cat: "government_integrity",
            val :50.9
        },
        {
            country: "Bhutan",
            cat: "property_rights_score",
            val :60.9
        },
        {
            country: "Bhutan",
            cat: "tax_burden_score",
            val :83
        },
        {
            country: "Bhutan",
            cat: "overall_economic_freedom_score",
            val :61.8
        },
        {
            country: "Bhutan",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Bhutan",
            cat: "women_MPs",
            val :8.5
        },
        {
            country: "Bolivia",
            cat: "world_happiness_report_score",
            val :5.65
        },
        {
            country: "Bolivia",
            cat: "GDP_per_capita",
            val :0.2
        },
        {
            country: "Bolivia",
            cat: "health_expenditure",
            val :6.4
        },
        {
            country: "Bolivia",
            cat: "education_expenditure",
            val :7.3
        },
        {
            country: "Bolivia",
            cat: "unemployment",
            val :3.7
        },
        {
            country: "Bolivia",
            cat: "government_expenditure",
            val :42.2
        },
        {
            country: "Bolivia",
            cat: "judicial_effectiveness_score",
            val :11.4
        },
        {
            country: "Bolivia",
            cat: "government_integrity",
            val :23.1
        },
        {
            country: "Bolivia",
            cat: "property_rights_score",
            val :19
        },
        {
            country: "Bolivia",
            cat: "tax_burden_score",
            val :85.7
        },
        {
            country: "Bolivia",
            cat: "overall_economic_freedom_score",
            val :44.1
        },
        {
            country: "Bolivia",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Bolivia",
            cat: "women_MPs",
            val :53.1
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "world_happiness_report_score",
            val :5.09
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "GDP_per_capita",
            val :0.3
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "health_expenditure",
            val :9.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "unemployment",
            val :25.8
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "government_expenditure",
            val :44.1
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "judicial_effectiveness_score",
            val :43.7
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "government_integrity",
            val :28.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "property_rights_score",
            val :39.5
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "tax_burden_score",
            val :83.5
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "overall_economic_freedom_score",
            val :61.4
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Bosnia and Herzegovina",
            cat: "women_MPs",
            val :21.4
        },
        {
            country: "Botswana",
            cat: "world_happiness_report_score",
            val :3.5
        },
        {
            country: "Botswana",
            cat: "GDP_per_capita",
            val :0.47
        },
        {
            country: "Botswana",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Botswana",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Botswana",
            cat: "unemployment",
            val :18.4
        },
        {
            country: "Botswana",
            cat: "government_expenditure",
            val :34.9
        },
        {
            country: "Botswana",
            cat: "judicial_effectiveness_score",
            val :54.7
        },
        {
            country: "Botswana",
            cat: "government_integrity",
            val :56.6
        },
        {
            country: "Botswana",
            cat: "property_rights_score",
            val :57.7
        },
        {
            country: "Botswana",
            cat: "tax_burden_score",
            val :76.1
        },
        {
            country: "Botswana",
            cat: "overall_economic_freedom_score",
            val :69.9
        },
        {
            country: "Botswana",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Botswana",
            cat: "women_MPs",
            val :9.5
        },
        {
            country: "Brazil",
            cat: "world_happiness_report_score",
            val :6.33
        },
        {
            country: "Brazil",
            cat: "GDP_per_capita",
            val :0.42
        },
        {
            country: "Brazil",
            cat: "health_expenditure",
            val :8.9
        },
        {
            country: "Brazil",
            cat: "education_expenditure",
            val :5.9
        },
        {
            country: "Brazil",
            cat: "unemployment",
            val :11.5
        },
        {
            country: "Brazil",
            cat: "government_expenditure",
            val :40.5
        },
        {
            country: "Brazil",
            cat: "judicial_effectiveness_score",
            val :55.5
        },
        {
            country: "Brazil",
            cat: "government_integrity",
            val :31.4
        },
        {
            country: "Brazil",
            cat: "property_rights_score",
            val :55.8
        },
        {
            country: "Brazil",
            cat: "tax_burden_score",
            val :70.6
        },
        {
            country: "Brazil",
            cat: "overall_economic_freedom_score",
            val :51.4
        },
        {
            country: "Brazil",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Brazil",
            cat: "women_MPs",
            val :10.7
        },
        {
            country: "Brunei",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Brunei",
            cat: "GDP_per_capita",
            val :2.12
        },
        {
            country: "Brunei",
            cat: "health_expenditure",
            val :2.6
        },
        {
            country: "Brunei",
            cat: "education_expenditure",
            val :3.4
        },
        {
            country: "Brunei",
            cat: "unemployment",
            val :2
        },
        {
            country: "Brunei",
            cat: "government_expenditure",
            val :37.5
        },
        {
            country: "Brunei",
            cat: "judicial_effectiveness_score",
            val :57.1
        },
        {
            country: "Brunei",
            cat: "government_integrity",
            val :45.4
        },
        {
            country: "Brunei",
            cat: "property_rights_score",
            val :56.6
        },
        {
            country: "Brunei",
            cat: "tax_burden_score",
            val :85.6
        },
        {
            country: "Brunei",
            cat: "overall_economic_freedom_score",
            val :64.2
        },
        {
            country: "Brunei",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Brunei",
            cat: "women_MPs",
            val :9.1
        },
        {
            country: "Bulgaria",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Bulgaria",
            cat: "GDP_per_capita",
            val :0.56
        },
        {
            country: "Bulgaria",
            cat: "health_expenditure",
            val :8.2
        },
        {
            country: "Bulgaria",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Bulgaria",
            cat: "unemployment",
            val :8
        },
        {
            country: "Bulgaria",
            cat: "government_expenditure",
            val :36.3
        },
        {
            country: "Bulgaria",
            cat: "judicial_effectiveness_score",
            val :42.5
        },
        {
            country: "Bulgaria",
            cat: "government_integrity",
            val :38.2
        },
        {
            country: "Bulgaria",
            cat: "property_rights_score",
            val :63.6
        },
        {
            country: "Bulgaria",
            cat: "tax_burden_score",
            val :90.9
        },
        {
            country: "Bulgaria",
            cat: "overall_economic_freedom_score",
            val :68.3
        },
        {
            country: "Bulgaria",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Bulgaria",
            cat: "women_MPs",
            val :23.8
        },
        {
            country: "Burkina Faso",
            cat: "world_happiness_report_score",
            val :4.65
        },
        {
            country: "Burkina Faso",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Burkina Faso",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Burkina Faso",
            cat: "education_expenditure",
            val :4.6
        },
        {
            country: "Burkina Faso",
            cat: "unemployment",
            val :3
        },
        {
            country: "Burkina Faso",
            cat: "government_expenditure",
            val :23.3
        },
        {
            country: "Burkina Faso",
            cat: "judicial_effectiveness_score",
            val :47.1
        },
        {
            country: "Burkina Faso",
            cat: "government_integrity",
            val :31.8
        },
        {
            country: "Burkina Faso",
            cat: "property_rights_score",
            val :42.1
        },
        {
            country: "Burkina Faso",
            cat: "tax_burden_score",
            val :80.6
        },
        {
            country: "Burkina Faso",
            cat: "overall_economic_freedom_score",
            val :60
        },
        {
            country: "Burkina Faso",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Burkina Faso",
            cat: "women_MPs",
            val :11
        },
        {
            country: "Burundi",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Burundi",
            cat: "GDP_per_capita",
            val :0.02
        },
        {
            country: "Burundi",
            cat: "health_expenditure",
            val :8.2
        },
        {
            country: "Burundi",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Burundi",
            cat: "unemployment",
            val :1.6
        },
        {
            country: "Burundi",
            cat: "government_expenditure",
            val :26.7
        },
        {
            country: "Burundi",
            cat: "judicial_effectiveness_score",
            val :21.7
        },
        {
            country: "Burundi",
            cat: "government_integrity",
            val :26.2
        },
        {
            country: "Burundi",
            cat: "property_rights_score",
            val :17.6
        },
        {
            country: "Burundi",
            cat: "tax_burden_score",
            val :71
        },
        {
            country: "Burundi",
            cat: "overall_economic_freedom_score",
            val :50.9
        },
        {
            country: "Burundi",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Burundi",
            cat: "women_MPs",
            val :36.4
        },
        {
            country: "Cabo Verde",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Cabo Verde",
            cat: "GDP_per_capita",
            val :0.18
        },
        {
            country: "Cabo Verde",
            cat: "health_expenditure",
            val :4.9
        },
        {
            country: "Cabo Verde",
            cat: "education_expenditure",
            val :5
        },
        {
            country: "Cabo Verde",
            cat: "unemployment",
            val :10.5
        },
        {
            country: "Cabo Verde",
            cat: "government_expenditure",
            val :30.8
        },
        {
            country: "Cabo Verde",
            cat: "judicial_effectiveness_score",
            val :52
        },
        {
            country: "Cabo Verde",
            cat: "government_integrity",
            val :42.8
        },
        {
            country: "Cabo Verde",
            cat: "property_rights_score",
            val :42.1
        },
        {
            country: "Cabo Verde",
            cat: "tax_burden_score",
            val :74
        },
        {
            country: "Cabo Verde",
            cat: "overall_economic_freedom_score",
            val :60
        },
        {
            country: "Cabo Verde",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Cabo Verde",
            cat: "women_MPs",
            val :23.6
        },
        {
            country: "Cambodia",
            cat: "world_happiness_report_score",
            val :4.59
        },
        {
            country: "Cambodia",
            cat: "GDP_per_capita",
            val :0.1
        },
        {
            country: "Cambodia",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Cambodia",
            cat: "education_expenditure",
            val :1.9
        },
        {
            country: "Cambodia",
            cat: "unemployment",
            val :0.3
        },
        {
            country: "Cambodia",
            cat: "government_expenditure",
            val :21.2
        },
        {
            country: "Cambodia",
            cat: "judicial_effectiveness_score",
            val :24.5
        },
        {
            country: "Cambodia",
            cat: "government_integrity",
            val :17.7
        },
        {
            country: "Cambodia",
            cat: "property_rights_score",
            val :36
        },
        {
            country: "Cambodia",
            cat: "tax_burden_score",
            val :89.8
        },
        {
            country: "Cambodia",
            cat: "overall_economic_freedom_score",
            val :58.7
        },
        {
            country: "Cambodia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Cambodia",
            cat: "women_MPs",
            val :20.3
        },
        {
            country: "Cameroon",
            cat: "world_happiness_report_score",
            val :5.07
        },
        {
            country: "Cameroon",
            cat: "GDP_per_capita",
            val :0.09
        },
        {
            country: "Cameroon",
            cat: "health_expenditure",
            val :5.1
        },
        {
            country: "Cameroon",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Cameroon",
            cat: "unemployment",
            val :4.5
        },
        {
            country: "Cameroon",
            cat: "government_expenditure",
            val :21.6
        },
        {
            country: "Cameroon",
            cat: "judicial_effectiveness_score",
            val :29.4
        },
        {
            country: "Cameroon",
            cat: "government_integrity",
            val :23.4
        },
        {
            country: "Cameroon",
            cat: "property_rights_score",
            val :40.6
        },
        {
            country: "Cameroon",
            cat: "tax_burden_score",
            val :73.7
        },
        {
            country: "Cameroon",
            cat: "overall_economic_freedom_score",
            val :51.9
        },
        {
            country: "Cameroon",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Cameroon",
            cat: "women_MPs",
            val :31.1
        },
        {
            country: "Canada",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Canada",
            cat: "GDP_per_capita",
            val :1.28
        },
        {
            country: "Canada",
            cat: "health_expenditure",
            val :10.4
        },
        {
            country: "Canada",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Canada",
            cat: "unemployment",
            val :7.1
        },
        {
            country: "Canada",
            cat: "government_expenditure",
            val :39.9
        },
        {
            country: "Canada",
            cat: "judicial_effectiveness_score",
            val :77.1
        },
        {
            country: "Canada",
            cat: "government_integrity",
            val :78.3
        },
        {
            country: "Canada",
            cat: "property_rights_score",
            val :87.5
        },
        {
            country: "Canada",
            cat: "tax_burden_score",
            val :76.7
        },
        {
            country: "Canada",
            cat: "overall_economic_freedom_score",
            val :77.7
        },
        {
            country: "Canada",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Canada",
            cat: "women_MPs",
            val :26.3
        },
        {
            country: "Central African Republic",
            cat: "world_happiness_report_score",
            val :3.48
        },
        {
            country: "Central African Republic",
            cat: "GDP_per_capita",
            val :0.02
        },
        {
            country: "Central African Republic",
            cat: "health_expenditure",
            val :4.8
        },
        {
            country: "Central African Republic",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Central African Republic",
            cat: "unemployment",
            val :6.9
        },
        {
            country: "Central African Republic",
            cat: "government_expenditure",
            val :13.4
        },
        {
            country: "Central African Republic",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Central African Republic",
            cat: "government_integrity",
            val :24.6
        },
        {
            country: "Central African Republic",
            cat: "property_rights_score",
            val :17.9
        },
        {
            country: "Central African Republic",
            cat: "tax_burden_score",
            val :64.6
        },
        {
            country: "Central African Republic",
            cat: "overall_economic_freedom_score",
            val :49.2
        },
        {
            country: "Central African Republic",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Central African Republic",
            cat: "women_MPs",
            val :8.6
        },
        {
            country: "Chad",
            cat: "world_happiness_report_score",
            val :4.56
        },
        {
            country: "Chad",
            cat: "GDP_per_capita",
            val :0.07
        },
        {
            country: "Chad",
            cat: "health_expenditure",
            val :4.6
        },
        {
            country: "Chad",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Chad",
            cat: "unemployment",
            val :5.8
        },
        {
            country: "Chad",
            cat: "government_expenditure",
            val :17.7
        },
        {
            country: "Chad",
            cat: "judicial_effectiveness_score",
            val :24.1
        },
        {
            country: "Chad",
            cat: "government_integrity",
            val :23.1
        },
        {
            country: "Chad",
            cat: "property_rights_score",
            val :25.1
        },
        {
            country: "Chad",
            cat: "tax_burden_score",
            val :44.8
        },
        {
            country: "Chad",
            cat: "overall_economic_freedom_score",
            val :49.3
        },
        {
            country: "Chad",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Chad",
            cat: "women_MPs",
            val :12.8
        },
        {
            country: "Chile",
            cat: "world_happiness_report_score",
            val :6.32
        },
        {
            country: "Chile",
            cat: "GDP_per_capita",
            val :0.66
        },
        {
            country: "Chile",
            cat: "health_expenditure",
            val :8.1
        },
        {
            country: "Chile",
            cat: "education_expenditure",
            val :4.7
        },
        {
            country: "Chile",
            cat: "unemployment",
            val :6.6
        },
        {
            country: "Chile",
            cat: "government_expenditure",
            val :25
        },
        {
            country: "Chile",
            cat: "judicial_effectiveness_score",
            val :63.4
        },
        {
            country: "Chile",
            cat: "government_integrity",
            val :61.2
        },
        {
            country: "Chile",
            cat: "property_rights_score",
            val :67.9
        },
        {
            country: "Chile",
            cat: "tax_burden_score",
            val :78
        },
        {
            country: "Chile",
            cat: "overall_economic_freedom_score",
            val :75.2
        },
        {
            country: "Chile",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Chile",
            cat: "women_MPs",
            val :15.8
        },
        {
            country: "China",
            cat: "world_happiness_report_score",
            val :5.1
        },
        {
            country: "China",
            cat: "GDP_per_capita",
            val :0.42
        },
        {
            country: "China",
            cat: "health_expenditure",
            val :5.3
        },
        {
            country: "China",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "China",
            cat: "unemployment",
            val :4.6
        },
        {
            country: "China",
            cat: "government_expenditure",
            val :30.7
        },
        {
            country: "China",
            cat: "judicial_effectiveness_score",
            val :65.4
        },
        {
            country: "China",
            cat: "government_integrity",
            val :47.3
        },
        {
            country: "China",
            cat: "property_rights_score",
            val :46.7
        },
        {
            country: "China",
            cat: "tax_burden_score",
            val :70.4
        },
        {
            country: "China",
            cat: "overall_economic_freedom_score",
            val :57.8
        },
        {
            country: "China",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "China",
            cat: "women_MPs",
            val :24.2
        },
        {
            country: "Colombia",
            cat: "world_happiness_report_score",
            val :6.16
        },
        {
            country: "Colombia",
            cat: "GDP_per_capita",
            val :0.39
        },
        {
            country: "Colombia",
            cat: "health_expenditure",
            val :6.2
        },
        {
            country: "Colombia",
            cat: "education_expenditure",
            val :4.7
        },
        {
            country: "Colombia",
            cat: "unemployment",
            val :9.9
        },
        {
            country: "Colombia",
            cat: "government_expenditure",
            val :29.2
        },
        {
            country: "Colombia",
            cat: "judicial_effectiveness_score",
            val :36.4
        },
        {
            country: "Colombia",
            cat: "government_integrity",
            val :33.4
        },
        {
            country: "Colombia",
            cat: "property_rights_score",
            val :60.7
        },
        {
            country: "Colombia",
            cat: "tax_burden_score",
            val :80.3
        },
        {
            country: "Colombia",
            cat: "overall_economic_freedom_score",
            val :68.9
        },
        {
            country: "Colombia",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Colombia",
            cat: "women_MPs",
            val :18.7
        },
        {
            country: "Comoros",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Comoros",
            cat: "GDP_per_capita",
            val :0.04
        },
        {
            country: "Comoros",
            cat: "health_expenditure",
            val :8
        },
        {
            country: "Comoros",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Comoros",
            cat: "unemployment",
            val :20
        },
        {
            country: "Comoros",
            cat: "government_expenditure",
            val :27.2
        },
        {
            country: "Comoros",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Comoros",
            cat: "government_integrity",
            val :27.5
        },
        {
            country: "Comoros",
            cat: "property_rights_score",
            val :36.7
        },
        {
            country: "Comoros",
            cat: "tax_burden_score",
            val :59.7
        },
        {
            country: "Comoros",
            cat: "overall_economic_freedom_score",
            val :56.2
        },
        {
            country: "Comoros",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Comoros",
            cat: "women_MPs",
            val :6.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "world_happiness_report_score",
            val :4.31
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "GDP_per_capita",
            val :0.02
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "health_expenditure",
            val :4.3
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "unemployment",
            val :3.6
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "government_expenditure",
            val :13.2
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "judicial_effectiveness_score",
            val :23.9
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "government_integrity",
            val :27.3
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "property_rights_score",
            val :24.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "tax_burden_score",
            val :73.2
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "overall_economic_freedom_score",
            val :52.1
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Congo (Dem. Rep.)",
            cat: "women_MPs",
            val :8.9
        },
        {
            country: "Congo (Rep.)",
            cat: "world_happiness_report_score",
            val :4.88
        },
        {
            country: "Congo (Rep.)",
            cat: "GDP_per_capita",
            val :0.18
        },
        {
            country: "Congo (Rep.)",
            cat: "health_expenditure",
            val :3.4
        },
        {
            country: "Congo (Rep.)",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Congo (Rep.)",
            cat: "unemployment",
            val :11.2
        },
        {
            country: "Congo (Rep.)",
            cat: "government_expenditure",
            val :47.1
        },
        {
            country: "Congo (Rep.)",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Congo (Rep.)",
            cat: "government_integrity",
            val :24.6
        },
        {
            country: "Congo (Rep.)",
            cat: "property_rights_score",
            val :32.4
        },
        {
            country: "Congo (Rep.)",
            cat: "tax_burden_score",
            val :60.8
        },
        {
            country: "Congo (Rep.)",
            cat: "overall_economic_freedom_score",
            val :38.9
        },
        {
            country: "Congo (Rep.)",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Congo (Rep.)",
            cat: "women_MPs",
            val :11.3
        },
        {
            country: "Costa Rica",
            cat: "world_happiness_report_score",
            val :7.23
        },
        {
            country: "Costa Rica",
            cat: "GDP_per_capita",
            val :0.45
        },
        {
            country: "Costa Rica",
            cat: "health_expenditure",
            val :8.1
        },
        {
            country: "Costa Rica",
            cat: "education_expenditure",
            val :6.9
        },
        {
            country: "Costa Rica",
            cat: "unemployment",
            val :9
        },
        {
            country: "Costa Rica",
            cat: "government_expenditure",
            val :19.3
        },
        {
            country: "Costa Rica",
            cat: "judicial_effectiveness_score",
            val :57.8
        },
        {
            country: "Costa Rica",
            cat: "government_integrity",
            val :51.8
        },
        {
            country: "Costa Rica",
            cat: "property_rights_score",
            val :54.8
        },
        {
            country: "Costa Rica",
            cat: "tax_burden_score",
            val :79.3
        },
        {
            country: "Costa Rica",
            cat: "overall_economic_freedom_score",
            val :65.6
        },
        {
            country: "Costa Rica",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Costa Rica",
            cat: "women_MPs",
            val :35.1
        },
        {
            country: "Cote d'Ivoire",
            cat: "world_happiness_report_score",
            val :5.04
        },
        {
            country: "Cote d'Ivoire",
            cat: "GDP_per_capita",
            val :0.1
        },
        {
            country: "Cote d'Ivoire",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "education_expenditure",
            val :4.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "unemployment",
            val :9.3
        },
        {
            country: "Cote d'Ivoire",
            cat: "government_expenditure",
            val :22.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "judicial_effectiveness_score",
            val :44.2
        },
        {
            country: "Cote d'Ivoire",
            cat: "government_integrity",
            val :36.6
        },
        {
            country: "Cote d'Ivoire",
            cat: "property_rights_score",
            val :39.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "tax_burden_score",
            val :76.4
        },
        {
            country: "Cote d'Ivoire",
            cat: "overall_economic_freedom_score",
            val :62
        },
        {
            country: "Cote d'Ivoire",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Cote d'Ivoire",
            cat: "women_MPs",
            val :10.6
        },
        {
            country: "Croatia",
            cat: "world_happiness_report_score",
            val :5.34
        },
        {
            country: "Croatia",
            cat: "GDP_per_capita",
            val :0.63
        },
        {
            country: "Croatia",
            cat: "health_expenditure",
            val :7.4
        },
        {
            country: "Croatia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Croatia",
            cat: "unemployment",
            val :13.5
        },
        {
            country: "Croatia",
            cat: "government_expenditure",
            val :47.4
        },
        {
            country: "Croatia",
            cat: "judicial_effectiveness_score",
            val :56.5
        },
        {
            country: "Croatia",
            cat: "government_integrity",
            val :40.5
        },
        {
            country: "Croatia",
            cat: "property_rights_score",
            val :65.9
        },
        {
            country: "Croatia",
            cat: "tax_burden_score",
            val :66
        },
        {
            country: "Croatia",
            cat: "overall_economic_freedom_score",
            val :61
        },
        {
            country: "Croatia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Croatia",
            cat: "women_MPs",
            val :18.5
        },
        {
            country: "Cuba",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "GDP_per_capita",
            val :0.34
        },
        {
            country: "Cuba",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Cuba",
            cat: "unemployment",
            val :2.9
        },
        {
            country: "Cuba",
            cat: "government_expenditure",
            val :62.4
        },
        {
            country: "Cuba",
            cat: "judicial_effectiveness_score",
            val :10
        },
        {
            country: "Cuba",
            cat: "government_integrity",
            val :38.1
        },
        {
            country: "Cuba",
            cat: "property_rights_score",
            val :29.7
        },
        {
            country: "Cuba",
            cat: "tax_burden_score",
            val :49
        },
        {
            country: "Cuba",
            cat: "overall_economic_freedom_score",
            val :31.9
        },
        {
            country: "Cuba",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Cuba",
            cat: "women_MPs",
            val :48.9
        },
        {
            country: "Cyprus",
            cat: "world_happiness_report_score",
            val :6.06
        },
        {
            country: "Cyprus",
            cat: "GDP_per_capita",
            val :0.96
        },
        {
            country: "Cyprus",
            cat: "health_expenditure",
            val :6.8
        },
        {
            country: "Cyprus",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Cyprus",
            cat: "unemployment",
            val :11.7
        },
        {
            country: "Cyprus",
            cat: "government_expenditure",
            val :39.6
        },
        {
            country: "Cyprus",
            cat: "judicial_effectiveness_score",
            val :56.7
        },
        {
            country: "Cyprus",
            cat: "government_integrity",
            val :41.3
        },
        {
            country: "Cyprus",
            cat: "property_rights_score",
            val :71.2
        },
        {
            country: "Cyprus",
            cat: "tax_burden_score",
            val :75.2
        },
        {
            country: "Cyprus",
            cat: "overall_economic_freedom_score",
            val :67.8
        },
        {
            country: "Cyprus",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Cyprus",
            cat: "women_MPs",
            val :17.9
        },
        {
            country: "Czech Republic",
            cat: "world_happiness_report_score",
            val :6.79
        },
        {
            country: "Czech Republic",
            cat: "GDP_per_capita",
            val :0.92
        },
        {
            country: "Czech Republic",
            cat: "health_expenditure",
            val :7.3
        },
        {
            country: "Czech Republic",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Czech Republic",
            cat: "unemployment",
            val :4
        },
        {
            country: "Czech Republic",
            cat: "government_expenditure",
            val :41.4
        },
        {
            country: "Czech Republic",
            cat: "judicial_effectiveness_score",
            val :57.9
        },
        {
            country: "Czech Republic",
            cat: "government_integrity",
            val :51.1
        },
        {
            country: "Czech Republic",
            cat: "property_rights_score",
            val :73
        },
        {
            country: "Czech Republic",
            cat: "tax_burden_score",
            val :82.9
        },
        {
            country: "Czech Republic",
            cat: "overall_economic_freedom_score",
            val :74.2
        },
        {
            country: "Czech Republic",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Czech Republic",
            cat: "women_MPs",
            val :20
        },
        {
            country: "Denmark",
            cat: "world_happiness_report_score",
            val :7.59
        },
        {
            country: "Denmark",
            cat: "GDP_per_capita",
            val :1.32
        },
        {
            country: "Denmark",
            cat: "health_expenditure",
            val :10.3
        },
        {
            country: "Denmark",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Denmark",
            cat: "unemployment",
            val :6.1
        },
        {
            country: "Denmark",
            cat: "government_expenditure",
            val :54.6
        },
        {
            country: "Denmark",
            cat: "judicial_effectiveness_score",
            val :83.6
        },
        {
            country: "Denmark",
            cat: "government_integrity",
            val :84.1
        },
        {
            country: "Denmark",
            cat: "property_rights_score",
            val :84.8
        },
        {
            country: "Denmark",
            cat: "tax_burden_score",
            val :41.4
        },
        {
            country: "Denmark",
            cat: "overall_economic_freedom_score",
            val :76.6
        },
        {
            country: "Denmark",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Denmark",
            cat: "women_MPs",
            val :37.4
        },
        {
            country: "Djibouti",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Djibouti",
            cat: "GDP_per_capita",
            val :0.09
        },
        {
            country: "Djibouti",
            cat: "health_expenditure",
            val :4.4
        },
        {
            country: "Djibouti",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Djibouti",
            cat: "unemployment",
            val :6.6
        },
        {
            country: "Djibouti",
            cat: "government_expenditure",
            val :49.3
        },
        {
            country: "Djibouti",
            cat: "judicial_effectiveness_score",
            val :13.8
        },
        {
            country: "Djibouti",
            cat: "government_integrity",
            val :29
        },
        {
            country: "Djibouti",
            cat: "property_rights_score",
            val :19
        },
        {
            country: "Djibouti",
            cat: "tax_burden_score",
            val :69.8
        },
        {
            country: "Djibouti",
            cat: "overall_economic_freedom_score",
            val :45.1
        },
        {
            country: "Djibouti",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Djibouti",
            cat: "women_MPs",
            val :10.8
        },
        {
            country: "Dominica",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "GDP_per_capita",
            val :0.31
        },
        {
            country: "Dominica",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Dominica",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Dominica",
            cat: "government_expenditure",
            val :34.2
        },
        {
            country: "Dominica",
            cat: "judicial_effectiveness_score",
            val :69.2
        },
        {
            country: "Dominica",
            cat: "government_integrity",
            val :49.9
        },
        {
            country: "Dominica",
            cat: "property_rights_score",
            val :48.6
        },
        {
            country: "Dominica",
            cat: "tax_burden_score",
            val :72.9
        },
        {
            country: "Dominica",
            cat: "overall_economic_freedom_score",
            val :64.5
        },
        {
            country: "Dominica",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Dominica",
            cat: "women_MPs",
            val :25
        },
        {
            country: "Dominican Republic",
            cat: "world_happiness_report_score",
            val :5.61
        },
        {
            country: "Dominican Republic",
            cat: "GDP_per_capita",
            val :0.44
        },
        {
            country: "Dominican Republic",
            cat: "health_expenditure",
            val :6.2
        },
        {
            country: "Dominican Republic",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Dominican Republic",
            cat: "unemployment",
            val :14.4
        },
        {
            country: "Dominican Republic",
            cat: "government_expenditure",
            val :17.7
        },
        {
            country: "Dominican Republic",
            cat: "judicial_effectiveness_score",
            val :23.1
        },
        {
            country: "Dominican Republic",
            cat: "government_integrity",
            val :26.2
        },
        {
            country: "Dominican Republic",
            cat: "property_rights_score",
            val :51.7
        },
        {
            country: "Dominican Republic",
            cat: "tax_burden_score",
            val :84.6
        },
        {
            country: "Dominican Republic",
            cat: "overall_economic_freedom_score",
            val :61.6
        },
        {
            country: "Dominican Republic",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Dominican Republic",
            cat: "women_MPs",
            val :26.8
        },
        {
            country: "Ecuador",
            cat: "world_happiness_report_score",
            val :5.84
        },
        {
            country: "Ecuador",
            cat: "GDP_per_capita",
            val :0.31
        },
        {
            country: "Ecuador",
            cat: "health_expenditure",
            val :6.8
        },
        {
            country: "Ecuador",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Ecuador",
            cat: "unemployment",
            val :5.4
        },
        {
            country: "Ecuador",
            cat: "government_expenditure",
            val :39.8
        },
        {
            country: "Ecuador",
            cat: "judicial_effectiveness_score",
            val :23.3
        },
        {
            country: "Ecuador",
            cat: "government_integrity",
            val :30.2
        },
        {
            country: "Ecuador",
            cat: "property_rights_score",
            val :36.7
        },
        {
            country: "Ecuador",
            cat: "tax_burden_score",
            val :79.4
        },
        {
            country: "Ecuador",
            cat: "overall_economic_freedom_score",
            val :48.5
        },
        {
            country: "Ecuador",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Ecuador",
            cat: "women_MPs",
            val :38
        },
        {
            country: "Egypt",
            cat: "world_happiness_report_score",
            val :3.93
        },
        {
            country: "Egypt",
            cat: "GDP_per_capita",
            val :0.35
        },
        {
            country: "Egypt",
            cat: "health_expenditure",
            val :7.3
        },
        {
            country: "Egypt",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Egypt",
            cat: "unemployment",
            val :12
        },
        {
            country: "Egypt",
            cat: "government_expenditure",
            val :34.1
        },
        {
            country: "Egypt",
            cat: "judicial_effectiveness_score",
            val :52.5
        },
        {
            country: "Egypt",
            cat: "government_integrity",
            val :32.2
        },
        {
            country: "Egypt",
            cat: "property_rights_score",
            val :32.7
        },
        {
            country: "Egypt",
            cat: "tax_burden_score",
            val :84.2
        },
        {
            country: "Egypt",
            cat: "overall_economic_freedom_score",
            val :53.4
        },
        {
            country: "Egypt",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Egypt",
            cat: "women_MPs",
            val :14.9
        },
        {
            country: "El Salvador",
            cat: "world_happiness_report_score",
            val :6.34
        },
        {
            country: "El Salvador",
            cat: "GDP_per_capita",
            val :0.25
        },
        {
            country: "El Salvador",
            cat: "health_expenditure",
            val :10.3
        },
        {
            country: "El Salvador",
            cat: "education_expenditure",
            val :3.4
        },
        {
            country: "El Salvador",
            cat: "unemployment",
            val :6.3
        },
        {
            country: "El Salvador",
            cat: "government_expenditure",
            val :21.3
        },
        {
            country: "El Salvador",
            cat: "judicial_effectiveness_score",
            val :35.4
        },
        {
            country: "El Salvador",
            cat: "government_integrity",
            val :25.2
        },
        {
            country: "El Salvador",
            cat: "property_rights_score",
            val :37.3
        },
        {
            country: "El Salvador",
            cat: "tax_burden_score",
            val :78.9
        },
        {
            country: "El Salvador",
            cat: "overall_economic_freedom_score",
            val :63.2
        },
        {
            country: "El Salvador",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "El Salvador",
            cat: "women_MPs",
            val :32.1
        },
        {
            country: "Equatorial Guinea",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Equatorial Guinea",
            cat: "GDP_per_capita",
            val :1.06
        },
        {
            country: "Equatorial Guinea",
            cat: "health_expenditure",
            val :4.4
        },
        {
            country: "Equatorial Guinea",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Equatorial Guinea",
            cat: "unemployment",
            val :7.3
        },
        {
            country: "Equatorial Guinea",
            cat: "government_expenditure",
            val :36.1
        },
        {
            country: "Equatorial Guinea",
            cat: "judicial_effectiveness_score",
            val :17.6
        },
        {
            country: "Equatorial Guinea",
            cat: "government_integrity",
            val :26.2
        },
        {
            country: "Equatorial Guinea",
            cat: "property_rights_score",
            val :29.8
        },
        {
            country: "Equatorial Guinea",
            cat: "tax_burden_score",
            val :69.6
        },
        {
            country: "Equatorial Guinea",
            cat: "overall_economic_freedom_score",
            val :42
        },
        {
            country: "Equatorial Guinea",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Equatorial Guinea",
            cat: "women_MPs",
            val :24
        },
        {
            country: "Eritrea",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Eritrea",
            cat: "GDP_per_capita",
            val :0.04
        },
        {
            country: "Eritrea",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Eritrea",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Eritrea",
            cat: "unemployment",
            val :7.3
        },
        {
            country: "Eritrea",
            cat: "government_expenditure",
            val :28.5
        },
        {
            country: "Eritrea",
            cat: "judicial_effectiveness_score",
            val :13.8
        },
        {
            country: "Eritrea",
            cat: "government_integrity",
            val :23.4
        },
        {
            country: "Eritrea",
            cat: "property_rights_score",
            val :35.5
        },
        {
            country: "Eritrea",
            cat: "tax_burden_score",
            val :79.9
        },
        {
            country: "Eritrea",
            cat: "overall_economic_freedom_score",
            val :41.7
        },
        {
            country: "Eritrea",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Eritrea",
            cat: "women_MPs",
            val :22
        },
        {
            country: "Estonia",
            cat: "world_happiness_report_score",
            val :5.94
        },
        {
            country: "Estonia",
            cat: "GDP_per_capita",
            val :0.81
        },
        {
            country: "Estonia",
            cat: "health_expenditure",
            val :6.2
        },
        {
            country: "Estonia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Estonia",
            cat: "unemployment",
            val :6.9
        },
        {
            country: "Estonia",
            cat: "government_expenditure",
            val :39.8
        },
        {
            country: "Estonia",
            cat: "judicial_effectiveness_score",
            val :83.9
        },
        {
            country: "Estonia",
            cat: "government_integrity",
            val :75.7
        },
        {
            country: "Estonia",
            cat: "property_rights_score",
            val :80.4
        },
        {
            country: "Estonia",
            cat: "tax_burden_score",
            val :80.7
        },
        {
            country: "Estonia",
            cat: "overall_economic_freedom_score",
            val :78.8
        },
        {
            country: "Estonia",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Estonia",
            cat: "women_MPs",
            val :26.7
        },
        {
            country: "Eswatini",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Eswatini",
            cat: "GDP_per_capita",
            val :0.27
        },
        {
            country: "Eswatini",
            cat: "health_expenditure",
            val :7
        },
        {
            country: "Eswatini",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Eswatini",
            cat: "unemployment",
            val :25.3
        },
        {
            country: "Eswatini",
            cat: "government_expenditure",
            val :34.1
        },
        {
            country: "Eswatini",
            cat: "judicial_effectiveness_score",
            val :35.3
        },
        {
            country: "Eswatini",
            cat: "government_integrity",
            val :26.9
        },
        {
            country: "Eswatini",
            cat: "property_rights_score",
            val :55.3
        },
        {
            country: "Eswatini",
            cat: "tax_burden_score",
            val :74.8
        },
        {
            country: "Eswatini",
            cat: "overall_economic_freedom_score",
            val :55.9
        },
        {
            country: "Eswatini",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Eswatini",
            cat: "women_MPs",
            val :6.2
        },
        {
            country: "Ethiopia",
            cat: "world_happiness_report_score",
            val :4.18
        },
        {
            country: "Ethiopia",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Ethiopia",
            cat: "health_expenditure",
            val :4
        },
        {
            country: "Ethiopia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Ethiopia",
            cat: "unemployment",
            val :5.7
        },
        {
            country: "Ethiopia",
            cat: "government_expenditure",
            val :17.7
        },
        {
            country: "Ethiopia",
            cat: "judicial_effectiveness_score",
            val :37.6
        },
        {
            country: "Ethiopia",
            cat: "government_integrity",
            val :37.7
        },
        {
            country: "Ethiopia",
            cat: "property_rights_score",
            val :31.1
        },
        {
            country: "Ethiopia",
            cat: "tax_burden_score",
            val :76.5
        },
        {
            country: "Ethiopia",
            cat: "overall_economic_freedom_score",
            val :52.8
        },
        {
            country: "Ethiopia",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Ethiopia",
            cat: "women_MPs",
            val :38.8
        },
        {
            country: "Fiji",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Fiji",
            cat: "GDP_per_capita",
            val :0.26
        },
        {
            country: "Fiji",
            cat: "health_expenditure",
            val :3.6
        },
        {
            country: "Fiji",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Fiji",
            cat: "unemployment",
            val :7.9
        },
        {
            country: "Fiji",
            cat: "government_expenditure",
            val :32.6
        },
        {
            country: "Fiji",
            cat: "judicial_effectiveness_score",
            val :47.1
        },
        {
            country: "Fiji",
            cat: "government_integrity",
            val :34.8
        },
        {
            country: "Fiji",
            cat: "property_rights_score",
            val :68.3
        },
        {
            country: "Fiji",
            cat: "tax_burden_score",
            val :81.4
        },
        {
            country: "Fiji",
            cat: "overall_economic_freedom_score",
            val :62
        },
        {
            country: "Fiji",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Fiji",
            cat: "women_MPs",
            val :16
        },
        {
            country: "Finland",
            cat: "world_happiness_report_score",
            val :7.79
        },
        {
            country: "Finland",
            cat: "GDP_per_capita",
            val :1.16
        },
        {
            country: "Finland",
            cat: "health_expenditure",
            val :9.4
        },
        {
            country: "Finland",
            cat: "education_expenditure",
            val :7.2
        },
        {
            country: "Finland",
            cat: "unemployment",
            val :9
        },
        {
            country: "Finland",
            cat: "government_expenditure",
            val :57.1
        },
        {
            country: "Finland",
            cat: "judicial_effectiveness_score",
            val :82.7
        },
        {
            country: "Finland",
            cat: "government_integrity",
            val :89.8
        },
        {
            country: "Finland",
            cat: "property_rights_score",
            val :89
        },
        {
            country: "Finland",
            cat: "tax_burden_score",
            val :66.5
        },
        {
            country: "Finland",
            cat: "overall_economic_freedom_score",
            val :74.1
        },
        {
            country: "Finland",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Finland",
            cat: "women_MPs",
            val :42
        },
        {
            country: "France",
            cat: "world_happiness_report_score",
            val :6.64
        },
        {
            country: "France",
            cat: "GDP_per_capita",
            val :1.17
        },
        {
            country: "France",
            cat: "health_expenditure",
            val :11.1
        },
        {
            country: "France",
            cat: "education_expenditure",
            val :5.5
        },
        {
            country: "France",
            cat: "unemployment",
            val :10
        },
        {
            country: "France",
            cat: "government_expenditure",
            val :57
        },
        {
            country: "France",
            cat: "judicial_effectiveness_score",
            val :72.7
        },
        {
            country: "France",
            cat: "government_integrity",
            val :65.1
        },
        {
            country: "France",
            cat: "property_rights_score",
            val :84
        },
        {
            country: "France",
            cat: "tax_burden_score",
            val :47.3
        },
        {
            country: "France",
            cat: "overall_economic_freedom_score",
            val :63.9
        },
        {
            country: "France",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "France",
            cat: "women_MPs",
            val :39
        },
        {
            country: "Gabon",
            cat: "world_happiness_report_score",
            val :4.78
        },
        {
            country: "Gabon",
            cat: "GDP_per_capita",
            val :0.52
        },
        {
            country: "Gabon",
            cat: "health_expenditure",
            val :2.7
        },
        {
            country: "Gabon",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Gabon",
            cat: "unemployment",
            val :18.5
        },
        {
            country: "Gabon",
            cat: "government_expenditure",
            val :22.6
        },
        {
            country: "Gabon",
            cat: "judicial_effectiveness_score",
            val :27.8
        },
        {
            country: "Gabon",
            cat: "government_integrity",
            val :33.4
        },
        {
            country: "Gabon",
            cat: "property_rights_score",
            val :29.9
        },
        {
            country: "Gabon",
            cat: "tax_burden_score",
            val :74.3
        },
        {
            country: "Gabon",
            cat: "overall_economic_freedom_score",
            val :58
        },
        {
            country: "Gabon",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Gabon",
            cat: "women_MPs",
            val :17.1
        },
        {
            country: "Gambia, The",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Gambia, The",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Gambia, The",
            cat: "health_expenditure",
            val :6.6
        },
        {
            country: "Gambia, The",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Gambia, The",
            cat: "unemployment",
            val :29.7
        },
        {
            country: "Gambia, The",
            cat: "government_expenditure",
            val :29.4
        },
        {
            country: "Gambia, The",
            cat: "judicial_effectiveness_score",
            val :38.8
        },
        {
            country: "Gambia, The",
            cat: "government_integrity",
            val :36.8
        },
        {
            country: "Gambia, The",
            cat: "property_rights_score",
            val :34.4
        },
        {
            country: "Gambia, The",
            cat: "tax_burden_score",
            val :71.9
        },
        {
            country: "Gambia, The",
            cat: "overall_economic_freedom_score",
            val :52.3
        },
        {
            country: "Gambia, The",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Gambia, The",
            cat: "women_MPs",
            val :10.3
        },
        {
            country: "Georgia",
            cat: "world_happiness_report_score",
            val :4.45
        },
        {
            country: "Georgia",
            cat: "GDP_per_capita",
            val :0.28
        },
        {
            country: "Georgia",
            cat: "health_expenditure",
            val :7.9
        },
        {
            country: "Georgia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Georgia",
            cat: "unemployment",
            val :11.6
        },
        {
            country: "Georgia",
            cat: "government_expenditure",
            val :29.8
        },
        {
            country: "Georgia",
            cat: "judicial_effectiveness_score",
            val :64.2
        },
        {
            country: "Georgia",
            cat: "government_integrity",
            val :61.8
        },
        {
            country: "Georgia",
            cat: "property_rights_score",
            val :62.8
        },
        {
            country: "Georgia",
            cat: "tax_burden_score",
            val :87
        },
        {
            country: "Georgia",
            cat: "overall_economic_freedom_score",
            val :76.2
        },
        {
            country: "Georgia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Georgia",
            cat: "women_MPs",
            val :16
        },
        {
            country: "Germany",
            cat: "world_happiness_report_score",
            val :7.07
        },
        {
            country: "Germany",
            cat: "GDP_per_capita",
            val :1.32
        },
        {
            country: "Germany",
            cat: "health_expenditure",
            val :11.2
        },
        {
            country: "Germany",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Germany",
            cat: "unemployment",
            val :4.3
        },
        {
            country: "Germany",
            cat: "government_expenditure",
            val :44.2
        },
        {
            country: "Germany",
            cat: "judicial_effectiveness_score",
            val :78
        },
        {
            country: "Germany",
            cat: "government_integrity",
            val :75.3
        },
        {
            country: "Germany",
            cat: "property_rights_score",
            val :81
        },
        {
            country: "Germany",
            cat: "tax_burden_score",
            val :61.3
        },
        {
            country: "Germany",
            cat: "overall_economic_freedom_score",
            val :74.2
        },
        {
            country: "Germany",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Germany",
            cat: "women_MPs",
            val :37
        },
        {
            country: "Ghana",
            cat: "world_happiness_report_score",
            val :5.48
        },
        {
            country: "Ghana",
            cat: "GDP_per_capita",
            val :0.12
        },
        {
            country: "Ghana",
            cat: "health_expenditure",
            val :5.9
        },
        {
            country: "Ghana",
            cat: "education_expenditure",
            val :6.2
        },
        {
            country: "Ghana",
            cat: "unemployment",
            val :5.8
        },
        {
            country: "Ghana",
            cat: "government_expenditure",
            val :26.5
        },
        {
            country: "Ghana",
            cat: "judicial_effectiveness_score",
            val :43.7
        },
        {
            country: "Ghana",
            cat: "government_integrity",
            val :32.9
        },
        {
            country: "Ghana",
            cat: "property_rights_score",
            val :48.9
        },
        {
            country: "Ghana",
            cat: "tax_burden_score",
            val :83.5
        },
        {
            country: "Ghana",
            cat: "overall_economic_freedom_score",
            val :56
        },
        {
            country: "Ghana",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Ghana",
            cat: "women_MPs",
            val :12.7
        },
        {
            country: "Greece",
            cat: "world_happiness_report_score",
            val :5.15
        },
        {
            country: "Greece",
            cat: "GDP_per_capita",
            val :0.73
        },
        {
            country: "Greece",
            cat: "health_expenditure",
            val :8.4
        },
        {
            country: "Greece",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Greece",
            cat: "unemployment",
            val :23.9
        },
        {
            country: "Greece",
            cat: "government_expenditure",
            val :51.3
        },
        {
            country: "Greece",
            cat: "judicial_effectiveness_score",
            val :59
        },
        {
            country: "Greece",
            cat: "government_integrity",
            val :37.9
        },
        {
            country: "Greece",
            cat: "property_rights_score",
            val :52.3
        },
        {
            country: "Greece",
            cat: "tax_burden_score",
            val :60.4
        },
        {
            country: "Greece",
            cat: "overall_economic_freedom_score",
            val :57.3
        },
        {
            country: "Greece",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Greece",
            cat: "women_MPs",
            val :18.3
        },
        {
            country: "Grenada",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "health_expenditure",
            val :5
        },
        {
            country: "Grenada",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Grenada",
            cat: "women_MPs",
            val :33.3
        },
        {
            country: "Guatemala",
            cat: "world_happiness_report_score",
            val :6.33
        },
        {
            country: "Guatemala",
            cat: "GDP_per_capita",
            val :0.22
        },
        {
            country: "Guatemala",
            cat: "health_expenditure",
            val :5.7
        },
        {
            country: "Guatemala",
            cat: "education_expenditure",
            val :2.9
        },
        {
            country: "Guatemala",
            cat: "unemployment",
            val :2.4
        },
        {
            country: "Guatemala",
            cat: "government_expenditure",
            val :12.5
        },
        {
            country: "Guatemala",
            cat: "judicial_effectiveness_score",
            val :33.1
        },
        {
            country: "Guatemala",
            cat: "government_integrity",
            val :27.3
        },
        {
            country: "Guatemala",
            cat: "property_rights_score",
            val :40.4
        },
        {
            country: "Guatemala",
            cat: "tax_burden_score",
            val :79.2
        },
        {
            country: "Guatemala",
            cat: "overall_economic_freedom_score",
            val :63.4
        },
        {
            country: "Guatemala",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Guatemala",
            cat: "women_MPs",
            val :12.7
        },
        {
            country: "Guinea",
            cat: "world_happiness_report_score",
            val :4.87
        },
        {
            country: "Guinea",
            cat: "GDP_per_capita",
            val :0.03
        },
        {
            country: "Guinea",
            cat: "health_expenditure",
            val :4.5
        },
        {
            country: "Guinea",
            cat: "education_expenditure",
            val :2.4
        },
        {
            country: "Guinea",
            cat: "unemployment",
            val :6.8
        },
        {
            country: "Guinea",
            cat: "government_expenditure",
            val :25.4
        },
        {
            country: "Guinea",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Guinea",
            cat: "government_integrity",
            val :26.9
        },
        {
            country: "Guinea",
            cat: "property_rights_score",
            val :32.4
        },
        {
            country: "Guinea",
            cat: "tax_burden_score",
            val :65.9
        },
        {
            country: "Guinea",
            cat: "overall_economic_freedom_score",
            val :52.2
        },
        {
            country: "Guinea",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Guinea",
            cat: "women_MPs",
            val :21.9
        },
        {
            country: "Guinea-Bissau",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Guinea-Bissau",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Guinea-Bissau",
            cat: "health_expenditure",
            val :6.9
        },
        {
            country: "Guinea-Bissau",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Guinea-Bissau",
            cat: "unemployment",
            val :6.5
        },
        {
            country: "Guinea-Bissau",
            cat: "government_expenditure",
            val :21.9
        },
        {
            country: "Guinea-Bissau",
            cat: "judicial_effectiveness_score",
            val :53.5
        },
        {
            country: "Guinea-Bissau",
            cat: "government_integrity",
            val :27.3
        },
        {
            country: "Guinea-Bissau",
            cat: "property_rights_score",
            val :31.1
        },
        {
            country: "Guinea-Bissau",
            cat: "tax_burden_score",
            val :86.4
        },
        {
            country: "Guinea-Bissau",
            cat: "overall_economic_freedom_score",
            val :56.9
        },
        {
            country: "Guinea-Bissau",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Guinea-Bissau",
            cat: "women_MPs",
            val :13.7
        },
        {
            country: "Guyana",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Guyana",
            cat: "GDP_per_capita",
            val :0.22
        },
        {
            country: "Guyana",
            cat: "health_expenditure",
            val :4.5
        },
        {
            country: "Guyana",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Guyana",
            cat: "unemployment",
            val :11.4
        },
        {
            country: "Guyana",
            cat: "government_expenditure",
            val :31.2
        },
        {
            country: "Guyana",
            cat: "judicial_effectiveness_score",
            val :42.5
        },
        {
            country: "Guyana",
            cat: "government_integrity",
            val :34.8
        },
        {
            country: "Guyana",
            cat: "property_rights_score",
            val :42.1
        },
        {
            country: "Guyana",
            cat: "tax_burden_score",
            val :68.4
        },
        {
            country: "Guyana",
            cat: "overall_economic_freedom_score",
            val :58.7
        },
        {
            country: "Guyana",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Guyana",
            cat: "women_MPs",
            val :31.9
        },
        {
            country: "Haiti",
            cat: "world_happiness_report_score",
            val :3.82
        },
        {
            country: "Haiti",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Haiti",
            cat: "health_expenditure",
            val :6.9
        },
        {
            country: "Haiti",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Haiti",
            cat: "unemployment",
            val :13.2
        },
        {
            country: "Haiti",
            cat: "government_expenditure",
            val :21.9
        },
        {
            country: "Haiti",
            cat: "judicial_effectiveness_score",
            val :42.5
        },
        {
            country: "Haiti",
            cat: "government_integrity",
            val :24.6
        },
        {
            country: "Haiti",
            cat: "property_rights_score",
            val :25.1
        },
        {
            country: "Haiti",
            cat: "tax_burden_score",
            val :80.1
        },
        {
            country: "Haiti",
            cat: "overall_economic_freedom_score",
            val :55.8
        },
        {
            country: "Haiti",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Haiti",
            cat: "women_MPs",
            val :2.5
        },
        {
            country: "Honduras",
            cat: "world_happiness_report_score",
            val :6.02
        },
        {
            country: "Honduras",
            cat: "GDP_per_capita",
            val :0.15
        },
        {
            country: "Honduras",
            cat: "health_expenditure",
            val :7.6
        },
        {
            country: "Honduras",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Honduras",
            cat: "unemployment",
            val :6.3
        },
        {
            country: "Honduras",
            cat: "government_expenditure",
            val :27.9
        },
        {
            country: "Honduras",
            cat: "judicial_effectiveness_score",
            val :34.5
        },
        {
            country: "Honduras",
            cat: "government_integrity",
            val :28.2
        },
        {
            country: "Honduras",
            cat: "property_rights_score",
            val :44.3
        },
        {
            country: "Honduras",
            cat: "tax_burden_score",
            val :82.8
        },
        {
            country: "Honduras",
            cat: "overall_economic_freedom_score",
            val :60.6
        },
        {
            country: "Honduras",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Honduras",
            cat: "women_MPs",
            val :25.8
        },
        {
            country: "Hungary",
            cat: "world_happiness_report_score",
            val :6.07
        },
        {
            country: "Hungary",
            cat: "GDP_per_capita",
            val :0.76
        },
        {
            country: "Hungary",
            cat: "health_expenditure",
            val :7.2
        },
        {
            country: "Hungary",
            cat: "education_expenditure",
            val :4.6
        },
        {
            country: "Hungary",
            cat: "unemployment",
            val :5.2
        },
        {
            country: "Hungary",
            cat: "government_expenditure",
            val :48.5
        },
        {
            country: "Hungary",
            cat: "judicial_effectiveness_score",
            val :57.1
        },
        {
            country: "Hungary",
            cat: "government_integrity",
            val :36.4
        },
        {
            country: "Hungary",
            cat: "property_rights_score",
            val :57.6
        },
        {
            country: "Hungary",
            cat: "tax_burden_score",
            val :78.6
        },
        {
            country: "Hungary",
            cat: "overall_economic_freedom_score",
            val :66.7
        },
        {
            country: "Hungary",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Hungary",
            cat: "women_MPs",
            val :10.1
        },
        {
            country: "Iceland",
            cat: "world_happiness_report_score",
            val :7.48
        },
        {
            country: "Iceland",
            cat: "GDP_per_capita",
            val :1.35
        },
        {
            country: "Iceland",
            cat: "health_expenditure",
            val :8.6
        },
        {
            country: "Iceland",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Iceland",
            cat: "unemployment",
            val :3.8
        },
        {
            country: "Iceland",
            cat: "government_expenditure",
            val :43.1
        },
        {
            country: "Iceland",
            cat: "judicial_effectiveness_score",
            val :72.6
        },
        {
            country: "Iceland",
            cat: "government_integrity",
            val :77.3
        },
        {
            country: "Iceland",
            cat: "property_rights_score",
            val :86.7
        },
        {
            country: "Iceland",
            cat: "tax_burden_score",
            val :72.1
        },
        {
            country: "Iceland",
            cat: "overall_economic_freedom_score",
            val :77
        },
        {
            country: "Iceland",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Iceland",
            cat: "women_MPs",
            val :47.6
        },
        {
            country: "India",
            cat: "world_happiness_report_score",
            val :4.05
        },
        {
            country: "India",
            cat: "GDP_per_capita",
            val :0.18
        },
        {
            country: "India",
            cat: "health_expenditure",
            val :3.9
        },
        {
            country: "India",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "India",
            cat: "unemployment",
            val :3.5
        },
        {
            country: "India",
            cat: "government_expenditure",
            val :27.3
        },
        {
            country: "India",
            cat: "judicial_effectiveness_score",
            val :54.3
        },
        {
            country: "India",
            cat: "government_integrity",
            val :47.2
        },
        {
            country: "India",
            cat: "property_rights_score",
            val :55.4
        },
        {
            country: "India",
            cat: "tax_burden_score",
            val :79.4
        },
        {
            country: "India",
            cat: "overall_economic_freedom_score",
            val :54.5
        },
        {
            country: "India",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "India",
            cat: "women_MPs",
            val :11.8
        },
        {
            country: "Indonesia",
            cat: "world_happiness_report_score",
            val :5.1
        },
        {
            country: "Indonesia",
            cat: "GDP_per_capita",
            val :0.32
        },
        {
            country: "Indonesia",
            cat: "health_expenditure",
            val :3.3
        },
        {
            country: "Indonesia",
            cat: "education_expenditure",
            val :3.3
        },
        {
            country: "Indonesia",
            cat: "unemployment",
            val :5.6
        },
        {
            country: "Indonesia",
            cat: "government_expenditure",
            val :17.6
        },
        {
            country: "Indonesia",
            cat: "judicial_effectiveness_score",
            val :45.2
        },
        {
            country: "Indonesia",
            cat: "government_integrity",
            val :42.8
        },
        {
            country: "Indonesia",
            cat: "property_rights_score",
            val :49.3
        },
        {
            country: "Indonesia",
            cat: "tax_burden_score",
            val :83.7
        },
        {
            country: "Indonesia",
            cat: "overall_economic_freedom_score",
            val :64.2
        },
        {
            country: "Indonesia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Indonesia",
            cat: "women_MPs",
            val :19.8
        },
        {
            country: "Iran",
            cat: "world_happiness_report_score",
            val :4.72
        },
        {
            country: "Iran",
            cat: "GDP_per_capita",
            val :0.5
        },
        {
            country: "Iran",
            cat: "health_expenditure",
            val :7.6
        },
        {
            country: "Iran",
            cat: "education_expenditure",
            val :2.8
        },
        {
            country: "Iran",
            cat: "unemployment",
            val :11.3
        },
        {
            country: "Iran",
            cat: "government_expenditure",
            val :17.2
        },
        {
            country: "Iran",
            cat: "judicial_effectiveness_score",
            val :35.3
        },
        {
            country: "Iran",
            cat: "government_integrity",
            val :32.6
        },
        {
            country: "Iran",
            cat: "property_rights_score",
            val :32.5
        },
        {
            country: "Iran",
            cat: "tax_burden_score",
            val :81
        },
        {
            country: "Iran",
            cat: "overall_economic_freedom_score",
            val :50.9
        },
        {
            country: "Iran",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Iran",
            cat: "women_MPs",
            val :5.9
        },
        {
            country: "Iraq",
            cat: "world_happiness_report_score",
            val :4.46
        },
        {
            country: "Iraq",
            cat: "GDP_per_capita",
            val :0.49
        },
        {
            country: "Iraq",
            cat: "health_expenditure",
            val :3.4
        },
        {
            country: "Iraq",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "unemployment",
            val :16
        },
        {
            country: "Iraq",
            cat: "government_expenditure",
            val :42.7
        },
        {
            country: "Iraq",
            cat: "judicial_effectiveness_score",
            val :11.4
        },
        {
            country: "Iraq",
            cat: "government_integrity",
            val :23.4
        },
        {
            country: "Iraq",
            cat: "property_rights_score",
            val :36.7
        },
        {
            country: "Iraq",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Iraq",
            cat: "women_MPs",
            val :25.3
        },
        {
            country: "Ireland",
            cat: "world_happiness_report_score",
            val :7.06
        },
        {
            country: "Ireland",
            cat: "GDP_per_capita",
            val :1.91
        },
        {
            country: "Ireland",
            cat: "health_expenditure",
            val :7.8
        },
        {
            country: "Ireland",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Ireland",
            cat: "unemployment",
            val :8.1
        },
        {
            country: "Ireland",
            cat: "government_expenditure",
            val :31.9
        },
        {
            country: "Ireland",
            cat: "judicial_effectiveness_score",
            val :79
        },
        {
            country: "Ireland",
            cat: "government_integrity",
            val :79
        },
        {
            country: "Ireland",
            cat: "property_rights_score",
            val :87.7
        },
        {
            country: "Ireland",
            cat: "tax_burden_score",
            val :76.1
        },
        {
            country: "Ireland",
            cat: "overall_economic_freedom_score",
            val :80.4
        },
        {
            country: "Ireland",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Ireland",
            cat: "women_MPs",
            val :22.2
        },
        {
            country: "Israel",
            cat: "world_happiness_report_score",
            val :7.33
        },
        {
            country: "Israel",
            cat: "GDP_per_capita",
            val :0.97
        },
        {
            country: "Israel",
            cat: "health_expenditure",
            val :7.4
        },
        {
            country: "Israel",
            cat: "education_expenditure",
            val :5.7
        },
        {
            country: "Israel",
            cat: "unemployment",
            val :5.6
        },
        {
            country: "Israel",
            cat: "government_expenditure",
            val :40.1
        },
        {
            country: "Israel",
            cat: "judicial_effectiveness_score",
            val :83.1
        },
        {
            country: "Israel",
            cat: "government_integrity",
            val :61.2
        },
        {
            country: "Israel",
            cat: "property_rights_score",
            val :78.2
        },
        {
            country: "Israel",
            cat: "tax_burden_score",
            val :60.9
        },
        {
            country: "Israel",
            cat: "overall_economic_freedom_score",
            val :72.2
        },
        {
            country: "Israel",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Israel",
            cat: "women_MPs",
            val :27.5
        },
        {
            country: "Italy",
            cat: "world_happiness_report_score",
            val :6.2
        },
        {
            country: "Italy",
            cat: "GDP_per_capita",
            val :1.01
        },
        {
            country: "Italy",
            cat: "health_expenditure",
            val :9
        },
        {
            country: "Italy",
            cat: "education_expenditure",
            val :4.1
        },
        {
            country: "Italy",
            cat: "unemployment",
            val :11.5
        },
        {
            country: "Italy",
            cat: "government_expenditure",
            val :50.3
        },
        {
            country: "Italy",
            cat: "judicial_effectiveness_score",
            val :60.9
        },
        {
            country: "Italy",
            cat: "government_integrity",
            val :40.1
        },
        {
            country: "Italy",
            cat: "property_rights_score",
            val :71.2
        },
        {
            country: "Italy",
            cat: "tax_burden_score",
            val :55.2
        },
        {
            country: "Italy",
            cat: "overall_economic_freedom_score",
            val :62.5
        },
        {
            country: "Italy",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Italy",
            cat: "women_MPs",
            val :31
        },
        {
            country: "Jamaica",
            cat: "world_happiness_report_score",
            val :5.89
        },
        {
            country: "Jamaica",
            cat: "GDP_per_capita",
            val :0.25
        },
        {
            country: "Jamaica",
            cat: "health_expenditure",
            val :5.9
        },
        {
            country: "Jamaica",
            cat: "education_expenditure",
            val :6
        },
        {
            country: "Jamaica",
            cat: "unemployment",
            val :13.3
        },
        {
            country: "Jamaica",
            cat: "government_expenditure",
            val :27.6
        },
        {
            country: "Jamaica",
            cat: "judicial_effectiveness_score",
            val :56.6
        },
        {
            country: "Jamaica",
            cat: "government_integrity",
            val :39.4
        },
        {
            country: "Jamaica",
            cat: "property_rights_score",
            val :60.9
        },
        {
            country: "Jamaica",
            cat: "tax_burden_score",
            val :80
        },
        {
            country: "Jamaica",
            cat: "overall_economic_freedom_score",
            val :69.1
        },
        {
            country: "Jamaica",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Jamaica",
            cat: "women_MPs",
            val :17.5
        },
        {
            country: "Japan",
            cat: "world_happiness_report_score",
            val :5.91
        },
        {
            country: "Japan",
            cat: "GDP_per_capita",
            val :1.14
        },
        {
            country: "Japan",
            cat: "health_expenditure",
            val :10.9
        },
        {
            country: "Japan",
            cat: "education_expenditure",
            val :3.6
        },
        {
            country: "Japan",
            cat: "unemployment",
            val :3.1
        },
        {
            country: "Japan",
            cat: "government_expenditure",
            val :39.1
        },
        {
            country: "Japan",
            cat: "judicial_effectiveness_score",
            val :73.2
        },
        {
            country: "Japan",
            cat: "government_integrity",
            val :79.2
        },
        {
            country: "Japan",
            cat: "property_rights_score",
            val :86
        },
        {
            country: "Japan",
            cat: "tax_burden_score",
            val :67.4
        },
        {
            country: "Japan",
            cat: "overall_economic_freedom_score",
            val :72.3
        },
        {
            country: "Japan",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Japan",
            cat: "women_MPs",
            val :9.3
        },
        {
            country: "Jordan",
            cat: "world_happiness_report_score",
            val :4.81
        },
        {
            country: "Jordan",
            cat: "GDP_per_capita",
            val :0.34
        },
        {
            country: "Jordan",
            cat: "health_expenditure",
            val :6.3
        },
        {
            country: "Jordan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Jordan",
            cat: "unemployment",
            val :13.2
        },
        {
            country: "Jordan",
            cat: "government_expenditure",
            val :32
        },
        {
            country: "Jordan",
            cat: "judicial_effectiveness_score",
            val :57.3
        },
        {
            country: "Jordan",
            cat: "government_integrity",
            val :51.9
        },
        {
            country: "Jordan",
            cat: "property_rights_score",
            val :57.6
        },
        {
            country: "Jordan",
            cat: "tax_burden_score",
            val :92.4
        },
        {
            country: "Jordan",
            cat: "overall_economic_freedom_score",
            val :64.9
        },
        {
            country: "Jordan",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Jordan",
            cat: "women_MPs",
            val :15.4
        },
        {
            country: "Kazakhstan",
            cat: "world_happiness_report_score",
            val :5.88
        },
        {
            country: "Kazakhstan",
            cat: "GDP_per_capita",
            val :0.69
        },
        {
            country: "Kazakhstan",
            cat: "health_expenditure",
            val :3.9
        },
        {
            country: "Kazakhstan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Kazakhstan",
            cat: "unemployment",
            val :5.2
        },
        {
            country: "Kazakhstan",
            cat: "government_expenditure",
            val :22.2
        },
        {
            country: "Kazakhstan",
            cat: "judicial_effectiveness_score",
            val :58.1
        },
        {
            country: "Kazakhstan",
            cat: "government_integrity",
            val :44.6
        },
        {
            country: "Kazakhstan",
            cat: "property_rights_score",
            val :56
        },
        {
            country: "Kazakhstan",
            cat: "tax_burden_score",
            val :92.6
        },
        {
            country: "Kazakhstan",
            cat: "overall_economic_freedom_score",
            val :69.1
        },
        {
            country: "Kazakhstan",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Kazakhstan",
            cat: "women_MPs",
            val :27.1
        },
        {
            country: "Kenya",
            cat: "world_happiness_report_score",
            val :4.48
        },
        {
            country: "Kenya",
            cat: "GDP_per_capita",
            val :0.09
        },
        {
            country: "Kenya",
            cat: "health_expenditure",
            val :5.2
        },
        {
            country: "Kenya",
            cat: "education_expenditure",
            val :5.3
        },
        {
            country: "Kenya",
            cat: "unemployment",
            val :11
        },
        {
            country: "Kenya",
            cat: "government_expenditure",
            val :27.4
        },
        {
            country: "Kenya",
            cat: "judicial_effectiveness_score",
            val :44
        },
        {
            country: "Kenya",
            cat: "government_integrity",
            val :27.5
        },
        {
            country: "Kenya",
            cat: "property_rights_score",
            val :47.9
        },
        {
            country: "Kenya",
            cat: "tax_burden_score",
            val :78.5
        },
        {
            country: "Kenya",
            cat: "overall_economic_freedom_score",
            val :54.7
        },
        {
            country: "Kenya",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Kenya",
            cat: "women_MPs",
            val :21.8
        },
        {
            country: "Kiribati",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Kiribati",
            cat: "health_expenditure",
            val :7.6
        },
        {
            country: "Kiribati",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Kiribati",
            cat: "government_expenditure",
            val :117.6
        },
        {
            country: "Kiribati",
            cat: "judicial_effectiveness_score",
            val :35.3
        },
        {
            country: "Kiribati",
            cat: "government_integrity",
            val :37.9
        },
        {
            country: "Kiribati",
            cat: "property_rights_score",
            val :45
        },
        {
            country: "Kiribati",
            cat: "tax_burden_score",
            val :72.4
        },
        {
            country: "Kiribati",
            cat: "overall_economic_freedom_score",
            val :50.8
        },
        {
            country: "Kiribati",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Kiribati",
            cat: "women_MPs",
            val :6.5
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "unemployment",
            val :4.3
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "judicial_effectiveness_score",
            val :5
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "government_integrity",
            val :25.2
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "property_rights_score",
            val :29.8
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "tax_burden_score",
            val :0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "overall_economic_freedom_score",
            val :5.8
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "financial_freedom_score",
            val :0
        },
        {
            country: "Korea (Dem. People\u00e2\u20ac\u2122s Rep.)",
            cat: "women_MPs",
            val :16.3
        },
        {
            country: "Korea (Rep.)",
            cat: "world_happiness_report_score",
            val :5.87
        },
        {
            country: "Korea (Rep.)",
            cat: "GDP_per_capita",
            val :1.04
        },
        {
            country: "Korea (Rep.)",
            cat: "health_expenditure",
            val :7.4
        },
        {
            country: "Korea (Rep.)",
            cat: "education_expenditure",
            val :5.1
        },
        {
            country: "Korea (Rep.)",
            cat: "unemployment",
            val :3.7
        },
        {
            country: "Korea (Rep.)",
            cat: "government_expenditure",
            val :32.3
        },
        {
            country: "Korea (Rep.)",
            cat: "judicial_effectiveness_score",
            val :63.7
        },
        {
            country: "Korea (Rep.)",
            cat: "government_integrity",
            val :49.9
        },
        {
            country: "Korea (Rep.)",
            cat: "property_rights_score",
            val :79.4
        },
        {
            country: "Korea (Rep.)",
            cat: "tax_burden_score",
            val :73.3
        },
        {
            country: "Korea (Rep.)",
            cat: "overall_economic_freedom_score",
            val :73.8
        },
        {
            country: "Korea (Rep.)",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Korea (Rep.)",
            cat: "women_MPs",
            val :17
        },
        {
            country: "Kosovo",
            cat: "world_happiness_report_score",
            val :6.15
        },
        {
            country: "Kosovo",
            cat: "GDP_per_capita",
            val :0.26
        },
        {
            country: "Kosovo",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Kosovo",
            cat: "government_expenditure",
            val :27.1
        },
        {
            country: "Kosovo",
            cat: "judicial_effectiveness_score",
            val :59
        },
        {
            country: "Kosovo",
            cat: "government_integrity",
            val :45.4
        },
        {
            country: "Kosovo",
            cat: "property_rights_score",
            val :52.3
        },
        {
            country: "Kosovo",
            cat: "tax_burden_score",
            val :93.2
        },
        {
            country: "Kosovo",
            cat: "overall_economic_freedom_score",
            val :66.6
        },
        {
            country: "Kosovo",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Kosovo",
            cat: "women_MPs",
            val :0.0
        },
        {
            country: "Kuwait",
            cat: "world_happiness_report_score",
            val :6.09
        },
        {
            country: "Kuwait",
            cat: "GDP_per_capita",
            val :1.98
        },
        {
            country: "Kuwait",
            cat: "health_expenditure",
            val :4
        },
        {
            country: "Kuwait",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Kuwait",
            cat: "unemployment",
            val :2.4
        },
        {
            country: "Kuwait",
            cat: "government_expenditure",
            val :51.5
        },
        {
            country: "Kuwait",
            cat: "judicial_effectiveness_score",
            val :53.5
        },
        {
            country: "Kuwait",
            cat: "government_integrity",
            val :36.6
        },
        {
            country: "Kuwait",
            cat: "property_rights_score",
            val :52
        },
        {
            country: "Kuwait",
            cat: "tax_burden_score",
            val :97.7
        },
        {
            country: "Kuwait",
            cat: "overall_economic_freedom_score",
            val :62.2
        },
        {
            country: "Kuwait",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Kuwait",
            cat: "women_MPs",
            val :3.1
        },
        {
            country: "Kyrgyzstan",
            cat: "world_happiness_report_score",
            val :5.63
        },
        {
            country: "Kyrgyzstan",
            cat: "GDP_per_capita",
            val :0.1
        },
        {
            country: "Kyrgyzstan",
            cat: "health_expenditure",
            val :8.2
        },
        {
            country: "Kyrgyzstan",
            cat: "education_expenditure",
            val :5.5
        },
        {
            country: "Kyrgyzstan",
            cat: "unemployment",
            val :7.7
        },
        {
            country: "Kyrgyzstan",
            cat: "government_expenditure",
            val :37.3
        },
        {
            country: "Kyrgyzstan",
            cat: "judicial_effectiveness_score",
            val :22.1
        },
        {
            country: "Kyrgyzstan",
            cat: "government_integrity",
            val :29.4
        },
        {
            country: "Kyrgyzstan",
            cat: "property_rights_score",
            val :50.2
        },
        {
            country: "Kyrgyzstan",
            cat: "tax_burden_score",
            val :93.8
        },
        {
            country: "Kyrgyzstan",
            cat: "overall_economic_freedom_score",
            val :62.8
        },
        {
            country: "Kyrgyzstan",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Kyrgyzstan",
            cat: "women_MPs",
            val :19.2
        },
        {
            country: "Laos",
            cat: "world_happiness_report_score",
            val :4.62
        },
        {
            country: "Laos",
            cat: "GDP_per_capita",
            val :0.16
        },
        {
            country: "Laos",
            cat: "health_expenditure",
            val :2.8
        },
        {
            country: "Laos",
            cat: "education_expenditure",
            val :2.9
        },
        {
            country: "Laos",
            cat: "unemployment",
            val :1.5
        },
        {
            country: "Laos",
            cat: "government_expenditure",
            val :26.3
        },
        {
            country: "Laos",
            cat: "judicial_effectiveness_score",
            val :41.4
        },
        {
            country: "Laos",
            cat: "government_integrity",
            val :33.1
        },
        {
            country: "Laos",
            cat: "property_rights_score",
            val :34.1
        },
        {
            country: "Laos",
            cat: "tax_burden_score",
            val :86.7
        },
        {
            country: "Laos",
            cat: "overall_economic_freedom_score",
            val :53.6
        },
        {
            country: "Laos",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Laos",
            cat: "women_MPs",
            val :27.5
        },
        {
            country: "Latvia",
            cat: "world_happiness_report_score",
            val :6.09
        },
        {
            country: "Latvia",
            cat: "GDP_per_capita",
            val :0.71
        },
        {
            country: "Latvia",
            cat: "health_expenditure",
            val :5.8
        },
        {
            country: "Latvia",
            cat: "education_expenditure",
            val :5.3
        },
        {
            country: "Latvia",
            cat: "unemployment",
            val :9.9
        },
        {
            country: "Latvia",
            cat: "government_expenditure",
            val :37
        },
        {
            country: "Latvia",
            cat: "judicial_effectiveness_score",
            val :58.9
        },
        {
            country: "Latvia",
            cat: "government_integrity",
            val :45.4
        },
        {
            country: "Latvia",
            cat: "property_rights_score",
            val :68.3
        },
        {
            country: "Latvia",
            cat: "tax_burden_score",
            val :84
        },
        {
            country: "Latvia",
            cat: "overall_economic_freedom_score",
            val :73.6
        },
        {
            country: "Latvia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Latvia",
            cat: "women_MPs",
            val :16
        },
        {
            country: "Lebanon",
            cat: "world_happiness_report_score",
            val :5.15
        },
        {
            country: "Lebanon",
            cat: "GDP_per_capita",
            val :0.51
        },
        {
            country: "Lebanon",
            cat: "health_expenditure",
            val :7.4
        },
        {
            country: "Lebanon",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Lebanon",
            cat: "unemployment",
            val :6.8
        },
        {
            country: "Lebanon",
            cat: "government_expenditure",
            val :26.9
        },
        {
            country: "Lebanon",
            cat: "judicial_effectiveness_score",
            val :33.6
        },
        {
            country: "Lebanon",
            cat: "government_integrity",
            val :20.2
        },
        {
            country: "Lebanon",
            cat: "property_rights_score",
            val :39.7
        },
        {
            country: "Lebanon",
            cat: "tax_burden_score",
            val :91.9
        },
        {
            country: "Lebanon",
            cat: "overall_economic_freedom_score",
            val :53.2
        },
        {
            country: "Lebanon",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Lebanon",
            cat: "women_MPs",
            val :3.1
        },
        {
            country: "Lesotho",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Lesotho",
            cat: "GDP_per_capita",
            val :0.1
        },
        {
            country: "Lesotho",
            cat: "health_expenditure",
            val :8.4
        },
        {
            country: "Lesotho",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Lesotho",
            cat: "unemployment",
            val :27.4
        },
        {
            country: "Lesotho",
            cat: "government_expenditure",
            val :50.4
        },
        {
            country: "Lesotho",
            cat: "judicial_effectiveness_score",
            val :52.7
        },
        {
            country: "Lesotho",
            cat: "government_integrity",
            val :32.9
        },
        {
            country: "Lesotho",
            cat: "property_rights_score",
            val :49.4
        },
        {
            country: "Lesotho",
            cat: "tax_burden_score",
            val :48.2
        },
        {
            country: "Lesotho",
            cat: "overall_economic_freedom_score",
            val :53.9
        },
        {
            country: "Lesotho",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Lesotho",
            cat: "women_MPs",
            val :22.9
        },
        {
            country: "Liberia",
            cat: "world_happiness_report_score",
            val :4.42
        },
        {
            country: "Liberia",
            cat: "GDP_per_capita",
            val :0.02
        },
        {
            country: "Liberia",
            cat: "health_expenditure",
            val :15.2
        },
        {
            country: "Liberia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Liberia",
            cat: "unemployment",
            val :4
        },
        {
            country: "Liberia",
            cat: "government_expenditure",
            val :36.8
        },
        {
            country: "Liberia",
            cat: "judicial_effectiveness_score",
            val :42.4
        },
        {
            country: "Liberia",
            cat: "government_integrity",
            val :32
        },
        {
            country: "Liberia",
            cat: "property_rights_score",
            val :28.2
        },
        {
            country: "Liberia",
            cat: "tax_burden_score",
            val :77.5
        },
        {
            country: "Liberia",
            cat: "overall_economic_freedom_score",
            val :50.9
        },
        {
            country: "Liberia",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Liberia",
            cat: "women_MPs",
            val :12.3
        },
        {
            country: "Libya",
            cat: "world_happiness_report_score",
            val :5.65
        },
        {
            country: "Libya",
            cat: "GDP_per_capita",
            val :0.24
        },
        {
            country: "Libya",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Libya",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Libya",
            cat: "unemployment",
            val :19.2
        },
        {
            country: "Libya",
            cat: "government_expenditure",
            val :92.9
        },
        {
            country: "Libya",
            cat: "judicial_effectiveness_score",
            val :22.1
        },
        {
            country: "Libya",
            cat: "government_integrity",
            val :23.1
        },
        {
            country: "Libya",
            cat: "property_rights_score",
            val :5.2
        },
        {
            country: "Libya",
            cat: "tax_burden_score",
            val :90.5
        },
        {
            country: "Libya",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Libya",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Libya",
            cat: "women_MPs",
            val :16
        },
        {
            country: "Liechtenstein",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "GDP_per_capita",
            val :4.42
        },
        {
            country: "Liechtenstein",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "unemployment",
            val :2.4
        },
        {
            country: "Liechtenstein",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Liechtenstein",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Liechtenstein",
            cat: "women_MPs",
            val :12
        },
        {
            country: "Lithuania",
            cat: "world_happiness_report_score",
            val :6.27
        },
        {
            country: "Lithuania",
            cat: "GDP_per_capita",
            val :0.83
        },
        {
            country: "Lithuania",
            cat: "health_expenditure",
            val :6.5
        },
        {
            country: "Lithuania",
            cat: "education_expenditure",
            val :4.5
        },
        {
            country: "Lithuania",
            cat: "unemployment",
            val :9.2
        },
        {
            country: "Lithuania",
            cat: "government_expenditure",
            val :34.7
        },
        {
            country: "Lithuania",
            cat: "judicial_effectiveness_score",
            val :66.7
        },
        {
            country: "Lithuania",
            cat: "government_integrity",
            val :50.9
        },
        {
            country: "Lithuania",
            cat: "property_rights_score",
            val :73.8
        },
        {
            country: "Lithuania",
            cat: "tax_burden_score",
            val :86.4
        },
        {
            country: "Lithuania",
            cat: "overall_economic_freedom_score",
            val :75.3
        },
        {
            country: "Lithuania",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Lithuania",
            cat: "women_MPs",
            val :21.3
        },
        {
            country: "Luxembourg",
            cat: "world_happiness_report_score",
            val :7.06
        },
        {
            country: "Luxembourg",
            cat: "GDP_per_capita",
            val :2.86
        },
        {
            country: "Luxembourg",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Luxembourg",
            cat: "education_expenditure",
            val :4
        },
        {
            country: "Luxembourg",
            cat: "unemployment",
            val :5.9
        },
        {
            country: "Luxembourg",
            cat: "government_expenditure",
            val :41.4
        },
        {
            country: "Luxembourg",
            cat: "judicial_effectiveness_score",
            val :77.9
        },
        {
            country: "Luxembourg",
            cat: "government_integrity",
            val :79
        },
        {
            country: "Luxembourg",
            cat: "property_rights_score",
            val :82.7
        },
        {
            country: "Luxembourg",
            cat: "tax_burden_score",
            val :65.1
        },
        {
            country: "Luxembourg",
            cat: "overall_economic_freedom_score",
            val :76.4
        },
        {
            country: "Luxembourg",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Luxembourg",
            cat: "women_MPs",
            val :28.3
        },
        {
            country: "Macedonia",
            cat: "world_happiness_report_score",
            val :5.23
        },
        {
            country: "Macedonia",
            cat: "GDP_per_capita",
            val :0.4
        },
        {
            country: "Macedonia",
            cat: "health_expenditure",
            val :6.1
        },
        {
            country: "Macedonia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Macedonia",
            cat: "unemployment",
            val :26.7
        },
        {
            country: "Macedonia",
            cat: "government_expenditure",
            val :31.5
        },
        {
            country: "Macedonia",
            cat: "judicial_effectiveness_score",
            val :57
        },
        {
            country: "Macedonia",
            cat: "government_integrity",
            val :47.4
        },
        {
            country: "Macedonia",
            cat: "property_rights_score",
            val :64.8
        },
        {
            country: "Macedonia",
            cat: "tax_burden_score",
            val :91.6
        },
        {
            country: "Macedonia",
            cat: "overall_economic_freedom_score",
            val :71.3
        },
        {
            country: "Macedonia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Macedonia",
            cat: "women_MPs",
            val :34.2
        },
        {
            country: "Madagascar",
            cat: "world_happiness_report_score",
            val :4.08
        },
        {
            country: "Madagascar",
            cat: "GDP_per_capita",
            val :0.04
        },
        {
            country: "Madagascar",
            cat: "health_expenditure",
            val :5.2
        },
        {
            country: "Madagascar",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Madagascar",
            cat: "unemployment",
            val :2.1
        },
        {
            country: "Madagascar",
            cat: "government_expenditure",
            val :15.4
        },
        {
            country: "Madagascar",
            cat: "judicial_effectiveness_score",
            val :21.4
        },
        {
            country: "Madagascar",
            cat: "government_integrity",
            val :17.8
        },
        {
            country: "Madagascar",
            cat: "property_rights_score",
            val :33.2
        },
        {
            country: "Madagascar",
            cat: "tax_burden_score",
            val :90.3
        },
        {
            country: "Madagascar",
            cat: "overall_economic_freedom_score",
            val :56.8
        },
        {
            country: "Madagascar",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Madagascar",
            cat: "women_MPs",
            val :19.2
        },
        {
            country: "Malawi",
            cat: "world_happiness_report_score",
            val :3.42
        },
        {
            country: "Malawi",
            cat: "GDP_per_capita",
            val :0.03
        },
        {
            country: "Malawi",
            cat: "health_expenditure",
            val :9.3
        },
        {
            country: "Malawi",
            cat: "education_expenditure",
            val :4.8
        },
        {
            country: "Malawi",
            cat: "unemployment",
            val :6.7
        },
        {
            country: "Malawi",
            cat: "government_expenditure",
            val :31.3
        },
        {
            country: "Malawi",
            cat: "judicial_effectiveness_score",
            val :47.1
        },
        {
            country: "Malawi",
            cat: "government_integrity",
            val :28.9
        },
        {
            country: "Malawi",
            cat: "property_rights_score",
            val :33.1
        },
        {
            country: "Malawi",
            cat: "tax_burden_score",
            val :76.9
        },
        {
            country: "Malawi",
            cat: "overall_economic_freedom_score",
            val :52
        },
        {
            country: "Malawi",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Malawi",
            cat: "women_MPs",
            val :16.7
        },
        {
            country: "Malaysia",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Malaysia",
            cat: "GDP_per_capita",
            val :0.75
        },
        {
            country: "Malaysia",
            cat: "health_expenditure",
            val :4
        },
        {
            country: "Malaysia",
            cat: "education_expenditure",
            val :5.2
        },
        {
            country: "Malaysia",
            cat: "unemployment",
            val :3.3
        },
        {
            country: "Malaysia",
            cat: "government_expenditure",
            val :24.9
        },
        {
            country: "Malaysia",
            cat: "judicial_effectiveness_score",
            val :65.2
        },
        {
            country: "Malaysia",
            cat: "government_integrity",
            val :54.8
        },
        {
            country: "Malaysia",
            cat: "property_rights_score",
            val :83.8
        },
        {
            country: "Malaysia",
            cat: "tax_burden_score",
            val :85.6
        },
        {
            country: "Malaysia",
            cat: "overall_economic_freedom_score",
            val :74.5
        },
        {
            country: "Malaysia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Malaysia",
            cat: "women_MPs",
            val :10.4
        },
        {
            country: "Maldives",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Maldives",
            cat: "GDP_per_capita",
            val :0.43
        },
        {
            country: "Maldives",
            cat: "health_expenditure",
            val :11.5
        },
        {
            country: "Maldives",
            cat: "education_expenditure",
            val :3.5
        },
        {
            country: "Maldives",
            cat: "unemployment",
            val :3.2
        },
        {
            country: "Maldives",
            cat: "government_expenditure",
            val :42.6
        },
        {
            country: "Maldives",
            cat: "judicial_effectiveness_score",
            val :38.8
        },
        {
            country: "Maldives",
            cat: "government_integrity",
            val :36.6
        },
        {
            country: "Maldives",
            cat: "property_rights_score",
            val :45
        },
        {
            country: "Maldives",
            cat: "tax_burden_score",
            val :94.3
        },
        {
            country: "Maldives",
            cat: "overall_economic_freedom_score",
            val :51.1
        },
        {
            country: "Maldives",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Maldives",
            cat: "women_MPs",
            val :5.9
        },
        {
            country: "Mali",
            cat: "world_happiness_report_score",
            val :4.74
        },
        {
            country: "Mali",
            cat: "GDP_per_capita",
            val :0.06
        },
        {
            country: "Mali",
            cat: "health_expenditure",
            val :5.8
        },
        {
            country: "Mali",
            cat: "education_expenditure",
            val :3.6
        },
        {
            country: "Mali",
            cat: "unemployment",
            val :8.1
        },
        {
            country: "Mali",
            cat: "government_expenditure",
            val :22.2
        },
        {
            country: "Mali",
            cat: "judicial_effectiveness_score",
            val :32.4
        },
        {
            country: "Mali",
            cat: "government_integrity",
            val :31.4
        },
        {
            country: "Mali",
            cat: "property_rights_score",
            val :31.9
        },
        {
            country: "Mali",
            cat: "tax_burden_score",
            val :68.1
        },
        {
            country: "Mali",
            cat: "overall_economic_freedom_score",
            val :57.6
        },
        {
            country: "Mali",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Mali",
            cat: "women_MPs",
            val :8.8
        },
        {
            country: "Malta",
            cat: "world_happiness_report_score",
            val :6.68
        },
        {
            country: "Malta",
            cat: "GDP_per_capita",
            val :1.1
        },
        {
            country: "Malta",
            cat: "health_expenditure",
            val :9.6
        },
        {
            country: "Malta",
            cat: "education_expenditure",
            val :7.2
        },
        {
            country: "Malta",
            cat: "unemployment",
            val :5.3
        },
        {
            country: "Malta",
            cat: "government_expenditure",
            val :40.4
        },
        {
            country: "Malta",
            cat: "judicial_effectiveness_score",
            val :62.8
        },
        {
            country: "Malta",
            cat: "government_integrity",
            val :49.9
        },
        {
            country: "Malta",
            cat: "property_rights_score",
            val :68.1
        },
        {
            country: "Malta",
            cat: "tax_burden_score",
            val :64.7
        },
        {
            country: "Malta",
            cat: "overall_economic_freedom_score",
            val :68.5
        },
        {
            country: "Malta",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Malta",
            cat: "women_MPs",
            val :11.9
        },
        {
            country: "Marshall Islands",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "health_expenditure",
            val :22.1
        },
        {
            country: "Marshall Islands",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Marshall Islands",
            cat: "women_MPs",
            val :9.1
        },
        {
            country: "Mauritania",
            cat: "world_happiness_report_score",
            val :4.68
        },
        {
            country: "Mauritania",
            cat: "GDP_per_capita",
            val :0.12
        },
        {
            country: "Mauritania",
            cat: "health_expenditure",
            val :4.6
        },
        {
            country: "Mauritania",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Mauritania",
            cat: "unemployment",
            val :11.7
        },
        {
            country: "Mauritania",
            cat: "government_expenditure",
            val :30.1
        },
        {
            country: "Mauritania",
            cat: "judicial_effectiveness_score",
            val :17.6
        },
        {
            country: "Mauritania",
            cat: "government_integrity",
            val :28.9
        },
        {
            country: "Mauritania",
            cat: "property_rights_score",
            val :23.9
        },
        {
            country: "Mauritania",
            cat: "tax_burden_score",
            val :75.9
        },
        {
            country: "Mauritania",
            cat: "overall_economic_freedom_score",
            val :54
        },
        {
            country: "Mauritania",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Mauritania",
            cat: "women_MPs",
            val :25.2
        },
        {
            country: "Mauritius",
            cat: "world_happiness_report_score",
            val :6.17
        },
        {
            country: "Mauritius",
            cat: "GDP_per_capita",
            val :0.56
        },
        {
            country: "Mauritius",
            cat: "health_expenditure",
            val :5.5
        },
        {
            country: "Mauritius",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Mauritius",
            cat: "unemployment",
            val :7.8
        },
        {
            country: "Mauritius",
            cat: "government_expenditure",
            val :25.4
        },
        {
            country: "Mauritius",
            cat: "judicial_effectiveness_score",
            val :69.6
        },
        {
            country: "Mauritius",
            cat: "government_integrity",
            val :52.1
        },
        {
            country: "Mauritius",
            cat: "property_rights_score",
            val :68.7
        },
        {
            country: "Mauritius",
            cat: "tax_burden_score",
            val :91
        },
        {
            country: "Mauritius",
            cat: "overall_economic_freedom_score",
            val :75.1
        },
        {
            country: "Mauritius",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Mauritius",
            cat: "women_MPs",
            val :11.6
        },
        {
            country: "Mexico",
            cat: "world_happiness_report_score",
            val :6.41
        },
        {
            country: "Mexico",
            cat: "GDP_per_capita",
            val :0.52
        },
        {
            country: "Mexico",
            cat: "health_expenditure",
            val :5.9
        },
        {
            country: "Mexico",
            cat: "education_expenditure",
            val :5.3
        },
        {
            country: "Mexico",
            cat: "unemployment",
            val :4
        },
        {
            country: "Mexico",
            cat: "government_expenditure",
            val :27
        },
        {
            country: "Mexico",
            cat: "judicial_effectiveness_score",
            val :39
        },
        {
            country: "Mexico",
            cat: "government_integrity",
            val :26.9
        },
        {
            country: "Mexico",
            cat: "property_rights_score",
            val :58.6
        },
        {
            country: "Mexico",
            cat: "tax_burden_score",
            val :75.7
        },
        {
            country: "Mexico",
            cat: "overall_economic_freedom_score",
            val :64.8
        },
        {
            country: "Mexico",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Mexico",
            cat: "women_MPs",
            val :42.6
        },
        {
            country: "Micronesia",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "GDP_per_capita",
            val :0.09
        },
        {
            country: "Micronesia",
            cat: "health_expenditure",
            val :13.1
        },
        {
            country: "Micronesia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Micronesia",
            cat: "government_expenditure",
            val :55.6
        },
        {
            country: "Micronesia",
            cat: "judicial_effectiveness_score",
            val :25.4
        },
        {
            country: "Micronesia",
            cat: "government_integrity",
            val :38.8
        },
        {
            country: "Micronesia",
            cat: "property_rights_score",
            val :5.2
        },
        {
            country: "Micronesia",
            cat: "tax_burden_score",
            val :93.2
        },
        {
            country: "Micronesia",
            cat: "overall_economic_freedom_score",
            val :52.3
        },
        {
            country: "Micronesia",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Micronesia",
            cat: "women_MPs",
            val :0
        },
        {
            country: "Moldova",
            cat: "world_happiness_report_score",
            val :5.33
        },
        {
            country: "Moldova",
            cat: "GDP_per_capita",
            val :0.15
        },
        {
            country: "Moldova",
            cat: "health_expenditure",
            val :10.2
        },
        {
            country: "Moldova",
            cat: "education_expenditure",
            val :7.5
        },
        {
            country: "Moldova",
            cat: "unemployment",
            val :5
        },
        {
            country: "Moldova",
            cat: "government_expenditure",
            val :38
        },
        {
            country: "Moldova",
            cat: "judicial_effectiveness_score",
            val :26.3
        },
        {
            country: "Moldova",
            cat: "government_integrity",
            val :26.6
        },
        {
            country: "Moldova",
            cat: "property_rights_score",
            val :53.5
        },
        {
            country: "Moldova",
            cat: "tax_burden_score",
            val :85.3
        },
        {
            country: "Moldova",
            cat: "overall_economic_freedom_score",
            val :58.4
        },
        {
            country: "Moldova",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Moldova",
            cat: "women_MPs",
            val :22.8
        },
        {
            country: "Monaco",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "health_expenditure",
            val :2
        },
        {
            country: "Monaco",
            cat: "education_expenditure",
            val :1
        },
        {
            country: "Monaco",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Monaco",
            cat: "women_MPs",
            val :20.8
        },
        {
            country: "Mongolia",
            cat: "world_happiness_report_score",
            val :5.33
        },
        {
            country: "Mongolia",
            cat: "GDP_per_capita",
            val :0.34
        },
        {
            country: "Mongolia",
            cat: "health_expenditure",
            val :3.9
        },
        {
            country: "Mongolia",
            cat: "education_expenditure",
            val :4.7
        },
        {
            country: "Mongolia",
            cat: "unemployment",
            val :6.7
        },
        {
            country: "Mongolia",
            cat: "government_expenditure",
            val :37.8
        },
        {
            country: "Mongolia",
            cat: "judicial_effectiveness_score",
            val :30.9
        },
        {
            country: "Mongolia",
            cat: "government_integrity",
            val :34.8
        },
        {
            country: "Mongolia",
            cat: "property_rights_score",
            val :51
        },
        {
            country: "Mongolia",
            cat: "tax_burden_score",
            val :88.4
        },
        {
            country: "Mongolia",
            cat: "overall_economic_freedom_score",
            val :55.7
        },
        {
            country: "Mongolia",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Mongolia",
            cat: "women_MPs",
            val :17.1
        },
        {
            country: "Montenegro",
            cat: "world_happiness_report_score",
            val :5.61
        },
        {
            country: "Montenegro",
            cat: "GDP_per_capita",
            val :0.46
        },
        {
            country: "Montenegro",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Montenegro",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Montenegro",
            cat: "unemployment",
            val :17.5
        },
        {
            country: "Montenegro",
            cat: "government_expenditure",
            val :46.3
        },
        {
            country: "Montenegro",
            cat: "judicial_effectiveness_score",
            val :51.3
        },
        {
            country: "Montenegro",
            cat: "government_integrity",
            val :38.1
        },
        {
            country: "Montenegro",
            cat: "property_rights_score",
            val :54.2
        },
        {
            country: "Montenegro",
            cat: "tax_burden_score",
            val :85.2
        },
        {
            country: "Montenegro",
            cat: "overall_economic_freedom_score",
            val :64.3
        },
        {
            country: "Montenegro",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Montenegro",
            cat: "women_MPs",
            val :23.5
        },
        {
            country: "Morocco",
            cat: "world_happiness_report_score",
            val :5.31
        },
        {
            country: "Morocco",
            cat: "GDP_per_capita",
            val :0.23
        },
        {
            country: "Morocco",
            cat: "health_expenditure",
            val :5.5
        },
        {
            country: "Morocco",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Morocco",
            cat: "unemployment",
            val :10
        },
        {
            country: "Morocco",
            cat: "government_expenditure",
            val :31.4
        },
        {
            country: "Morocco",
            cat: "judicial_effectiveness_score",
            val :44.3
        },
        {
            country: "Morocco",
            cat: "government_integrity",
            val :41.3
        },
        {
            country: "Morocco",
            cat: "property_rights_score",
            val :53.8
        },
        {
            country: "Morocco",
            cat: "tax_burden_score",
            val :70.5
        },
        {
            country: "Morocco",
            cat: "overall_economic_freedom_score",
            val :61.9
        },
        {
            country: "Morocco",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Morocco",
            cat: "women_MPs",
            val :20.5
        },
        {
            country: "Mozambique",
            cat: "world_happiness_report_score",
            val :4.28
        },
        {
            country: "Mozambique",
            cat: "GDP_per_capita",
            val :0.03
        },
        {
            country: "Mozambique",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Mozambique",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Mozambique",
            cat: "unemployment",
            val :24.4
        },
        {
            country: "Mozambique",
            cat: "government_expenditure",
            val :36.2
        },
        {
            country: "Mozambique",
            cat: "judicial_effectiveness_score",
            val :36.3
        },
        {
            country: "Mozambique",
            cat: "government_integrity",
            val :28.2
        },
        {
            country: "Mozambique",
            cat: "property_rights_score",
            val :35.4
        },
        {
            country: "Mozambique",
            cat: "tax_burden_score",
            val :70.6
        },
        {
            country: "Mozambique",
            cat: "overall_economic_freedom_score",
            val :46.3
        },
        {
            country: "Mozambique",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Mozambique",
            cat: "women_MPs",
            val :39.6
        },
        {
            country: "Myanmar",
            cat: "world_happiness_report_score",
            val :4.15
        },
        {
            country: "Myanmar",
            cat: "GDP_per_capita",
            val :0.16
        },
        {
            country: "Myanmar",
            cat: "health_expenditure",
            val :4.9
        },
        {
            country: "Myanmar",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Myanmar",
            cat: "unemployment",
            val :0.8
        },
        {
            country: "Myanmar",
            cat: "government_expenditure",
            val :22.6
        },
        {
            country: "Myanmar",
            cat: "judicial_effectiveness_score",
            val :17.6
        },
        {
            country: "Myanmar",
            cat: "government_integrity",
            val :28.2
        },
        {
            country: "Myanmar",
            cat: "property_rights_score",
            val :32.5
        },
        {
            country: "Myanmar",
            cat: "tax_burden_score",
            val :86.3
        },
        {
            country: "Myanmar",
            cat: "overall_economic_freedom_score",
            val :53.9
        },
        {
            country: "Myanmar",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Myanmar",
            cat: "women_MPs",
            val :10.2
        },
        {
            country: "Namibia",
            cat: "world_happiness_report_score",
            val :4.44
        },
        {
            country: "Namibia",
            cat: "GDP_per_capita",
            val :0.31
        },
        {
            country: "Namibia",
            cat: "health_expenditure",
            val :8.9
        },
        {
            country: "Namibia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Namibia",
            cat: "unemployment",
            val :25.6
        },
        {
            country: "Namibia",
            cat: "government_expenditure",
            val :40.7
        },
        {
            country: "Namibia",
            cat: "judicial_effectiveness_score",
            val :54.2
        },
        {
            country: "Namibia",
            cat: "government_integrity",
            val :45.4
        },
        {
            country: "Namibia",
            cat: "property_rights_score",
            val :56.6
        },
        {
            country: "Namibia",
            cat: "tax_burden_score",
            val :63
        },
        {
            country: "Namibia",
            cat: "overall_economic_freedom_score",
            val :58.5
        },
        {
            country: "Namibia",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Namibia",
            cat: "women_MPs",
            val :41.3
        },
        {
            country: "Nauru",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "health_expenditure",
            val :4.8
        },
        {
            country: "Nauru",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Nauru",
            cat: "women_MPs",
            val :10.5
        },
        {
            country: "Nepal",
            cat: "world_happiness_report_score",
            val :4.74
        },
        {
            country: "Nepal",
            cat: "GDP_per_capita",
            val :0.07
        },
        {
            country: "Nepal",
            cat: "health_expenditure",
            val :6.1
        },
        {
            country: "Nepal",
            cat: "education_expenditure",
            val :4
        },
        {
            country: "Nepal",
            cat: "unemployment",
            val :3.2
        },
        {
            country: "Nepal",
            cat: "government_expenditure",
            val :20.3
        },
        {
            country: "Nepal",
            cat: "judicial_effectiveness_score",
            val :36.2
        },
        {
            country: "Nepal",
            cat: "government_integrity",
            val :24.6
        },
        {
            country: "Nepal",
            cat: "property_rights_score",
            val :37.5
        },
        {
            country: "Nepal",
            cat: "tax_burden_score",
            val :84.2
        },
        {
            country: "Nepal",
            cat: "overall_economic_freedom_score",
            val :54.1
        },
        {
            country: "Nepal",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Nepal",
            cat: "women_MPs",
            val :29.6
        },
        {
            country: "Netherlands",
            cat: "world_happiness_report_score",
            val :7.46
        },
        {
            country: "Netherlands",
            cat: "GDP_per_capita",
            val :1.41
        },
        {
            country: "Netherlands",
            cat: "health_expenditure",
            val :10.7
        },
        {
            country: "Netherlands",
            cat: "education_expenditure",
            val :5.5
        },
        {
            country: "Netherlands",
            cat: "unemployment",
            val :6.2
        },
        {
            country: "Netherlands",
            cat: "government_expenditure",
            val :45
        },
        {
            country: "Netherlands",
            cat: "judicial_effectiveness_score",
            val :74.1
        },
        {
            country: "Netherlands",
            cat: "government_integrity",
            val :86
        },
        {
            country: "Netherlands",
            cat: "property_rights_score",
            val :87.9
        },
        {
            country: "Netherlands",
            cat: "tax_burden_score",
            val :52.5
        },
        {
            country: "Netherlands",
            cat: "overall_economic_freedom_score",
            val :76.2
        },
        {
            country: "Netherlands",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Netherlands",
            cat: "women_MPs",
            val :36
        },
        {
            country: "New Zealand",
            cat: "world_happiness_report_score",
            val :7.33
        },
        {
            country: "New Zealand",
            cat: "GDP_per_capita",
            val :1.03
        },
        {
            country: "New Zealand",
            cat: "health_expenditure",
            val :9.3
        },
        {
            country: "New Zealand",
            cat: "education_expenditure",
            val :6.4
        },
        {
            country: "New Zealand",
            cat: "unemployment",
            val :5.2
        },
        {
            country: "New Zealand",
            cat: "government_expenditure",
            val :41
        },
        {
            country: "New Zealand",
            cat: "judicial_effectiveness_score",
            val :88.4
        },
        {
            country: "New Zealand",
            cat: "government_integrity",
            val :95.7
        },
        {
            country: "New Zealand",
            cat: "property_rights_score",
            val :95.1
        },
        {
            country: "New Zealand",
            cat: "tax_burden_score",
            val :70.5
        },
        {
            country: "New Zealand",
            cat: "overall_economic_freedom_score",
            val :84.2
        },
        {
            country: "New Zealand",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "New Zealand",
            cat: "women_MPs",
            val :34.2
        },
        {
            country: "Nicaragua",
            cat: "world_happiness_report_score",
            val :6.48
        },
        {
            country: "Nicaragua",
            cat: "GDP_per_capita",
            val :0.15
        },
        {
            country: "Nicaragua",
            cat: "health_expenditure",
            val :7.8
        },
        {
            country: "Nicaragua",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Nicaragua",
            cat: "unemployment",
            val :5.9
        },
        {
            country: "Nicaragua",
            cat: "government_expenditure",
            val :25.8
        },
        {
            country: "Nicaragua",
            cat: "judicial_effectiveness_score",
            val :19
        },
        {
            country: "Nicaragua",
            cat: "government_integrity",
            val :24.2
        },
        {
            country: "Nicaragua",
            cat: "property_rights_score",
            val :29.8
        },
        {
            country: "Nicaragua",
            cat: "tax_burden_score",
            val :77.2
        },
        {
            country: "Nicaragua",
            cat: "overall_economic_freedom_score",
            val :58.9
        },
        {
            country: "Nicaragua",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Nicaragua",
            cat: "women_MPs",
            val :45.7
        },
        {
            country: "Niger",
            cat: "world_happiness_report_score",
            val :4.62
        },
        {
            country: "Niger",
            cat: "GDP_per_capita",
            val :0.03
        },
        {
            country: "Niger",
            cat: "health_expenditure",
            val :7.2
        },
        {
            country: "Niger",
            cat: "education_expenditure",
            val :6.7
        },
        {
            country: "Niger",
            cat: "unemployment",
            val :2.6
        },
        {
            country: "Niger",
            cat: "government_expenditure",
            val :30.1
        },
        {
            country: "Niger",
            cat: "judicial_effectiveness_score",
            val :32.6
        },
        {
            country: "Niger",
            cat: "government_integrity",
            val :30.4
        },
        {
            country: "Niger",
            cat: "property_rights_score",
            val :37.4
        },
        {
            country: "Niger",
            cat: "tax_burden_score",
            val :73.3
        },
        {
            country: "Niger",
            cat: "overall_economic_freedom_score",
            val :49.5
        },
        {
            country: "Niger",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Niger",
            cat: "women_MPs",
            val :17
        },
        {
            country: "Nigeria",
            cat: "world_happiness_report_score",
            val :5.32
        },
        {
            country: "Nigeria",
            cat: "GDP_per_capita",
            val :0.16
        },
        {
            country: "Nigeria",
            cat: "health_expenditure",
            val :3.6
        },
        {
            country: "Nigeria",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Nigeria",
            cat: "unemployment",
            val :5
        },
        {
            country: "Nigeria",
            cat: "government_expenditure",
            val :11
        },
        {
            country: "Nigeria",
            cat: "judicial_effectiveness_score",
            val :39.6
        },
        {
            country: "Nigeria",
            cat: "government_integrity",
            val :14.4
        },
        {
            country: "Nigeria",
            cat: "property_rights_score",
            val :38
        },
        {
            country: "Nigeria",
            cat: "tax_burden_score",
            val :84.4
        },
        {
            country: "Nigeria",
            cat: "overall_economic_freedom_score",
            val :58.5
        },
        {
            country: "Nigeria",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Nigeria",
            cat: "women_MPs",
            val :5.6
        },
        {
            country: "Norway",
            cat: "world_happiness_report_score",
            val :7.58
        },
        {
            country: "Norway",
            cat: "GDP_per_capita",
            val :1.91
        },
        {
            country: "Norway",
            cat: "health_expenditure",
            val :10
        },
        {
            country: "Norway",
            cat: "education_expenditure",
            val :7.7
        },
        {
            country: "Norway",
            cat: "unemployment",
            val :4.8
        },
        {
            country: "Norway",
            cat: "government_expenditure",
            val :48.6
        },
        {
            country: "Norway",
            cat: "judicial_effectiveness_score",
            val :86
        },
        {
            country: "Norway",
            cat: "government_integrity",
            val :93.6
        },
        {
            country: "Norway",
            cat: "property_rights_score",
            val :86.4
        },
        {
            country: "Norway",
            cat: "tax_burden_score",
            val :56.4
        },
        {
            country: "Norway",
            cat: "overall_economic_freedom_score",
            val :74.3
        },
        {
            country: "Norway",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Norway",
            cat: "women_MPs",
            val :39.6
        },
        {
            country: "Oman",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Oman",
            cat: "GDP_per_capita",
            val :1.29
        },
        {
            country: "Oman",
            cat: "health_expenditure",
            val :2.7
        },
        {
            country: "Oman",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Oman",
            cat: "unemployment",
            val :17.5
        },
        {
            country: "Oman",
            cat: "government_expenditure",
            val :50
        },
        {
            country: "Oman",
            cat: "judicial_effectiveness_score",
            val :57.4
        },
        {
            country: "Oman",
            cat: "government_integrity",
            val :51.5
        },
        {
            country: "Oman",
            cat: "property_rights_score",
            val :59.5
        },
        {
            country: "Oman",
            cat: "tax_burden_score",
            val :98.5
        },
        {
            country: "Oman",
            cat: "overall_economic_freedom_score",
            val :61
        },
        {
            country: "Oman",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Oman",
            cat: "women_MPs",
            val :1.2
        },
        {
            country: "Pakistan",
            cat: "world_happiness_report_score",
            val :5.83
        },
        {
            country: "Pakistan",
            cat: "GDP_per_capita",
            val :0.14
        },
        {
            country: "Pakistan",
            cat: "health_expenditure",
            val :2.7
        },
        {
            country: "Pakistan",
            cat: "education_expenditure",
            val :2.5
        },
        {
            country: "Pakistan",
            cat: "unemployment",
            val :5.9
        },
        {
            country: "Pakistan",
            cat: "government_expenditure",
            val :19.8
        },
        {
            country: "Pakistan",
            cat: "judicial_effectiveness_score",
            val :34
        },
        {
            country: "Pakistan",
            cat: "government_integrity",
            val :27.3
        },
        {
            country: "Pakistan",
            cat: "property_rights_score",
            val :36
        },
        {
            country: "Pakistan",
            cat: "tax_burden_score",
            val :78.5
        },
        {
            country: "Pakistan",
            cat: "overall_economic_freedom_score",
            val :54.4
        },
        {
            country: "Pakistan",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Pakistan",
            cat: "women_MPs",
            val :20.6
        },
        {
            country: "Palau",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Palau",
            cat: "health_expenditure",
            val :10.6
        },
        {
            country: "Palau",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Palau",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Palau",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Palau",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Palau",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Palau",
            cat: "women_MPs",
            val :12.5
        },
        {
            country: "Panama",
            cat: "world_happiness_report_score",
            val :6.57
        },
        {
            country: "Panama",
            cat: "GDP_per_capita",
            val :0.63
        },
        {
            country: "Panama",
            cat: "health_expenditure",
            val :7
        },
        {
            country: "Panama",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Panama",
            cat: "unemployment",
            val :5.8
        },
        {
            country: "Panama",
            cat: "government_expenditure",
            val :23.1
        },
        {
            country: "Panama",
            cat: "judicial_effectiveness_score",
            val :29.4
        },
        {
            country: "Panama",
            cat: "government_integrity",
            val :38.8
        },
        {
            country: "Panama",
            cat: "property_rights_score",
            val :60.9
        },
        {
            country: "Panama",
            cat: "tax_burden_score",
            val :85
        },
        {
            country: "Panama",
            cat: "overall_economic_freedom_score",
            val :67
        },
        {
            country: "Panama",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Panama",
            cat: "women_MPs",
            val :18.3
        },
        {
            country: "Papua New Guinea",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Papua New Guinea",
            cat: "GDP_per_capita",
            val :0.1
        },
        {
            country: "Papua New Guinea",
            cat: "health_expenditure",
            val :3.8
        },
        {
            country: "Papua New Guinea",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Papua New Guinea",
            cat: "unemployment",
            val :2.5
        },
        {
            country: "Papua New Guinea",
            cat: "government_expenditure",
            val :24.5
        },
        {
            country: "Papua New Guinea",
            cat: "judicial_effectiveness_score",
            val :55.1
        },
        {
            country: "Papua New Guinea",
            cat: "government_integrity",
            val :33.1
        },
        {
            country: "Papua New Guinea",
            cat: "property_rights_score",
            val :38
        },
        {
            country: "Papua New Guinea",
            cat: "tax_burden_score",
            val :71.1
        },
        {
            country: "Papua New Guinea",
            cat: "overall_economic_freedom_score",
            val :55.7
        },
        {
            country: "Papua New Guinea",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Papua New Guinea",
            cat: "women_MPs",
            val :0
        },
        {
            country: "Paraguay",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Paraguay",
            cat: "GDP_per_capita",
            val :0.26
        },
        {
            country: "Paraguay",
            cat: "health_expenditure",
            val :7.8
        },
        {
            country: "Paraguay",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Paraguay",
            cat: "unemployment",
            val :5.4
        },
        {
            country: "Paraguay",
            cat: "government_expenditure",
            val :24.4
        },
        {
            country: "Paraguay",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Paraguay",
            cat: "government_integrity",
            val :28.3
        },
        {
            country: "Paraguay",
            cat: "property_rights_score",
            val :38.3
        },
        {
            country: "Paraguay",
            cat: "tax_burden_score",
            val :96.1
        },
        {
            country: "Paraguay",
            cat: "overall_economic_freedom_score",
            val :62.1
        },
        {
            country: "Paraguay",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Paraguay",
            cat: "women_MPs",
            val :13.8
        },
        {
            country: "Peru",
            cat: "world_happiness_report_score",
            val :5.71
        },
        {
            country: "Peru",
            cat: "GDP_per_capita",
            val :0.36
        },
        {
            country: "Peru",
            cat: "health_expenditure",
            val :5.3
        },
        {
            country: "Peru",
            cat: "education_expenditure",
            val :3.7
        },
        {
            country: "Peru",
            cat: "unemployment",
            val :4.9
        },
        {
            country: "Peru",
            cat: "government_expenditure",
            val :21.9
        },
        {
            country: "Peru",
            cat: "judicial_effectiveness_score",
            val :33.5
        },
        {
            country: "Peru",
            cat: "government_integrity",
            val :36.6
        },
        {
            country: "Peru",
            cat: "property_rights_score",
            val :56.9
        },
        {
            country: "Peru",
            cat: "tax_burden_score",
            val :80.6
        },
        {
            country: "Peru",
            cat: "overall_economic_freedom_score",
            val :68.7
        },
        {
            country: "Peru",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Peru",
            cat: "women_MPs",
            val :27.7
        },
        {
            country: "Philippines",
            cat: "world_happiness_report_score",
            val :5.59
        },
        {
            country: "Philippines",
            cat: "GDP_per_capita",
            val :0.21
        },
        {
            country: "Philippines",
            cat: "health_expenditure",
            val :4.4
        },
        {
            country: "Philippines",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Philippines",
            cat: "unemployment",
            val :5.9
        },
        {
            country: "Philippines",
            cat: "government_expenditure",
            val :18.9
        },
        {
            country: "Philippines",
            cat: "judicial_effectiveness_score",
            val :38.2
        },
        {
            country: "Philippines",
            cat: "government_integrity",
            val :34.4
        },
        {
            country: "Philippines",
            cat: "property_rights_score",
            val :45
        },
        {
            country: "Philippines",
            cat: "tax_burden_score",
            val :78.9
        },
        {
            country: "Philippines",
            cat: "overall_economic_freedom_score",
            val :65
        },
        {
            country: "Philippines",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Philippines",
            cat: "women_MPs",
            val :29.5
        },
        {
            country: "Poland",
            cat: "world_happiness_report_score",
            val :6.2
        },
        {
            country: "Poland",
            cat: "GDP_per_capita",
            val :0.76
        },
        {
            country: "Poland",
            cat: "health_expenditure",
            val :6.3
        },
        {
            country: "Poland",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Poland",
            cat: "unemployment",
            val :6.2
        },
        {
            country: "Poland",
            cat: "government_expenditure",
            val :41.7
        },
        {
            country: "Poland",
            cat: "judicial_effectiveness_score",
            val :56.6
        },
        {
            country: "Poland",
            cat: "government_integrity",
            val :50.9
        },
        {
            country: "Poland",
            cat: "property_rights_score",
            val :61.8
        },
        {
            country: "Poland",
            cat: "tax_burden_score",
            val :75.9
        },
        {
            country: "Poland",
            cat: "overall_economic_freedom_score",
            val :68.5
        },
        {
            country: "Poland",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Poland",
            cat: "women_MPs",
            val :28
        },
        {
            country: "Portugal",
            cat: "world_happiness_report_score",
            val :5.71
        },
        {
            country: "Portugal",
            cat: "GDP_per_capita",
            val :0.8
        },
        {
            country: "Portugal",
            cat: "health_expenditure",
            val :9
        },
        {
            country: "Portugal",
            cat: "education_expenditure",
            val :5.1
        },
        {
            country: "Portugal",
            cat: "unemployment",
            val :11.2
        },
        {
            country: "Portugal",
            cat: "government_expenditure",
            val :48.4
        },
        {
            country: "Portugal",
            cat: "judicial_effectiveness_score",
            val :70.1
        },
        {
            country: "Portugal",
            cat: "government_integrity",
            val :56.8
        },
        {
            country: "Portugal",
            cat: "property_rights_score",
            val :69.2
        },
        {
            country: "Portugal",
            cat: "tax_burden_score",
            val :59.8
        },
        {
            country: "Portugal",
            cat: "overall_economic_freedom_score",
            val :63.4
        },
        {
            country: "Portugal",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Portugal",
            cat: "women_MPs",
            val :34.8
        },
        {
            country: "Qatar",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Qatar",
            cat: "GDP_per_capita",
            val :3.52
        },
        {
            country: "Qatar",
            cat: "health_expenditure",
            val :2.7
        },
        {
            country: "Qatar",
            cat: "education_expenditure",
            val :3.6
        },
        {
            country: "Qatar",
            cat: "unemployment",
            val :0.2
        },
        {
            country: "Qatar",
            cat: "government_expenditure",
            val :36.4
        },
        {
            country: "Qatar",
            cat: "judicial_effectiveness_score",
            val :59.8
        },
        {
            country: "Qatar",
            cat: "government_integrity",
            val :71.6
        },
        {
            country: "Qatar",
            cat: "property_rights_score",
            val :70.3
        },
        {
            country: "Qatar",
            cat: "tax_burden_score",
            val :99.6
        },
        {
            country: "Qatar",
            cat: "overall_economic_freedom_score",
            val :72.6
        },
        {
            country: "Qatar",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Qatar",
            cat: "women_MPs",
            val :0
        },
        {
            country: "Romania",
            cat: "world_happiness_report_score",
            val :6.09
        },
        {
            country: "Romania",
            cat: "GDP_per_capita",
            val :0.62
        },
        {
            country: "Romania",
            cat: "health_expenditure",
            val :10.6
        },
        {
            country: "Romania",
            cat: "education_expenditure",
            val :3.1
        },
        {
            country: "Romania",
            cat: "unemployment",
            val :6.4
        },
        {
            country: "Romania",
            cat: "government_expenditure",
            val :33.2
        },
        {
            country: "Romania",
            cat: "judicial_effectiveness_score",
            val :59.7
        },
        {
            country: "Romania",
            cat: "government_integrity",
            val :40
        },
        {
            country: "Romania",
            cat: "property_rights_score",
            val :61
        },
        {
            country: "Romania",
            cat: "tax_burden_score",
            val :87.3
        },
        {
            country: "Romania",
            cat: "overall_economic_freedom_score",
            val :69.4
        },
        {
            country: "Romania",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Romania",
            cat: "women_MPs",
            val :20.7
        },
        {
            country: "Russia",
            cat: "world_happiness_report_score",
            val :5.58
        },
        {
            country: "Russia",
            cat: "GDP_per_capita",
            val :0.73
        },
        {
            country: "Russia",
            cat: "health_expenditure",
            val :7
        },
        {
            country: "Russia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Russia",
            cat: "unemployment",
            val :5.7
        },
        {
            country: "Russia",
            cat: "government_expenditure",
            val :35.3
        },
        {
            country: "Russia",
            cat: "judicial_effectiveness_score",
            val :46.9
        },
        {
            country: "Russia",
            cat: "government_integrity",
            val :38.1
        },
        {
            country: "Russia",
            cat: "property_rights_score",
            val :48.7
        },
        {
            country: "Russia",
            cat: "tax_burden_score",
            val :85.8
        },
        {
            country: "Russia",
            cat: "overall_economic_freedom_score",
            val :58.2
        },
        {
            country: "Russia",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Russia",
            cat: "women_MPs",
            val :15.8
        },
        {
            country: "Rwanda",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Rwanda",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Rwanda",
            cat: "health_expenditure",
            val :3.8
        },
        {
            country: "Rwanda",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Rwanda",
            cat: "unemployment",
            val :2.5
        },
        {
            country: "Rwanda",
            cat: "government_expenditure",
            val :27.2
        },
        {
            country: "Rwanda",
            cat: "judicial_effectiveness_score",
            val :79.6
        },
        {
            country: "Rwanda",
            cat: "government_integrity",
            val :61.2
        },
        {
            country: "Rwanda",
            cat: "property_rights_score",
            val :69.8
        },
        {
            country: "Rwanda",
            cat: "tax_burden_score",
            val :75.8
        },
        {
            country: "Rwanda",
            cat: "overall_economic_freedom_score",
            val :69.1
        },
        {
            country: "Rwanda",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Rwanda",
            cat: "women_MPs",
            val :61.3
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "health_expenditure",
            val :5.6
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Saint Kitts and Nevis",
            cat: "women_MPs",
            val :13.3
        },
        {
            country: "Saint Lucia",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Saint Lucia",
            cat: "GDP_per_capita",
            val :0.32
        },
        {
            country: "Saint Lucia",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Saint Lucia",
            cat: "education_expenditure",
            val :4.3
        },
        {
            country: "Saint Lucia",
            cat: "unemployment",
            val :19.8
        },
        {
            country: "Saint Lucia",
            cat: "government_expenditure",
            val :30.3
        },
        {
            country: "Saint Lucia",
            cat: "judicial_effectiveness_score",
            val :69.2
        },
        {
            country: "Saint Lucia",
            cat: "government_integrity",
            val :50.9
        },
        {
            country: "Saint Lucia",
            cat: "property_rights_score",
            val :67.9
        },
        {
            country: "Saint Lucia",
            cat: "tax_burden_score",
            val :75.5
        },
        {
            country: "Saint Lucia",
            cat: "overall_economic_freedom_score",
            val :67.6
        },
        {
            country: "Saint Lucia",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Saint Lucia",
            cat: "women_MPs",
            val :16.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "GDP_per_capita",
            val :0.31
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "health_expenditure",
            val :4.2
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "unemployment",
            val :19.3
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "government_expenditure",
            val :30.1
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "judicial_effectiveness_score",
            val :69.2
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "government_integrity",
            val :51.5
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "property_rights_score",
            val :36.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "tax_burden_score",
            val :72.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "overall_economic_freedom_score",
            val :67.7
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Saint Vincent and the Grenadines",
            cat: "women_MPs",
            val :13
        },
        {
            country: "Samoa",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Samoa",
            cat: "GDP_per_capita",
            val :0.15
        },
        {
            country: "Samoa",
            cat: "health_expenditure",
            val :7.8
        },
        {
            country: "Samoa",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Samoa",
            cat: "unemployment",
            val :7.2
        },
        {
            country: "Samoa",
            cat: "government_expenditure",
            val :38.7
        },
        {
            country: "Samoa",
            cat: "judicial_effectiveness_score",
            val :38.8
        },
        {
            country: "Samoa",
            cat: "government_integrity",
            val :40.1
        },
        {
            country: "Samoa",
            cat: "property_rights_score",
            val :53.1
        },
        {
            country: "Samoa",
            cat: "tax_burden_score",
            val :79.9
        },
        {
            country: "Samoa",
            cat: "overall_economic_freedom_score",
            val :61.5
        },
        {
            country: "Samoa",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Samoa",
            cat: "women_MPs",
            val :10
        },
        {
            country: "San Marino",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "health_expenditure",
            val :5.3
        },
        {
            country: "San Marino",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "San Marino",
            cat: "women_MPs",
            val :26.7
        },
        {
            country: "Sao Tome and Principe",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Sao Tome and Principe",
            cat: "GDP_per_capita",
            val :0.08
        },
        {
            country: "Sao Tome and Principe",
            cat: "health_expenditure",
            val :4.4
        },
        {
            country: "Sao Tome and Principe",
            cat: "education_expenditure",
            val :3.7
        },
        {
            country: "Sao Tome and Principe",
            cat: "unemployment",
            val :13.6
        },
        {
            country: "Sao Tome and Principe",
            cat: "government_expenditure",
            val :31.9
        },
        {
            country: "Sao Tome and Principe",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Sao Tome and Principe",
            cat: "government_integrity",
            val :39.4
        },
        {
            country: "Sao Tome and Principe",
            cat: "property_rights_score",
            val :38
        },
        {
            country: "Sao Tome and Principe",
            cat: "tax_burden_score",
            val :82
        },
        {
            country: "Sao Tome and Principe",
            cat: "overall_economic_freedom_score",
            val :53.6
        },
        {
            country: "Sao Tome and Principe",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Sao Tome and Principe",
            cat: "women_MPs",
            val :18.2
        },
        {
            country: "Saudi Arabia",
            cat: "world_happiness_report_score",
            val :6.29
        },
        {
            country: "Saudi Arabia",
            cat: "GDP_per_capita",
            val :1.52
        },
        {
            country: "Saudi Arabia",
            cat: "health_expenditure",
            val :6.3
        },
        {
            country: "Saudi Arabia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Saudi Arabia",
            cat: "unemployment",
            val :5.5
        },
        {
            country: "Saudi Arabia",
            cat: "government_expenditure",
            val :40
        },
        {
            country: "Saudi Arabia",
            cat: "judicial_effectiveness_score",
            val :60.2
        },
        {
            country: "Saudi Arabia",
            cat: "government_integrity",
            val :49.9
        },
        {
            country: "Saudi Arabia",
            cat: "property_rights_score",
            val :53.1
        },
        {
            country: "Saudi Arabia",
            cat: "tax_burden_score",
            val :99.7
        },
        {
            country: "Saudi Arabia",
            cat: "overall_economic_freedom_score",
            val :59.6
        },
        {
            country: "Saudi Arabia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Saudi Arabia",
            cat: "women_MPs",
            val :19.9
        },
        {
            country: "Senegal",
            cat: "world_happiness_report_score",
            val :4.68
        },
        {
            country: "Senegal",
            cat: "GDP_per_capita",
            val :0.07
        },
        {
            country: "Senegal",
            cat: "health_expenditure",
            val :9
        },
        {
            country: "Senegal",
            cat: "education_expenditure",
            val :7.4
        },
        {
            country: "Senegal",
            cat: "unemployment",
            val :9.5
        },
        {
            country: "Senegal",
            cat: "government_expenditure",
            val :30.2
        },
        {
            country: "Senegal",
            cat: "judicial_effectiveness_score",
            val :40.4
        },
        {
            country: "Senegal",
            cat: "government_integrity",
            val :42.6
        },
        {
            country: "Senegal",
            cat: "property_rights_score",
            val :41.3
        },
        {
            country: "Senegal",
            cat: "tax_burden_score",
            val :68.5
        },
        {
            country: "Senegal",
            cat: "overall_economic_freedom_score",
            val :55.7
        },
        {
            country: "Senegal",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Senegal",
            cat: "women_MPs",
            val :41.8
        },
        {
            country: "Serbia",
            cat: "world_happiness_report_score",
            val :5.12
        },
        {
            country: "Serbia",
            cat: "GDP_per_capita",
            val :0.4
        },
        {
            country: "Serbia",
            cat: "health_expenditure",
            val :9.4
        },
        {
            country: "Serbia",
            cat: "education_expenditure",
            val :4.2
        },
        {
            country: "Serbia",
            cat: "unemployment",
            val :16.5
        },
        {
            country: "Serbia",
            cat: "government_expenditure",
            val :44.5
        },
        {
            country: "Serbia",
            cat: "judicial_effectiveness_score",
            val :48.2
        },
        {
            country: "Serbia",
            cat: "government_integrity",
            val :36.5
        },
        {
            country: "Serbia",
            cat: "property_rights_score",
            val :46.2
        },
        {
            country: "Serbia",
            cat: "tax_burden_score",
            val :83.5
        },
        {
            country: "Serbia",
            cat: "overall_economic_freedom_score",
            val :62.5
        },
        {
            country: "Serbia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Serbia",
            cat: "women_MPs",
            val :34.4
        },
        {
            country: "Seychelles",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "GDP_per_capita",
            val :0.76
        },
        {
            country: "Seychelles",
            cat: "health_expenditure",
            val :3.4
        },
        {
            country: "Seychelles",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Seychelles",
            cat: "government_expenditure",
            val :35.1
        },
        {
            country: "Seychelles",
            cat: "judicial_effectiveness_score",
            val :38.8
        },
        {
            country: "Seychelles",
            cat: "government_integrity",
            val :38.8
        },
        {
            country: "Seychelles",
            cat: "property_rights_score",
            val :60.7
        },
        {
            country: "Seychelles",
            cat: "tax_burden_score",
            val :73.4
        },
        {
            country: "Seychelles",
            cat: "overall_economic_freedom_score",
            val :61.6
        },
        {
            country: "Seychelles",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Seychelles",
            cat: "women_MPs",
            val :21.2
        },
        {
            country: "Sierra Leone",
            cat: "world_happiness_report_score",
            val :4.09
        },
        {
            country: "Sierra Leone",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Sierra Leone",
            cat: "health_expenditure",
            val :18.3
        },
        {
            country: "Sierra Leone",
            cat: "education_expenditure",
            val :2.7
        },
        {
            country: "Sierra Leone",
            cat: "unemployment",
            val :3
        },
        {
            country: "Sierra Leone",
            cat: "government_expenditure",
            val :18.4
        },
        {
            country: "Sierra Leone",
            cat: "judicial_effectiveness_score",
            val :29.6
        },
        {
            country: "Sierra Leone",
            cat: "government_integrity",
            val :22
        },
        {
            country: "Sierra Leone",
            cat: "property_rights_score",
            val :33.6
        },
        {
            country: "Sierra Leone",
            cat: "tax_burden_score",
            val :79.9
        },
        {
            country: "Sierra Leone",
            cat: "overall_economic_freedom_score",
            val :51.8
        },
        {
            country: "Sierra Leone",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Sierra Leone",
            cat: "women_MPs",
            val :12.4
        },
        {
            country: "Singapore",
            cat: "world_happiness_report_score",
            val :6.38
        },
        {
            country: "Singapore",
            cat: "GDP_per_capita",
            val :2.42
        },
        {
            country: "Singapore",
            cat: "health_expenditure",
            val :4.3
        },
        {
            country: "Singapore",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Singapore",
            cat: "unemployment",
            val :1.8
        },
        {
            country: "Singapore",
            cat: "government_expenditure",
            val :17.7
        },
        {
            country: "Singapore",
            cat: "judicial_effectiveness_score",
            val :90.9
        },
        {
            country: "Singapore",
            cat: "government_integrity",
            val :91.2
        },
        {
            country: "Singapore",
            cat: "property_rights_score",
            val :98.4
        },
        {
            country: "Singapore",
            cat: "tax_burden_score",
            val :90.4
        },
        {
            country: "Singapore",
            cat: "overall_economic_freedom_score",
            val :88.8
        },
        {
            country: "Singapore",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Singapore",
            cat: "women_MPs",
            val :23
        },
        {
            country: "Slovakia",
            cat: "world_happiness_report_score",
            val :6.37
        },
        {
            country: "Slovakia",
            cat: "GDP_per_capita",
            val :0.86
        },
        {
            country: "Slovakia",
            cat: "health_expenditure",
            val :6.9
        },
        {
            country: "Slovakia",
            cat: "education_expenditure",
            val :4.2
        },
        {
            country: "Slovakia",
            cat: "unemployment",
            val :10
        },
        {
            country: "Slovakia",
            cat: "government_expenditure",
            val :43.1
        },
        {
            country: "Slovakia",
            cat: "judicial_effectiveness_score",
            val :38.8
        },
        {
            country: "Slovakia",
            cat: "government_integrity",
            val :38.2
        },
        {
            country: "Slovakia",
            cat: "property_rights_score",
            val :68.2
        },
        {
            country: "Slovakia",
            cat: "tax_burden_score",
            val :78.9
        },
        {
            country: "Slovakia",
            cat: "overall_economic_freedom_score",
            val :65.3
        },
        {
            country: "Slovakia",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Slovakia",
            cat: "women_MPs",
            val :20
        },
        {
            country: "Slovenia",
            cat: "world_happiness_report_score",
            val :6.17
        },
        {
            country: "Slovenia",
            cat: "GDP_per_capita",
            val :0.88
        },
        {
            country: "Slovenia",
            cat: "health_expenditure",
            val :8.5
        },
        {
            country: "Slovenia",
            cat: "education_expenditure",
            val :5.3
        },
        {
            country: "Slovenia",
            cat: "unemployment",
            val :8.7
        },
        {
            country: "Slovenia",
            cat: "government_expenditure",
            val :47.9
        },
        {
            country: "Slovenia",
            cat: "judicial_effectiveness_score",
            val :57.7
        },
        {
            country: "Slovenia",
            cat: "government_integrity",
            val :52.1
        },
        {
            country: "Slovenia",
            cat: "property_rights_score",
            val :76.6
        },
        {
            country: "Slovenia",
            cat: "tax_burden_score",
            val :58.7
        },
        {
            country: "Slovenia",
            cat: "overall_economic_freedom_score",
            val :64.8
        },
        {
            country: "Slovenia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Slovenia",
            cat: "women_MPs",
            val :36.7
        },
        {
            country: "Solomon Islands",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Solomon Islands",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Solomon Islands",
            cat: "health_expenditure",
            val :8
        },
        {
            country: "Solomon Islands",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Solomon Islands",
            cat: "unemployment",
            val :31.4
        },
        {
            country: "Solomon Islands",
            cat: "government_expenditure",
            val :46.3
        },
        {
            country: "Solomon Islands",
            cat: "judicial_effectiveness_score",
            val :57.3
        },
        {
            country: "Solomon Islands",
            cat: "government_integrity",
            val :36.8
        },
        {
            country: "Solomon Islands",
            cat: "property_rights_score",
            val :49.4
        },
        {
            country: "Solomon Islands",
            cat: "tax_burden_score",
            val :65.5
        },
        {
            country: "Solomon Islands",
            cat: "overall_economic_freedom_score",
            val :57.5
        },
        {
            country: "Solomon Islands",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Solomon Islands",
            cat: "women_MPs",
            val :2
        },
        {
            country: "Somalia",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "unemployment",
            val :6.6
        },
        {
            country: "Somalia",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "judicial_effectiveness_score",
            val :25.4
        },
        {
            country: "Somalia",
            cat: "government_integrity",
            val :17.8
        },
        {
            country: "Somalia",
            cat: "property_rights_score",
            val :33.1
        },
        {
            country: "Somalia",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Somalia",
            cat: "women_MPs",
            val :24.4
        },
        {
            country: "South Africa",
            cat: "world_happiness_report_score",
            val :4.51
        },
        {
            country: "South Africa",
            cat: "GDP_per_capita",
            val :0.36
        },
        {
            country: "South Africa",
            cat: "health_expenditure",
            val :8.2
        },
        {
            country: "South Africa",
            cat: "education_expenditure",
            val :6
        },
        {
            country: "South Africa",
            cat: "unemployment",
            val :25.9
        },
        {
            country: "South Africa",
            cat: "government_expenditure",
            val :32.6
        },
        {
            country: "South Africa",
            cat: "judicial_effectiveness_score",
            val :65.9
        },
        {
            country: "South Africa",
            cat: "government_integrity",
            val :45.4
        },
        {
            country: "South Africa",
            cat: "property_rights_score",
            val :67.7
        },
        {
            country: "South Africa",
            cat: "tax_burden_score",
            val :62.5
        },
        {
            country: "South Africa",
            cat: "overall_economic_freedom_score",
            val :63
        },
        {
            country: "South Africa",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "South Africa",
            cat: "women_MPs",
            val :42
        },
        {
            country: "South Sudan",
            cat: "world_happiness_report_score",
            val :2.82
        },
        {
            country: "South Sudan",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "health_expenditure",
            val :2.5
        },
        {
            country: "South Sudan",
            cat: "education_expenditure",
            val :1.7
        },
        {
            country: "South Sudan",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "South Sudan",
            cat: "women_MPs",
            val :28.5
        },
        {
            country: "Spain",
            cat: "world_happiness_report_score",
            val :6.23
        },
        {
            country: "Spain",
            cat: "GDP_per_capita",
            val :1
        },
        {
            country: "Spain",
            cat: "health_expenditure",
            val :9.2
        },
        {
            country: "Spain",
            cat: "education_expenditure",
            val :4.3
        },
        {
            country: "Spain",
            cat: "unemployment",
            val :19.4
        },
        {
            country: "Spain",
            cat: "government_expenditure",
            val :43.7
        },
        {
            country: "Spain",
            cat: "judicial_effectiveness_score",
            val :62
        },
        {
            country: "Spain",
            cat: "government_integrity",
            val :51.5
        },
        {
            country: "Spain",
            cat: "property_rights_score",
            val :73.1
        },
        {
            country: "Spain",
            cat: "tax_burden_score",
            val :62
        },
        {
            country: "Spain",
            cat: "overall_economic_freedom_score",
            val :65.1
        },
        {
            country: "Spain",
            cat: "financial_freedom_score",
            val :70
        },
        {
            country: "Spain",
            cat: "women_MPs",
            val :39.1
        },
        {
            country: "Sri Lanka",
            cat: "world_happiness_report_score",
            val :4.33
        },
        {
            country: "Sri Lanka",
            cat: "GDP_per_capita",
            val :0.34
        },
        {
            country: "Sri Lanka",
            cat: "health_expenditure",
            val :3
        },
        {
            country: "Sri Lanka",
            cat: "education_expenditure",
            val :1.9
        },
        {
            country: "Sri Lanka",
            cat: "unemployment",
            val :5
        },
        {
            country: "Sri Lanka",
            cat: "government_expenditure",
            val :18.9
        },
        {
            country: "Sri Lanka",
            cat: "judicial_effectiveness_score",
            val :52
        },
        {
            country: "Sri Lanka",
            cat: "government_integrity",
            val :30.7
        },
        {
            country: "Sri Lanka",
            cat: "property_rights_score",
            val :46.5
        },
        {
            country: "Sri Lanka",
            cat: "tax_burden_score",
            val :84.9
        },
        {
            country: "Sri Lanka",
            cat: "overall_economic_freedom_score",
            val :57.8
        },
        {
            country: "Sri Lanka",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Sri Lanka",
            cat: "women_MPs",
            val :5.8
        },
        {
            country: "Sudan",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Sudan",
            cat: "GDP_per_capita",
            val :0.12
        },
        {
            country: "Sudan",
            cat: "health_expenditure",
            val :6.3
        },
        {
            country: "Sudan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Sudan",
            cat: "unemployment",
            val :13.3
        },
        {
            country: "Sudan",
            cat: "government_expenditure",
            val :12.5
        },
        {
            country: "Sudan",
            cat: "judicial_effectiveness_score",
            val :21.4
        },
        {
            country: "Sudan",
            cat: "government_integrity",
            val :21.2
        },
        {
            country: "Sudan",
            cat: "property_rights_score",
            val :27.8
        },
        {
            country: "Sudan",
            cat: "tax_burden_score",
            val :85.9
        },
        {
            country: "Sudan",
            cat: "overall_economic_freedom_score",
            val :49.4
        },
        {
            country: "Sudan",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Sudan",
            cat: "women_MPs",
            val :30.5
        },
        {
            country: "Suriname",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Suriname",
            cat: "GDP_per_capita",
            val :0.39
        },
        {
            country: "Suriname",
            cat: "health_expenditure",
            val :6.5
        },
        {
            country: "Suriname",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Suriname",
            cat: "unemployment",
            val :10
        },
        {
            country: "Suriname",
            cat: "government_expenditure",
            val :28.1
        },
        {
            country: "Suriname",
            cat: "judicial_effectiveness_score",
            val :21.4
        },
        {
            country: "Suriname",
            cat: "government_integrity",
            val :39.9
        },
        {
            country: "Suriname",
            cat: "property_rights_score",
            val :39.7
        },
        {
            country: "Suriname",
            cat: "tax_burden_score",
            val :71.4
        },
        {
            country: "Suriname",
            cat: "overall_economic_freedom_score",
            val :48.1
        },
        {
            country: "Suriname",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Suriname",
            cat: "women_MPs",
            val :25.5
        },
        {
            country: "Sweden",
            cat: "world_happiness_report_score",
            val :7.29
        },
        {
            country: "Sweden",
            cat: "GDP_per_capita",
            val :1.37
        },
        {
            country: "Sweden",
            cat: "health_expenditure",
            val :11
        },
        {
            country: "Sweden",
            cat: "education_expenditure",
            val :7.7
        },
        {
            country: "Sweden",
            cat: "unemployment",
            val :7.1
        },
        {
            country: "Sweden",
            cat: "government_expenditure",
            val :50.6
        },
        {
            country: "Sweden",
            cat: "judicial_effectiveness_score",
            val :88.2
        },
        {
            country: "Sweden",
            cat: "government_integrity",
            val :92.9
        },
        {
            country: "Sweden",
            cat: "property_rights_score",
            val :92.6
        },
        {
            country: "Sweden",
            cat: "tax_burden_score",
            val :43.9
        },
        {
            country: "Sweden",
            cat: "overall_economic_freedom_score",
            val :76.3
        },
        {
            country: "Sweden",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "Sweden",
            cat: "women_MPs",
            val :43.6
        },
        {
            country: "Switzerland",
            cat: "world_happiness_report_score",
            val :7.47
        },
        {
            country: "Switzerland",
            cat: "GDP_per_capita",
            val :1.64
        },
        {
            country: "Switzerland",
            cat: "health_expenditure",
            val :12.1
        },
        {
            country: "Switzerland",
            cat: "education_expenditure",
            val :5.1
        },
        {
            country: "Switzerland",
            cat: "unemployment",
            val :4.6
        },
        {
            country: "Switzerland",
            cat: "government_expenditure",
            val :34
        },
        {
            country: "Switzerland",
            cat: "judicial_effectiveness_score",
            val :82.1
        },
        {
            country: "Switzerland",
            cat: "government_integrity",
            val :82.8
        },
        {
            country: "Switzerland",
            cat: "property_rights_score",
            val :84.2
        },
        {
            country: "Switzerland",
            cat: "tax_burden_score",
            val :70.5
        },
        {
            country: "Switzerland",
            cat: "overall_economic_freedom_score",
            val :81.7
        },
        {
            country: "Switzerland",
            cat: "financial_freedom_score",
            val :90
        },
        {
            country: "Switzerland",
            cat: "women_MPs",
            val :32.5
        },
        {
            country: "Syria",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Syria",
            cat: "health_expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "unemployment",
            val :14.3
        },
        {
            country: "Syria",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Syria",
            cat: "judicial_effectiveness_score",
            val :22.1
        },
        {
            country: "Syria",
            cat: "government_integrity",
            val :23.1
        },
        {
            country: "Syria",
            cat: "property_rights_score",
            val :36.7
        },
        {
            country: "Syria",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Syria",
            cat: "women_MPs",
            val :13.2
        },
        {
            country: "Taiwan",
            cat: "world_happiness_report_score",
            val :6.36
        },
        {
            country: "Taiwan",
            cat: "GDP_per_capita",
            val :1.32
        },
        {
            country: "Taiwan",
            cat: "health_expenditure",
            val :6.9
        },
        {
            country: "Taiwan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Taiwan",
            cat: "unemployment",
            val :4
        },
        {
            country: "Taiwan",
            cat: "government_expenditure",
            val :17.8
        },
        {
            country: "Taiwan",
            cat: "judicial_effectiveness_score",
            val :69.2
        },
        {
            country: "Taiwan",
            cat: "government_integrity",
            val :70.9
        },
        {
            country: "Taiwan",
            cat: "property_rights_score",
            val :84.3
        },
        {
            country: "Taiwan",
            cat: "tax_burden_score",
            val :76.1
        },
        {
            country: "Taiwan",
            cat: "overall_economic_freedom_score",
            val :76.6
        },
        {
            country: "Taiwan",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Taiwan",
            cat: "women_MPs",
            val :0.0
        },
        {
            country: "Tajikistan",
            cat: "world_happiness_report_score",
            val :5.83
        },
        {
            country: "Tajikistan",
            cat: "GDP_per_capita",
            val :0.08
        },
        {
            country: "Tajikistan",
            cat: "health_expenditure",
            val :6.1
        },
        {
            country: "Tajikistan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Tajikistan",
            cat: "unemployment",
            val :10.8
        },
        {
            country: "Tajikistan",
            cat: "government_expenditure",
            val :30.9
        },
        {
            country: "Tajikistan",
            cat: "judicial_effectiveness_score",
            val :50.3
        },
        {
            country: "Tajikistan",
            cat: "government_integrity",
            val :38.2
        },
        {
            country: "Tajikistan",
            cat: "property_rights_score",
            val :46.8
        },
        {
            country: "Tajikistan",
            cat: "tax_burden_score",
            val :91.8
        },
        {
            country: "Tajikistan",
            cat: "overall_economic_freedom_score",
            val :58.3
        },
        {
            country: "Tajikistan",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Tajikistan",
            cat: "women_MPs",
            val :19
        },
        {
            country: "Tanzania",
            cat: "world_happiness_report_score",
            val :3.35
        },
        {
            country: "Tanzania",
            cat: "GDP_per_capita",
            val :0.08
        },
        {
            country: "Tanzania",
            cat: "health_expenditure",
            val :3.8
        },
        {
            country: "Tanzania",
            cat: "education_expenditure",
            val :3.5
        },
        {
            country: "Tanzania",
            cat: "unemployment",
            val :2.6
        },
        {
            country: "Tanzania",
            cat: "government_expenditure",
            val :18.5
        },
        {
            country: "Tanzania",
            cat: "judicial_effectiveness_score",
            val :34.7
        },
        {
            country: "Tanzania",
            cat: "government_integrity",
            val :31.8
        },
        {
            country: "Tanzania",
            cat: "property_rights_score",
            val :38
        },
        {
            country: "Tanzania",
            cat: "tax_burden_score",
            val :79.8
        },
        {
            country: "Tanzania",
            cat: "overall_economic_freedom_score",
            val :59.9
        },
        {
            country: "Tanzania",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Tanzania",
            cat: "women_MPs",
            val :36.4
        },
        {
            country: "Thailand",
            cat: "world_happiness_report_score",
            val :5.94
        },
        {
            country: "Thailand",
            cat: "GDP_per_capita",
            val :0.47
        },
        {
            country: "Thailand",
            cat: "health_expenditure",
            val :3.1
        },
        {
            country: "Thailand",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Thailand",
            cat: "unemployment",
            val :0.6
        },
        {
            country: "Thailand",
            cat: "government_expenditure",
            val :22
        },
        {
            country: "Thailand",
            cat: "judicial_effectiveness_score",
            val :45.3
        },
        {
            country: "Thailand",
            cat: "government_integrity",
            val :34.7
        },
        {
            country: "Thailand",
            cat: "property_rights_score",
            val :48.6
        },
        {
            country: "Thailand",
            cat: "tax_burden_score",
            val :81.3
        },
        {
            country: "Thailand",
            cat: "overall_economic_freedom_score",
            val :67.1
        },
        {
            country: "Thailand",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Thailand",
            cat: "women_MPs",
            val :4.8
        },
        {
            country: "Timor-Leste",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Timor-Leste",
            cat: "GDP_per_capita",
            val :0.12
        },
        {
            country: "Timor-Leste",
            cat: "health_expenditure",
            val :3.1
        },
        {
            country: "Timor-Leste",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Timor-Leste",
            cat: "unemployment",
            val :4
        },
        {
            country: "Timor-Leste",
            cat: "government_expenditure",
            val :48
        },
        {
            country: "Timor-Leste",
            cat: "judicial_effectiveness_score",
            val :13.8
        },
        {
            country: "Timor-Leste",
            cat: "government_integrity",
            val :32
        },
        {
            country: "Timor-Leste",
            cat: "property_rights_score",
            val :29.9
        },
        {
            country: "Timor-Leste",
            cat: "tax_burden_score",
            val :97.4
        },
        {
            country: "Timor-Leste",
            cat: "overall_economic_freedom_score",
            val :48.1
        },
        {
            country: "Timor-Leste",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Timor-Leste",
            cat: "women_MPs",
            val :32.3
        },
        {
            country: "Togo",
            cat: "world_happiness_report_score",
            val :4.36
        },
        {
            country: "Togo",
            cat: "GDP_per_capita",
            val :0.04
        },
        {
            country: "Togo",
            cat: "health_expenditure",
            val :6.6
        },
        {
            country: "Togo",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Togo",
            cat: "unemployment",
            val :6.8
        },
        {
            country: "Togo",
            cat: "government_expenditure",
            val :29.8
        },
        {
            country: "Togo",
            cat: "judicial_effectiveness_score",
            val :28.2
        },
        {
            country: "Togo",
            cat: "government_integrity",
            val :31.4
        },
        {
            country: "Togo",
            cat: "property_rights_score",
            val :32.7
        },
        {
            country: "Togo",
            cat: "tax_burden_score",
            val :64.3
        },
        {
            country: "Togo",
            cat: "overall_economic_freedom_score",
            val :47.8
        },
        {
            country: "Togo",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Togo",
            cat: "women_MPs",
            val :17.6
        },
        {
            country: "Tonga",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Tonga",
            cat: "GDP_per_capita",
            val :0.15
        },
        {
            country: "Tonga",
            cat: "health_expenditure",
            val :5.9
        },
        {
            country: "Tonga",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Tonga",
            cat: "unemployment",
            val :4.9
        },
        {
            country: "Tonga",
            cat: "government_expenditure",
            val :32.3
        },
        {
            country: "Tonga",
            cat: "judicial_effectiveness_score",
            val :25.4
        },
        {
            country: "Tonga",
            cat: "government_integrity",
            val :40.5
        },
        {
            country: "Tonga",
            cat: "property_rights_score",
            val :62.1
        },
        {
            country: "Tonga",
            cat: "tax_burden_score",
            val :85.4
        },
        {
            country: "Tonga",
            cat: "overall_economic_freedom_score",
            val :63.1
        },
        {
            country: "Tonga",
            cat: "financial_freedom_score",
            val :20
        },
        {
            country: "Tonga",
            cat: "women_MPs",
            val :3.8
        },
        {
            country: "Trinidad and Tobago",
            cat: "world_happiness_report_score",
            val :6.19
        },
        {
            country: "Trinidad and Tobago",
            cat: "GDP_per_capita",
            val :0.88
        },
        {
            country: "Trinidad and Tobago",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Trinidad and Tobago",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Trinidad and Tobago",
            cat: "unemployment",
            val :3.9
        },
        {
            country: "Trinidad and Tobago",
            cat: "government_expenditure",
            val :39
        },
        {
            country: "Trinidad and Tobago",
            cat: "judicial_effectiveness_score",
            val :49.8
        },
        {
            country: "Trinidad and Tobago",
            cat: "government_integrity",
            val :33.1
        },
        {
            country: "Trinidad and Tobago",
            cat: "property_rights_score",
            val :54.9
        },
        {
            country: "Trinidad and Tobago",
            cat: "tax_burden_score",
            val :83.5
        },
        {
            country: "Trinidad and Tobago",
            cat: "overall_economic_freedom_score",
            val :57.7
        },
        {
            country: "Trinidad and Tobago",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Trinidad and Tobago",
            cat: "women_MPs",
            val :31
        },
        {
            country: "Tunisia",
            cat: "world_happiness_report_score",
            val :4.12
        },
        {
            country: "Tunisia",
            cat: "GDP_per_capita",
            val :0.32
        },
        {
            country: "Tunisia",
            cat: "health_expenditure",
            val :6.7
        },
        {
            country: "Tunisia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Tunisia",
            cat: "unemployment",
            val :14.8
        },
        {
            country: "Tunisia",
            cat: "government_expenditure",
            val :28.6
        },
        {
            country: "Tunisia",
            cat: "judicial_effectiveness_score",
            val :41.7
        },
        {
            country: "Tunisia",
            cat: "government_integrity",
            val :36.8
        },
        {
            country: "Tunisia",
            cat: "property_rights_score",
            val :49.4
        },
        {
            country: "Tunisia",
            cat: "tax_burden_score",
            val :73
        },
        {
            country: "Tunisia",
            cat: "overall_economic_freedom_score",
            val :58.9
        },
        {
            country: "Tunisia",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Tunisia",
            cat: "women_MPs",
            val :31.3
        },
        {
            country: "Turkey",
            cat: "world_happiness_report_score",
            val :5.61
        },
        {
            country: "Turkey",
            cat: "GDP_per_capita",
            val :0.69
        },
        {
            country: "Turkey",
            cat: "health_expenditure",
            val :4.1
        },
        {
            country: "Turkey",
            cat: "education_expenditure",
            val :4.4
        },
        {
            country: "Turkey",
            cat: "unemployment",
            val :10.3
        },
        {
            country: "Turkey",
            cat: "government_expenditure",
            val :32.6
        },
        {
            country: "Turkey",
            cat: "judicial_effectiveness_score",
            val :54.5
        },
        {
            country: "Turkey",
            cat: "government_integrity",
            val :42
        },
        {
            country: "Turkey",
            cat: "property_rights_score",
            val :54.7
        },
        {
            country: "Turkey",
            cat: "tax_burden_score",
            val :74.7
        },
        {
            country: "Turkey",
            cat: "overall_economic_freedom_score",
            val :65.4
        },
        {
            country: "Turkey",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "Turkey",
            cat: "women_MPs",
            val :14.6
        },
        {
            country: "Turkmenistan",
            cat: "world_happiness_report_score",
            val :5.23
        },
        {
            country: "Turkmenistan",
            cat: "GDP_per_capita",
            val :0.48
        },
        {
            country: "Turkmenistan",
            cat: "health_expenditure",
            val :6.3
        },
        {
            country: "Turkmenistan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Turkmenistan",
            cat: "unemployment",
            val :8.6
        },
        {
            country: "Turkmenistan",
            cat: "government_expenditure",
            val :16.1
        },
        {
            country: "Turkmenistan",
            cat: "judicial_effectiveness_score",
            val :5
        },
        {
            country: "Turkmenistan",
            cat: "government_integrity",
            val :27.3
        },
        {
            country: "Turkmenistan",
            cat: "property_rights_score",
            val :29.8
        },
        {
            country: "Turkmenistan",
            cat: "tax_burden_score",
            val :95.9
        },
        {
            country: "Turkmenistan",
            cat: "overall_economic_freedom_score",
            val :47.1
        },
        {
            country: "Turkmenistan",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Turkmenistan",
            cat: "women_MPs",
            val :25.8
        },
        {
            country: "Tuvalu",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "GDP_per_capita",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "health_expenditure",
            val :15
        },
        {
            country: "Tuvalu",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "unemployment",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "government_expenditure",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "judicial_effectiveness_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "government_integrity",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "property_rights_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Tuvalu",
            cat: "women_MPs",
            val :6.7
        },
        {
            country: "Uganda",
            cat: "world_happiness_report_score",
            val :4
        },
        {
            country: "Uganda",
            cat: "GDP_per_capita",
            val :0.06
        },
        {
            country: "Uganda",
            cat: "health_expenditure",
            val :7.3
        },
        {
            country: "Uganda",
            cat: "education_expenditure",
            val :2.3
        },
        {
            country: "Uganda",
            cat: "unemployment",
            val :2.3
        },
        {
            country: "Uganda",
            cat: "government_expenditure",
            val :17.4
        },
        {
            country: "Uganda",
            cat: "judicial_effectiveness_score",
            val :40.3
        },
        {
            country: "Uganda",
            cat: "government_integrity",
            val :28.3
        },
        {
            country: "Uganda",
            cat: "property_rights_score",
            val :43.5
        },
        {
            country: "Uganda",
            cat: "tax_burden_score",
            val :73
        },
        {
            country: "Uganda",
            cat: "overall_economic_freedom_score",
            val :62
        },
        {
            country: "Uganda",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Uganda",
            cat: "women_MPs",
            val :34.3
        },
        {
            country: "Ukraine",
            cat: "world_happiness_report_score",
            val :4.31
        },
        {
            country: "Ukraine",
            cat: "GDP_per_capita",
            val :0.23
        },
        {
            country: "Ukraine",
            cat: "health_expenditure",
            val :6.1
        },
        {
            country: "Ukraine",
            cat: "education_expenditure",
            val :5.9
        },
        {
            country: "Ukraine",
            cat: "unemployment",
            val :8.9
        },
        {
            country: "Ukraine",
            cat: "government_expenditure",
            val :42.8
        },
        {
            country: "Ukraine",
            cat: "judicial_effectiveness_score",
            val :29.5
        },
        {
            country: "Ukraine",
            cat: "government_integrity",
            val :29
        },
        {
            country: "Ukraine",
            cat: "property_rights_score",
            val :41
        },
        {
            country: "Ukraine",
            cat: "tax_burden_score",
            val :80.2
        },
        {
            country: "Ukraine",
            cat: "overall_economic_freedom_score",
            val :51.9
        },
        {
            country: "Ukraine",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Ukraine",
            cat: "women_MPs",
            val :12.3
        },
        {
            country: "United Arab Emirates",
            cat: "world_happiness_report_score",
            val :7.04
        },
        {
            country: "United Arab Emirates",
            cat: "GDP_per_capita",
            val :1.87
        },
        {
            country: "United Arab Emirates",
            cat: "health_expenditure",
            val :3.5
        },
        {
            country: "United Arab Emirates",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "United Arab Emirates",
            cat: "unemployment",
            val :3.7
        },
        {
            country: "United Arab Emirates",
            cat: "government_expenditure",
            val :31.2
        },
        {
            country: "United Arab Emirates",
            cat: "judicial_effectiveness_score",
            val :83.4
        },
        {
            country: "United Arab Emirates",
            cat: "government_integrity",
            val :77.3
        },
        {
            country: "United Arab Emirates",
            cat: "property_rights_score",
            val :76.3
        },
        {
            country: "United Arab Emirates",
            cat: "tax_burden_score",
            val :98.4
        },
        {
            country: "United Arab Emirates",
            cat: "overall_economic_freedom_score",
            val :77.6
        },
        {
            country: "United Arab Emirates",
            cat: "financial_freedom_score",
            val :60
        },
        {
            country: "United Arab Emirates",
            cat: "women_MPs",
            val :22.5
        },
        {
            country: "United Kingdom",
            cat: "world_happiness_report_score",
            val :7.1
        },
        {
            country: "United Kingdom",
            cat: "GDP_per_capita",
            val :1.17
        },
        {
            country: "United Kingdom",
            cat: "health_expenditure",
            val :9.9
        },
        {
            country: "United Kingdom",
            cat: "education_expenditure",
            val :5.7
        },
        {
            country: "United Kingdom",
            cat: "unemployment",
            val :4.8
        },
        {
            country: "United Kingdom",
            cat: "government_expenditure",
            val :43
        },
        {
            country: "United Kingdom",
            cat: "judicial_effectiveness_score",
            val :93.8
        },
        {
            country: "United Kingdom",
            cat: "government_integrity",
            val :79
        },
        {
            country: "United Kingdom",
            cat: "property_rights_score",
            val :92.2
        },
        {
            country: "United Kingdom",
            cat: "tax_burden_score",
            val :65.2
        },
        {
            country: "United Kingdom",
            cat: "overall_economic_freedom_score",
            val :78
        },
        {
            country: "United Kingdom",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "United Kingdom",
            cat: "women_MPs",
            val :32
        },
        {
            country: "United States",
            cat: "world_happiness_report_score",
            val :6.99
        },
        {
            country: "United States",
            cat: "GDP_per_capita",
            val :1.58
        },
        {
            country: "United States",
            cat: "health_expenditure",
            val :16.8
        },
        {
            country: "United States",
            cat: "education_expenditure",
            val :5
        },
        {
            country: "United States",
            cat: "unemployment",
            val :4.9
        },
        {
            country: "United States",
            cat: "government_expenditure",
            val :38.1
        },
        {
            country: "United States",
            cat: "judicial_effectiveness_score",
            val :76.9
        },
        {
            country: "United States",
            cat: "government_integrity",
            val :71.9
        },
        {
            country: "United States",
            cat: "property_rights_score",
            val :79.3
        },
        {
            country: "United States",
            cat: "tax_burden_score",
            val :65.1
        },
        {
            country: "United States",
            cat: "overall_economic_freedom_score",
            val :75.7
        },
        {
            country: "United States",
            cat: "financial_freedom_score",
            val :80
        },
        {
            country: "United States",
            cat: "women_MPs",
            val :19.4
        },
        {
            country: "Uruguay",
            cat: "world_happiness_report_score",
            val :6.34
        },
        {
            country: "Uruguay",
            cat: "GDP_per_capita",
            val :0.59
        },
        {
            country: "Uruguay",
            cat: "health_expenditure",
            val :9.2
        },
        {
            country: "Uruguay",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Uruguay",
            cat: "unemployment",
            val :8.2
        },
        {
            country: "Uruguay",
            cat: "government_expenditure",
            val :32.4
        },
        {
            country: "Uruguay",
            cat: "judicial_effectiveness_score",
            val :67
        },
        {
            country: "Uruguay",
            cat: "government_integrity",
            val :71.6
        },
        {
            country: "Uruguay",
            cat: "property_rights_score",
            val :69.3
        },
        {
            country: "Uruguay",
            cat: "tax_burden_score",
            val :78
        },
        {
            country: "Uruguay",
            cat: "overall_economic_freedom_score",
            val :69.2
        },
        {
            country: "Uruguay",
            cat: "financial_freedom_score",
            val :30
        },
        {
            country: "Uruguay",
            cat: "women_MPs",
            val :20.2
        },
        {
            country: "Uzbekistan",
            cat: "world_happiness_report_score",
            val :6.42
        },
        {
            country: "Uzbekistan",
            cat: "GDP_per_capita",
            val :0.18
        },
        {
            country: "Uzbekistan",
            cat: "health_expenditure",
            val :6.2
        },
        {
            country: "Uzbekistan",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Uzbekistan",
            cat: "unemployment",
            val :8.9
        },
        {
            country: "Uzbekistan",
            cat: "government_expenditure",
            val :33.9
        },
        {
            country: "Uzbekistan",
            cat: "judicial_effectiveness_score",
            val :35.3
        },
        {
            country: "Uzbekistan",
            cat: "government_integrity",
            val :24.2
        },
        {
            country: "Uzbekistan",
            cat: "property_rights_score",
            val :48.7
        },
        {
            country: "Uzbekistan",
            cat: "tax_burden_score",
            val :91
        },
        {
            country: "Uzbekistan",
            cat: "overall_economic_freedom_score",
            val :51.5
        },
        {
            country: "Uzbekistan",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Uzbekistan",
            cat: "women_MPs",
            val :16
        },
        {
            country: "Vanuatu",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Vanuatu",
            cat: "GDP_per_capita",
            val :0.07
        },
        {
            country: "Vanuatu",
            cat: "health_expenditure",
            val :3.5
        },
        {
            country: "Vanuatu",
            cat: "education_expenditure",
            val :4.9
        },
        {
            country: "Vanuatu",
            cat: "unemployment",
            val :5.4
        },
        {
            country: "Vanuatu",
            cat: "government_expenditure",
            val :26.8
        },
        {
            country: "Vanuatu",
            cat: "judicial_effectiveness_score",
            val :47.1
        },
        {
            country: "Vanuatu",
            cat: "government_integrity",
            val :75.4
        },
        {
            country: "Vanuatu",
            cat: "property_rights_score",
            val :67.9
        },
        {
            country: "Vanuatu",
            cat: "tax_burden_score",
            val :97
        },
        {
            country: "Vanuatu",
            cat: "overall_economic_freedom_score",
            val :69.5
        },
        {
            country: "Vanuatu",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Vanuatu",
            cat: "women_MPs",
            val :0
        },
        {
            country: "Venezuela",
            cat: "world_happiness_report_score",
            val :0.0
        },
        {
            country: "Venezuela",
            cat: "GDP_per_capita",
            val :0.38
        },
        {
            country: "Venezuela",
            cat: "health_expenditure",
            val :3.2
        },
        {
            country: "Venezuela",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Venezuela",
            cat: "unemployment",
            val :6.9
        },
        {
            country: "Venezuela",
            cat: "government_expenditure",
            val :37.7
        },
        {
            country: "Venezuela",
            cat: "judicial_effectiveness_score",
            val :13.8
        },
        {
            country: "Venezuela",
            cat: "government_integrity",
            val :7.5
        },
        {
            country: "Venezuela",
            cat: "property_rights_score",
            val :5.2
        },
        {
            country: "Venezuela",
            cat: "tax_burden_score",
            val :72.5
        },
        {
            country: "Venezuela",
            cat: "overall_economic_freedom_score",
            val :25.2
        },
        {
            country: "Venezuela",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Venezuela",
            cat: "women_MPs",
            val :22.2
        },
        {
            country: "Vietnam",
            cat: "world_happiness_report_score",
            val :5.18
        },
        {
            country: "Vietnam",
            cat: "GDP_per_capita",
            val :0.18
        },
        {
            country: "Vietnam",
            cat: "health_expenditure",
            val :5.7
        },
        {
            country: "Vietnam",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Vietnam",
            cat: "unemployment",
            val :2.2
        },
        {
            country: "Vietnam",
            cat: "government_expenditure",
            val :29.4
        },
        {
            country: "Vietnam",
            cat: "judicial_effectiveness_score",
            val :36.3
        },
        {
            country: "Vietnam",
            cat: "government_integrity",
            val :30.4
        },
        {
            country: "Vietnam",
            cat: "property_rights_score",
            val :46.4
        },
        {
            country: "Vietnam",
            cat: "tax_burden_score",
            val :79.7
        },
        {
            country: "Vietnam",
            cat: "overall_economic_freedom_score",
            val :53.1
        },
        {
            country: "Vietnam",
            cat: "financial_freedom_score",
            val :40
        },
        {
            country: "Vietnam",
            cat: "women_MPs",
            val :26.7
        },
        {
            country: "Yemen",
            cat: "world_happiness_report_score",
            val :3.25
        },
        {
            country: "Yemen",
            cat: "GDP_per_capita",
            val :0.07
        },
        {
            country: "Yemen",
            cat: "health_expenditure",
            val :6
        },
        {
            country: "Yemen",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "unemployment",
            val :17.1
        },
        {
            country: "Yemen",
            cat: "government_expenditure",
            val :25.2
        },
        {
            country: "Yemen",
            cat: "judicial_effectiveness_score",
            val :16.6
        },
        {
            country: "Yemen",
            cat: "government_integrity",
            val :21.2
        },
        {
            country: "Yemen",
            cat: "property_rights_score",
            val :17.9
        },
        {
            country: "Yemen",
            cat: "tax_burden_score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "overall_economic_freedom_score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "financial_freedom_score",
            val :0.0
        },
        {
            country: "Yemen",
            cat: "women_MPs",
            val :0
        },
        {
            country: "Zambia",
            cat: "world_happiness_report_score",
            val :3.93
        },
        {
            country: "Zambia",
            cat: "GDP_per_capita",
            val :0.11
        },
        {
            country: "Zambia",
            cat: "health_expenditure",
            val :5.4
        },
        {
            country: "Zambia",
            cat: "education_expenditure",
            val :0.0
        },
        {
            country: "Zambia",
            cat: "unemployment",
            val :7.5
        },
        {
            country: "Zambia",
            cat: "government_expenditure",
            val :25.7
        },
        {
            country: "Zambia",
            cat: "judicial_effectiveness_score",
            val :40.6
        },
        {
            country: "Zambia",
            cat: "government_integrity",
            val :36.3
        },
        {
            country: "Zambia",
            cat: "property_rights_score",
            val :46
        },
        {
            country: "Zambia",
            cat: "tax_burden_score",
            val :72.1
        },
        {
            country: "Zambia",
            cat: "overall_economic_freedom_score",
            val :54.3
        },
        {
            country: "Zambia",
            cat: "financial_freedom_score",
            val :50
        },
        {
            country: "Zambia",
            cat: "women_MPs",
            val :18
        },
        {
            country: "Zimbabwe",
            cat: "world_happiness_report_score",
            val :3.64
        },
        {
            country: "Zimbabwe",
            cat: "GDP_per_capita",
            val :0.05
        },
        {
            country: "Zimbabwe",
            cat: "health_expenditure",
            val :10.3
        },
        {
            country: "Zimbabwe",
            cat: "education_expenditure",
            val :7.5
        },
        {
            country: "Zimbabwe",
            cat: "unemployment",
            val :5.1
        },
        {
            country: "Zimbabwe",
            cat: "government_expenditure",
            val :30.6
        },
        {
            country: "Zimbabwe",
            cat: "judicial_effectiveness_score",
            val :33
        },
        {
            country: "Zimbabwe",
            cat: "government_integrity",
            val :18.9
        },
        {
            country: "Zimbabwe",
            cat: "property_rights_score",
            val :27.6
        },
        {
            country: "Zimbabwe",
            cat: "tax_burden_score",
            val :61.1
        },
        {
            country: "Zimbabwe",
            cat: "overall_economic_freedom_score",
            val :44
        },
        {
            country: "Zimbabwe",
            cat: "financial_freedom_score",
            val :10
        },
        {
            country: "Zimbabwe",
            cat: "women_MPs",
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
