import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { pokeApi } from '../api/'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
console.log("🚀 ~ file: index.tsx ~ line 12 ~ pokemons", pokemons)

  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        {pokemons.map(({id, name, img}) => (
          <li key={id}>
            <h3>{id}</h3>
            <Image src={img} alt="Pokemon" width={60} height={60} />
            <h2>{name}</h2>            
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps (context: GetStaticProps) {


  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))


  return {
    props: {
      pokemons
    },
  }
}

export default HomePage
