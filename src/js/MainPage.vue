<template>
    <div>
        <Nav />
        <Welcome />
        <Projects />
        <AboutMe />
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Welcome from './components/Welcome.vue'
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'

export default {
    components: { Nav, Welcome, Projects, AboutMe },
}
</script>

<style lang="scss">
 
</style>