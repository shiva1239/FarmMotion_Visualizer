# Welcome to FarmMotion Visualizer

## Overview

FarmMotion Visualiser is an interactive application designed to provide a visual representation of animal movements between farms. Built with Angular for the frontend, Spring Boot for the backend, and Postgres as the database.

## Features

- **User Authentication:** Secure login and registration for users.
- **Animal Movement Animation:** Engaging visualization of fictional animal movements.
- **Data Loaders for CSV Files:** Convenient upload components for movement and population data.
- **Data Import:** Well-normalized schema for efficient storage of imported data.
- **UI Controls:** Intuitive user interface to manage all components seamlessly.

## Design

1. **Login and Registration:**
   - Existing users can log in, while new users need to register.
   
2. **Home Page:**
   - Central hub for users after authentication.
   - Option to upload CSV files redirects to separate components for movement and population data.
   
3. **Data Import:**
   - Well-normalized tables showcase the imported data.
   
4. **Animal Movement Animation:**
   - Main feature accessible from the home page.
   - Clicking the "Show Animal Movement" button leads to the animation page.
   
5. **Animation Page:**
   - Utilizes OpenCage API for fictional animal movement visualization.
   - Displays movement between origin and destination farms using latitude and longitude coordinates.

## Tech Stack

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** Postgres
