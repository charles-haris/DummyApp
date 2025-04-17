import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declaration
  title = 'DummyApp';
  student = {
    name: "Leo",
    gender: "Male"
  };

  countries: string[] = ['Canada', 'France', 'UK']
  image: string = "https://unsplash.com/fr/photos/une-photo-floue-dun-sapin-de-noel-dans-un-salon-rWJ7sYJHNGQ"
  count: number = 0
  inputValue: string = ''
  value: string = ''
  fullname: string = ''




  increaseCount() {
    this.count++;
  }

  updateValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value
    console.log(this.value)

  }
}
