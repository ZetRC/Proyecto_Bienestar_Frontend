$(document).ready(function(){

    const runYoutubeVideo = () =>{
      $('.yt-btn').click((e)=>{
        var myModal = new bootstrap.Modal(document.getElementById('videosModal'))
        myModal.show()
        var videoId = e.target.getAttribute("data-youtube");
        $('#youtube-video').html(
          `<iframe id="yt-video" style='width:100%;aspect-ratio:16/9;' src="https://www.youtube.com/embed/${videoId}?wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>`
        )
      })

      var myModalEl = document.getElementById('videosModal')
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $('#yt-video').attr("src", " ");
        $('#yt-video').remove();
      })
    }
    
    runYoutubeVideo()
  });