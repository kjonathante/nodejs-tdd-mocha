# nodejs-boilerplate

### eslint
```
npm install -g --save-dev eslint
eslint --init 
# select config in js
# .eslintrc.js
```

### codeship
1. Go to codeship & Sign in.
2. Create new project & connect it to a GitHub repo.
3. Go to snyk's account settings to retrieve auth key.
4. Add the following to the project settings / setup commands
```
npm install -g eslint snyk
snyk auth xxxxxxxxxxxxxxxxxxxx
npm install
npm test
```
5. Setup Deploy
