import React from 'react'
import {ListUsers} from './users/List'
import {CreateUser} from './users/Create'
import {LiveUser} from './users/Live'

const App: React.FC = () => {
    return (
        <div className="App">
            <ListUsers/>
            <CreateUser/>
            <LiveUser/>
        </div>
    )
}

export default App
