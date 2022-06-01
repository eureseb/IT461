import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';

export default function CatDelete() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteCat = id =>
    axiosPrivate.delete(`/cats/${id}`).then(() => {
      navigate('/cats/');
    });
  const handleNo = () => navigate('/cats/');
  const handleYes = () => deleteCat(id);

  return (
    <div>
      Do you want to delete? <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
}
