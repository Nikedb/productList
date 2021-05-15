import React, { useEffect, useState } from 'react';
import InputField from '../../library/common/component/InputField';


const filterData = [{ id: 1, value: 'name', placeholder: 'Search by Name' }, {
  id: 2,
  value: 'category',
  placeholder: 'Search by Category',
}];
const Filter = ({ setFilterPage, currentPosts }) => {
  const [filter, setFilter] = useState({ category: '', name: '' });

  useEffect(() => {
    setFilterPage(filter);
  }, [filter]);

  useEffect(() => {
    setFilterPage(filter);
  }, [currentPosts]);

  const handleInput = (value, key) => {
    if (key === 'category') {
      setFilter({ ...filter, category: value });
    } else {
      setFilter({ ...filter, name: value });
    }
  };

  return (
    <div className='row mb-3'>
      {filterData.map((item, i) =>
        <div className='col-sm-4 mb-2'>
          <InputField field={item.value} onChange={handleInput} placeholder={item.placeholder}/>
        </div>,
      )}

    </div>
  );
};

export default Filter;
