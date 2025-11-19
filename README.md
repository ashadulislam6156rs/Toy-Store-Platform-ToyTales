## Project Name: **🧸 ToyTales**
## Project Purpose:
ToyTales is a modern React-based web app where users can view information about various types of toys, learn more, and add their favorite toys.
### Users can also :—
- Can give their own feedback
- If they want, they can send a gift to someone they love.
- And can update and view their own profiles.

#### This project is basically a practical application to learn Firebase Authentication, React Router, and Dynamic Data Handling.

# Live URL :-
- ### Firebase Hosting: [Click Toytales](https://toy-store-platform-toytales.web.app)
- ### Netlify Hosting: [Click Toytales](https://toy-store-platform-toytales.netlify.app/)

## key features
- ***User Authentication:*** Sign Up, Log In, and Password Reset features with Firebase Authentication and Google.
- ***Private Routes:*** My Profile, Send gifts and Toys Details pages cannot be accessed without login.
- ***Dynamic Toy Listing:*** Data is fetched and a list and detail page of various toys is displayed.
- ***Persistent Login:*** Retains the user's login state even when the page is reloaded (using onAuthStateChanged).
- ***Responsive Design:*** Beautiful and responsive layout for all devices—mobile, tab, and desktop.
- ***Error Handling:*** Display a custom error page if 404 or data not found.
- ***Clean UI:*** Attractive interface built with Tailwind CSS and DaisyUI.
- ***Animations:*** Swiper is used for the site's banner and category slider, and Marquee is used for moving image galleries.

## Technologies & npm Packages Used
| Category       | Tools / Libraries          |
| -------------- | -------------------------- |
| Frontend       | React, React Router DOM    |
| Styling        | Tailwind CSS, DaisyUI      |
| Authentication | Firebase                   |
| Animations     | Swiper, React Fast Marquee |
| Icons          | React Icons                |
| Notifications  | React Toastify            |
| Deployment     | Firebase Hosting / Netlify |
| Validation     | PropTypes    
| Data Fetching  | React Axios              |

## Dependencies (Client Side)
```
"dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "axios": "^1.12.2",
    "firebase": "^12.4.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-router-dom": "^7.9.4",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.15"
  },
```
```
"devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.3.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "npm:rolldown-vite@7.1.14"
  },
```
---
## 📸 Website Screenshots

### 🏠 Home Page
![Homepage Screenshot](public/Home.jpeg)

---
### 🖥️ How to Run Locally:
1. Clone the Repository

Create file plateshare
```
cd plateshare
```
```
git clone https://github.com/ashadulislam6156rs/Toy-Store-Platform-ToyTales.git

```
2. Install Dependencies
```
npm i
```
3. Start Development Server
```
npm run dev
```
