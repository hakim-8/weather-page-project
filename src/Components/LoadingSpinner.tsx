import React from "react";
import { RiLoaderFill } from "react-icons/ri";
import styles from "../styles/LoadingSpinner.module.scss";


const LoadingSpinner: React.FC = () => (
    <div className={styles.loading}>
        <RiLoaderFill className={styles.loadingIcon} />
        <p className={styles.loadingText}>Loading...</p>
    </div>
);

export default LoadingSpinner;
