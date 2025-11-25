# ToDo App: Revised Edition

A revised version of the ToDo App project, as outlined by The Odin Project.

Live Preview: https://kaito24mako.github.io/ToDo-App-Revised/

## Skills

**HTML and CSS**
- Creating dialogs and forms
- Formatting dates
- Using ESLint and Prettier for cleaner coding

**JavaScript**
- Saving data into localStorage (e.g., setItem, getItem) 
- Using classes to create templates for todo tasks
- Using different modules and exporting/importing to organise JavaScript files
- DOM manipulation
- Array methods and functions (e.g., findIndex, splice, sort, filter, push)
- Looping through an array 
- Formatting dates

## Credit

## Deployment Instructions

Live Server: http://localhost:8080/

- Make a new branch to deploy from by running < git branch gh-pages >. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.
- Make sure you have all your work committed. You can use < git status > to see if there’s anything that needs committing.
- Run < git checkout gh-pages && git merge main --no-edit > to change branch and sync your changes from main so that you’re ready to deploy.
- Now let’s bundle our application into dist with your build command. For now, that’s < npx webpack >.
- Now there are a few more commands. Run each of these in order:
  - < git add dist -f && git commit -m "Deployment commit" >
  - < git subtree push --prefix dist origin gh-pages >
  - < git checkout main >
- Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the gh-pages branch. That should be everything!

Checklist when initiating new project:

- Update Files
  • Edit package.json:
  • name and description.
  • Check Webpack entry in webpack.common.js or webpack.config.js
- Structure Code
  • Keep src/index.js as entry
  • Create new folders in src
  • Import modules in index.js
- Clean & Verify
  • Run npm install
  • Run npm start → confirm dev server works
  • Commit base setup → git add . && git commit -m "Setup ToDo List base from template"
- Optional
  • Update ESLint/Prettier configs (if included)

Scripts:

- npm start → develop and test locally
- npm run build → bundle for production (creates fresh /dist)
- npm run deploy → push the new /dist to GitHub Pages
