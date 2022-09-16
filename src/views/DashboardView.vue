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
          <div class="card"></div>
        </div>
        <div class="middle"></div>
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
  .left {
    width: 20%;
    background: #14142d;
    border: 1px solid #ebebeb;
    height: 100%;

    .logo-wrapper {
      padding: 25px 50px;
    }
    // .menu {
    //   display: flex;
    //   flex-direction: column;
    //   grid-gap: 20px;
    //   .menu-item {
    //     display: flex;
    //     align-items: center;
    //     grid-gap: 10px;
    //     padding: 20px 40px;
    //     border-radius: 5px;
    //     vertical-align: middle;
    //     img {
    //       width: 20px;
    //       height: 20px;
    //     }
    //     p {
    //       font-weight: 700;
    //       font-size: 15px;
    //       color: #fff;
    //     }
    //   }
    //   .active {
    //   }
    // }
    .menu {
      grid-gap: 10%;
      .menu-item {
        display: flex;
        align-items: center;
        padding: 17.5px 15%;
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
        }
      }

      .active {
        background-color: #fff;
        color: #e41613;
        width: 90%;
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
