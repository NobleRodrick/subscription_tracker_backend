## This is how the project is going through
### 1 - npx express-generator --no-view --git ./
### 2 - we deleted the bin, public and routes folders
### cleanedup the contents within the app, as we are doing everything from scratch

### We install nodemon as a dev dependency as follows: npm install --save-dev nodemon(will always restart our server when we make changes)
### We make this runnign with npm run dev command in order to activate the nodemon(learning is really cool😊)

### We will also install eslint to ensure that our code is always clean and well formatted. this is done with the command: npx eslint --init

### The next step is to install: npm install dontenv which will helop us to retrieve our environment variable

### other installed dependencies are the following
#### - npm install jsonwebtoken, bcrypt

### Revised on the concept of controllers

## What is the workflow - FOR THE REMINDER EMAIL SYSTEM
### Triggering the workflow - The workflow begins whenever a user creates or submits a new subscription. We pass the created  subscription ID too our workflow

### Retrieving subscription details - The process extracts the subscription ID from the context. It then searches for hr corresponding subscription in the database

### Validation checks - If the subscription doesnot exist, an error is logged, and the process  terminates.
#### - If the subscription exists, its status is checked: if inactive, the status is logged, and the process exits and if active, the renewal date is verified
### Renewal date Evaluation
#### If renewal date has passed, it logs this information and exits.
#### If the renewal date is in the future, the reminder loop begins
### Reminder scheduling
#### For each of the predefined reminder: - the reminder date is calculated. If the reminder date is in the future, the system waits until that time.. Once the reminder date arrives (or if it has already passed), the reminder email is sent
### Completion
#### The process repeats for all reminders in the list
#### After processing all the reminders, the workflow concludes.

## We are going to use Nodemailer for the email sending service. It is a free module for node js applications that allow for easy email sending

