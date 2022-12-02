import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Avatar, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';




export const Profile = () => {
  return (
    <Container>
      <header>
        <a href="/"> <FiArrowLeft/> Voltar </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/taianekarine.png" 
               alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id='avatar' type="file" />
          </label>
        </Avatar>

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
          placeholder = 'Senha atual'
          type = 'password'
          icon ={FiLock}
        />

        <Input 
          placeholder = ' Nova senha'
          type = 'password'
          icon ={FiLock}
        />

        <Button title = 'Salvar' />
      </Form>

    </Container>
  )
}
