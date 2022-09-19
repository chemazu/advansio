<template>
  <div class="news">
    <div class="top-options">dsdds</div>

    <!-- <div   v-if="apiNewsData" class="news-card-wrapper"> -->

    <!-- <div  v-for="(item, index) in apiNewsData" v-bind:key="index" class="news-card"> -->
    <!-- <div class="news-card-wrapper">
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="news-card-wrapper">
      <div v-for="(item, index) in dummy" v-bind:key="index" class="news-card">
        <div class="content">
          <h2>title</h2>
          <p>Date</p>
          <div class="hide">
            <p>Author</p>
            <p>Read More..</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <PaginationComponent
        :totalPages="10"
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
export default {
  data() {
    return {
      apiNewsData: null,
      perPage: 10,
      dummy: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      error: null,
      currentPage: 1,
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
    fetchData() {
      newsData().then((res) => {
        console.log(res);
      });
    },
    setData({ error, data }) {
      if (error) {
        this.error = error;
      } else {
        this.apiNewsData = data.articles;
      }
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
  components: { PaginationComponent },
};
</script>

<style scoped lang="scss">
.news {
  padding: 50px 5%;
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
      background-image: url("../assets/img/news-sample.jpeg");
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
