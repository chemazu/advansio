<template>
  <div class="news">
    <div class="top-options">
      <div class="search-bar">
        <input type="text" v-model="searchQuery" />
        <ButtonComponent title="Search" :onclick="handleSubmit" />
      </div>
    </div>
    <div v-if="apiNewsData" class="news-card-wrapper">
      <div
        v-for="(item, index) in apiNewsData.slice(firstIndex, lastIndex)"
        v-bind:key="index"
        class="news-card"
        :style="{ backgroundImage: `url(${item.urlToImage})` }"
      >
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>Date</p>
          <div class="hide">
            <p>{{ item.author }}</p>
            <a :href="item.url">Read More..</a>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <PaginationComponent
        v-if="apiNewsData"
        :totalPages="numberOfPages"
        :perPage="perPage"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <!-- <li v-for="(item, index) in apiNewsData" v-bind:key="index">s</li> -->
  </div>
</template>

<script>
import { newsData } from "../utils/handleFetch";
import PaginationComponent from "../components/PaginationComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      apiNewsData: null,
      perPage: 21,
      dummy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      error: null,
      currentPage: 1,
      searchQuery: "apple",
    };
  },
  beforeRouteEnter(to, from, next) {
    newsData().then((res) => {
      console.log(res);
      next((vm) => vm.setData(res));
    });
  },
  async beforeRouteUpdate() {
    this.apiNewsData = null;
    newsData()
      .then((res) => {
        this.apiNewsData = res.data.articles;
        this.error = res.error;
      })
      .catch((err) => {
        this.error = err;
      });
  },
  methods: {
    handleSubmit() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=c1503ffc1c2141f3bddc93fd127e4731`
        )
        .then((res) => {
          this.apiNewsData = res.data.articles;
        });
      console.log("stuff");
    },
    // fetchData() {
    //   newsData().then((res) => {
    //     console.log(res);
    //   });
    // },
    setData({ error, data }) {
      if (error) {
        this.error = error;
      } else {
        this.apiNewsData = data.articles;
      }
    },
    onPageChange(page) {
      console.log(this.numberOfPages, page);
      this.currentPage = page;
    },
  },
  computed: {
    firstIndex: function () {
      return (this.currentPage - 1) * this.perPage;
    },
    lastIndex: function () {
      return this.firstIndex + this.perPage;
    },
    numberOfPages: function () {
      let a = Math.floor(this.apiNewsData.length / this.perPage);
      if (this.apiNewsData.length % this.perPage) {
        return a + 1;
      } else return a;
    },
  },
  // const firstPageIndex = (currentPage - 1) * PageSize;
  // const lastPageIndex = firstPageIndex + PageSize;

  components: { PaginationComponent, ButtonComponent },
};
</script>

<style scoped lang="scss">
.news {
  padding: 50px 5%;
  .top-options {
    width: 100%;
    display: flex;
    justify-content: center;
    .search-bar {
      display: flex;
      width: 50%;

      input {
        width: 80%;
        padding: 0 5%;
      }
      button {
        width: 20%;
      }
    }
  }
  //   height: 100%;
  .news-card-wrapper {
    width: 100%;
    // height: 100%;
    padding: 25px 2.5%;
    display: flex;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;

    flex-wrap: wrap;
    grid-gap: 5%;
    overflow: visible;

    .news-card {
      //   background-image: url("../assets/img/news-sample.jpeg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      margin: 2.5% 0;
      width: 30%;
      //   height: 100%;
      height: 200px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0)
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.7) 80%
          );
        z-index: 0;
        &:hover {
        }
      }
      .content {
        height: 35%;
        padding: 5px 15px;
        width: 100%;
        z-index: 30;
        h2 {
          color: #fff;
          font-size: 14px;
        }
        .hide {
          display: none;
          color: blue;
          width: 70%;
          justify-content: space-between;
          padding: 5px 0;
          font-size: 14px;
        }
        &:hover {
          height: 50%;
          .hide {
            display: flex;
          }
        }
      }
    }
  }
  .pagination {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
