import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewHelloWorld'; 
  imgUrl= ""
  url="https://www.bridgelabz.com/";
  userName:string=""    // Two Way Binding
  nameError:string="";
  
  ngOnInit(): void {
    this.title="Welcome to Bridgelabz."; // One way binding
    this.imgUrl="../assets/Bridgelabz_image.png";  // Property binding

  }

  onClick($event: any){
    console.log("Save button is clicked",$event);
    window.open(this.url)
  }

  onInput($event: any) {
    console.log("Event Fired",$event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if(nameRegex.test(this.userName)) {
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect";
  }
  
}

