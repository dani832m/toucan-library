<div align="center">
   <a href="https://github.com/dani832m/toucan-library">
      <img src="https://i.imgur.com/4fVxkbd.png" width="300" alt="Toucan Library" />
   </a><br /><br />
   <img src="https://img.shields.io/github/stars/dani832m/toucan-library?style=social" alt="Stars" />
   <img src="https://img.shields.io/github/forks/dani832m/toucan-library?style=social" alt="Forks" />
   <img src="https://img.shields.io/github/downloads/dani832m/toucan-library/total" alt="Downloads" />
   <img src="https://img.shields.io/github/license/dani832m/toucan-library" alt="License" />
</div>

# Table of contents

- [About](#about)
- [Getting started](#getting-started)
- [Documentation](#Documentation)
- [Contributions](#contributions)

## About

**Toucan Library** is a small CSS and JavaScript library that can easily be integrated into any web project. The library allows the developer to include [UI Elements](#ui-elements) and [Easter Eggs](#easter-eggs), making even the most boring website just a little more fun. Development of the library started in May 2020 and the first release was published in June 2020.

## Getting started

There are two ways you can implement the **Toucan Library** to your project:

1. [Download the files as well as include stylesheet and script to your code.](#download-and-include-files)
2. [Use npm to install the library.](#use-npm-to-install)

### Download and include files

Download the _toucan-library_ folder and place it at the root of your file structure along with your index file.

Include stylesheet in the head section as shown below:

```html
<head>
  <link href="toucan-library/css/toucan-style.css" rel="stylesheet" />
</head>
```

Place the script immediately before the body tag closes as shown below:

```html
<body>
  <!-- Your content -->
  <script src="toucan-library/js/toucan-script.js"></script>
</body>
```

### Use npm to install

If you have Node.js installed, you can download **Toucan Library** using npm as shown below:

```bash
npm install toucan-library
```

## Documentation

### UI Elements

#### Sticky Navbar

Tropic and responsive navigation with nice effects. Add class _'navbar'_ to a nav tag, div tag or whatever you want to make into a toucan navbar and create an unordered list with list items inside as shown below:

```html
<nav class="navbar">
  <ul>
    <li><a class="active" href="#">Home</a></li>
    <li><a href="#">Articles</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">References</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

### Easter Eggs

#### Flying Noisy Toucan

- Press CTRL + ALT + T and a noisy toucan will fly from the right to the left side of the screen.

## Contributions

**Toucan Library** is an open source project developed under the MIT License, and you should be very welcome to contribute to the further development. Make a pull request with your contribution here on GitHub, and I will take a closer look.
