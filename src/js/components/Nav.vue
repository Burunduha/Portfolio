<template >
    <nav>
        <div class="nav_logo">
            <img src="/img/usdy.svg" alt="logo">
            <span>Portfolio</span>
        </div>
        
            <ul class="desktop_nav_links" v-if="screenWidth > 768">
                <li><a href="">Projects</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">About me</a></li>
            </ul>
            <ul class="desktop_nav_outsourse_links" v-if="screenWidth > 768">
                <li><a href="https://github.com/Burunduha" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/bohdan-shyshov-499671281/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>

            <i v-else :class="menuIcon" @click="showMenu()"></i>
        
            <ul class="nav_links_mobile" v-if="screenWidth <= 768 && mobileMenu">
                <li><a href="">Projects</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">About me</a></li>
            </ul>
            <ul class="nav_outsourse_links_mobile" v-if="screenWidth <= 768 && mobileMenu">
                <li><a href="https://github.com/Burunduha" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/bohdan-shyshov-499671281/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
    </nav>
</template>

<script>
export default{
   data(){
    return {
        screenWidth: screen.width,
        mobileMenu: false,
        menuIcon: "fa-solid fa-bars"
    }
   },
   mounted(){
    this.onScreenResize();
   },
   methods: {
        onScreenResize(){
            window.addEventListener('resize', () => {
                this.screenWidth = screen.width
            })
        },
        showMenu(){
            this.mobileMenu = !this.mobileMenu;
            this.menuIcon = this.menuIcon.includes('bars') ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        }
   }
}
</script>

<style lang="scss" scoped>
    nav {
        font-weight: 500;
        font-size: 1.2em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 42px;
        .nav_logo {
            display: flex;
            align-items: center;
            img {
                display: block;
                height: auto;
                width: 47.58px;
            }
            span {
                margin-left: 10px;
                vertical-align: middle;
                display: inline-block;
            }
        }
        .desktop_nav_links, .desktop_nav_outsourse_links {
            list-style: none;
            > li {
                display: inline-block;
                &:not(:last-of-type){margin-right: 27px;}
            }
        }
    }
    .nav_links_mobile, .nav_outsourse_links_mobile{
        list-style: none;
        text-align: center;
        
        width: 100%;
        li {
            margin-top: 25px;
        }
    }
</style>