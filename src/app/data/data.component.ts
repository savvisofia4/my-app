import { Component, OnInit,Renderer2} from '@angular/core';
import{FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  clientForm=this.fb.group({
      name:'',
      phone:'',
      maritalStatus:["married"],
  });
  
  cliList: Array<{name: string, phone: number, maritalStatus:string}> = []; 


  constructor(private renderer: Renderer2,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let name=String(this.clientForm.value.name);
    let phone=Number(this.clientForm.value.phone);
    let maritalStatus=String(this.clientForm.value.maritalStatus);
    this.cliList.push({name,phone,maritalStatus});
    console.log(this.cliList);
    this.cliList.forEach(element=>{console.log(element)});
    

  }
  createContainer() {
    
    // Use Angular's Renderer2 to create the div element
    const recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(recaptchaContainer, 'id', 'recaptcha-container');
    // Append the created div to the body element
    this.renderer.appendChild(document.body, recaptchaContainer);

    recaptchaContainer.textContent="hi";
  
    return recaptchaContainer;
  }

}
