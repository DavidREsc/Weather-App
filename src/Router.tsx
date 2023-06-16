import {Routes, Route, Navigate} from 'react-router-dom'
import Navigation from './navigation/Navigation'
import Weather from './weather/Weather'
import NotImplemented from './navigation/NotImplemented'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route path='' element={<Navigate to='weather'/>}/>
                <Route path='weather' element={<Weather />}/>
                <Route path='nav2' element={<NotImplemented />}/>
                <Route path='nav3' element={<NotImplemented />}/>
                <Route path='nav4' element={<NotImplemented />}/>
            </Route>
        </Routes>
    )
}

export default Router;
