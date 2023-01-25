import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/MenyItem.module.css'

export default function Matitem(props) {

    console.log(props);
    return (
            <>
                    <div className={`${styles2.menyItemContainer} ${props.active ? "active" : ""}`}>
                    <h3>{props.rett.info.tittel}</h3>
                    <p>{props.rett.info.beskrivelse}</p>
                        <p>Kr:{props.rett.info.pris}</p>
                    </div>

            </>
            )
}