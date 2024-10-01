const svg = document.querySelector('svg');
const audio = new Audio('./audio-track.mp3');

const BEAT = 983;

const scenes = [
    4250,
    ...Array(57).fill(BEAT)
];

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function animateSVG() {
    svg.classList.add('playing');
    const originalValue = document.getElementById('button-press').getAttribute('d');
    document.getElementById('button-press').setAttribute('d', 'M39.998 2.5a.501.501 0 0 0-.251.066l-8.772 5.062-1.902-1.107a.818.818 0 0 0-.43-.086c-.077.005-.154.02-.232.044a1.263 1.263 0 0 0-.235.101l-3.413 1.97c-.12.07-.234.162-.336.269a1.914 1.914 0 0 0-.446.771 1.504 1.504 0 0 0-.064.423l.004 1.059-1.33-.775a.793.793 0 0 0-.451-.11.932.932 0 0 0-.24.045 1.09 1.09 0 0 0-.234.109l-3.413 1.969c-.12.07-.233.162-.335.27a1.915 1.915 0 0 0-.447.77 1.504 1.504 0 0 0-.064.424l.004 3.133-1.33-.78a.781.781 0 0 0-.441-.108.977.977 0 0 0-.24.04 1.208 1.208 0 0 0-.244.104l-3.413 1.978c-.12.07-.234.162-.336.27a1.913 1.913 0 0 0-.445.77 1.504 1.504 0 0 0-.065.423l.007-.382-4.611 2.66-.002.001-.002.002h-.002a.5.5 0 0 0-.25.433c0 .005.004.01.004.015l.045 16.165a.499.499 0 0 0 .5.498h.002a.5.5 0 0 0 .499-.501l-.044-15.303 5.398 3.137.064 22.802-5.398-3.138-.01-3.77a.499.499 0 0 0-.5-.498h-.001a.5.5 0 0 0-.499.502l.011 4.056a.5.5 0 0 0 .249.43c.1.06 6.5 3.778 6.4 3.72l.001.001a.496.496 0 0 0 .5 0l33.455-19.316a.5.5 0 0 0 .25-.435l-.068-23.96.001-.003a.496.496 0 0 0-.248-.433l-6.4-3.72a.496.496 0 0 0-.25-.068zm-.002 1.077 5.402 3.14-32.458 18.74-5.402-3.139 3.37-1.943.007 2.134a.497.497 0 0 0 .15.355c.03.03.063.056.1.078l1.94 1.13a.55.55 0 0 0 .37.049.46.46 0 0 0 .13-.05l.005-.005 4.6-2.656a.502.502 0 0 0 .25-.435l-.003-1.34.691.402.466.273a.5.5 0 0 0 .504.002l4.604-2.661a.501.501 0 0 0 .25-.435l-.004-1.342.436.254.72.423a.501.501 0 0 0 .504 0l4.604-2.659a.501.501 0 0 0 .25-.434l-.015-4.959ZM28.682 7.449l.941.549-2.92 1.682a1.5 1.5 0 0 0-.33.266 1.91 1.91 0 0 0-.492.987 1.4 1.4 0 0 0-.016.214l.01 4.098-.039-.022-.872-.512-.047-4.7a.5.5 0 0 1 .03-.163.92.92 0 0 1 .19-.326.553.553 0 0 1 .128-.108zm17.216.136.064 22.812-32.457 18.739-.064-22.81zm-23.73 3.623.943.55-2.918 1.683c-.109.063-.216.15-.316.253a1.958 1.958 0 0 0-.505.99 1.387 1.387 0 0 0-.017.221l.01 4.1-.912-.534-.046-4.7c0-.049.01-.105.03-.162a.921.921 0 0 1 .19-.326.553.553 0 0 1 .128-.108zm-6.515 5.827.943.553-2.91 1.682a1.48 1.48 0 0 0-.335.267 1.888 1.888 0 0 0-.444.772 1.517 1.517 0 0 0-.063.426l.01 2.031-.938-.547-.019-2.617c0-.05.011-.105.03-.162a.921.921 0 0 1 .19-.326.557.557 0 0 1 .129-.109zm1.763 1.236c.002.103.03 1.297.04 2.42l-3.6 2.074-.01-2.031c0-.052.01-.108.03-.166a.901.901 0 0 1 .183-.324.534.534 0 0 1 .126-.107z');
    for (const sceneStart in scenes) {
        await wait(scenes[sceneStart]);
        svg.classList.forEach(className => className.startsWith('scene-') && svg.classList.remove(className));
        svg.classList.add(`scene-${parseInt(sceneStart) + 1}`);
    }
    await wait(BEAT * 3);
    Array.from(svg.classList).forEach(className => svg.classList.remove(className));
    document.getElementById('button-press').setAttribute('d', originalValue);
    audio.currentTime = 0;
}

svg.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        animateSVG();
    }
}, false);