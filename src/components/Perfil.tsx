import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level}=  useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}> 
            <img src="https://pbs.twimg.com/profile_images/1297974955188146176/FYf8VlQg_400x400.jpg" alt="Saionara Aguiar"/>
            <div>
                <strong>Saionara Aguiar</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}