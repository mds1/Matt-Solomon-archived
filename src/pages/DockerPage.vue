<template>
  <q-page padding>
    <!-- content -->
    <!-- INTRODUCTION -->
    <h2 class="center-text">Docker</h2>
    <p>
      This page will explain how to install Docker depending on your operating system.
      For a more comprehensive guide to Docker, check out the
      <a
        href="https://docs.docker.com"
      >Docker documentation</a> or this
      <a href="https://www.udemy.com/docker-mastery/">Udemy course</a>.
    </p>

    <!-- INSTALLATION -->
    <h3>Installation</h3>
    <p>
      After following the steps below to install Docker on your operating
      system, run
      <code>docker version</code>
      and make sure it returns information about your Docker install.
      If it does, you properly installed Docker!
    </p>

    <h4>Windows</h4>
    <p>
      If using Windows 10 Pro or Enterprise edition, install Docker from
      <a
        href="https://www.docker.com/products/docker-desktop"
      >here</a>
      ,
      and use PowerShell to run the commands that follow. When running commands
      in PowerShell, replace any instances below of
      <code>$(pwd)</code> with
      <code>${pwd}</code>
    </p>
    <p>After installing:</p>
    <ul>
      <li>
        Right-click on the Docker icon in your system tray, and select
        Settings > Shared Drives
      </li>
      <li>Check the box for the C drive (or whatever drive you normally use)</li>
      <li>Apply the changes</li>
    </ul>

    <p>
      If using Windows 7, 8, or 10 Home edition, install Docker Toolbox from
      <a
        href="https://docs.docker.com/toolbox/overview/"
      >here</a>. Make sure all components
      are checked when running the installation wizard. Make sure to use the Docker
      Terminal for entering all commands that follow. Note that for any commands
      that use
      <code>http://localhost</code>, you'll need to replace that with
      <code>http://192.168.99.100</code>
    </p>

    <h4>Mac</h4>
    <p>
      If using OS X Yosemite 10.10.3 or later, install Docker from
      <a
        href="https://www.docker.com/products/docker-desktop"
      >here</a>.
    </p>
    <p>
      If using anything older than OS X Yosemite 10.10.3, install Docker Toolbox
      from
      <a
        href="https://docs.docker.com/toolbox/overview/"
      >here</a>.
    </p>

    <h4>Linux</h4>
    <p>
      Install Docker for your specific distribution from
      <a
        href="https://hub.docker.com/search/?q=&type=edition&offering=community"
      >here</a>. Alternatively, use Docker's automated install script to install
      the Edge (Beta) version of Docker:
      <code>curl -sSL https://get.docker.com/ | sh</code>
    </p>
    <p>
      Next, you will need to install both
      <a
        href="https://github.com/docker/machine/releases"
      >Docker Machine</a> and
      <a href="https://github.com/docker/compose/releases">Docker Compose</a>.
      Because these are installed manually, you will have to remember to manually
      update them.
    </p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style>
.code {
  font-family: monospace;
}

h3,
h4 {
  margin-bottom: 3%;
  margin-top: 6%;
}
</style>
