<template>
  <div class="space-y-8">
    <HomeScreen />
    <AboutScreen />
    <ServicesScreen />
    <Skills />
    <ContactUs />
  </div>
</template>

<script>
import HomeScreen from "../sections/HomeScreen/Homescreen";
import AboutScreen from "../sections/About/About";
import ServicesScreen from "../sections/Services/Services";
import ContactUs from "../sections/ContactUs/ContactUs";
import Skills from "../sections/Excellence/Excellence";

export default {
  name: "Home",
  components: {
    HomeScreen,
    AboutScreen,
    ServicesScreen,
    ContactUs,
    Skills,
  },
};
</script>
