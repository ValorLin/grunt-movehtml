# grunt-movehtml

> Move html file and update reference.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-movehtml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-movehtml');
```

## The "movehtml" task

### Overview
In your project's Gruntfile, add a section named `movehtml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  movehtml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

### Usage Examples

#### Default Options
Project -
 
In this example, the `html/sample.html` would be moved to `/sample.html` and the reference would be updated as well. 

```js
grunt.initConfig({
  movehtml: {
    options: {},
    files: {
      'workspace/sample.html': 'workspace/html/sample.html',
    },
  },
});
```

**original workspace/html/sample.html**
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="../css/sample.css"/>
</head>
<body>
Sample HTML file.
<script type="text/javascript" src="../js/sample.js"></script>
</body>
</html>
```

**after movehtml sample.html**
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/sample.css"/>
</head>
<body>
Sample HTML file.
<script type="text/javascript" src="js/sample.js"></script>
</body>
</html>
```
#### Custom Options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
