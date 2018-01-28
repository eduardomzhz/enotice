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
animation | string | pulse | Animation when appears in screen. | pulse, shake, slide-up, slide-down, slide-left, slide-right
color | string | black | Border and background color. | black, blue, gray, green, purple, red, white, yellow
duration | number | null | Time displayed in milliseconds before closing itself, null will not close. | 
position.x | string | right | Horizontal position in the window. | center, left, right
position.y | string | bottom | Vertical position in the window. | bottom, top
stack | string | last | Position to be stacked. | first, last
onClose | function | this.delete | Callback function to run after close. | 

### Methods
`close()` - Removes the notification from the DOM.

`delete()` - Converts the instance to an empty object.

`show()` - Shows the notification in the screen.

A demo can be found in  `/test`.
