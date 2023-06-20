import {Routes, Route, Navigate} from 'react-router-dom'
import Navigation from './navigation/Navigation'
import WeatherContainer from './weather/WeatherContainer'
import NotImplemented from './navigation/NotImplemented'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route path='' element={<Navigate to='weather'/>}/>
                <Route path='weather' element={<WeatherContainer />}/>
                <Route path='nav2' element={<NotImplemented />}/>
                <Route path='nav3' element={<NotImplemented />}/>
                <Route path='nav4' element={<NotImplemented />}/>
            </Route>
        </Routes>
    )
}

export default Router;
