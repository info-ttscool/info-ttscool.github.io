document.addEventListener('DOMContentLoaded', function() {
    const videos = [
        'video1.mp4',
        'video2.mp4',
        'video3.mp4'
    ];
    let currentVideo = 0;
    const videoPlayer = document.getElementById('videoPlayer');
    
    function playNext() {
        currentVideo = (currentVideo + 1) % videos.length;
        videoPlayer.src = videos[currentVideo];
        videoPlayer.play();
    }

    function playPrev() {
        currentVideo = (currentVideo - 1 + videos.length) % videos.length;
        videoPlayer.src = videos[currentVideo];
        videoPlayer.play();
    }

    videoPlayer.addEventListener('ended', playNext);
    document.querySelector('.next-btn').addEventListener('click', playNext);
    document.querySelector('.prev-btn').addEventListener('click', playPrev);
});