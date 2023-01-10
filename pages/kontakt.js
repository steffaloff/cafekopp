import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Kontakt.module.css'

export default function Kontakt() {
    return (
            <>
            <main className={styles.main}>
                <div>
                    <h1>Kontakt</h1>
                </div>
                <div className={styles.card}>
                    <form action="/api/form" method="post">
                        <span className={styles2.contactForm}>
                            <label htmlFor="name">Navn:</label>
                            <input type="text" id="name" name="name" />
                        </span>
                        <span className={styles2.contactForm}>
                            <label htmlFor="email">Epost:</label>
                            <input type="text" id="email" name="email" />
                        </span>
                        <span className={styles2.contactForm}>
                            <label htmlFor="telephone">Telefon:</label>
                            <input type="text" id="telephone" name="telephone" />
                        </span>
                        <span className={styles2.contactForm}>
                            <label htmlFor="adress">Adresse:</label>
                            <input type="text" id="adress" name="adress" />
                        </span>
                        <span className={styles2.contactForm}>
                            <label htmlFor="topic">Emne:</label>
                            <input type="text" id="topic" name="topic" />
                        </span>
                        <span className={styles2.contactForm}>
                            <label htmlFor="message">Beskjed:</label>
                            <textarea className={styles2.messageForm} name="message" id="message" cols="30" rows="10"></textarea>
                        </span>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}