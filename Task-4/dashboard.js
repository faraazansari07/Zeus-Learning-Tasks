fetch('./data.json')
    .then(response => response.json())
    .then(result => fillData(result.data));

const fillData = (courseData) => {
    const courseContainer = document.querySelector(".courses");
    courseData.forEach(item => {
        courseContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <div class="card-header">
                    <div class="course-image">
                        <img src="${item.cover}" alt="course 1">
                    </div>
                    <div class="course-info">
                        <div class="title">
                            ${item.isExpired ? (`<span class="expired">EXPIRED</span>`) : (`<span></span>`)} 
                            <h2>${item.title}</h2>
                            <img class=" ${item.favourite.isDisable ? 'disabled-star' : ''}" src="${item.favourite.icon}" alt="">
                        </div>
                        <div class="grade-info"><span class="subject">${item.subject}</span><span class="line">|</span><span class="grade">${item.grade}</span>
                            <span class="green-text">${item.greenText}</span>
                        </div>
                        <p class="syllabus"><span class="units bold-text">${item.units}</span> ${item.unitsText} <span class="lessons bold-text">${item.lessons}</span> ${item.lessonsText} <span class="topics bold-text">${item.topics}</span> ${item.topicsText}</p>
                        <div class="teacher">
                            <select id="teacher" name="teacher">
                            <option value="frank">${item.teacher}</option>
                            </select>
                        </div>
                        <p class="students">${item.students} ${item.isDashVisible ? (`<span class="line">|</span>`) : (`<span></span>`)} <span class="date">${item.date}</span></p>
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