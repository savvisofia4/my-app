import { Component, OnInit} from '@angular/core';
import { FormBuilder } from "@angular/forms";

import {Renderer2} from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {

  degreeForm = this.fb.group({
    degree: 0,
    type: ["Celsius"],
  });
  output: string ="";
 

  constructor(private renderer: Renderer2, private fb: FormBuilder,) { 
    
  }

  ngOnInit() {
    this.createContainer();
  }

  onSubmit(){
    console.log(this.degreeForm);
    let deg = Number(this.degreeForm.value.degree);
    if (this.degreeForm.value.type==='Fahreneit') this.output=String((deg-32)*5/9)+' Celsius';
    else this.output=String((deg*9/5)+32)+' Fahreneit';
  }

  
  createContainer() {
    
    // Use Angular's Renderer2 to create the div element
    const recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(recaptchaContainer, 'id', 'recaptcha-container');
    // Append the created div to the body element
    this.renderer.appendChild(document.body, recaptchaContainer);
    
    return recaptchaContainer;
  }

  
}


