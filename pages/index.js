/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import { useEffect, useState } from 'react'

export async function getServerSideProps(){
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return{
    props: {
      pokemon: await response.json(),
    }
  }

}

export default function Home({pokemon}) {
  // const [pokemon,setPokemon] = useState([]);

  // useEffect(()=>{
  //   async function getPokemon(){
  //     const response = await fetch(
  //       "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  //     );
  //     setPokemon(await response.json());
  //   }
  //   getPokemon();
  // },[]);

  return (
    <>
     <div className={styles.container}>
     <Head>
        <title>Pokemon NextJS App</title>
      </Head>
        <div className={styles.grid}>
        {pokemon.map((pokemonData)=>(
          <div className={styles.card} key={pokemonData.id}>
            <Link href={`/pokemon/${pokemonData.id}`}>
            <img
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemonData.image}`}
                alt={pokemonData.name}
                />
            <h3>{pokemonData.name}</h3>
            </Link>                
          </div>
          ))}
        </div>
     </div>
      </>
  )
}

