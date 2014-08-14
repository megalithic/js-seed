JS Seed
============

A somewhat opinionated JS Seed/Starter Kit relying on Gulp + Browserify. A lot of this was born out of this [blog post](http://viget.com/extend/gulp-browserify-starter-faq). Please refer to it for more info on the libs used for creating this lil slice of JS development heaven.

I mentioned "opinionated" because I like React JS right now and this 'starter
kit' builds out a React and Re(Flux)-ready app

Includes the following tools, tasks, and workflows:

- Browserify (with browserify-shim)
- Watchify (caching version of browserify for super fast rebuilds)
- Compass
- React (JSX compilation to JS)
- jQuery (from npm)
- Non common-js vendor code (like a jQuery plugin)
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center
- Superagent (from npm) for super clean and lightweight AJAX business
- Jest for test running (Jasmine for writing your tests)
- project-based .vimrc (`<leader>t` gets you test running if you prefer not to have auto-watched test running).

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.
```
gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:3002 to view the test page.

### Run tests
```
# NOTE: ensure `gulp` is running already
gulp test
```

### TODO

- migrate to stylus instead of compass (less dependency on ruby)
- add more stubbed out modules for flux/reflux/fluxxor architecture
