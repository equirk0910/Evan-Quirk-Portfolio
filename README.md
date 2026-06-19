# Portfolio App (Node/Express)

Minimal scaffold for a portfolio app deployable to Heroku.

Local run

```bash
npm install
npm start
```

Deploy to Heroku (Dashboard / GitHub integration)

1. Initialize a Git repo and push to GitHub.
2. In the Heroku Dashboard create a new app.
3. Under "Deploy", connect your GitHub repo and enable automatic deploys or manually deploy the main branch.
4. In "Resources" scale the `web` dyno and choose a paid plan (Eco or higher) if you want the app to be always-on.

Optional: install Heroku CLI on macOS

```bash
brew tap heroku/brew && brew install heroku
```
