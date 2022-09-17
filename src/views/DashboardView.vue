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
        <p>Dashboard</p>
        <div class="search-bar"></div>
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
              <img src="../assets/img/users-icon.svg" alt="Total Loan Disbursed" />
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
          <div class="chart"></div>
          <div class="ratio"></div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap");
.dashboard {
  width: 100%;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  .left {
    width: 17.5%;
    background: #14142d;
    // border: 1px solid #ebebeb;
    height: 100%;
    .logo-wrapper {
      padding: 25px 20px;
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

    .dashboard-body {
      width: 100%;

      .top {
        display: flex;
        width: 100%;
        justify-content: space-between;
        grid-gap: 3%;
        padding: 0 3%;
        .card {
          width: 100%;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fdfdff;
          border: 1px solid #ebebeb;
          border-radius: 13px;
          padding: 20px;
          font-size: 14px;
          line-height: 23px;
          .card-top {
            img {
              width: 22px;
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
    }
  }
}
.logo {
  background: #e41613;
  border-radius: 9px;
  padding: 7.5px 5px;
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
