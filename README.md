# CRUD Application


This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and MongoDB. It allows users to manage records in various categories.

## Project Overview

- The application is designed to manage records in different categories.
- Users can create, view, edit, and delete records.
- Records can be categorized and filtered by their status.
- Users can sign up, log in, and log out.

# To Run Project
 - npm start 
# folder structure

- /app
- config
    -middleware
    -passport_locals
     -mongoose 
  - /controllers
    - authController.js
    - recordController.js
  - /models
    -category.js 
    - User.js
    - Record.js
 -Routes/
    -index.js
    -user.js
    -record.js
  - /views
    
      - layouts.ejs
    
      
      - login.ejs
      - register.ejs
    
      - index.ejs
      - create.ejs
      - edit.ejs
- app.js

## Endpoints
- http://localhost:3000/user/getRegistrationForm
- http://localhost:3000/user/getLoginForm
- http://localhost:3000/records/getcreate
- http://localhost:3000/records/recordList
- http://localhost:3000/records/details/64f1e17af1e5e6c11aa888
- http://localhost:3000/records/getrecordbyId/64f1e17af1e5

# imges of application
# sign up page image with error message





![Screenshot (73)](https://github.com/manojkalyan/CURDAPP/assets/70328306/ca8b5010-9f05-40cb-a8dd-25a848706c86)

# login page image 

![Screenshot (74)](https://github.com/manojkalyan/CURDAPP/assets/70328306/c82e5b60-b5ca-4ad7-accf-6d9844169518)

# create new record with dropdown  fetched category from table
![image](https://github.com/manojkalyan/CURDAPP/assets/70328306/71a0e877-0a1c-4d76-9ae3-13bf8b08e7f2)


![Screenshot (76)](https://github.com/manojkalyan/CURDAPP/assets/70328306/af28cd10-33ac-49a5-bcce-623e07eac908)
# list of records with active/inctive and name filter


![Screenshot (77)](https://github.com/manojkalyan/CURDAPP/assets/70328306/51308a5b-5f69-4eb3-ba99-53342d835549)
# Individual Record Details with update and delete

![Screenshot (78)](https://github.com/manojkalyan/CURDAPP/assets/70328306/2e318d4c-c791-48ff-8dab-83ca3dc78a5e)
# update record
![Screenshot (79)](https://github.com/manojkalyan/CURDAPP/assets/70328306/a5862739-9161-4104-8377-a1b744774709)
# . Bulk delete can be done from the list of records
![Screenshot (80)](https://github.com/manojkalyan/CURDAPP/assets/70328306/41b1ad71-5bc1-446d-a276-0a119029a132)

