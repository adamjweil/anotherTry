# Project Management Tool for small to medium sized companies

### Description:

# Tech Stack: ReactJS, Redux, Node, MongoDB, Custom Middleware

## Front End: Had originally used Semantic-UI to style everything, but as I continued to style components, I found increasing limitations. So I'm in the midst of using Material-UI instead

User Stories:

1. Users can register an account
   1a. Users are redirected to appropriate page after
   1b. Users can Login
2. User is then instructed to create Profile
   2 a. Redirected to Profile after creation
3. Users can submit a Ticket
4. Users can join a team
5. Users can view tickets
6. Users can create tickets

---

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
    - Wire-Framing and setting up the TicketForm component is about half done. I have brought most of everything together, I just need to organize the values and make sure they're communicating with my store and server accordingly...

    #10/09
    - Footer set up on the Landing Page, as well as the Registration Page
    - Ticket form has been updated to include even more of the variables needed for tickets to be submitted. The next step is to actually wire up
    - The Profile Card is now updating as expected when you submit the profile form. I wasn't de-structuring PROFILE object from the PROFILE array, and so all the values I was looking for were undefined. It was much harder to debug then I would have thought. Took a while to figure this out

    #10/10
    - Set up Ticket Reducers, Actions, and routes. I had already had a model set up for Tickets, but it did need to be changed around slightly. Now that all of these variables are included in the application state, I need to make sure they're saving correctly to the database.
    - After reading a bunch of Medium articles on UX and some fundamental tools to become a better designer, and started to implement some of those. One example is throwing a box shadow the Login and Register Components, rather than having a Border width specific to each side (which was a super hacky alternative, that I didn't like at all). These box shadows look much better
      - I also started to play around with using color and weight as a way to formulate my information hierarchy, rather than relying on font size all the time. This makes the site much much more visually appealing, and I plan on playing around with these ideas a lot more going forward

    #10/14
    - Have had a busy few days, so haven't had as much time coding as id like to have. I was able to log in today to focus on cleaning on the Navbar buttons, so it it more visually appealing... since all functionality isn't there yet...

    #10/15
    - Finished the design and implementation of the final NavBar for both Authenticated and Unauthenticated users
    - Forgot Password text is now different format than the click here button, which makes it look nicer
    - I've made the Registration Form to be in line with what the Login form is setup to look like, to bring some consistency to the application
    - Added conditionality to the NavBar pages, so that when you are on a particular page, the button will be underlined. Still working out styling, but the logic and configuration is set up and working

    #10/16 - 10/18
    - Learned how to properly redirect after an action is dispatched, utilizing the history tool provided by react router dom.
    - Profile Form is now complete, and it being displayed on the Dashboard Page when you login
    - After completing the Profile Form, the redirect comes into play, because now you are being sent to your own new Profile Page.
    - Updates to the ProfileCard have been made to include updated scheme for the ProfileModel
    - The CLEAR_SNACKBAR action reducer are now working properly
    - ProfileForm is now complete, and upon registering a new user, you are redirected to the Dashboard page, which will display the Profile Form, if there is no Profile for that User found


    $10/21
    - User is now able to fill out the new ticket form, and sbumit it successfully. This includes the following:
      - The onClick event is attached to an ActionCreator, which triggers the reducer to get dispatched
        - This single action adds the ticket into the array of tickets held in my store
        - The ticket is also asyncronycly posted to a mongoDB table where it can be persisted going forward
      - A key point here is that my redux store always needs to be matching my database

    #10/22
    - In order for Users to be able to create relationships between other users (ie, being on the same ticket) or referencing, I needed to make a Select component that retrieves all of the Profiles from state, and displayed them in a Dropdown for the User to select from
    - Owner, Fixer, and Tested have beed added to the ticket form

    #10/26
    - Directory page is now pulling in profiles
      - Fixed
    - Built component to display tickets
    - Progress on TicketForm

    #10/30
    - Enhanced ticket form (now includes the correct fields, including summary and description)
      - Submitting to server sometimes but other times running into errors
      - Not updating the ticket list below when it submits
    - Added Teams collection into database, and seeded it with all of the teams I run into here.
      - The User can now select a DB-ID object on the ProfileForm when selecting a team, rather than just a string
    - ProfileCard component has been refactored and simplified
    - Removed duped actions, like loadCurrentProfile and fetchProfile
    ---

    ##TO DO
    - Complete Ticket Form
    - Build out the component that will be displaying all of the Tickets
      - It can be of similar size to the one I created for ProfileForm
    - Dropdown of Users from the database. I need to have the Users first + last name display, however, and those variables are stored on the Profile Object, which is indirectly attached to the User
    - Styling Ticket form
    - Fetching tickets
    - oAuth integration on top of in app authentication
    - GraphQL Integration

      #Form for Creating Profile
        https://material-ui.com/getting-started/templates/checkout/

      #React Docs
        https://reactjs.org/tutorial/tutorial.html

      #GraphQL Docs
        https://github.com/the-road-to-graphql/react-apollo-client-with-redux-example
      Part #1 in 3-Part Tutorial
        https://www.robinwieruch.de/react-apollo-client-example
          (sing Apollo Client with GraphQL)

    https://www.youtube.com/watch?v=NWod5SFW13s

https://www.youtube.com/watch?v=DU77lbBPfBI
mongodb+srv://brad123:brad123@devconnector-cfb3y.mongodb.net/test?retryWrites=true&w=majority
