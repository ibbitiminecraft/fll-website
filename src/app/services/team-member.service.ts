import { Injectable } from '@angular/core';
import { TeamMemberModel } from './team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  teamMembers: TeamMemberModel[] = [
    {
      Name: 'Ibrahim Tahir',
      Age: 8,
      Skills: 'HTML, CSS, JavaScript, Angular, Python, C++ ',
      Hobbies: 'Playing Minecraft, Coding, Playing With Friends',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ameen.A',
      Age: 10,
      Skills: '',
      Hobbies: 'Playing Poki And Fortnite',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ameen.e',
      Age: 9,
      Skills: 'Skils here',
      Hobbies: 'playing soccer',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ashika',
      Age: 8,
      Skills: 'Skils here',
      Hobbies: 'Paying Random games',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Husna',
      Age: 8,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Nadirah',
      Age: 8,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    
  ];
  constructor() {}
}
