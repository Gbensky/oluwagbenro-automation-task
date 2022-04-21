## Automation Tests

### Test Scenarios

#### Scenario 1

- Search with valid Text

###### Reason: 
This is literally the happy path of the search functionality if this fail
then the search functionality will be useless to users.

###### Implementation Steps: 
- Enter a valid Text in the search box
- Click the search box
- Review Corresponding results by ensuring that search text is present in
all search result

#### Scenario 2

- Search with Invalid Text

###### Reason: 
 Users shouldn't be spammed with results that are not including the
search text. This way the user knows to refine the search text.

###### Implementation Steps: 
- Enter an invalid Text in the search box
- Click the search box
- Review Corresponding results by ensuring that no result is returned.

### Automation Frameworks

#### E2E UI Framework

**Cypress:** This was used because it is one of the most stable framework for Web application.
It was built to cater to the asynchronous behaviour of Javascript which is used majorly in 
building web applications. This ensures that flaky tests do not occur as Cypress only runs
the tests when the Web application is fully loaded. Cypress is also very easy to install and maintain.

#### API Framework

**Mocha, Chai, SuperTest:** This combination was used because it is lightweight and easy to install. It
also gives room for building a robust framework as it is easy to build custom functions and methods.

### Running Tests

#### Prerequisite
- Ensure Node is installed on user's system.

##### Node Installation
Visit https://nodejs.org/en/download/
- **For Windows:** Download Windows Node Installer and Run it
- **For MacOs:** Download Windows Node Installer or run ```brew install node```
if brew installed on your commandline
- **For Linux (Ubuntu):** Run ```sudo apt install nodejs``` and ```sudo apt install npm```
- Confirm installation by running ```npm --version```

#### Running UI Tests

- cd into frontend directory
```cd frontend```
- Install Packages
```npm install```
- Run tests (GUI)
```npm run open```
- Run tests (Headless)
```npm run headlessRun```

#### Running API Tests

- cd into backend directory
```cd backend```
- Install Packages
```npm install```
- Run tests
```npm run PetStoreAPI```