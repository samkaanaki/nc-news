Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of Reddit.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This review sprint should consolidate your understanding of making a C.R.U.D application from a front end perspective.

Note: You will come across a Cross-Origin-Resource-Sharing error once you start fetching data from your back-end API, which will need a slight update: Express CORS Middleware

Objectives
Pull together all the front-end skills, technologies and best practises you have learnt.
Make asynchronous API calls to your own server.
Use HTTP request types to interact with your backend, and HTTP response codes to update your UI accordingly.
What to do
Use the generic react-project-checklist as a guide to setting up your app. Here are some project-specific things to bear in mind:

Have a look at your API endpoints and at Reddit. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?
Think how you will isolate the concerns of your project - the structure of your components, the sourcing of your data, the styling.
What sort of routing does Reddit use? What sort of specificity do you think you will need? Remember, your urls don't have to directly correspond to your api endpoints, but they will provide some guidance.
Think about what data each component will need. Where will it come from? When should components find their own data and when should they load it themselves? Focus on loading a list of articles for your front page first of all.
Consider more complex functionality: how do you want to allow changes to your database? Think about how you will attribute users to posted comments etc. How will you know what comments/articles a user should be allowed to delete? How about sorting data, or paginating responses? A good starting point would be to pick a single user and assuming that all new articles and comments are being posted by that user.
How are you going to make this a fluid and engaging experience for users, so they want to come back for more?
'Must Have' User Stories
You should implement the following functionality in your website. Check the lecture calendar to see when any new topics will be covered, but feel free to have a go at them beforehand as well!

Before moving onto the 'if time' and 'extra credit' sections of this readme, follow go to the Deployment section bellow, and then submit your code for review! Please send a link to both your GitHub project repository and your hosted website to your reviewer 😀

As a user, I should be able to...

✅ view a list of all articles <br>
✅ view a page for each topic with a list of related articles.<br>
✅ view an individual article.<br>
✅ view an individual article's comments.<br>
sort articles by:<br>
date created<br>
comment_count<br>
votes<br>
✅ post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').<br>
delete my own comments (as a default logged in user. e.g. 'jessjelly').<br>
vote on an article and immediately see the change.<br>
vote on a comment and immediately see the change.<br>
Error-handling: As a user, I should...<br>

see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.<br>
see a 400 error if I go on a invalid article ID.<br>
not be allowed to post a comment if I have not filled in all of the form boxes.<br>
As a hiring partner, I should be able to...<br>

use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).<br>
follow the readme instructions to easily run the project locally.<br>
find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)<br>
find a link to the back-end repository of the project in the readme.<br>
find a link to the hosted version of the back-end project in the readme.<br>
If time, and if you have implemented it in your back-end API...<br>
As a user, I should be able to...<br>

navigate over pages of articles (e.g. using pagination or infinite scroll).<br>
navigate over pages of comments (e.g. using pagination or infinite scroll).<br>
view a list of all articles written by any specific user.<br>
post a new article to an existing topic.<br>
delete my own articles.<br>
Deployment<br>
There are many ways to deploy a React application. The create-react-app docs go into detail on some of the options: https://facebook.<br>github.io/create-react-app/docs/deployment<br>

We recommend Netlify. Check out the netlify-deployment.md file in this repo for a step-by-step guide!<br>

Extra credit - what else do you think would be good for a user to be able to do, here are a couple of suggestions:<br>
As a user, I should be able to see which users have been most active adding articles and comments<br>
As a user, I should be able to sort the users by how popular they are based on an aggregation of their article and comment vote counts
