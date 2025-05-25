# Guess The Number 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

flowchart TD

A[User Input: Types a Number] --> B[Two-way Binding via ngModel] 
B --> C[Component Property: guessedNumber]

click A href "#userinput"
click B href "#ngmodel"
click C href "#guessednumber"

C --> D[User Clicks 'Submit Guess']

D --> E[submitGuess() method]
E --> F[isValidGuess(guessedNumber)]
F -- valid --> G[attempsLeft--]
G --> H[evaluateGuess()]
H --> I{Correct Guess?}

I -- Yes --> J[endGame(true)]
I -- No & Attempts Left --> K[Set feedBackMessage: Too High/Low]
I -- No & No Attempts --> L[endGame(false)]

J --> M[Set gameOver = true & feedBackMessage = Win Message]
L --> N[Set gameOver = true & feedBackMessage = Lose Message]

K --> O[UI Feedback Updates]
M --> O
N --> O

O --> P[Displayed in Template via Interpolation]

P --> Q[Game Over = true triggers Play Again button]

Q --> R[User Clicks 'Play again']
R --> S[resetGame()]
S --> T[Reset all component properties]
T --> A


┌──────────────────────────────┐
                                       │         User Input           │
                                       │    Enters number in input    │
                                       └────────────┬─────────────────┘
                                                    │
                                                    ▼
                                       ┌──────────────────────────────┐
                                       │   [(ngModel)] = guessedNumber│
                                       │   (Two-way data binding)     │
                                       └────────────┬─────────────────┘
                                                    │
                                                    ▼
                                       ┌──────────────────────────────┐
                                       │  Clicks "Submit Guess" Button│
                                       └────────────┬─────────────────┘
                                                    ▼
                                       ┌──────────────────────────────┐
                                       │      submitGuess() method     │
                                       └────────────┬─────────────────┘
                                                    ▼
                                       ┌──────────────────────────────┐
                                       │ isValidGuess(guessedNumber)? │
                                       └────────────┬─────────────────┘
                                       No           │           Yes
                                       ▼            ▼
                        ┌──────────────────────┐   ┌─────────────────────────────┐
                        │ Show validation error│   │ Decrement attempsLeft       │
                        │ feedBackMessage set  │   └────────────┬────────────────┘
                        └──────────────────────┘                ▼
                                                   ┌──────────────────────────────┐
                                                   │      evaluateGuess()         │
                                                   └────────────┬─────────────────┘
                                                                ▼
                                                ┌───────────────────────────────────┐
                                                │ Compare guessedNumber & secretNum │
                                                └────────────┬──────────────────────┘
                                                             ▼
        ┌──────────────────────────────┐   ┌────────────────────────────────────────────┐
        │ guessedNumber === secretNum? │   │ Attempts left === 0?                       │
        └────────────┬─────────────────┘   └────────────┬───────────────────────────────┘
        Yes          │                                 No│
        ▼            ▼                                   ▼
┌─────────────────────────────┐         ┌────────────────────────────────────────────┐
│   endGame(true):            │         │   feedBackMessage:                         │
│   gameOver = true           │         │   "Too High!" or "Too Low!"                │
│   Win message               │         └────────────────────────────────────────────┘
└────────────┬────────────────┘
             │
             ▼
┌──────────────────────────────────────────────┐
│ Angular Updates Template                     │
│ - feedBackMessage displayed                  │
│ - Play Again button shown (if gameOver true) │
└──────────────────────────────────────────────┘

        ┌──────────────────────────────────────────┐
        │     User Clicks "Play Again" Button      │
        └────────────┬─────────────────────────────┘
                     ▼
        ┌──────────────────────────────────────────┐
        │          resetGame() method              │
        │ - Resets secretNumber                    │
        │ - Resets attempsLeft                     │
        │ - Clears guessedNumber & feedBackMessage │
        │ - Sets gameOver = false                  │
        └──────────────────────────────────────────┘
                     │
                     ▼
        ┌──────────────────────────────────────────┐
        │         Game ready for new guess         │
        └──────────────────────────────────────────┘

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
