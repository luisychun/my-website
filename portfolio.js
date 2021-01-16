Vue.component('ls-portfolio-showcase', {
    template:
        `
            <div>
                <div class="row">
                    <div class="col-12 col-lg-6 justify-content-center text-left my-3 my-md-5" v-for="(portfolio, index) in portfolioList">
                        <div class="box" style="width:100%">
                            <div class="card">                                
                                <div class="card-body">
                                    <h4 class="card-title">{{portfolio.projectName}}</h4>                                    
                                    <div class="row no-gutters justify-content-center">
                                        <div class="col d-flex">
                                            <img v-for="(icon, index) in portfolio.projectStack" :src="icon" class="portfolio-svg"><img>
                                        </div>                                        
                                    </div>
                                    <p class="card-text mt-3">{{portfolio.projectDesc}}</p>
                                    <p v-show="showImprovement">What can be improved?</p>
                                    <div v-show="showImprovement" class="bottom-line"></div>
                                    <p v-show="showImprovement" class="card-text">{{portfolio.projectImprovement}}</p>
                                    <div class="d-flex justify-content-end">
                                        <a :href="portfolio.projectUrl" target="_blank" class="btn btn-outline-dark shadow-none">Visit site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,

    data () {
        return {
            portfolioList: [
                {projectName: 'My Personal Website', projectDesc: 'The website you see now is the first website that I built from scratch. I uses Bootstrap 4 in this project, and included Vue from CDN to maintain this Porfolio section.', projectUrl: 'https://github.com/luisychun/my-website', projectStack: ['img/tech/html5.svg', 'img/tech/css3.svg', 'img/tech/bootstrap.svg', 'img/tech/vue-dot-js.svg', 'img/tech/netlify.svg'], projectImprovement: ''},

                {projectName: 'AirAsia ticket Scraper', projectDesc: 'A terminal based program for web scraping against AirAsia flight tickets. The ticket price will be capture based on the departure code and date, and output the result as CSV.', projectUrl: 'https://github.com/luisychun/aa-flight-ticket-scraper', projectStack: ['img/tech/python.svg', 'img/tech/pandas.svg'], projectImprovement:''},

                {projectName: 'Malaysia Covid-19 Case Dashboard', projectDesc: 'A Vue application that capture updated daily confirmed, death, recovered Covid-19 cases in Malaysia. Data sources are get from JHU CSSE.', projectUrl: 'https://luisychun.github.io/malaysia-covid19-local-case/', projectStack: ['img/tech/html5.svg', 'img/tech/css3.svg', 'img/tech/vue-dot-js.svg', 'img/tech/vuetify.svg'], projectImprovement: ''},

                {projectName: 'Personal Knowledge Base', projectDesc: 'My personal wiki. Build with static site generator called Hugo and a UI framework Semantic UI.', projectUrl: 'https://compassionate-euler-7bd6b0.netlify.app/', projectStack: ['img/tech/hugo.svg', 'img/tech/markdown.svg', 'img/tech/netlify.svg'], projectImprovement: ''},

                {projectName: 'BorneoStar Automobile Malaysia', projectDesc: 'A client from the luxury car repair shop requests a static website to display their company products, and services to lead a potential customer to reach their business.', projectUrl: 'https://borneostarauto.com/', projectStack: ['img/tech/html5.svg', 'img/tech/css3.svg'], projectImprovement: ''},

                {projectName: 'Emergency Notification Hybrid App', projectDesc: 'A hybrid app for sending an emergency notification to notify linked family members or friends. Built with Ionic, Firestore, and Firebase Cloud Messaging.', projectUrl: 'https://github.com/luisychun/emergency-notification-app', projectStack: ['img/tech/angular.svg', 'img/tech/ionic.svg', 'img/tech/firebase.svg'], projectImprovement: ''},

                {projectName: 'Lai Kee DimSum Singapore', projectDesc: 'Lai Kee Dim Sum is best known for their quality hand made dim sum. We help them to built a website for their marketing.', projectUrl: 'https://laikeedimsum.com/', projectStack: ['img/tech/wordpress.svg'], projectImprovement: ''},

                {projectName: 'Symbol Stock News Finder', projectDesc: 'A simple React application to capture symbol and stock market related news. Integrated with FinnHub API for data retrieving.', projectUrl: 'https://stocknewsfinder.netlify.app/', projectStack: ['img/tech/react.svg', 'img/tech/netlify.svg'], projectImprovement: ''},
            ],
            showImprovement: false
        }
    }
})

const app = new Vue({
    el: '#ls-portfolio-component',
    data: {}
})