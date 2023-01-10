import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Tjenester() {
    return (
            <>
            <main className={styles.main}>
                <div>
                    <h1>Tjenester</h1>
                </div>
                <div className={styles.card}>
                    <h2>Betaling:</h2>
                    <article>Kontant eller kort.<br/>
                        Kreditt må avtales.<br/>
                        Ved fakturering ilegges et gebyr på kr.54,00<br/>
                        Vi leverer om ønskelig.
                    </article>
                    <h2>Retur:</h2>
                    <article>
                        Fat, boller, esker og termokasser returneres oss innen 3 dager, om ikke annet er avtalt.
                    </article>
                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}