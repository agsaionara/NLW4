import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDown} = useContext(CountDownContext);

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountDown();
    }

    return(
        <div className={styles.challengeBoxContanier}>
            {activeChallenge ? (
                <div className= {styles.challengeActive}> 
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novos desafios</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type = "button"
                            className= {styles.challengeFailedButton}
                            onClick={handleChallengeFailed} 
                        >
                            Falhei
                        </button>
                        <button
                            type = "button"
                            className= {styles.challengeSucceededButton}
                            onClick= {handleChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ):(
            <div className={styles.challengeBoxNotActive} >
                <strong>
                    Finalize um ciclo para receber desafios a serem completados
                </strong>
                <p>
                    <img src='icons/level-up.svg' alt='Level Up'/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    );
}