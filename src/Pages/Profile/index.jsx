import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Avatar, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export const Profile = () => {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  const handleUpdate = async () => {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile });

  };

  const handleChangeAvatar = (event) => {

    const file = event.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  return (
    <Container>
      <header>
      <button type = 'button' onClick={handleBack}>
        <FiArrowLeft />
      </button>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/taianekarine.png" 
               alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id='avatar' 
              type='file' 
              onChange = {handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
       placeholder = 'Nome'
       type = 'text'
       icon = {FiUser} 
       value = {name}
       onChange = {e => setName(e.target.value)}
      />

      <Input
       placeholder = 'E-mail'
       type = 'email'
       icon = {FiMail} 
       value = {email}
       onChange = {e => setEmail(e.target.value)}
      />

      <Input
       placeholder = 'Senha atual'
       type = 'password'
       icon = {FiLock} 
       onChange = {e => setPasswordOld(e.target.value)}
      />

      <Input
       placeholder = 'Nova senha'
       type = 'password'
       icon = {FiLock} 
       onChange = {e => setPasswordNew(e.target.value)}
      />

      <Button title = 'Salvar' onClick={handleUpdate}/>
    </Form>

    </Container>
  ) 
}