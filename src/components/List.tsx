import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { fetchList } from '../store/slices/listSlice';

const List: React.FC = () => {
  const { items, status, error } = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
