import Header from './components/header/header';
import Banner from './components/banner/banner';
import EmailCollation from './components/email-collation/email-collation';
import Info from './components/info/info';
import MaxiBusiness from './components/maxi-business/maxi-business';
import WhyMaxi from './components/why-maxi/why-maxi';
import Mission from './components/mission/mission';
import Footer from './components/footer/footer';
import './App.css';

const App = () => (
  <div>
    <Header/>
    <Banner/>
    <EmailCollation/>
    <Info/>
    <MaxiBusiness/>
    <WhyMaxi/>
    <Mission/>
    <Footer/>
  </div>
)

export default App;
