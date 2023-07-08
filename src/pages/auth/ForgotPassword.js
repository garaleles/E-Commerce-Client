import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  //state
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Butona basıldığında loading true olacak.
  //navigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Sayfanın yenilenmesini engeller.
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/users/forgot-password`, {
        email,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(
          'Lütfen e-posta adresinize gönderilen şifre sıfırlama linkine tıklayınız.'
        );
        setLoading(false);
        navigate('/');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className='display-1 bg-primary text-light p-2'>Şifremi Unuttum</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 offset-lg-4'>
            <h1 className='text-center'>Giriş Yap</h1>
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

              <button
                className='btn btn-success w-100 mt-3 mb-4'
                type='submit'
                disabled={loading}
              >
                {loading ? 'Bekleyin...' : 'Giriş Yap'}
              </button>
            </form>

            <Link className='text-danger' to='/login'>
              Giriş Sayfasına Git
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
