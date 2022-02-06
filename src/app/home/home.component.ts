import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  terminalConfig = `
"profiles": {
  "list": [
    {
      "guid": "{e794cec8-2fbc-4b3f-bca7-e1d8f3cd4fe3}",
      "commandline": "%PROGRAMFILES%/git/usr/bin/bash.exe -i -l",
      "icon": "%PROGRAMFILES%/Git/mingw64/share/git/git-for-windows.ico",
      "name": "Git Bash",
      "suppressApplicationTitle": true,
      "startingDirectory": "%USERPROFILE%"
    }
  ]
},
"actions": [
  {
    "command": {
      "action": "splitPane",
      "split": "auto",
      "profile": "{e794cec8-2fbc-4b3f-bca7-e1d8f3cd4fe3}"
    },
    "keys": "alt+d"
  }
]
`;
  constructor() { }

  ngOnInit(): void {
  }

}
