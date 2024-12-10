
![logoColorPNG](https://github.com/user-attachments/assets/272df0b8-d2f4-436c-91e0-da849b003424)

# Ambasada Formy

Application for managing a gym and fitness club. Designed for small and medium-sized gym chains, including: management of passes and users.

<p align="center">
  <a href="https://choosealicense.com/licenses/mit/">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License">
  </a>
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" alt="Status">
</p>




## Authors

from Jun 14, 2023

- [@Tomasz_Mazurek](https://github.com/tma19993): Frontend, Backend, substantive support, 
- [@Rafał Byczek](https://github.com/Hxvillxrd): UX/UI, creation of logo/mockups for all subpages, etc.
- [@Maciej Fim](https://github.com/Orefis): Frontend, readme
- [@Bartek Rudko](https://github.com/Sovtys2306): Databases

since Jun 14, 2023

- [@Tomasz_Mazurek](https://github.com/tma19993): Project Completion
## Tech Stack

**Client:** Angular,HTML,SCSS ,RxJS ,Storybook

**Server:** Node, Express

**Database:** MongoDB (using MongoDB Compass) 


## Installation

Install Ambasada Formy with npm. After download open app folder and 

if you don't have mongoDB compass on your computer download [here](https://www.mongodb.com/try/download/compass)

after instalation create database of name AmbasadaFormy and add 4 colletions: users, requests, gym-passes and blog,

should look like the image below

![image](https://github.com/user-attachments/assets/9c2eeb43-0e45-4e2b-9305-d6745feb96aa)

after add data to these colletions. there are in database folder in repository and names are similar to collections

after that install packages needed:

#### Back-end
```bash
  cd ./backend
  npm i
```

#### Front-end
```bash
  cd ./frontend
  npm i
```
    
## Features

- Login/Registration
- Overview/Purchase/Cancel memberships
- Ability to create/modify/delete workouts
- Hire trainers
- View trainers/activities
- Blog: Create/Filter posts

### Admin Features

- Edit users perrmisions, passwords, users data, gym pass
- modify/delete blog
- approve/reject gym passes
- display statistic from 1h/24/7d


## API Reference

few example of API

#### Get all users

```http
  GET /AmbasadaFormy/getUsers
```

#### Get single user

```http
  GET /AmbasadaFormy/getUser/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |





## Run Locally

- Clone the project

```bash
  git clone https://github.com/tma19993/AmbasadaFormy.git
```

- Go to the project directory

```bash
  cd AmbasadaFormy
```

- Install dependencies 


do this like here: [Installation](#Installation)


- Start the server

start back-end

```bash
  cd backend
  node app.js
```

start front-end

```bash
  cd frontend
  ng serve
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

