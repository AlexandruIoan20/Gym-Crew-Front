import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../../../types';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  constructor () { 
  }
  @Input() user!: UserInterface; 
  @Input() headerText!: string; 
}
