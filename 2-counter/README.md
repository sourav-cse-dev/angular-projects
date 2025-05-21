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

## How it works - Data Flow 

- _Component Property (name, age, description are the component’s state (i.e., data)),_
- _These values are initialized and can be updated from the template inputs._
- _[(ngModel)], from FormsModule, is a part of Angular's template-driven forms system._

↓

- _{{ name }}, {{ age }}, and {{ description }} display the values of the respective component properties._
- _Template Input Fields via [(ngModel)]_
- _[(ngModel)]="name" binds the input field to the name property._
- _Two-Way Data Flow with [(ngModel)]_
- _This system enables data to flow:_
1. From the component class → to the template (HTML) — so the UI displays the current values.
2. From the template → back to the component class — so any user input updates the internal data.

↓

- _The UI input is pre-filled with the current value ('', i.e., empty string)._
- _The value of name in the class is bound to the input field._
- _User Types → Updates Component Property_
- _Angular's change detection runs after input: It re-renders the template wherever {{ name }} is used._
- _Angular automatically updates the name property in AppComponent with the new input value._

↓

- _Template Interpolation {{ name }}, {{ age }}, {{ description }} updates and displayed_

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
