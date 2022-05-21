$(document).ready(function(){

    const initModal = () =>{
      $("#open-cursos-btn").click(()=>{
        $('#content-modal').modal()
      })
    }

    const runYoutubeVideo = () =>{
      $('.yt-btn').click((e)=>{
        var myModal = new bootstrap.Modal(document.getElementById('videosModal'))
        myModal.show()
        var videoId = e.target.getAttribute("data-youtube");
        $('#youtube-video').html(
          `<iframe id="yt-video" width="1100" height="700" src="https://www.youtube.com/embed/${videoId}?wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>`
        )
      })

      var myModalEl = document.getElementById('videosModal')
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $('#yt-video').attr("src", " ");
        $('#yt-video').remove();
      })
    }
    
    initModal()
    runYoutubeVideo()
    
  
  });