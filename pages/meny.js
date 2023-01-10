import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {menyItems} from '/json/menyItems'
import Matitem from '../components/Matitem'



export const getStaticProps = async () => {
    return {
        props: {
            items: menyItems,
        },
    }
}


export default function Meny({items}) {
    const [kategori, setKategori] = useState("snitter");
    //const [matData, setmatData] = useState();
    console.log(kategori);

    const kategoriValg = e => {
        setKategori(e.target.value);
    }


    return (
            <>
            <main className={styles.main}>
            <div>
                <h1>Meny</h1>
            </div>
                <div className={styles.card}>
                    <h2>Kategorier</h2>

                    <select defaultValue={kategori} onChange={kategoriValg} name="kategori" id="kategori">
                        <option value="snitter" name="snitter">Snitter</option>
                        <option value="rundstykker">Rundstykker</option>
                        <option value="baguetter">Baguetter</option>
                        <option value="smorbrod">Smørbrød</option>
                        <option value="landganger">Landganger</option>
                        <option value="clubsandwich">Club Sandwich</option>
                        <option value="wraps">Wraps</option>
                    </select>
                </div>
                <div>
                    {items.filter( mat => mat.kategori === kategori).map( mat => (
                        //<li><a key={mat.id}>{mat.kategori}</a></li>
                        <Matitem key={mat.id} mat={{...mat}} />
                    ))
                    }


                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}