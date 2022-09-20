<template>
  <div class="dashboard">
    <div class="left">
      <div class="logo-wrapper">
        <div class="logo"><p>Lend'n</p></div>
      </div>
      <div class="menu">
        <div class="menu-item active">
          <img class="menu-icon" alt="menu-icon" src="../assets/img/dash.svg" />
          <p>Dashboard</p>
        </div>
        <div class="menu-item">
          <img class="menu-icon" alt="menu-icon" src="../assets/img/loan.svg" />
          <p>Loan Management</p>
        </div>
        <div class="menu-item">
          <img
            class="menu-icon"
            alt="menu-icon"
            src="../assets/img/management.svg"
          />
          <p>User Management</p>
        </div>
        <div class="menu-item">
          <img
            class="menu-icon"
            alt="menu-icon"
            src="../assets/img/credit.svg"
          />
          <p>Credit Scoring</p>
        </div>
        <div class="menu-item">
          <img
            class="menu-icon"
            alt="menu-icon"
            src="../assets/img/onboarding.svg"
          />
          <p>User Onboarding</p>
        </div>
        <div class="menu-item">
          <img
            class="menu-icon"
            alt="menu-icon"
            src="../assets/img/settings.svg"
          />
          <p>Settings</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="dashboard-nav">
        <div class="one">
          <p>Dashboard</p>
          <div class="search-bar">
            <img src="@/assets/img/search.svg" alt="Search Bar" />
            <input placeholder="Search" v-bind="search" />
          </div>
        </div>
        <div class="two">
          <img
            src="../assets/img/notification.png"
            alt="Notification"
            class="notify-bell"
          />

          <div class="user-details">
            <p>Venty Loans</p>
            <img src="@/assets/img/name.svg" alt="user" />
            <img
              src="@/assets/img/caret-down.svg"
              alt="user"
              class="caret-down"
            />
          </div>
        </div>
      </div>

      <div class="dashboard-body">
        <div class="top">
          <div class="card">
            <div class="card-top">
              <p>Total Loan Disbursed</p>
              <img src="../assets/img/wallet.svg" alt="Total Loan Disbursed" />
            </div>
            <div class="card-bottom">
              <p>₦510,000.50</p>
              <div class="card-bottom-icon">
                <p>+ 1%</p>
                <img src="../assets/img/up-arrow.svg" alt="up" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-top">
              <p>Loan Products</p>
              <img src="../assets/img/product.svg" alt="Total Loan Disbursed" />
            </div>
            <div class="card-bottom">
              <p>20 Products</p>
              <div class="card-bottom-icon">
                <p>+ 0,7%</p>
                <img src="../assets/img/up-arrow.svg" alt="up" />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-top">
              <p>Users</p>
              <img
                src="../assets/img/users-icon.svg"
                alt="Total Loan Disbursed"
              />
            </div>
            <div class="card-bottom">
              <p>15 people</p>
              <div class="card-bottom-icon">
                <p>- 1,7%</p>
                <img src="../assets/img/down-arrow.svg" alt="up" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-top">
              <p>Loan Vendors</p>
              <img src="../assets/img/vendor.svg" alt="Total Loan Disbursed" />
            </div>
            <div class="card-bottom">
              <p>10 vendors</p>
              <div class="card-bottom-icon">
                <p>+ 1%</p>
                <img src="../assets/img/up-arrow.svg" alt="up" />
              </div>
            </div>
          </div>
        </div>

        <div class="middle">
          <div class="chart-container">
            <div class="heading">
              <h3>Disbursement chart</h3>
              <div class="other">
                <p>January 2021 – December 2021</p>
                <img
                  src="@/assets/img/caret-down.svg"
                  alt="user"
                  class="caret-down"
                />
              </div>
            </div>
            <LineComponent />
          </div>
          <div class="pie-container">
            <div class="heading">
              <h3>Loan Ratio</h3>
            </div>
            <div class="pie-chart-wrapper">
              <PieChart />
              <div class="legend">
                <div class="one">
                  <div class="key"></div>
                  <p>Active</p>
                </div>
                <div class="two">
                  <div class="key"></div>
                  <p>Inactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="bottom-card">
            <img src="@/assets/img/transfer.svg" alt="Transfer Funds" />
            <div class="content">
              <h3>Transfer Funds</h3>
              <p>Send funds to customers</p>
            </div>
          </div>
          <div class="bottom-card">
            <img src="@/assets/img/pay-bills.svg" alt="Pay Bills" />
            <div class="content">
              <h3>Pay Bills</h3>
              <p>Pay for your utilities here</p>
            </div>
          </div>
          <div class="loan-card">
            <div class="heading"><p>Top Performing Loan</p></div>
            <div class="content">
              <img src="@/assets/img/top-loan.svg" alt="Transfer Funds" />
              <div class="text">
                <div class="rating">
                  <p>Venty Asset Loan</p>
                  <div class="stars">
                    <img src="../assets/img/star.svg" />
                    <img src="../assets/img/star.svg" />
                    <img src="../assets/img/star.svg" />
                    <img src="../assets/img/star.svg" />
                    <img src="../assets/img/star-1.svg" />
                  </div>
                </div>
                <p class="amount">N870,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.dashboard {
  width: 100%;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  font-family: "Roboto", sans-serif;
  .left {
    width: 17.5%;
    background: #14142d;
    // border: 1px solid #ebebeb;
    height: 100%;
    .logo-wrapper {
      padding: 25px 40px;
    }
    .menu {
      grid-gap: 15%;
      .menu-item {
        display: flex;
        align-items: center;
        padding: 15px 10%;
        grid-gap: 10%;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        display: flex;
        align-items: center;
        vertical-align: middle;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #fff;
        grid-gap: 10%;
        margin: 10% 0;
        p {
          padding-top: 5px;
          font-weight: 700;
          font-size: 15px;
          line-height: 20px;
        }
      }

      .active {
        background-color: #fff;
        color: #e41613;
        width: 90%;
      }
    }
  }
  .right {
    width: 82.5%;
    height: 100%;
    max-height: 100%;
    box-sizing: border-box;

    .dashboard-nav {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 15px 4%;
      align-items: center;

      background: #fdfdff;
      .one {
        display: flex;
        width: 40%;
        justify-content: space-between;
      }

      .two {
        display: flex;
        justify-content: space-between;
        width: 25%;
        align-items: center;
      }
      p {
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 36px;
        display: flex;
        align-items: center;

        /* text|dark */

        color: #4f4f4f;
      }
      .search-bar {
        padding: 0px 10px;
        width: 70%;
        background: #fff;
        display: flex;
        align-items: center;
        background: #fdfdff;
        border: 1px solid #dadada;
        border-radius: 8px;
        img {
          padding-right: 10px;
          height: 12px;
        }
        input {
          border: 0;
          padding: 2px 5px;
          padding-left: 7.5px;
          background: transparent;
          width: 100%;
          &:focus {
            border: 0;
            background: transparent;
            outline: none;
          }
        }
      }
      .notify-bell {
        width: 22px;
        height: 22px;
      }
      .user-details {
        display: flex;
        align-items: center;
        width: 65%;
        justify-content: space-between;
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          text-align: right;
          color: #4f4f4f;
        }
        img {
          width: 42px;
        }
        .caret-down {
          width: 12px;
        }
      }
    }

    .dashboard-body {
      width: 100%;
      padding: 25px 0;
      .top {
        display: flex;
        width: 100%;
        justify-content: space-between;
        grid-gap: 3%;
        padding: 0 3%;
        .card {
          width: 100%;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fdfdff;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          padding: 15px 20px;
          font-size: 14px;
          line-height: 23px;
          .card-top {
            p {
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 700;
              // font-size: 16px;
              // line-height: 18px;
              display: flex;
              align-items: center;
            }
            img {
              width: 22px;
            }
          }
          .card-bottom {
            p {
              color: #4f4f4f;
            }
          }
          div {
            display: flex;
            justify-content: space-between;
            .card-bottom-icon {
              width: 30%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              img {
                height: 12px;
              }
            }
          }
        }
      }
      .middle {
        display: grid;
        grid-template-columns: 883fr 578fr;
        height: 40%;
        // max-height: 400px;
        // padding: 25px 0;
        padding: 5% 3%;
        grid-gap: 5%;
        box-sizing: border-box;
        .chart-container {
          background: #fdfdff;
          /* stroke */
          border: 1px solid #ebebeb;
          border-radius: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .heading {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 25px 5%;
            h3 {
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 18px;
              display: flex;
              align-items: center;
            }
            div {
              display: flex;
              p {
                font-family: "Roboto", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;

                /* text|dark */

                color: #4f4f4f;
              }
              img {
                width: 15px;
                padding: 0 3px;
              }
            }
          }
        }
        .pie-container {
          background: linear-gradient(142.74deg, #ef3054 0%, #360b0b 75.19%);
          border: 1px solid #ebebeb;
          border-radius: 13px;
          // display: flex;
          // justify-content: center;
          // align-items: center;
          .heading {
            padding-top: 25px;
            padding-left: 5%;
            h3 {
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 18px;
              display: flex;
              align-items: center;
              color: #fff;
            }
          }
          .pie-chart-wrapper {
            // display: flex;
            display: grid;
            grid-template-columns: 4fr 2fr;
            .legend {
              display: flex;
              flex-direction: column;
              justify-content: center;
              div {
                padding: 5% 0;
                display: flex;
                align-items: center;

                .key {
                  width: 20px;
                  height: 20px;

                  background: #ffffff;
                  border: 1px solid #ffffff;
                  border-radius: 5px;
                }
                p {
                  font-family: "Roboto", sans-serif;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 16px;
                  display: flex;
                  align-items: center;
                  color: #fff;
                  padding-left: 7.5%;
                }
              }
              .two {
                .key {
                  background: #ff9737;
                  border: 1px solid #ff9737;
                }
              }
            }
          }
        }
      }
      .bottom {
        display: grid;
        width: 100%;
        // justify-content: space-between;
        grid-template-columns: 1fr 1fr 1.2fr;
        align-items: center;
        grid-gap: 3%;
        padding: 0 3%;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;

        color: #000000;

        .bottom-card {
          display: flex;
          // width: 100%;
          // height: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fdfdff;
          border: 1px solid #ebebeb;
          border-radius: 13px;
          padding: 20px 30px;
          font-size: 14px;
          line-height: 23px;
          height: 100%;
          img {
            width: 75px;
          }
          .content {
            text-align: left;
            h3 {
              color: #030229;
              font-style: normal;
              font-weight: 800;
              font-size: 16px;
              line-height: 22px;
              opacity: 0.7;
              padding-bottom: 5%;
            }
          }
        }
        .loan-card {
          display: flex;
          flex-direction: column;
          background: #fdfdff;
          border: 1px solid #ebebeb;
          // height: 120px;
          border-radius: 10px;
          padding: 20px;
          font-size: 14px;
          line-height: 23px;
          .heading {
            text-align: left;
            p {
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 22px;
              color: #000000;
              opacity: 0.7;
            }
            padding-bottom: 5px;
          }
          .content {
            display: flex;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            img {
              height: 50px;
            }
            .text {
              width: 100%;
              display: flex;
              padding: 5px 15px;
              justify-content: space-between;
              align-items: center;

              .rating {
                align-self: left;
                p {
                  font-style: normal;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                }
                .stars {
                  display: flex;
                  padding: 5px 0;
                  img {
                    width: 17.5px;
                    height: 17.5px;
                    padding: 1.5px;
                  }
                }
              }
              .amount {
                font-style: normal;
                font-weight: 700;
                font-size: 15px;
                line-height: 20px;
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
}
.logo {
  background: #e41613;
  border-radius: 9px;
  padding: 7.5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 41px;
    color: #fff;
  }
}
</style>

<script>
import PieChart from "@/components/PieChart.vue";
import LineComponent from "@/components/LineComponent.vue";
// import LineChart from '@/components/LineChart.vue';
// import Pie from "../components/PieChart.vue";
// import LineChart from "../components/LineChart.vue";
export default {
  name: "App",
  data() {
    return {
      search: "",
    };
  },
  components: {
    PieChart,
    LineComponent,
  },
};
</script>
