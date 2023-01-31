import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useEffect, useReducer, useState} from "react";
import {menyItems} from '/json/menyItems'
import Matitem from '../components/Matitem'
import {reducer} from "next/dist/client/components/reducer";



export const getStaticProps = async () => {
    return {
        props: {
            items: menyItems,
        },
    }
}


export default function Meny({items}) {
    const [kategori, setKategori] = useState("pasmurt");
    const [active, setActive] = useState(false);
    //const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(kategori);

    const activeMenu = () =>{
        setActive(!active)
    }

    const kategoriValg = (e) => {
        //console.log(kategori)
        console.log(e.target.id);
        setKategori(e.target.id);
       activeMenu()
        //console.log(kategori)
    }


    return (
            <>
            <main className={styles.main}>
                <div>
                    <h1>Meny</h1>
                </div>

                <div className="test">
                    {/*items.map( mat =>
                            <Link key={mat.id} mat={{...mat}} className={styles.card}
                                href="/meny/[kategori]"
                                as={ `/meny/${mat.kategori}`}>
                                <Matitem kategori={mat.kategori} id={mat.id} />
                            </Link>

                    )*/}
                    <div className={`${styles.card} ${active ? "active" : ""}`} onClick={kategoriValg} id="pasmurt">
                        <h3 onClick={kategoriValg} id="pasmurt">Påsmurt</h3>

                        {active && kategori.match('pasmurt') && items.filter(mat => mat.kategori === 'pasmurt').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}

                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="koldtbord">
                        <h3 onClick={kategoriValg} id="koldtbord">Koldtbord</h3>
                        {active && kategori.match('koldtbord') && items.filter(mat => mat.kategori === 'koldtbord').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active}  />
                                                )}))

                        })}

                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="kalde_smaretter">
                        <h3 onClick={kategoriValg} id="kalde_smaretter">Kalde Småretter</h3>
                        {active && kategori.match('kalde_smaretter') && items.filter(mat => mat.kategori === 'kalde_smaretter').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="enkle_varmretter">
                        <h3 onClick={kategoriValg} id="enkle_varmretter">Enkle Varmretter</h3>
                        {active && kategori.match('enkle_varmretter') && items.filter(mat => mat.kategori === 'enkle_varmretter').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="tapas">
                        <h3 onClick={kategoriValg} id="tapas">Tapas</h3>
                        {active && kategori.match('tapas') && items.filter(mat => mat.kategori === 'tapas').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="kaker">
                        <h3 onClick={kategoriValg} id="kaker">Kaker</h3>
                        {active && kategori.match('kaker') && items.filter(mat => mat.kategori === 'kaker').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="forretter">
                        <h3 onClick={kategoriValg} id="forretter">Forretter</h3>
                        {active && kategori.match('forretter') && items.filter(mat => mat.kategori === 'forretter').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="hovedretter">
                        <h3 onClick={kategoriValg} id="hovedretter">Hovedretter</h3>
                        {active && kategori.match('hovedretter') && items.filter(mat => mat.kategori === 'hovedretter').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>

                    <div className={styles.card} onClick={kategoriValg} id="desserter">
                        <h3 onClick={kategoriValg} id="desserter">Desserter</h3>
                        {active && kategori.match('desserter') && items.filter(mat => mat.kategori === 'desserter').map(mat => {
                            return(
                                    mat.retter.map(rett => {
                                        //console.log(rett)
                                        return(
                                                <Matitem key={rett.id} rett={rett} active={active} />
                                                )}))

                        })}
                    </div>


                    {/*items.map( mat => {
                        return (
                                <div key={mat.id} className={styles.card}>
                                    <h3 onClick={kategoriValg} id={mat.kategori}>{mat.tittel}</h3>
                                    {mat.retter.map( matrett => {
                                        return(
                                                <>
                                                <Matitem key={matrett.id} rett={matrett}></Matitem>
                                                </>
                                        )})}

                                </div>

                                )})*/}


                    {/*items.filter( mat => mat.kategori === kategori).map( mat => (
                        //<li><a key={mat.id}>{mat.kategori}</a></li>
                        <Matitem key={mat.id} mat={{...mat}} />
                    ))
                        <Matitem kategori={mat.kategori} id={mat.id} />
                    */}


                </div>
                <div>
                    <Link href="/">Tilbake</Link>
                </div>
            </main>
            </>
            )
}