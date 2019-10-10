--> ###Project Management Tool for small to medium sized companies

Description

# Tech Stack: ReactJS, Redux, Node, MongoDB, Custom Middleware

## Front End: Had originally used Semantic-UI to style everything, but as I continued to style components, I found increasing limitations. So I'm in the midst of using Material-UI instead

User Stories

1. Users can register an account
   1a. Users are redirected to appropriate page after
   1b. Users can Login
2. User is then instructed to create Profile
   2 a. Redirected to Profile after creation
3. Users can submit a Ticket
4. Users can join a team
5. Users can view tickets
6. Users can create tickets


    #9/12
    - Switched from using Semantic-UI to Material-UI
    - Got the Landing Page, and Login component working
      - You can Login with new form
    - Logout action is working
    - SnackBar Component Created
      - Positive / Negative and Neutral (depending on message)
      - Reducers / actions set up so that these are triggered correctly
    - Cleaned up the Login Component (borders, bgcolor), the Navbar (Online Portal image links to homepage, there is now a link to directory from main page)

      -> LOOK INTO
      - SnackBars
      - Attaching something to a ticket request

    #9/14
    - Added the SnackBars for Success, Info, and Error Messages
      - Very cool addition
    - Registration with the new form is finally working. I still need to have it redirect to the User Profile page correctly

    #9/16
    - After registration, the page redirects to the User Profile page, as expected
    - Profile components have been split up to better organize the page
      - The Avatar and Profile details are now in Separate components, along w/ this new form
    - On the right 8/12th of the screen I have started to implement the View portion of the Profile Creation form
      - The Basic Information portion of the Form is complete, and there are placeholders for the rest
    - Brought in fetchUsers function into the Profile Page so that we can display names in the dropdown for when you select direct reports and reporting to
    - On the Profile Creation form I brought in a DatePicker for the HireDate state
    - Set up the Bio and Skills section of the CreateProfile form
      - Bio is 'Outlined' multiline TextArea
      - Skills needs to be a multi-select

    #9/23
    - Finally starting to understand the difference between functional and pure components, and why that actually plays a super important role in how you structure your application.
      - I've since needed to go back and re-factor the 'Directory' and 'Profile' pages, and currently working on ticket page.
    - Scrapping multi-step form for the moment so I can just get the profile form working and move on to tickets.
    - Completed Profile Form

    #9/26
    - Need to have the createProfile action actually create a profile in server

    #9/30
    - createProfile action is now actually creating a Profile Object. The object is sitting in State, however. I need to make sure it gets picked up by the database so that it can be fetched properly
    - Fixed the MenuItem Icon on the left side of NavBar so that when clicked, the correct dropdown list shows up
      - Also removed from previous location
      - Clicking buttons in the dropdown is behaving as expected

    #10/01
    - Okay so FINALLY I have my MongoDB interacting with redux on the front end for the creation of profiles. For whatever reason, it was much easier to connect the login and register functionality (which included creating DB models for uses...), so maybe I was just missing something with this. Seems to be working now

    #10/07
    - Profiles are now being saved in the MongoDB. The most difficult part of this was to have the profiles not only save to the DB correctly while updating state alongside each other, but also making sure that I'm storing ObjectIDs on models correctly so that I can get comfortable with the non-relational aspect of mongoDB

    #10/08
    - Login and Registration pages now cleaned up.
      - The Login/Reg components on the landing page are centered
      - Got rid of the ugly "Online Portal" text below the company logo
      - Updated the 'back to login' button on the registration form
    - Directory page was previously just pulling all of the users from the database. I have now styled it, so you can actually tell who the users are.
      - Down the line, these will link to their individual profile pages.
    - Wireframing and setting up the TicketForm component is about half done. I have brought most of everything together, I just need to organize the values and make sure they're communicating with my store and server accordingly...

    #10/09
    - Footer set up on the Landing Page, as well as the Registration Page
    - Ticket form has been updated to include even more of the variables needed for tickets to be submitted. The next step is to actually wire up
    - The Profile Card is now updating as expected when you submit the profile form. I wasn't destructuring PROFILE object from the PROFILE array, and so all the values I was looking for were undefined. Was much harder to debug then I wouldve thought. Took a while to figure this out

    #10/10
    - Set up Ticket Reducers, Actions, and routes. I had already had a model set up for Tickets, but it did need to be changed around slightly. Now that all of these variables are included in the application state, I need to make sure theyre saving correctly to the database.
    - After reading a bunch of Medium articles on UX and some fundamental tools to become a better designer, and started to implement some of those. One example is throwing a box shadow the Login and Register Components, rather than having a Border width specific to each side (which was a super hacky alternative, that I didnt like at all). These box shadows look much better
      - I also started to play around with using color and weight as a way to formulate my information heirarchy, rather than relting on font size all the time. This makes the site much much more visually appealing, and I plan on playing around with these ideas a lot more going forward

    ##TO DO
    - Dropdown of Users from the database. I need to have the Users first + last name dispay, however, and those variables are stored on the Profile Object, which is indirectly atached to the User
    - Styling Ticket form
    - Fetching tickets
    - DashBoard
      - Get the layout wire-framed out
    - oAuth integration on top of in app authentication

      - Form for Creating Profile
      https://material-ui.com/getting-started/templates/checkout/
