<template>
  <div style="background-color: #f5f5f5">
    <div class="flex-col space-y-4 text-center w-full py-10">
      <h1 class="text-center font-semibold text-gray-600 text-4xl capitalize">
        ADSREVENUE SERVICES
      </h1>
      <p
        class="lg:w-2/3 mx-auto text-gray-500 font-semibold leading-relaxed text-base"
      >
        Interactive Digital Consulting Agency
      </p>
    </div>
    <div class="space-y-6 md:grid grid-cols-3 gap-10 py-10 px-4">
      <div
        v-for="(item, index) in test"
        :key="index"
        class="mt-6"
        v-scroll-reveal.reset="{ delay: 150 }"
      >
        <Card
          :heading="item.heading"
          :content="item.content"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
export default {
  name: "Services",
  components: { Card },

  data() {
    return {
      test: [
        {
          icon: "megaphone.svg",
          heading: "Affiliate Marketing",
          content:
            "Looking For approach To increase your brand following or attracting advertisers To publish Ads on your website with a network of quality Affiliates And advertisers. we understanding the buying nature of the consumers and targeting the right audience through our publishers with a database of more than 20 million users.",
        },
        {
          icon: "buy.svg",
          heading: "Media Buying & Planning",
          content:
            "We complete your media plan with every placement from every supplier to be included in your campaign. Our approach towards strategically selecting the media mix is always analytical and innovative, share campaign's brief, and we'll go all out to give you a comprehensive plan with the best rates to achieve more revenue.",
        },
        {
          icon: "whatsapp.svg",
          heading: "Whatsapp Marketing",
          content:
            " Drive higher delivery, open and maximum conversion rate, compared to other messaging channels. WhatsApp has become one of the most important mediums of communication over time for users of all ages and genders. Hence, it brings a unique advantage over all other modes of social media marketing as it has a huge reach.",
        },
        {
          icon: "search.svg",
          heading: "Search Engine Marketing",
          content:
            "Searching for a Google certified Partner? Currently, 87% of internet users turn to search engines like Google or Yahoo to find the products or services they need. We help you to increase your search engine visibility by paid advertising, our team of certified google professionals ensures to give you the best results. ",
        },
        {
          icon: "facebook.svg",
          heading: "Social Media Marketing",
          content:
            "Social Sites have become the capital for businesses to build relationships which go miles in reaching out to the intended customers. We help you socialize with your targeted audience on platforms such as Facebook, Instagram, LinkedIn etc.. To generate maximum traffic/leads and create brand awareness via social platforms. ",
        },
        {
          icon: "coding.svg",
          heading: "Web Design & Developement",
          content:
            "Your website gives a place for interested users to learn more about your business, your products and services. Adsmidea offers Website Designing and Development. Our professional team has proven industry and technical experience and uses smart techniques and standard methodologies to give innovative solutions in time. ",
        },
      ],
    };
  },
};
</script>
<style>
body {
  overflow-x: hidden;
}
</style>
