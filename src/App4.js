import React from 'react'
import { CurrentUserLoader } from './components/ContainerComponents/CurrentUserLoader'
import { UserInfo } from './components/ContainerComponents/UserInfo'

const App4 = () => {
    return (
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
    )
}

export default App4
