`Assignment Category: Lotus`
# EquiSports: (A Sports Equipment Store)
## Project Theme
You are tasked with developing a Sports Equipment Online Store. The goal is to create a responsive website. This is a sports accessories e-commerce website, a platform where customers can browse, purchase, and review various sports accessories, from gear to apparel, catering to different sports disciplines. The website will support user authentication and product management.
## Key Rules:
#### GitHub Commits: 
Include a minimum of 15 notable GitHub commits on the client side.
Include a minimum of 8 notable GitHub commits on the server side 
#### Readme.md: 
Add a meaningful readme.md file with the name of your website and a live site URL. Include a minimum of five bullet points to feature your website.  
#### Responsiveness: 
Make it responsive for all devices, including mobile, tablet, and desktop views. 
Environment Variables: The Environment variable hides the Firebase config keys and Mongodb credentials.
#### Lorem Text: 
Don’t use any Lorem ipsum text; you can not use the default alert to show any error or success message. 
#### Unique Design: 
Create a unique Design but remember, your website idea shouldn't be similar to any projects you've done before or to any examples in our modules or conceptual sessions.
You can also look for free resources on [blogs](https://medium.com/design-bootcamp/free-images-and-resources-collection-for-website-c77f2fc46ce5) to help with your website.
#### Host your Application: 
You can choose deployment systems like Netlify, Surge, and Firebase for client-side hosting and vercel for server-side hosting. As you develop a single-page application.  
Ensure the page doesn't throw any error when reloading from any routes.  

- Add your domain for authorization to Firebase if you use Netlify / surge
Logged in User must not  redirect to Login on reloading any private route 
## Main Requirements:
### Navbar:
The navbar will contain:
Website name/logo
### Home
-   All Sports Equipment
-   Add Equipment (Private Route)
-   My Equipment List (Private Route)
-   "Login" and "Register"
-   The "Login" and "Register" buttons are conditional:
-   If the user is not logged in, show "Login" and "Register".
-   If the user is logged in, show their photoURL, displayName on hover, and a "Log Out" button. 

### Footer:
Create a meaningful footer with website name, copyright, contact info, and social media links.

### Login Page:
-   Email, Password, and one additional authentication method (Google/GitHub/Facebook/Twitter). 
`After submitting incorrect credentials, show an error using a toast/sweet alert. (Sweet Alert)`

### Register Page:
Fields: **Name, Email, PhotoURL, Password**.

`Password validation: Must contain uppercase, and lowercase letters, and be at least 6 characters long.`

-   Upon successful registration or login, a success message will appear. (Sweet Alert)

🎯  Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

### Home Page:
The homepage will contain:
-   Navbar, Banner/Slider, Product section, Sports Categories section, and Footer.
-   The banner should have a slider with at least 3 slides featuring meaningful content.
-   The product section will display at least 6 product cards with a "View Details" button. 
-   For showing 6 data you can use the limit operator of MongoDB 
-   Add at least 2 additional meaningful sections. 

### Add Equipment Page: (Private Route) 
Create a form to add data to the database including the following fields
-   Image, 
-   Item Name, 
-   Category Name,
-   Description, 
-   Price, 
-   Rating, 
-   Customization (bat with extra grip, hit paper etc), 
-   Processing Time (delivery time), 
-   Stock Status (available product quantity), 
-   User Email (logged-in user email, read-only), 
-   User Name (logged-in user name, read-only).
This will be a private route.
After successfully adding the data to the database show a successful message.

### All Sports Equipment Page: 
-   Display all equipment in a table format.
-   Show some details about the product like name, category, price, etc
-   And added a view details button
-   On Clicking on the view details button the user will redirect to the view details page. 

### View Details Page: (Private Route) 
-   Show all details of an item in any format. Format mean design. You can use a card or something else which will look beautiful. 
**This will be a private route.**

### My Equipment List: (Private Route) 
-   Display all equipment added by the logged-in user in card format and show the data in the card as you want. 
-   Include the Update and Delete buttons.
-   On Clicking the update button user will be redirected to the update page
-   On Clicking the delete button a confirmation modal will be opened and after confirmation, the data will be deleted. 

### Update Page: (Private Route) 
Create a form with all the required fields you have taken in the Add Equipment Page that the user will use to update the data. User Email and User Name will be read-only. 
After submission, show a confirmation message for a successful update.

### 404 Page:
Add a 404 page for non-existing routes.

### Loading Spinner:
Show a loading spinner while data is being loaded.

### Challenges Requirements:

-   At the top of the All Sports Equipment page, there will be a button where you will implement sort functionality based on “price”.  You can sort by ascending or descending or, it’s up to you. 
-   Implement a dark/light theme toggle on the homepage.

Explore these packages and implement at least two:

-   Lottie React
-   React Awesome Reveal
-   React Tooltip 
