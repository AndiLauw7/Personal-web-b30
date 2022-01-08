// function postBlog() {
//     alert("Add Blog Succes")
// }

let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {

        title: title,
        content: content,
        image: image,
        author: 'andi',
        postAt: new Date()
    }

    blogs.push(blog)

    console.log(blogs)

    // for (let index = 0; index < blogs.length; index++) {
    // console.log(blogs[index]);

    renderBlog();
    if (title == '' || content == '' || image == '') {
        return alert("Semuanya wajib diisi")
    }


}

function renderBlog() {

    let contentContainer = document.getElementById('contents')
    contentContainer.innerHTML = firstBlog()
    for (let index = 0; index < blogs.length; index++) {

        contentContainer.innerHTML +=

            ` <div class="blog-list-item">
           <div class="blog-image">
             <img src=${blogs[index].image} alt="" />
           </div>
  
           <div class="blog-content">
             <div class="btn-group">
               <button class="btn-edit">Edit Post</button>
               <button class="btn-post">Post Blog</button>
             </div>
  
             <h1>
               <a href="blog-detail.html" target="_blank">
               ${blogs[index].title}</a>
             </h1>
  
             <div class="detail-blog-content">
             ${getFullTime(blogs[index].postAt)} | | ${blogs[index].author}
             </div>
             <p>
             ${blogs[index].content}
             </p>
             <div style="text-align: center;">
            <span style="font-size: 12px; color: grey;">
              ${getDistanceTime(blogs[index].postAt)}
            </span>
          </div>
           </div>`



    }

    function firstBlog() {
        return `
<div id="contents" class="blog-list">
<!-- dynamic content would be here -->
<div class="blog-list-item">
<div class="blog-image">
  <img src="assets/blog-img.png" alt="" />
</div>
<div class="blog-content">
  <div class="btn-group">
    <button class="btn-edit">Edit Post</button>
    <button class="btn-post">Post Blog</button>
  </div>
  <h1>
    <a href="blog-detail.html" target="_blank"
      >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
    >
  </h1>
  <div class="detail-blog-content">
    04 Januari 2022 17:04 WIB | Ichsan Emrald Alamsyah
  </div>
  <p>
    Ketimpangan sumber daya manusia (SDM) di sektor digital masih
    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. Quam, molestiae
    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
    eligendi debitis?
  </p>
  <div style="text-align: center;">
    <span style="font-size: 12px; color: grey;">
      1 day ago
    </span>
  </div>
</div>
</div>
</div>`
    }

}

let month = ['januari', 'februari', 'march', 'april', 'mei', 'june',
    'july', 'augst', 'september', 'october', 'november', 'desember'
]

function getFullTime(time) {

    console.log(time)

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()
    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fulltime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return fulltime
}

function getDistanceTime(time) {
    let timePost = time
    let timeNow = new Date()
    let distance = timeNow - timePost

    let milisecond = 1000 //seribuu dallm 1 detik
    let secondsInHours = 3600 ///1 jam = 3600 detik
    let hoursInDay = 23 // 23 jam dalm sehari
    let minutes = 60
    let seconds = 60

    let distanceDay = Math.floor(distance / (milisecond * secondsInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * seconds * minutes))
    let distanceMinutes = Math.floor(distance / (milisecond * seconds))
    let distanceSeconds = Math.floor(distance / milisecond)
        //  distanceDay = Math.floor(distanceDay);
        //  console.log(distanceDay+'day ago')
    if (distanceDay >= 1) {

        return `${distanceDay} day ago `
    } else if (distanceHours >= 1) {
        return `${distanceHours} Hours ago`
    } else if (distanceMinutes >= 1) {
        return `${distanceMinutes} Minutes ago`
    } else {
        return `${distanceSeconds} Seconds ago`
    }
}

setInterval(() => {
    renderBlog()
}, 60000)