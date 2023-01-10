import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function OmOss() {
    return (
            <>
            <main className={styles.main}>
                <div>
                    <h1>Om Oss</h1>
                </div>
                <div className={styles.card}>
                    <p>Jeg er lidenskapelig opptatt av mat, og det har blitt mer en livsstil enn jobb.<br/>
                        <code>Hilsen Siri</code></p>
                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}