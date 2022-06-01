import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export default function DeleteDog() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const deleteDog = id =>
    axiosPrivate.delete(`/dogs/${id}`).then(() => {
      navigate('/dogs/');
    });
  const handleNo = () => navigate('/dogs/');
  const handleYes = () => deleteDog(id);

  const { id } = useParams();
  return (
    <div>
      Do you want to delete? <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
}
