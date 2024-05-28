import React, { memo, useState } from 'react'
import { useCallback } from 'react';
import { Input, Calendar, Table } from 'antd';


function UserForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    // const printHello = () => console.log('Hello'); // memory change on every render
    
    const printHello = useCallback(() => console.log('Hello'),[])

    return (
      <>
        <label>
          Name{': '}
          {/* <input value={name} onChange={e => setName(e.target.value)} /> */}
          <Input value={name} onChange={e => setName(e.target.value)} />
          <Calendar/>
          <Table/>
        </label>
        <label>
          Address{': '}
          <input value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <Greeting name={name} />
      </>
    );
}

const Greeting = memo(({ name, address }) => {
    console.log('Rendering Greeting');

    
    return <h3>Hello{name && ', '}{name}!</h3>
})

export default UserForm