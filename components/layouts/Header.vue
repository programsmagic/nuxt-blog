<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="container">
      <!-- Begin Logo -->
      <a class="navbar-brand" href="/">
        <img src="https://programsmagic.com/img/logo.626b6e5d.png" alt="logo">
      </a>
      <!-- End Logo -->
      <div id="navbarsExampleDefault" class="collapse navbar-collapse">
        <!-- Begin Menu -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/#stories">Stories <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Author</a>
          </li>
        </ul>
        <!-- End Menu -->
        <!-- Begin Search -->
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <span class="search-icon"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z" /></svg></span>
        </form> -->
        <!-- End Search -->
      </div>
    </div>
  </nav>
<!-- End Nav -->
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>
