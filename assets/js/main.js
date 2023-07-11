function updateProfileInfo(profileData) {
    const photo = document.querySelector("#profile-photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector("#profile-name")
    name.innerText = profileData.name

    const job = document.querySelector("#profile-job")
    job.innerText = profileData.job

    const location = document.querySelector("#profile-location")
    location.innerText = profileData.location

    const phone = document.querySelector("#profile-phone")
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.querySelector("#profile-email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
 }

function updateSoftSkills(profileData) {
    const softSkills = document.querySelector("#profile-soft-skills")

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.querySelector("#profile-hard-skills")

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="./assets/img/skills/${skill}.png" alt="${skill}"></li>`).join('')
}

function updateLanguages(profileData) {
    const profileLanguages = document.querySelector(".languages")

    profileLanguages.innerHTML = profileData.languages.map((profileLanguage) => {
        return `<li class="${profileLanguage.name}">${profileLanguage.language}</li>`
    }).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.querySelector(".portfolio")

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"': ''}">${project.name}</h3     <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateJobExperience(profileData) {
    const jobExperience = document.querySelector(".experience")

    jobExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.company}</h3>
                <span class="period">${experience.period}</span>
                <p class="description">
                ${experience.description}
                </p>
            </li>
        `
    }).join('')
}

(async () => {

    const profileData = await getGithubProfileInfos()

    // console.log(profileData)

    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateJobExperience(profileData)

})()