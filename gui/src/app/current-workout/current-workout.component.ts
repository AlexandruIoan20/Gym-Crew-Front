import { Component } from '@angular/core';
import { HeaderComponent } from "../layout/header/header.component";
import { FooterComponent } from "../layout/footer/footer.component";

@Component({
  selector: 'app-current-workout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './current-workout.component.html',
  styleUrl: './current-workout.component.scss'
})
export class CurrentWorkoutComponent {

}
