# EquiSports: A Sports Equipment Store  

Welcome to the **EquiSports Project**, an e-commerce platform designed to provide a seamless shopping experience for sports enthusiasts. Whether you're a professional athlete or just starting out, EquiSports offers a wide range of sports accessories, gear, and apparel tailored to meet your needs.  

Our platform focuses on delivering a responsive and user-friendly interface where customers can browse, purchase, and review products effortlessly. Equipped with advanced features like user authentication and an efficient product management system, EquiSports ensures a secure and smooth shopping experience for everyone.  


## Key Features  

1. **Responsive UI**  
   - A mobile-first design ensures a smooth and engaging shopping experience across all devices.  

2. **Firebase Authentication**  
   - Secure login and account management for customers.  

3. **Equipment CRUD**  
   - Admins can perform Create, Read, Update, and Delete operations on sports equipment.  

4. **User-Based Equipment CRUD**  
   - Registered users can manage their own listed products, enhancing the platform's versatility.  

5. **Private Routes**  
   - Protects sensitive pages and features, ensuring only authenticated users can access them.  

6. **Dark/Light Mode**  
   - A theme toggle feature on the home page allows users to switch between dark and light modes for a personalized experience.  


## Vision  

The EquiSports platform aims to become the go-to destination for athletes of all levels by providing a comprehensive and reliable source for sports equipment. With features designed to cater to both buyers and sellers, we aspire to build a community that fosters growth, performance, and accessibility in sports.  

## Technology Stack

### Frontend (Query-Client)
- **React**: Framework for building the platform’s user interface.
- **DaisyUI & Tailwind CSS**: Tools for creating a responsive and visually appealing design.

### Backend (Query-Server)
- **Node.js**: Manages server-side logic and API interactions.

### Database
- **MongoDB**: Stores and organizes user queries, recommendations, and comments.

### State Management
- **Context API**: Ensures smooth and consistent state management across the application.


## Dependencies

### Client Side (Query-Client)
#### **Dependencies**
-   "@emotion/react": "^11.13.5",
-   "firebase": "^11.0.2",
-   "localforage": "^1.10.0",
-   "lottie-react": "^2.4.0",
-   "match-sorter": "^8.0.0",
-   "react": "^18.3.1",
-   "react-awesome-reveal": "^4.2.14",
-   "react-dom": "^18.3.1",
-   "react-helmet-async": "^2.0.5",
-   "react-icons": "^5.4.0",
-   "react-router-dom": "^7.0.2",
-   "react-toastify": "^10.0.6",
-   "react-tooltip": "^5.28.0",
-   "sort-by": "^1.2.0",
-   "sweetalert2": "^11.14.5",
-   "swiper": "^11.1.15"

#### **DevDependencies**
-   "@eslint/js": "^9.15.0",
-   "@types/react": "^18.3.12",
-   "@types/react-dom": "^18.3.1",
-   "@vitejs/plugin-react": "^4.3.4",
-   "autoprefixer": "^10.4.20",
-   "daisyui": "^4.12.14",
-   "eslint": "^9.15.0",
-   "eslint-plugin-react": "^7.37.2",
-   "eslint-plugin-react-hooks": "^5.0.0",
-   "eslint-plugin-react-refresh": "^0.4.14",
-   "globals": "^15.12.0",
-   "postcss": "^8.4.49",
-   "tailwindcss": "^3.4.16",
-   "vite": "^6.0.1"


### Server Side (Query-Server)
#### **Dependencies**
- `cors`: ^2.8.5
- `dotenv`: ^16.4.7
- `express`: ^4.21.1
- `mongodb`: ^6.11.0


## Instructions for Running the Project Locally

### Frontend (Query-Client)
1. **Navigate to the `query-client` folder:**
-   `cd query-client`
2. **Install the dependencies:**
-   `npm install`
3. **Create/Replace .env.local (Rename .env.example to .env.local ):**
-   Add your Credentials Here !
4. **Start the development server:**
-   `npm run dev`
5. **Access the application:**
-   Open your browser and navigate to `http://localhost:5173`.

### Backend (Query-Server)
1.* Navigate to the query-server folder:*
-   `cd query-server`

2. **Install the dependencies:**
-   `npm install`
3. **Set up environment variables:**
-   Create a .env file in the query-server directory.Add your Credentials Here. simillar to .env.example.
4. **Start the backend server:**
-   `npm run start` or install nodemon globally!
5. **Verify the server is running:**
The backend server will be accessible at http://localhost:5000 or (http://localhost:port)

# Website
-   EquiSports: A Sports Equipment Store  
-   Live Site Link : https://progheroa10.web.app
-   Screenshot

![Application Screenshot](/screenshot.png)