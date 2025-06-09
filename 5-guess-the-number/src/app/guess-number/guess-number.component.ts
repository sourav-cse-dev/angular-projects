import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.scss',
})
export class GuessNumberComponent {
  secretNumber = this.generateRandomNumber();
  attempsLeft = 10;
  guessedNumber?: number;
  feedBackMessage = '';
  gameOver = false;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPS = 10;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessNumberComponent.MAX_NUMBER) + 1;
  }

  isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessNumberComponent.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedBackMessage = `Enter a number between 1 and ${GuessNumberComponent.MAX_NUMBER}`;
      return;
    }
    this.attempsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attempsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedBackMessage =
        this.guessedNumber! > this.secretNumber
          ? 'Too High! Try again.'
          : 'Too Low! Try again';
    }
  }

  private endGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedBackMessage = isWin
      ? 'Congratulations! You guessed the correct number!'
      : `Game over! The correct number was ${this.secretNumber}`;
  }
  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attempsLeft = GuessNumberComponent.MAX_ATTEMPS;
    this.guessedNumber = undefined;
    this.feedBackMessage = '';
    this.gameOver = false;
  }
}
