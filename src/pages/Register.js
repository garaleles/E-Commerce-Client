import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import toast from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    // Sayfanın yenilenmesini engeller.
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_URL}/users/pre-register`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(
          'Kayıt başarılı. Lütfen e-posta adresinize gelen bağlantıya tıklayarak hesabınızı aktifleştiriniz.'
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div>
      <h1 className='display-1 bg-primary text-light p-2'>Üye Ol</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 offset-lg-4'>
            <h1 className='text-center'>Üye Ol</h1>
            <form onSubmit={handleSubmit}>
              <input
                className='form-control mb-2'
                type='email'
                placeholder='E-Posta adresinizi giriniz.'
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='form-control'
                type='password'
                placeholder='Şifrenizi giriniz.'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='btn btn-success w-100 mt-3' type='submit'>
                Üye Ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
