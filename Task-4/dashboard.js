fetch('./data.json')
    .then(response => response.json())
    .then(result => fillData(result.data));

// fetch('./icons.json')
//     .then(response => response.json())
//     .then(result => fillData(result.icons));

const fillData = (courseData) => {
    const courseContainer = document.querySelector(".courses");
    courseData.forEach(item => {
        courseContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <div class="card-header">
                    <div class="course-image">
                        <img src="${item.heading.cover}" alt="course 1">
                    </div>
                    <div class="course-info">
                        <div class="title">
                            ${item.isExpired ? (`<span class="expired">EXPIRED</span>`) : (`<span></span>`)} 
                            <h2>${item.heading.title}</h2>
                            <img class=" ${item.favourite.isDisable ? 'disabled-star' : ''}" src="${item.favourite.icon}" alt="">
                        </div>
                        <div class="grade-info"><span class="subject">${item.class.subject}</span><span class="line">|</span><span class="grade">${item.class.grade}</span>
                            <span class="green-text">${item.class.greenText}</span>
                        </div>
                        <p class="syllabus"><span class="units bold-text">${item.syllabus.units}</span> ${item.syllabus.unitsText} <span class="lessons bold-text">${item.syllabus.lessons}</span> ${item.syllabus.lessonsText} <span class="topics bold-text">${item.syllabus.topics}</span> ${item.syllabus.topicsText}</p>
                        <div class="teacher">
                            <select id="teacher" name="teacher">
                            <option value="frank">${item.teacher}</option>
                            </select>
                        </div>
                        <p class="students">${item.duration.students} ${item.duration.isDashVisible ? (`<span class="line">|</span>`) : (`<span></span>`)} <span class="date">${item.duration.date}</span></p>
                    </div>
                </div>
                <div class="options">
                    <img class="${item.preview.isDisable ? 'disabled' : ''}" src="${item.preview.icon}" alt="preview">
                    <img class="${item.manage.isDisable ? 'disabled' : ''}" src="${item.manage.icon}" alt="manage">
                    <img class="${item.submission.isDisable ? 'disabled' : ''}" src="${item.submission.icon}" alt="submission">
                    <img class="${item.report.isDisable ? 'disabled' : ''}" src="${item.report.icon}" alt="report">
                </div>
            </div>`
        );
    })
};