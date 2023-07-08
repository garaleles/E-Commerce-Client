import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function AccessAccount() {
  //context
  const [auth, setAuth] = useAuth();
  //hooks
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      requestAccessAccount();
    }
  }, [token]);

  //functions
  const requestAccessAccount = async () => {
    try {
      const { data } = await axios.post(`/users/access-account`, {
        resetCode: token,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        // save in local storage
        localStorage.setItem('auth', JSON.stringify(data));
        // save in context
        setAuth(data);
        toast.success('Lütfen şifrenizi güncelleyin.');
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div
      className='display-1 d-flex justify-content-center align-items-center vh-100'
      style={{ marginTop: '-5%' }}
    >
      Lütfen bekleyiniz...
    </div>
  );
}
