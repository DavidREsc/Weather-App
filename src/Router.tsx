import {Routes, Route, Navigate} from 'react-router-dom'
import Navigation from './navigation/Navigation'
import Weather from './weather/Weather'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route path='' element={<Navigate to='weather'/>}/>
                <Route path='weather' element={<Weather />}/>
            </Route>
        </Routes>
    )
}

export default Router;
