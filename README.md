# Wanderly – Travel Blogging & Destination Exploration Website

Frontend final project using HTML5, CSS3 and JavaScript.

## Features
- Home page
- Destinations and destination details
- Search and region filter
- Things to do for every destination
- Wishlist using Local Storage
- Dark Mode / Light Mode using Local Storage
- Login and Signup
- JavaScript form validation
- Travel blog
- Responsive/mobile navigation
- GitHub Pages ready

## Project structure

```text
Wanderly/
├── index.html
├── destinations.html
├── destination-details.html
├── blog.html
├── wishlist.html
├── login.html
├── signup.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   ├── wishlist.js
│   ├── destinations.js
│   ├── validation.js
│   ├── auth.js
│   └── blog.js
└── README.md
```

## Technologies
HTML5, CSS3, JavaScript and Browser Local Storage.

## Database
No database is required. Wishlist, theme preference and demo account data are stored in Local Storage.

## Run on MacBook Air M4
Open the folder in VS Code and use Live Server on `index.html`.

## GitHub
```bash
git init
git add .
git commit -m "Initial commit - Wanderly Travel Blog"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Important
The login system is only a frontend classroom demonstration. Real applications should use a secure backend and should never store passwords directly in Local Storage.
