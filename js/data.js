export const projects = [
  {
    name: 'Media Journal',
    technology: ['Angular', 'Nebular', 'Firebase'],
  },
  {
    name: 'Football',
    technology: ['React', 'Ionic'],
  },
  {
    name: 'Word-chain',
    technology: ['React'],
  },
];

export const snippets = [
  {
    title: 'Add git bash to Windows Terminal',
    category: 'config',
    language: 'json',
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
    title: 'Change file Permission and Ownership on Linux',
    category: 'linux',
    language: 'shell',
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
  {
    title: '.jsconfig for jQuery',
    category: 'config',
    language: 'json',
    code: `
      {
        "typeAcquisition": {
          "include": ["jquery"]
        }
      }`,
  },
  {
    title: 'My local .prettierrc for js',
    category: 'config',
    language: 'json',
    code: `
      {
        "arrowParens": "always",
        "bracketSpacing": true,
        "endOfLine": "lf",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxBracketSameLine": false,
        "jsxSingleQuote": false,
        "printWidth": 80,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5",
        "useTabs": false,
        "vueIndentScriptAndStyle": false,
        "parser": "babel",
      }`,
  },
  {
    title: 'Check serial number on Linux (Manjaro)',
    category: 'linux',
    language: 'shell',
    code: `
      pacman -S dmidecode # if command is not found
      dmidecode -s system-serial-number
    `,
  },
  {
    title: 'Restart Plasma',
    category: 'linux',
    language: 'shell',
    code: `
      # for KDE 4
      killall plasma-desktop && kstart plasma-desktop
      
      # for KDE 5    
      killall plasmashell && kstart plasmashell
      
      # for KDE > 5.10
      killall plasmashell && kstart5 plasmashell
    `,
  },
];
