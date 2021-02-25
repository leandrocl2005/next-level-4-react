import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = useContext(ChallengesContext);


  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSuceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ?
        (
          <div className={styles.challengeBoxActive}>
            <header>
              Ganhe {activeChallenge.amount} XP
            </header>

            <main>
              <img src={`assets/icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button
                type="button"
                className={styles.challengeBoxFailedButton}
                onClick={handleChallengeFailed}
              >Falhei</button>
              <button
                type="button"
                className={styles.challengeBoxSucceededButton}
                onClick={handleChallengeSuceeded}
              >Completei</button>
            </footer>
          </div>
        ) :
        (
          <div className={styles.challengeBoxNotActive}>
            <strong>
              Finalize um ciclo para receber um desafio
            </strong>
            <p>
              <img src="assets/icons/level-up.svg" alt="Level Up" />
              Avance de level completando os desafios
            </p>
          </div>
        )
      }
    </div >
  )
}