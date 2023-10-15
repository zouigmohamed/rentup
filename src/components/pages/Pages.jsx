import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home"
import About from "../about/About"
import Blog from "../blog/Blog"
import Pricing from "../home/pricing/Pricing"
import Services from "../services/services"
import Contact from "../contact/Contact"
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default Pages;
