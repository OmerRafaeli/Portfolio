'use strict'

function onInit() {
    renderProjects()
}

function renderProjects() {
    //href="#portfolioModal${proj.imgRef}
    const strHTMLs = projects.map(proj => `    
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onOpenModal(${proj.id})">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${proj.imgRef}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.title}</h4>
            <p class="text-muted">${proj.name}</p>
          </div>
    </div>`
    )
    document.querySelector('#portfolio .projects').innerHTML = strHTMLs.join('')
}

function onOpenModal(projId) {
    const project = getProjectId(projId)
    const publishDate = getDateFromTimestemp(project.publishedAt)
    // console.log('timestamp:', project)
    
    renderModal(project, publishDate)

}

function renderModal(proj, publishDate) {
    const strHTML = `
            <h2>${proj.name}</h2>
              <p class="item-intro text-muted">${proj.desc}</p>              
              ${proj.media}
              <p>${proj.desc}</p>
              <a href="${proj.url}" target="_blank">${proj.linkText}</a>
              <ul class="list-inline">
                <li>Date: ${publishDate}</li>
                <li>Client: Mr. Smith</li>
                <li>Category: ${proj.title}</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>`
    const elModal = document.querySelector('.modal-body')
    elModal.innerHTML = strHTML


}

function onSubmit(ev){
    console.log('ev:', ev)
    

}