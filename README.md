### EZwriter
vanilla js typewriter !

![Alt Text](./demo/ezwriter.gif)

[========]

### How to use
First install package via npm : 
`npm install ezwriter`

in html file create span and assign it an id :
```html
<h1>Hello <span id="EZwriter" data-words="World!,Sina!,John!"></span></h1>
```

assign words to data-words attribute and then split them by comma

then import
```javascript
import EZwriter from 'EZwriter';
const EZwriter = new EZwriter({
    selectedElement: 'EZwriter', // element id
    timeTowaitUntilNextWord: 3000, // ms
});
```

### unpkg
`<script src="https://unpkg.com/ezwriter@1.0.0/build/index.js"></script>`
```javascript
const EZwriter = window.EZwriter.default;
const ez = new EZwriter({
	selectedElement: 'EZwriter', // element
    timeTowaitUntilNextWord: 3000, // ms
});
```

[========]




