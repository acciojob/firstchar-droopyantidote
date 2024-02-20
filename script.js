function firstChar(text) {
  // Check if the input text is empty or contains only spaces
  if (text.trim() === '') {
    return '';
  }

  // Loop through the characters in the text
  for (let i = 0; i < text.length; i++) {
    // If the current character is not a space, return it
    if (text[i] !== ' ') {
      return text[i];
    }
  }

  // If no non-space character is found, return an empty string
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
