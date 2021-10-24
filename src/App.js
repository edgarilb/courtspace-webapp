import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import DashboardPage from './pages/dashboard'
import PlayersPage from './pages/players'
import DownloadPage from './pages/download'
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import MainDashBoardPage from './pages/mainDashBoard'

function App() {
  return (
    <AuthProvider>
       <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path = '/signin' component={SigninPage} exact/>
          <Route path = '/signup' component={SignupPage} exact/>
          <Route path = '/players' component ={PlayersPage} exact/>
          <Route path = '/download' component ={DownloadPage} exact/>
          <Route path = '/forgot-password' component={ForgotPassword} exact/>
          <Route path = '/main-dashboard' component={MainDashBoardPage} exact/>
          <PrivateRoute path = '/dashboard' component={DashboardPage} exact/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
