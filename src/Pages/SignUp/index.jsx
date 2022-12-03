import { Background, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';



export const SignUp = () => {
  return (
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação parra acompanhar tudo que quiser</p>
      <h2>Crie sua conta</h2>
    
      <Input 
        placeholder = 'Nome'
        type = 'text'
        icon ={FiUser}
      />
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

      <Button title = 'Cadastrar'/>

      <Link to = '/'> <FiArrowLeft /> Voltar para o login</Link>
      </Form>

      <Background />
      
    </Container>
  )
}
