import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signature Generator';

  schoolLogo: string;
  schoolLogoAlt: string;

  form = new FormGroup({
    name: new FormControl(),
    position: new FormControl(),
    company: new FormControl(),
    phone: new FormControl(),
    extension: new FormControl(),
    extensionBool: new FormControl(),
    rcdsbLogo: new FormControl(),
    schoolLogo: new FormControl()
  })

  signature: boolean = false;
  rcdsbLogoBool: boolean = false;
  schoolLogoBool: boolean = false;
  ext: boolean = false
  uiName: string = "";
  uiPosition: string = "";
  uiCompany: string = "";
  uiPhone: string = "";


  generateSignature() {
    this.signature = true;
    this.uiName = this.form.get("name")?.value;
    this.uiPosition = this.form.get("position")?.value;
    this.uiCompany = this.form.get("company")?.value;
    this.uiPhone = this.form.get("phone")?.value + (this.form.get("extensionBool")?.value ? " ext." + this.form.get("extension")?.value : "");
    this.rcdsbLogoBool = this.form.get("rcdsbLogo")?.value;
    this.schoolLogoBool = this.form.get("schoolLogo")?.value;
    if (this.schoolLogoBool) {
      this.logoURL()
    }
  }

  updateExtensionBox() {
    this.ext = this.form.get("extensionBool")?.value;
  }

  logoURL() {
    switch (this.uiCompany) {
      case "Admaston Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Adamston.jpg";
        break;
      case "A.J. Charbonneau Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/AJC.jpg";
        break;
      case "Arnprior District High School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Arnprior-District-High.jpg";
        break;
      case "Beachburg Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Beachburg.jpg";
        break;
      case "Central Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/central.jpg";
        break;
      case "Champlain Discovery Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/CDS-Logo.jpg";
        break;
      case "Cobden District Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Cobden.jpg";
        break;
      case "Eganville and District Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Eganville.jpg";
        break;
      case "Fellowes High School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Fellows.jpg";
        break;
      case "Herman Street Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/herman.png";
        break;
      case "Highview Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/New-Hawks-Logo-Letterhead.JPG";
        break;
      case "Killaloe Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/killaloe.jpg";
        break;
      case "Mackenzie Community School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Mackenzie-Community-School.jpg";
        break;
      case "Madawaska Valley District School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Madawaska-Valley.jpg";
        break;
      case "McNab Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/McNab-Public-School.jpg";
        break;
      case "Opeongo High School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Opeongo.jpg";
        break;
      case "Palmer Rapids Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/PalmerRapid.jpg";
        break;
      case "Pine View Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Pineview.jpg";
        break;
      case "Queen Elizabeth Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Queen-Elizabeth.jpg";
        break;
      case "Renfrew Collegiate Institute":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Renfrew-Collegiate-Institute.jpg";
        break;
      case "Rockwood Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/rockwood.jpg";
        break;
      case "Valour JK-12 School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/Valour.jpg";
        break;
      case "Walter Zadow Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/walterzadow.jpg";
        break;
      case "Whitney Public School":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/whitney.jpg";
        break;
      case "Continuing Ed":
        this.schoolLogo = "https://www.rcdsb.on.ca/en/resources/ContinuingED.jpg";
        break;
      default:
        break;
    }
    this.schoolLogoAlt = this.uiCompany + " logo";
  }

  copyToClipboard() {
    const copyDiv = document.getElementById("signatureBlock");

    if (copyDiv) {
      navigator.clipboard.write([new ClipboardItem({
        'text/plain': new Blob([copyDiv.innerText], { type: 'text/plain' }),
        'text/html': new Blob([copyDiv.innerHTML], { type: 'text/html' })
      })])
    } else {
      console.error('Element to copy from could not be found');
    }
  }
}
