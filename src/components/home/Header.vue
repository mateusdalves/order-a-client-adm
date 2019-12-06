<template>
  <header class="bar">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar
          type="light"
          toggleable="sm"
          >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-brand to="/"
              active-class="logo-active"
              class="d-none d-md-block"
              >
                <img src="@/assets/logo.png">
              </b-navbar-brand>
                <b-navbar-nav
                fill
                align="right"
                class="m-10"
                >
                  <b-nav-item
                  v-for="menuItem in menuItems"
                  :key="menuItem.id"
                  :to="menuItem.route" exact
                  class="menu-item pl-4 pr-4"
                  >
                    <img
                    :src="menuItem.iconPath"
                    height="20px"
                    width="20px"
                    class="d-inline-block align-center">
                    <b-nav-text class="pl-2" style="font-size:17px;">
                    {{ menuItem.name }}
                    </b-nav-text>
                  </b-nav-item>
                  <b-nav-item class="pl-4 pr-4 align-bottom">
                    +99 99 99999-9999
                  </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      'menuItems': [
        {
          'id': 0,
          'name': 'Home',
          'route': '/',
          'iconPath': require('@/assets/icons/home.png')
        },
        {
          'id': 1,
          'name': 'Our Menu',
          'route': '/menu',
          'iconPath': require('@/assets/icons/menu.png')
        },
        {
          'id': 2,
          'name': 'Order',
          'route': '/order',
          'iconPath': require('@/assets/icons/order.png')
        },
        {
          'id': 3,
          'name': 'About',
          'route': '/about',
          'iconPath': require('@/assets/icons/about.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.bar {
  width:100%;
  background-color: white;
}
/*.router-link-active {
  background-color: rgba(153, 153, 153, 0.2);
  border-radius: 10px;
}*/
.menu-item {
  transition: background-color 1s;
  border-radius: 10px;
}
.menu-item:hover {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10px;
  cursor: pointer;
}
</style>
