import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Matitem(props) {

    console.log(props);
    return (
            <>
            <main className={styles.main}>
                <div className={styles.card}>
                    <h3>{props.mat.info.tittel}</h3>
                    <p>Kr {' '}{props.mat.info.pris}</p>
                    <p>{props.mat.info.beskrivelse}</p>

                </div>
            </main>
            </>
            )
}