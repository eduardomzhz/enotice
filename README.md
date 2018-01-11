# eNotice
A simple JavaScript library to create popup notifications

## Usage
It's written in vanilla JavaScript, so doesn't have any dependencies.
Just include the `.js` and `.css` in the HTML:
```html
<link rel="stylesheet" href="enotice.css">
<script src="enotice.js"></script>
```
Each notification is an instance of the `eNotice` class the text message and the configuration options as parameters: 
```javascript
let en = new eNotice(message, options);
```
### Options
Name | Type | Default | Description | Values
------------ | ------------- | ------------ | ------------ | ------------
color | string | black | Border and background color. | black, blue, gray, green, purple, red, white, yellow
duration | number | null | Time displayed in milliseconds before closing itself, null will not close. | 
position.x | string | right | Horizontal position in the window. | center, left, right
position.y | string | bottom | Vertical position in the window. | bottom, top
stack | string | last | Position to be stacked. | first, last

A demo can be found in  `/test`.
