# time-convector

The time-convector library provides utility functions for converting time between human-readable format and milliseconds.

## Installation

You can install the time-convector library using npm: `npm install time-convector`

## Usage

```javascript
const {
  convertToReadableFormat,
  convertToMilliseconds,
} = require('time-convector');

// Convert milliseconds to human-readable format
convertToReadableFormat(114048000000); // Output: 3Y 8M 23h

// Convert human-readable time to milliseconds
convertToMilliseconds('44M'); // Output: 114048000000

// you can combine this functions
convertToReadableFormat(convertToMilliseconds('44M')); // Output: 3Y 8M 23h
```

## convertToReadableFormat(milliseconds)

This function takes a time duration in milliseconds as input and returns a human-readable format representing years, months, days, hours, minutes, and seconds.

## convertToMilliseconds(timeString)

This function takes a human-readable time duration string as input and returns the equivalent duration in milliseconds.
The string should be in the format of <number><unit>, where the unit can be 'Y' for years, 'M' for months, 'D' for days, 'h' for hours, 'm' for minutes, and 's' for seconds.

# Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub to improve this library.

# License

This library is licensed under the ISC License.
