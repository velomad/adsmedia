<template>
  <div style="background-color: #f5f5f5">
    <div class="flex-col space-y-4 text-center w-full py-10">
      <h1
        class="text-center font-semibold text-gray-600 text-4xl capitalize"
      >
        OUR SERVICES
      </h1>
      <p class="lg:w-2/3 mx-auto text-gray-500 font-semibold leading-relaxed text-base">
        Adsmidea Media, a holistic programmatic ecosystem helps connect brands
        with their respective publisher across all formats and devices.
      </p>
    </div>
    <div class="space-y-6 md:grid grid-cols-3 gap-10 py-10 px-4">
      <div v-for="(item, index) in test" :key="index" class="mt-6">
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
            "Looking For approach To Increase Your Brand Following Or Attracting Advertisers To Publish Ads On Your Website? With a Network Of Quality Affiliates And Advertisers.We Understanding the Buying nature of the Consumers,and Targeting the right audience through our Publishers,with a database of more than 20 million users.",
        },
        {
          icon: "buy.svg",
          heading: "Media Buying & Planning",
          content:
            "We complete your media plan with every placement from every supplier to be included in your campaign,including the time frame each placement will run and ensure the successful completion of the marketing campaign objective.Our approach towards strategically selecting the media mix is always analytical and innovative, share campaigns brief,and we will go all out to give you a comprehensive plan with best rates!",
        },
        {
          icon: "whatsapp.svg",
          heading: "Whatsapp Marketing",
          content:
            "Drive higher delivery, open and conversions rate, compared to other messaging channels.WhatsApp has become one of the most important mediums of communication over time for users of all ages and genders.Hence, it brings unique advantage overall other modes of marketing as it has huge reach.",
        },
        {
          icon: "search.svg",
          heading: "Search Engine Marketing",
          content:
            "Searching for a Google certified Partner? Currently,95% of internet users turn to search engines like Google, yahoo or bing to find the products or services they need.We help you to increase your search engine visibility through paid advertising, our team of certified google professionals ensures to give you best results on all SEM promotions ensuring you get the best ROI",
        },
        {
          icon: "facebook.svg",
          heading: "Social Media Advertising",
          content:
            "Social Sites have become the capital for businesses to build relationships which go miles in reaching out to the intended customers- that too in an amicable manner.We help you socialize with your targeted audience on platforms such as Facebook,Instagram, twitter, google plus, linkedIn etc.Our aim is to engage, generate maximum traffic/leads and create brand awareness via social platforms.",
        },
        {
          icon: "coding.svg",
          heading: "Web Design & Developement",
          content:
            "Your website gives a place for interested users to learn more about your business, your products and services.Adsmidea offers Website Designing and Development.Our professionals team have proven industry and technical experience and uses smart techniques and standard methodologies to give innovative solutions in time.",
        },
      ],
    };
  },
};
</script>
