import './App.css';
import Container from './components/Container';
import Main from './components/Main';

function App() {
  return (
    <div className="App">

      <Container>
        <Main/>
      </Container>
      <footer className="footer">
         <p className="footer__text">© 2023. All rights reserved.</p>
         <p className="footer__text">Designed and developed by <a href="https://github.com/ozlemezgi">Özlem Ezgi SARI</a> </p>
          <p className="footer__text">Find me on <a href="https://www.linkedin.com/in/ozlemezgisari/">Linkedin</a></p>
        </footer>
    </div>
  );
}

export default App;
