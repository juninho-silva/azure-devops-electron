const webview = document.querySelector('webview');
const progress = document.getElementById('progressBarCircle');
/**
 * @description: Config from Progress Bar
 */
const bar = new ProgressBar.Circle(progressBarCircle, {
    color: '#316CDC',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 5750,
    easing: 'bounce',
    strokeWidth: 6,
    from: { color: '#316CDC', a: 0 },
    to: { color: '#316CDC', a: 1 },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color)
    }
})

/**
 * Initialize the progress bar 
 */
bar.animate(3.0)

webview.addEventListener('dom-ready', () => {
    progress.style.display = 'none'
})