import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomeBody from './pages/homeBody.js';
import HomeHeader from './pages/homeHeader.js';
import HomeHeader2 from './pages/homeHeader2.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import PictureHome from './pages/pictureHome.js';
import IPDPProject from './pages/ipdpProject.js';
import ProductHeader from './pages/productHeader.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomeHeader} />
					<HomeHeader2 />
					<HomeBody />
					<ProductHeader />
					<IPDPProject />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
