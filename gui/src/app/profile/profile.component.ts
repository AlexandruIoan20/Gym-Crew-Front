import { Component } from '@angular/core';
import { HeaderComponent } from "../layout/header/header.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { UserInfoComponent } from "../components/user-info/user-info.component";
import { UserInterface } from '../../../types';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, UserInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  user: UserInterface = { 
    name: "TestUser", 
    email: "test@test.com", 
    password: "", 
    image: "assets/", 
  }
}
