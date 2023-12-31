React Native Counter App with MVVM and MobX
===========================================

Overview
--------

This is a simple counter application built with React Native. It demonstrates the use of the MVVM (Model-View-ViewModel) architecture pattern and incorporates MobX for state management. The app features a basic counter functionality with a clean UI including an increment and decrement button with a counter view.

Features
--------

-   Increments and decrements a counter.
-   Uses MobX for efficient state management.
-   Implements MVVM architecture for clear separation of concerns.
-   Simple UI with increment and decrement buttons and a counter view.

Getting Started
---------------

### Prerequisites

-   Node.js
-   npm or yarn
-   React Native development environment set up (refer to React Native environment setup)

### Installation

1.  Clone the repository:

    bashCopy code

    `git clone [repository-url]
    cd CounterApp`

2.  Install dependencies:

    bashCopy code

    `npm install`

    or if you're using yarn:

    bashCopy code

    `yarn`

3.  Run the app:

    -   For iOS:

        bashCopy code

        `npx react-native run-ios`

    -   For Android:

        bashCopy code

        `npx react-native run-android`

Project Structure
-----------------

-   `src/models/`: Contains the data model of the application.
-   `src/viewModels/`: Contains the ViewModel layer, which serves as an intermediary between the model and the view.
-   `src/views/`: Contains the UI components of the application, including the main counter view.
-   `src/assets/`: Contains static assets such as images.

Key Components
--------------

-   Counter Model (`src/models/Counter.js`): Defines the counter data and logic.
-   Counter ViewModel (`src/viewModels/CounterViewModel.js`): Manages the state and operations of the counter.
-   Counter View (`src/views/CounterView.js`): Presents the UI for the counter functionality.

Technologies Used
-----------------

-   [React Native](https://reactnative.dev/)
-   [MobX] (https://mobx.js.org/README.html)
-   [MobX React] (https://mobx.js.org/react-integration.html)

Author
------

-   Richard Chance

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.