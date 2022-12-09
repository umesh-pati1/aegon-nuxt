<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <agn-title label="Hello world"></agn-title>
      <agn-homepage
        :dataFetched="true"
        :homePageData="homePageData"
        @getuserdetails="getUserDetails"
      >
      </agn-homepage>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getBodyContent } from "~/utils/utils";

const API_URL =
  "https://services.aegonlife.com/webcms/subrequests?_format=json&query=" +
  getBodyContent({ path: "/home" });

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      homePageData: [],
    };
  },
  async fetch() {
    const res = await fetch(API_URL).then((res) => res.json());
    const resp = Object?.values(res);
    const data = JSON?.parse(resp[1].body).data;
    this.homePageData = {
      pageHeader: data?.banner,
      pageComponents: data?.components?.paragraphs[0]?.components,
    };

    console.log(this.homePageData);
  },

  methods: {
    getUserDetails(e) {
      console.log(e);
    },
  },
});
</script>
