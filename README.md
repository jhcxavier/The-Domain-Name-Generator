# Hello World with Vanilla JS

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git)

> Requirements: Make sure you have node version 8

##### Remember to install the npm packages first:
```
$ npm install
```

## Build and Start coding!

Build the application for the first time...

```
$ npm run start (for Gitpod, linux, mac or windows users)
$ npm run c9 (for c9 users)
```
And start coding your Vanilla.js application, update the `src/index.html`, `src/index.scss` or `src/index.js` depending on your needs.

## FAQ

#### 1) How do I run my code?

- If you are in Gitpod: Just `$ npm run gitpod` and click on Open Browser.
- If you are in your own environment `$ npm run start` and type localhost on the browser.
- If you are in Cloud9: Just `$ npm run c9` and click on Preview -> Preview Running Application.  
![Preview in C9](https://ucarecdn.com/1587e11e-1af0-4f21-a695-ce886db80e6f/)

#### 2) Where do I write my code?
It depends on the language, but you have `./src/js/index.js`, `./src/style/index.scss` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

__Note:__ remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (its a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?
Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?
Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?

This boilerplate is 100% compatible with the free github pages hosting. Publish your website by runing:
```sh
$ npm run deploy
```

Very easy and in just one step!  Push to your __master__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.
