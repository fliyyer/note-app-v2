import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LocaleProvider } from './context/LocaleContext';
import ToggleTheme from './components/ToggleTheme';
import Navbar from './components/Navbar';
import AddNote from './pages/AddNote';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getNote } from './utils/local-data'
import { getUserLogged, putAccessToken } from './utils/api';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         authedUser: null,
         initializing: true,
         localeContext: {
           locale: 'id',
           toggleLocale: () => {
             this.setState((prevState) => {
               return {
                 localeContext: {
                   ...prevState.localeContext,
                   locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
                 }
               }
             })
           }
         }, 
         theme: localStorage.getItem('theme') || 'light',
         toggleTheme: () => {
            this.setState((prevState) => {
               const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
               localStorage.setItem('theme', newTheme);
               return {
                 theme: newTheme
               };
            });
         }
      };

      this.onLoginSuccess = this.onLoginSuccess.bind(this);
      this.onLogout = this.onLogout.bind(this);
   }

   async onLoginSuccess({ accessToken }) {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();

      this.setState (() => {
         return {
            authedUser: data,
         };
      });
   }

   onLogout() {
      this.setState(() => {
         return {
            authedUser: null
         }
      });
      putAccessToken("");
   }

   componentDidUpdate(prevState) {
      if (prevState.theme !== this.state.theme) {
         document.documentElement.setAttribute("data-theme", this.state.theme);
       }
    }

    async componentDidMount() {
      document.documentElement.setAttribute("data-theme", this.state.theme);
      const { data } = await getUserLogged();
  
      this.setState(() => {
        return {
          authedUser: data,
          initializing: false,
        };
      });
    }

   render() {
      if (this.state.initializing) {
         return null;
      }

      if (this.state.authedUser === null) {
         return (
            <LocaleProvider value={this.state.localeContext}>
               <ThemeProvider value={this.state}>
                <div className="app-container">
            <header>
              <h1>
                <Link to="/">
                  Aplikasi Catatan
                </Link>
              </h1>
            </header>

            <body>
              <Routes>
                <Route
                  path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}/>}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </body>
          </div>
            </ThemeProvider>
            </LocaleProvider>
         );
      }

      return (
         <LocaleProvider value={this.state.localeContext}>
            <ThemeProvider value={this.state}>
            <div className='app-container'>
         <header>
           <h1><Link to='/'>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
           <ToggleTheme />
           <Navbar logout={this.onLogout} name={this.state.authedUser.name}/>
         </header>
         <body>
            <Routes>
               <Route path='/' element={<HomePage id={getNote}/>} />
               <Route path='/archive' element={<ArchivePage />} />
               <Route path='/add' element={<AddNote />} />
               <Route path='/notes/:id' element={<DetailPage id={getNote}/>} />
            </Routes>
         </body>
         </div>
         </ThemeProvider>
         </LocaleProvider>
      );
   }
}

export default App;
