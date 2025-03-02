import { Injectable } from '@angular/core';
import { TeamMemberModel } from './team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  teamMembers: TeamMemberModel[] = [
    {
      Name: 'Ibrahim Tahir',
      Role: 'abc',
      Age: 11,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ibrahim Tahir',
      Role: 'abc',
      Age: 11,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ibrahim Tahir',
      Role: 'abc',
      Age: 11,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ibrahim Tahir',
      Role: 'abc',
      Age: 11,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ibrahim Tahir',
      Role: 'abc',
      Age: 11,
      Skills: 'Skils here',
      Hobbies: 'Hibbies here',
      img: 'images/programmer.jpg',
    },
  ];
  constructor() {}
}
