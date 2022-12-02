import { Background, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button'
import { FiMail, FiLock } from 'react-icons/fi';


export const SignIn = () => {
  return (
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação parra acompanhar tudo que quiser</p>
      <h2>Faça seu login</h2>
    
      <Input 
        placeholder = 'E-mail'
        type = 'email'
        icon ={FiMail}
      />
      <Input 
        placeholder = 'Senha'
        type = 'password'
        icon ={FiLock}
      />

      <Button title = 'Entrar'/>

      <a href="/">Criar conta</a>
      </Form>

      <Background />
      
    </Container>
  )
}
