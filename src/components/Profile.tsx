import { Profiler, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);


  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/24196521?s=460&u=b194dea68bab0e7ae875fb765d83ff59b5093653&v=4" alt="Leandro Cruvinel" />
      <div>
        <strong>Leandro Cruvinel</strong>
        <p>
          <img src="assets/icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}