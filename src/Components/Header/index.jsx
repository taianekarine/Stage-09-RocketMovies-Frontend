import { Container, Profile } from './styles';
import { Input } from '../Input';


export const Header = () => {
  return (
    <Container>
     
      <h1>RocketMovies</h1>
      <Input placeholder = 'Pesquise pelo título'/>
      <Profile>
        <div>
        <p>Taiane Karine</p>
        <a href="/">Sair</a>
        </div>
        <img src="https://github.com/taianekarine.png" alt="Imagem de usuario" />
      </Profile>
      

    </Container>
  )
}
