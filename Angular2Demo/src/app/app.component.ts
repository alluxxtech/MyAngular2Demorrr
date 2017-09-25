import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    pageHeader: string = null /*'Employee Details'*/;
    imagePath: string = '/image/dog.jpg';
    firstName: string = 'Peter';
    lastName: string = 'Pen';
    getFullName(): string {
    return this.firstName + " " + this.lastName;
}

}
