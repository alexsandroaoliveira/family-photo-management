# Family photo management

A basic family photo management application, where a family member can view photos in albums of another family member, while being able to create, update, and delete their own photos and albums.

Start: 09/04/2024 09:00am
Finish:

## Roadmap:
[x] - A GitHub repository containing the code for the project.
[x] - A README.md file with instructions on how to run the project locally.
[] - Test Plan
[] - Configure the project with a linter and a code formatter.
[] - Postman Colection for jsonplaceholder
[] - Postman Colection for Family photo management
[] - Use interfaces and types to define the structure of the API response and component props.
[] - Ensure that all components are typed correctly.
[] - Write at least 1 unit test
[] - Write clean, modular, and reusable code.
[] - Ensure the application is performant and handles API errors gracefully.
[] - Follow best practices for accessibility (e.g., semantic HTML, aria labels).
[] - Write unit test(s) for any business logic created in the BE for a FE.
[] - (Optional) A live demo link if the application is deployed.
[] - Use Storyteller
[] - Improve design

**Backend**
[] - Create a Backend for a Frontend using Typescript that maps jsonplaceholder API response
[] - Get Users Endpoint 
[] - Get User Albuns Endpoint 
[] - Get Album Photos Endpoint 
[] - Add Photo Endpoint 
[] - Add Album Endpoint 
[] - Delete Photo Endpoint 
[] - Delete Album Endpoint 
[] - Persist the data at jsonplaceholder (optimistic updates)

**Frontend**
[] - Create a new React application using Typescript
[] - Add Photo: Allows users to upload a photo, assign it to an existing or new album, and add a title or description.
[] - (page) My users: Display a list of users (show their username and email) which opens a page to the albums of that user, when clicked on.
[] - (page) My user albums: Display a list of photo albums for a user (show their username and email) which opens a page to the photos of that album, when clicked on.
[] - (page) My album photos: Display a list of photos for a users album (show their username).
[] - Responsive

---

## Test-plan
[] - User can list all users
[] - User can list all users albuns
[] - User can view all users albuns photos
[] - User can view add photo to your existing album 
[] - User can view add photo to a new album
[] - User can delete your photos
[] - User can delete your Albuns
[] - User cannot add photo to other users albuns
[] - User cannot delete other user's album
[] - User cannot delete other user's photos
[] - U.I should be responsive

1. CRUD photos and albums
    1. Read other users photos & albums
    2. Create, update, and delete current user’s photo’s & albums
2. I should be able to open the albums page for a user.
    1. If I open my own album page I want to be able to edit/delete my photos and albums.

---

### Public APIs
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/users/{userId}/albums
- https://jsonplaceholder.typicode.com/photos

Public API guide https://jsonplaceholder.typicode.com/guide/