import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';

export default function DogDelete() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteDog = id =>
    axiosPrivate.delete(`/dogs/${id}`).then(() => {
      navigate('/dogs/');
    });
  const handleNo = () => navigate('/dogs/');
  const handleYes = () => deleteDog(id);

  return (
    <div>
      Do you want to delete? <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
}
