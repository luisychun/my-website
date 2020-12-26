Vue.component('ls-portfolio-showcase', {
    template:
        `
            <div>
                <div class="row">
                    <div class="col-12 col-lg-6 justify-content-center my-3 my-md-5" v-for="(portfolio, index) in portfolioList">
                        <div class="box" style="width:100%">
                            <div class="card">                                
                                <div class="card-body">
                                    <h4 class="card-title">{{portfolio.projectName}}</h4>
                                    <div class="row no-gutters justify-content-center text-center">
                                        <div class="col">
                                            <i v-for="(icon, index) in portfolio.projectStack" :class="icon"></i>
                                            <div class="bottom-line"></div>
                                        </div>                                        
                                    </div>
                                    <p class="card-text">{{portfolio.projectDesc}}</p>
                                    <p v-show="showImprovement">What can be improved?</p>
                                    <div v-show="showImprovement" class="bottom-line"></div>
                                    <p  v-show="showImprovement" class="card-text">{{portfolio.projectImprovement}}</p>
                                    <a :href="portfolio.projectUrl" target="_blank" class="btn btn-dark">Visit site</a>
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
                {projectName: 'My Personal Website', projectDesc: 'Yes. What you see now is the first website that I built from scratch. I uses Bootstrap 4 in this project, and included Vue from CDN to maintain this Porfolio section. Hosted on Netlify.', projectStack: ['fab fa-html5 fa-2x', 'fab fa-css3-alt fa-2x', 'fab fa-vuejs fa-2x'], projectUrl: '', projectImprovement: 'Plan to refactor this website into a fully Nuxt.js CMS, and add a custom domain to it.'},

                {projectName: 'AirAsia ticket Scraper', projectDesc: 'A terminal based program for web scraping against AirAsia flight tickets. Chrome web driver will be trigger and capture the ticket price based on the departure code and date from user input, and output the result in CSV file.', projectUrl: 'https://github.com/luisychun/aa-flight-ticket-scraper', projectStack: ['fab fa-python fa-2x'], projectImprovement:"Output slots can be dynamics based on the available flight slots as current output slot is fixed with 9 slots which is not flexible enough."},

                {projectName: 'Malaysia Covid-19 Case Dashboard', projectDesc: 'A Vue application that show updated daily confirmed, death, recovered Covid-19 cases in Malaysia. Data sources are get from JHU CSSE. Hosted on GitHub pages.', projectUrl: 'https://luisychun.github.io/malaysia-covid19-local-case/', projectStack: ['fab fa-html5 fa-2x', 'fab fa-css3-alt fa-2x', 'fab fa-vuejs fa-2x'], projectUrl: '', projectImprovement: ''},

                {projectName: 'Personal Knowledge Base', projectDesc: 'A static website that uses to collect my personal wiki. Build with static site generator called Hugo and a UI framework Semantic UI. All the notes are written in Markdown format. Hosted on Netlify.', projectUrl: 'https://compassionate-euler-7bd6b0.netlify.app/', projectStack: ['fab fa-html5 fa-2x', 'fab fa-css3-alt fa-2x', 'fab fa-markdown fa-2x'], projectUrl: '', projectImprovement: ''},

                {projectName: 'BorneoStar Automobile Malaysia', projectDesc: 'Customer from the luxury car repair shop requests a static website to display the company products, and services to lead a potential customer to reach their business.', projectUrl: 'https://borneostarauto.com/', projectStack: ['fab fa-html5 fa-2x', 'fab fa-css3-alt fa-2x', 'fab fa-vuejs fa-2x'], projectUrl: '', projectImprovement: ''},

                {projectName: 'Emergency Notification Hybrid App', projectDesc: 'A hybrid app that used to send an emergency notification to notify linked family members or friends. Built with Ionic, Firestore, and Firebase Cloud Messaging.', projectUrl: 'https://github.com/luisychun/emergency-notification-app', projectStack: ['fab fa-html5 fa-2x', 'fab fa-css3-alt fa-2x', 'fab fa-angular fa-2x'], projectUrl: '', projectImprovement: ''},

                {projectName: 'Lai Kee DimSum Singapore', projectDesc: 'Lai Kee Dim Sum is best known for their quality hand made dim sum. We help them to built a website to display the company history, food menu and uses the Google Maps API to shows all the outlets in store locator page.', projectUrl: 'https://laikeedimsum.com/', projectStack: ['fab fa-css3-alt fa-2x', 'fab fa-wordpress fa-2x'], projectUrl: '', projectImprovement: ''},
            ],
            showImprovement: false
        }
    }
})

var app = new Vue({
    el: '#ls-portfolio-component',
    data: {}
})