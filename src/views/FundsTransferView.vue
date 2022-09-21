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
            <input placeholder="search" v-bind="search" />
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
            <div class="img-wrapper">
              <img src="@/assets/img/name.svg" alt="user" />
              <img
                src="@/assets/img/caret-down.svg"
                alt="user"
                class="caret-down"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="funds-transfer-wrapper">
        <div class="funds-transfer">
          <h2>Funds Transfer</h2>
          <div class="img-wrapper">
            <img
              src="@/assets/img/fund-image.svg"
              alt="user"
              class="caret-down"
            />
          </div>
          <div class="form-wrapper">
            <form>
              <div class="form-row">
                <div class="form-item">
                  <label>Select Account</label>
                  <div class="select-wrapper">
                    <select>
                      <option selected="true" disabled="disabled">
                        Select Account
                      </option>
                      <option>N1,000</option>
                      <option>N10,000</option>
                      <option>N100,000</option>
                    </select>
                  </div>
                </div>
                <div class="form-item">
                  <label>Amount</label>
                  <div class="input-wrapper">
                    <input placeholder="0.00" />
                    <img src="@/assets/img/calendar.svg" />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-item">
                  <label>Account Number</label>
                  <div class="input-wrapper">
                    <input placeholder="Enter Account Number" />
                  </div>
                </div>
                <div class="form-item">
                  <label>Select Bank</label>
                  <div class="select-wrapper">
                    <select>
                      <option selected="true" disabled="disabled">
                        Select Recipient Bank
                      </option>
                      <option>Bank Option 1</option>
                      <option>Bank Option 2</option>
                      <option>Bank Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-item">
                  <label>Account Name</label>
                  <div class="input-wrapper">
                    <input placeholder="Enter Account Name" />
                  </div>
                </div>
                <div class="form-item">
                  <label>VAT</label>
                  <div class="input-wrapper">
                    <input placeholder="Enter VAT" />
                  </div>
                </div>
              </div>
              <div class="button-wrapper">
                <ButtonComponent title="Cancel" className="pry" />
                <ButtonComponent title="Create Invoice" className="sec" />
              </div>
            </form>
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
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
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
        &:hover{
          cursor: pointer;
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
        .img-wrapper {
          display: flex;
          align-items: center;

        }
        img {
          width: 40px;
        }
        .caret-down {
          width: 15px;
          padding-left: 7.5px;
        }
      }
    }

    .funds-transfer-wrapper {
      width: 100%;
      padding: 2.5%;
      padding-bottom: 0;
      height: 100%;

      .funds-transfer {
        padding: 2% 5%;
        height: 100%;
        background-color: #fff;

        h2 {
          text-align: left;
        }
      }
      .img-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 5% 0;
        img {
          width: 10%;
        }
      }
      .form-wrapper {
        width: 100%;
        height: 60%;
        form {
          width: 100%;
          display: grid;
          height: 100%;
          .form-row {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 5%;
            height: 20%;
            .form-item {
              width: 100%;

              label {
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;

                /* Text */

                color: #030229;
              }
              .input-wrapper,
              .select-wrapper {
                width: 100%;
                background: #fafafb;
                border-radius: 8px;
                padding: 7.5px 5px;
                margin: 5px 0;
                display: flex;
                align-items: center;
                select,
                input {
                  // overflow: visible;
                  border: 0;
                  padding: 2px 5px;
                  padding-left: 7.5px;
                  background: transparent;
                  width: 95%;
                  height: 1.8rem;
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 16px;
                  color: #030229;
                  opacity: 0.7;
                  &::placeholder {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    color: #030229;
                    opacity: 0.7;
                  }
                  &:focus {
                    border: 0;
                    background: transparent;
                    // color: #030229;

                    outline: none;
                  }
                  // -webkit-appearance:none;
                }
              }

              .input-wrapper {
                padding-right: 7%;
                img {
                  height: 1.5rem;
                }
              }
            }
          }
          .button-wrapper {
            display: flex;
            justify-content: space-around;
            padding: 0 20%;
            padding-top: 5%;

            button {
              width: 40%;
              padding: 10px 15px;
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
@media screen and (max-width: 480px) {
  .dashboard {
    .left {
      display: none;
    }
    .right {
      width: 100%;
      .dashboard-nav {
        .one {
          width: 20%;
        }
        .search-bar{
          display: none;
        }
        .two {
          width: 50%;

          .user-details {
            .img-wrapper {
              display: none;
            }
          }
        }
      }
      .funds-transfer-wrapper{
        .funds-transfer{
          .img-wrapper{
            // padding: 0;
            img{
              width: 100px;
            }
          }
          .form-wrapper{
            form{
              .form-row{
                grid-template-columns: 1fr;
              }
              .button-wrapper{
                padding:  10%;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "App",
  data() {
    return {
      search: "",
    };
  },
  components: {
    ButtonComponent,
  },
};
</script>
