# Counter App

- This is a simple counter application.
- There are three buttons named Increment, Decrement & Reset.
- By clicking on _increment_ button the counter value increased by 1, by clicking _decrement_ button the counter value is decreased by 1 and by clicking _reset_ button the counter value is set to 0.
- There is a status text, below the buttons displaying whether the number is positive, negative, or neutral.
- This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Project Images

![Project Image 1](./assets/project-image-initial.png)
![Project Image 2](./assets/project-image-positive.png)
![Project Image 3](./assets/project-image-negative.png)
![Project Image 4](./assets/project-image-reset.png)

## Project Learnings & Challenges

In this project I have learned & applied,

- _interpolation_,
- _ngSwitch_ & _ngSwitchCase_ in _CommonModule_,
- _ngStyle_ and
- _ngClass_
of Angular.

## How it works 

**A simple Angular component that implements a counter and uses _conditional rendering_ with _ngSwitch_ to display messages based on the counter's value.**

- _counter: number = 0; Holds the current count._
- _increment() { this.counter++; }, decrement() { this.counter--; }, reset() { this.counter = 0; }; Methods to change the value of counter._
- _getCounterStatus(); Returns a string based on the value of the counter._
- _{{ counter }}; Displays the current value using Angular interpolation._
- _click events on buttons are bound to the respective component methods._
- _ngSwitch is like a switch-case statement in Angular templates. It checks the result of getCounterStatus(). Depending on the return value ('positive', 'neutral', or 'negative'), the appropriate p tag is displayed._
- _ngClass is used here to apply a class like 'positive', 'neutral', or 'negative'. These classes defined in counter.component.scss to color the text (green, gray, red, etc.)._

1. User clicks a button
2. Component method updates counter
3. Angular detects change and re-renders:
4. Updates {{ counter }}
5. Evaluates getCounterStatus() again
6. Displays the corresponding message using ngSwitch.

## Data Flow
```bash
          [Component State: counter = 0]
                      ↓
       Displayed via interpolation in template
                      ↓
     User clicks button (Event Binding: (click))
                      ↓
    Method updates counter (e.g., counter++)
                      ↓
      Angular detects change (Change Detection)
                      ↓
      Angular re-renders the template:
      - {{ counter }} is updated
      - getCounterStatus() is called
      - New message is conditionally rendered
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js:** (Ideally the latest LTS version - check with `node -v`) [Download Node.js](https://nodejs.org/)
- **npm** (usually installed with Node.js - check with `npm -v`) or **yarn** (check with `yarn --version`) [Install Yarn](https://yarnpkg.com/getting-started)
- **Angular CLI:** (Install globally - check with `ng --version`)
  ```bash
  npm install -g @angular/cli
  # or
  yarn global add @angular/cli
  ```
- **Git:** (for version control) [Download Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sourav-cse-dev/angular-projects.git
    cd 2-counter
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    or using yarn:
    ```bash
    yarn install
    ```

## Development Server

To run the development server:

```bash
ng serve -o
```

## License

This project is licensed under the MIT License.

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests.

## Author

**Sourav Chowdhury**  
Frontend Engineer | Dhaka, Bangladesh

## Contact

You can reach me at [sourav.seu.cse@gmail.com].
