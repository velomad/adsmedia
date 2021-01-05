<template>
  <div>
    <div id="home">
      <HomeScreen />
    </div>
    <div id="about-section">
      <AboutScreen />
    </div>

    <div id="why-we">
      <WhyWe />
    </div>
    <div id="services">
      <ServicesScreen />
    </div>

    <div id="working">
      <WorkingProcess />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="happpy-clients">
      <HappyClients />
    </div>
    <div id="contact">
      <ContactUs />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
import AboutScreen from "../sections/About/About";
import ServicesScreen from "../sections/Services/Services";
import ContactUs from "../sections/ContactUs/ContactUs";
import Skills from "../sections/Excellence/Excellence";
import WorkingProcess from "../sections/Working Process/WorkingProcess";
import WhyWe from "../sections/WhyWe/WhyWe";
import Footer from "../components/Footer";
import HappyClients from "../sections/HappyClients/HappyClients";

export default {
  name: "Home",
  components: {
    HomeScreen,
    AboutScreen,
    ServicesScreen,
    ContactUs,
    HappyClients,
    Skills,
    WorkingProcess,
    WhyWe,
    Footer,
  },
};
</script>
