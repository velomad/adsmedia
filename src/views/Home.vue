<template>
  <div>
    <div class="space-y-8">
      <div class="h-screen">
      <HomeScreen />
      </div>
      <AboutScreen />
      <WhyWe />
      <ServicesScreen />
      <Skills />
      <ContactUs />
    </div>
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
import AboutScreen from "../sections/About/About";
import ServicesScreen from "../sections/Services/Services";
import ContactUs from "../sections/ContactUs/ContactUs";
import Skills from "../sections/Excellence/Excellence";
import WhyWe from "../sections/WhyWe/WhyWe";

export default {
  name: "Home",
  components: {
    HomeScreen,
    AboutScreen,
    ServicesScreen,
    ContactUs,
    Skills,
    WhyWe
  },
};
</script>
