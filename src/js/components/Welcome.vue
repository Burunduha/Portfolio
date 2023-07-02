<template >
    <div class="welcome">
        <div class="lead">
            <div>
                <h1>Welcome to my portfolio page!</h1>
                <p>Here you can see some info about my projects, technologies that I use and some information about me. </p>
                <button>Let’s begin</button>
            </div>
            <img src="/img/drawingzatichka.svg" alt="temporary">
            
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .welcome {
        margin-top: 157px;
        height: 700px;
        .lead {
            display: flex;
            position: relative;
            
            
            h1 {
                
                font-weight: 600;
                line-height: 75px;
                @media (min-width: 1440px) {
                    font-size: 4em;
                }
                @media (max-width: 1440px) and (min-width: 768px){
                    min-width: 320px;
                    font-size: 3em;
                    min-width: 720px;
                }
                @media (max-width: 768px) {
                    min-width: none;
                }
            }
            p {
                
                margin-top: 30px;
                
                color: #BCBCBC;
                @media (min-width: 1440px) {
                    font-size: 2em;
                }
                @media (min-width: 769px) {
                    margin-left: 50px;
                }
                @media (max-width: 1440px) {
                    min-width: 320px;
                    font-size: 1.6em;
                }
            }
            button {
                @media (min-width: 768px) {
                    margin-top: 60px;
                }
                @media (max-width: 768px) {
                    margin-top: 40px;
                }
                border-radius: 83px;
                border: 0;
                width: 280px;
                height: 80px;
                background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
                color: #fff;
                font-size: 1.6em;
                font-weight: 600;
                transition: transform 0.5s ease;
                &:hover {
                    transform: translatey(-10px);
                }
            }
        }
        img {
            position: relative;
            bottom: 80px;
            @media (max-width: 1024px) {
                display: none;
            }
            
        }
    }
</style>