<template>
  <div>
    <!-- <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p> -->
    <agn-life-offerings :data="AegonLifeOfferings"></agn-life-offerings>
  </div>
</template>

<script>
import Vue from "vue";
import { getBodyContent } from "~/utils/utils";

const API_URL =
  "https://services.aegonlife.com/webcms/subrequests?_format=json&query=" +
  getBodyContent({ path: "/buy-aegonlife-plans" });

export default Vue.extend({
  name: "IndexPage",

  async asyncData({ params, $http }) {
    const res = await $http.$get(API_URL);
    const resp = Object?.values(res);
    const data = JSON?.parse(resp[1].body).data;
    const AegonLifeOfferings = {
      pageHeader: data?.banner[0],
      pageContent: data?.components?.paragraphs[0]?.content,
    };

    console.log("data", AegonLifeOfferings);
    return { AegonLifeOfferings };
  },
  methods: {
    getUserDetails(e) {
      console.log(e);
    },
  },
});
</script>
