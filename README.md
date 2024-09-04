# Family photo management

A basic family photo management application, where a family member can view photos in albums of another family member, while being able to create, update, and delete their own photos and albums.

- Start: 09/04/2024 09:00am
- Finish: 09/04/2024 12:45pm


## Usage
**Backend** port: 3001
```bash
cd .\Source\family-photo-management-backend\
npm run build
npm start 
```

**frontend** port: 3000
```bash
cd .\Source\family-photo-management-frontend\
npm run build
npm start 
```

## Guidelines
- Write clean, modular, and reusable code.
- Use interfaces and types to define the structure of the API response and component props.
- Ensure that all components are typed correctly.
- Ensure the application is performant and handles API errors gracefully.
- Follow best practices for accessibility (e.g., semantic HTML, aria labels).

## Roadmap:
- [x] A GitHub repository containing the code for the project.
- [x] A README.md file with instructions on how to run the project locally.
- [x] Test Plan
- [x] Configure the project with a linter and a code formatter. (vscode)
- [ ] Write at least 1 unit test
- [ ] (Optional) A live demo link if the application is deployed.
- [ ] Use Storyteller
- [ ] Improve design
- [ ] Postman Colection for jsonplaceholder
- [ ] Postman Colection for Family photo management

**Backend**
- [x] Create a Backend for a Frontend using Typescript that maps jsonplaceholder API response
- [x] Get Users Endpoint 
- [x] Get User Albuns Endpoint 
- [x] Get Album Photos Endpoint 
- [x] Add Photo Endpoint 
- [x] Add Album Endpoint 
- [x] Delete Photo Endpoint 
- [x] Delete Album Endpoint 
- [x] Persist the data at jsonplaceholder (optimistic updates)
- [ ] Write unit test(s) for any business logic created in the BE for a FE.
- [ ] Add Auth

**Frontend**
- [x] Create a new React application using Typescript
- [x] (page) My users: Display a list of users (show their username and email) which opens a page to the albums of that user, when clicked on.
- [x] (page) My user albums: Display a list of photo albums for a user (show their username and email) which opens a page to the photos of that album, when clicked on.
- [x] (page) My album photos: Display a list of photos for a users album (show their username).
- [x] Add Photo: Allows users to upload a photo, assign it to an existing or new album, and add a title or description.
- [x] Navigation Menu
- [x] User context
- [x] Select Current User (placeholder to Auth)
- [x] List the current user albums on the Add Photo Form
- [x] Ability to delete Album of the current user only
- [x] Ability to delete photo of the current user only
- [ ] Move code from the components to Services
- [ ] Create Unit test to the services
- [ ] Ability to create a new album on the Add Photo Form
- [ ] Responsive
- [ ] Login page

---

## Test-plan
- [x] User can list all users
- [x] User can list all users albuns
- [x] User can view all users albuns photos
- [x] User can view add photo to your existing album 
- [x] User can view add photo to a new album
- [x] User can delete your photos
- [x] User can delete your Albuns
- [x] User cannot add photo to other users albuns
- [x] User cannot delete other user's album
- [x] User cannot delete other user's photos
- [ ] U.I should be responsive

---

### Public APIs
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/users/{userId}/albums
- https://jsonplaceholder.typicode.com/photos

Public API guide https://jsonplaceholder.typicode.com/guide/