export const projects = [
  {
    id: 0,
    name: 'React Football',
    technology: ['React', 'Material UI'],
  },
];

export const snippets = [
  {
    id: 0,
    title: 'Add git bash to Windows Terminal',
    code: `
      {
        "commandline": "%PROGRAMFILES%/git/usr/bin/bash.exe -i -l",
        "guid": "{e794cec8-2fbc-4b3f-bca7-e1d8f3cd4fe3}",
        "icon": "%PROGRAMFILES%/Git/mingw64/share/git/git-for-windows.ico",
        "name": "Git Bash",
        "startingDirectory": "%USERPROFILE%",
        "suppressApplicationTitle": true
      }
      {
        "command": {
          "action": "splitPane",
          "profile": "{e794cec8-2fbc-4b3f-bca7-e1d8f3cd4fe3}",
          "split": "auto"
        },
        "keys": "alt+d"
      }`,
  },
  {
    id: 1,
    title: 'Change file Permission and Ownership on Linux',
    code: `
      # add permissions
      chmod +rwx file-name/directory-name
      
      # remove permissions
      chmod -rwx directoryname
      
      # add executable permissions
      chmod +x filename

      # change owner (-R = recursive -> apply to all subdirectories)
      chown -R user file
      chown -R user:group file`,
  },
];