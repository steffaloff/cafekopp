import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Tjenester() {

    const baseURL = "https://cafekoppstorage.blob.core.windows.net"

    return (
            <>
            <main className={styles.main}>
                <div>
                    <h1>Tjenester</h1>
                </div>

                <div className={styles.card}>
                    <h2>Våre Tjenester:</h2>
                    <article>
                        <h3>Bryllup</h3>
                        <Image src={'${baseURL}/tjenester/bryllup.webp'} alt='bryllup' height={250} width={200} />
                            <p>Vi kan ta oss av hele bryllupsfesten med mat og lokaler.
                            Ta kontakt så kan vi starte planlegging sammen.</p>
                            <br/>
                        <h3>Konfirmasjon</h3>
                        <Image src={'${baseURL}/tjenester/konfirmasjon.webp'} alt='konfirmasjon' height={250} width={200} />
                            <p>Vi kan ta oss av hele selskapet og dere kan bare slappe av og nyte festen.</p>
                        <br/>
                        <h3>Spesielle Feiringer</h3>
                        <Image src={'${baseURL}/tjenester/spesiellfeiring.webp'} alt='spesiellfeiring' height={250} width={200} />
                            <p>Vi kan ta oss av hele selskapet og dere kan bare slappe av og nyte festen.</p>
                        <br/>
                    </article>
                    <br/>
                    <h2>Bestillingsfrister:</h2>
                    <article><p>Mat til helgen bør bestilles senest i begynnelsen av samme uke. Koldtbord helst innen tirsdag. Til andre dager, om mulig, senest et par dager i forveien.
                        På grunn av forberedelser må endring av bestilling til fre/lør/søn skje senest torsdag - koldtanretninger senest onsdag.
                        I uken er vi også klar til å levere på kort varsel, hvis det skulle være behov for det.
                        Mat for levering i forbindelse med konfirmasjon og i desember må bestilles i god tid.
                    </p>
                    </article>
                    <br/>
                    <h2>Betaling:</h2>
                    <article><p>Kontant eller kort.
                        Kreditt må avtales.
                        Ved fakturering ilegges et gebyr på kr.54,00
                        Vi leverer om ønskelig.
                    </p>
                    </article>
                    <br/>
                    <h2>Retur:</h2>
                    <article><p>
                        Fat, boller, esker og termokasser returneres oss innen 3 dager, om ikke annet er avtalt.
                    </p>
                    </article>
                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}