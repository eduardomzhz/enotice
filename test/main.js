window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', initDemo);
  showCode(getMessage(), getOptions());
};

function createNotice(message, options) {
  const en = new eNotice(message, options);
}

function initDemo() {
  const message = getMessage();
  const options = getOptions();
  showCode(message, options);
  createNotice(message, options);
}

function getOptions() {
  return {
    color: document.getElementById('color').value || 'black',
    duration: document.getElementById('duration').value || null,
    stack: document.getElementById('stack').value || 'last',
    position: {
      x: document.getElementById('position-x').value || 'right',
      y: document.getElementById('position-y').value || 'top'
    }
  };
}

function getMessage() {
  return document.getElementById('message').value || 'This is an eNotice example!';
}

function showCode(message, options) {
  document.getElementById('message-value').textContent = '"' + message + '"';
  document.getElementById('color-value').textContent = '"' + options.color + '"';
  document.getElementById('duration-value').textContent = options.duration || '"null"';
  document.getElementById('stack-value').textContent = '"' + options.stack + '"';
  document.getElementById('x-value').textContent = '"' + options.position.x + '"';
  document.getElementById('y-value').textContent = '"' + options.position.y + '"';
}
