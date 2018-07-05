import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jayden';
  active = true;
  totalTeams = 4;
  teams = [
    {
      teamName: 'Chupacabras',
      players: ['Michael', 'Diara', 'Tiny', 'Kenny', 'Johnny'],
      teamHome: 'Mission'
  },
  {
    teamName: 'Wrench Dodgers',
    players: ['Cesare', 'Erick', 'Victor', 'Jess', 'Jeremy'],
    teamHome: 'New York'
  },
  {
    teamName: 'Los Tamales',
    players: ['Jorge', 'Jacqueline', 'Steven', 'Hiram', 'Luis'],
    teamHome: 'Los Angeles' 
  },
  {
    teamName: 'Weeaboos',
    players: ['Ernesto', 'Joshua', 'Emmanuel', 'Tony', 'Roxanne'],
    teamHome: 'Tokyo'
  } ,
];
}
