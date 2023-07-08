import {useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


const Register = () => {
    //state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Butona basıldığında loading true olacak.
    //navigate
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // Sayfanın yenilenmesini engeller.
        e.preventDefault();

        try {
            setLoading(true);
            const {data} = await axios.post(`/users/pre-register`, {
                email,
                password,
            });
            if (data?.error) {
                toast.error(data.error);
                setLoading(false);
            } else {
                toast.success(
                    'Kayıt başarılı. Lütfen e-posta adresinize gelen bağlantıya tıklayarak hesabınızı aktifleştiriniz.'
                );
                setLoading(false);
                navigate('/login');
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
                            <button className='btn btn-success w-100 mt-3' type='submit' disabled={loading}>
                                {loading ? 'Bekleyin...' : 'Üye Ol'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
