import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const NavBar = () => {
    const { theme } = useTheme()
    
  return (
    <div style={{
        alignItems:'center',
        backgroundColor: theme?.colors.gray50.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'start',
        padding: '0x 20x',
        width: '100%',
    }}>
        <Image 
        alt='pokemon'
        height={70}
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        width={70}
        />
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okémon</Text>
        <Spacer css={{ flex: 1}}/>
        <Text color='white'>Favoritos</Text>
    </div>
  )
}
