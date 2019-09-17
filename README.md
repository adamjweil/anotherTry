Project Management Tool for small to medium sized companies

- Description

Tech Stack: ReactJS, Redux, Node, MongoDB, Custom Middleware

Front End: Had originally used material-ui to style everything, but as I continued to style components, I found increasing limitations. So I'm in the midst of using Material-UI instead

1. Users can register an account
   1a. Users are redirected to appropriate page after
   1b. Users can Login
2. User is then instructed to create Profile
   2 a. Redirected to Profile after creation
3. Users can submit a Ticket
4. Users can join a team
5. Users can view tickets


    9/12
    - Switched from using Semantic-UI to Material-UI
    - Got the Landing Page, and Login component working
      - You can Login with new form
    - Logout action is working
    - Snackbar Component Created
      - Positive / Negative and Neutral (depending on message)
      - Reducers / actions set up so that these are triggered correctly
    - Cleaned up the Login Component (borders, bgcolor), the Navbar (Online Portal image links to homepage, there is now a link to directory from main page)

      -> LOOK INTO
      - SnackBars
      - Attaching something to a ticket request

    9/14
    - Added the SnackBars for Success, Info, and Error Messages
      - Very cool addition
    - Registration with the new form is finally working. I still need to have it redirect to the User Profile page correctly

    9/16
    - After registration, the page redirects to the User Profile page, as expected
    - Profile components have been split up to better organize the page
      - The Avatar and Profile details are now in seperate components, along w/ this new form
    - On the righ 8/12th of the screen I have started to implement the View portion of the Profile Creation form
      - The Basic Information portion of the Form is complete, and there are placeholders for the rest
    - Brought in fetchUsers function into the Profile Page so that we can display names in the dropdown for when you select direct reports and reporting to
    - On the Profile Creation form I brought in a DatePicker for the HireDate state


    TO DO
    - Create Profile Component
      - Build the View
        - Totally clean up the Avatar card,
        - + any additional Profile Card components
        -
      - Multi Step form
      - Be able to select from a list of existing Users (this will be challenging)
      - Server end Profile creation
      - Redux Integration
    - Create Ticket Component
      - Build the View
      - Server end Profile creation
      - Redux Integration

      - Form for Creating Profile
      https://material-ui.com/getting-started/templates/checkout/
