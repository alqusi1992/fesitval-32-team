import CancelIcon from '@material-ui/icons/Cancel';
import { ModalContainer, ModalBackdrop } from './RegisterStyles';

const Register = () => {
  return (
    <ModalContainer>
      <ModalBackdrop />
      <div className='modal'>
        <CancelIcon className='cancelModal' />
        <form>
          <div className='fieldsContainer'>
            <div className='formGroup'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                className='formControl'
                name='firstName'
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' className='formControl' name='' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input type='email' className='formControl' name='' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input type='password' className='formControl' name='' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='phone'>Phone Number</label>
              <input type='tel' className='formControl' name='' required />
            </div>
          </div>
          <div className='btnContainer'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default Register;
