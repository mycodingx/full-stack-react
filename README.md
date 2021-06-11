This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Step for activating tailwind css IntelliSense

In case the Tailwind IntelliSense plugin is not working try to install

- 'IntelliSense for CSS class names in HTML',
- 'HTML CSS Support',
- 'CSS Peek'

* 'vscode-styled-components'

and restart VS Code with cmd + shift + P

View Search.excludes and look for node_modules folder.

Add these line code is settings.json file:

```
{
  "scss.validate": false,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.autoClosingQuotes": "always",
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw=\"([^\"]*)", // <div tw="..." />
    "tw={\"([^\"}]*)", // <div tw={"..."} />
    "tw\\.\\w+`([^`]*)", // tw.xxx`...`
    "tw\\(.*?\\)`([^`]*)" // tw(Component)`...`
  ],
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

Look for twin.macro and styled components issues with IntelliSense.
