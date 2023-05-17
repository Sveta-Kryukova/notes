<h1>React TypeScript Note Taking App</h1>

<a href="https://sveta-kryukova.github.io/notes-test-task/" style="font-size: 24px;">Demo</a>

This is a simple note-taking application built with React and TypeScript, designed to resemble the note-taking functionality found in Mac OS. The app allows users to create, edit, and delete notes, as well as search for notes based on partial matches in the title or context.

<img src="https://github.com/Sveta-Kryukova/notes-test-task/assets/116656921/26decfef-b872-4c9c-a21b-b62179451023" alt="demo" style="width: 500px; height: 230px;">

<h2>Features</h2>
<ul>
  <li>Create new notes: Users can easily create new notes by providing a title and content.</li>
  <li>Edit existing notes: Existing notes can be edited to update the title or content.</li>
  <li>Delete notes: Users can remove unwanted notes from the app.</li>
  <li>Search functionality: The app provides a search feature that allows users to find notes by entering a partial match for the title.</li>
</ul>
<p>When no note is chosen, the delete and edit buttons are disabled to prevent unwanted actions. Once a note is clicked, the full note is displayed in the workspace, where users can choose to delete or edit the note.</p>
<h2>Technologies Used</h2>
<ul>
<li>React: The app is built using the React library, which provides a modular and efficient approach to building user interfaces. React enables the creation of reusable components, making it easier to develop complex UIs and maintain a consistent user experience.</li>

<li>TypeScript: TypeScript is used to add static typing to JavaScript, enabling better code quality, improved developer experience, and increased productivity. By catching errors during development and providing better code navigation and auto-completion, TypeScript helps to build more reliable and maintainable applications.</li>

<li>HTML: HTML (Hypertext Markup Language) is the standard markup language used to structure and present content on the web. In this app, HTML is used to define the structure of the note-taking interface, including headings, paragraphs, and input fields.</li>

<li>CSS: CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It is used in this app to style the UI components, layout elements, and provide visual enhancements such as colors, fonts, and spacing.</li>

<li>React Hooks: React Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features without writing a class. Hooks, such as useState and useEffect, are used in this app to manage state, handle side effects, and update the UI in response to user actions.</li>

<li>IndexedDB: IndexedDB is a client-side database technology that enables storing and retrieving structured data in a web browser. In this app, IndexedDB is used for creating and managing the note database, allowing for persistent storage of notes on the user's device.</li>
 </ul>
<h2>Setup and Usage</h2>

-Clone the repository to your local machine.

-Navigate to the project directory and install the dependencies using

```npm install```

-Start the development server with

```npm start```

-Open your browser and visit http://localhost:3000 to access the app.
<h2>Project Structure</h2>
<ul>
  <li>src/components: Contains the React components used to build the app's UI.</li>
  <li>src/types: Includes TypeScript type definitions used throughout the project.</li>
</ul>
<h2>Future Enhancements</h2>
Add user authentication: Implement user authentication functionality to allow multiple users to have their own set of notes.

Add tags or categories: Enhance the note organization by introducing tags or categories for easier grouping and filtering of notes.

Improve UI/UX: Enhance the user interface and user experience to provide a more intuitive and visually appealing note-taking environment.
Add data persistence: Integrate a server-side backend or cloud storage to persist note data, allowing users to access their notes from different devices.
