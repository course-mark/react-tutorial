import React, { memo, useState } from 'react'

function UserForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
      <>
        <label>
          Name{': '}
          <input value={name} onChange={e => setName(e.target.value)} />
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