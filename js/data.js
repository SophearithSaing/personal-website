export const projects = [
  {
    id: 0,
    name: 'React Football',
    technology: ['React', 'Material UI'],
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
];
