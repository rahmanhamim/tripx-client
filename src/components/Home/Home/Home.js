import React from "react";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Services from "../Services/Services";
import WhyWe from "../WhyWe/WhyWe";

const Home = () => {
 const hello = useAuth();
 console.log(hello);
 return (
  <>
   <Banner></Banner>
   <Services></Services>
   <WhyWe></WhyWe>
   <Review></Review>
  </>
 );
};

export default Home;
