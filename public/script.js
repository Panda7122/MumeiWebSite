screenWidth = document.body.clientWidth
screenHeight = document.body.clientHeight
console.log(screenWidth, screenHeight);
document.body.style = 'margin:0;';

const gameStart = {
    key: 'gameStart',
    preload: function(){
        // load resource
        this.load.image('bgStart', 'images/background/startBackground.jpg');
    },
    create: function(){
        // init
        
        this.bgStart = this.add.tileSprite(screenWidth/2, screenHeight/2, screenWidth, screenHeight, 'bgStart');
        this.textStart = this.add.text(screenWidth/2-5*20, screenHeight/2-20, 'Mumei Daisuki', {font: "40px Arial",
            color: "#ffffff"});
    },
    update: function(){
        // update with 60fps
    }
}
const gameConfig = {
    type: Phaser.AUTO,
    width: screenWidth,
    height: screenHeight,
    parent: 'app',
    scene: [gameStart]
}
const game = new Phaser.Game(gameConfig);

// var app = new Vue({
//     el: '#app',
//     data: {
//         titleText: 'Hello World',
//         canvasContext: null,
//         backgroundColor: '#A08163',
//         textColor:'#000000',
//         colors: [
//             { name: 'white', code: '#ffffff' },
//             { name: 'black', code: '#000000' },
//             { name: 'lightgreen', code: '#9BFFCD' },
//             { name: 'green', code: '#00CC99' },
//             { name: 'darkgreen', code: '#01936F' }],
//         currentColor: null,
//         canvasWidth:screenWidth,
//         canvasHeight:screenHeight,
//         currentSize: '20',
//         isSizing: false,
//         isCanvasMouseDown: false,
//         hideToolBar: false,
//         hideNavBar: false,
//         tools: [
//             {
//                 preClass: 'fas',
//                 name: 'paint-brush'
//             }, {
//                 preClass: 'fas',
//                 name: 'eraser'
//             }, {
//                 preClass: 'far',
//                 name: 'square'
//             }],
//         currentTool: 'paint-brush',
//         tempPosition: null,
//         tempCanvas: null,
//         vueCanvas:null,
//     },
//     mounted() { //setup
//         var screenDoc = document.getElementById("screen");
//         var appDoc = document.getElementById("app");
//         appDoc.style.margin = 0;
//         screenDoc.style.backgroundColor = this.backgroundColor;
//         screenDoc.style.width = this.canvasWidth;
//         screenDoc.style.height = this.canvasHeight;
//         screenDoc.style.left = 0;
//         screenDoc.style.top = -10;

//         this.start();
//     },
//     methods: {
//         start(){
//             // console.log("start")
//             var screenDoc = document.getElementById("screen");
//             var appDoc = document.getElementById("app");
//             var ctx = screenDoc.getContext("2d");    
//             var vueCanvas = ctx;
            
//             vueCanvas.clearRect(0,0,vueCanvas.width, vueCanvas.height);
//             vueCanvas.font = "30px Arial";
//             vueCanvas.fillStyle = this.textColor;
//             vueCanvas.textAlign = "center";
//             vueCanvas.fillText("Mumei Daisuki", vueCanvas.width / 2, vueCanvas.height / 2);
//         },
//         onCanvasMouseDown() {
//             this.isCanvasMouseDown = true
//             this.setTempCanvas()

//         },
//         onCanvasMouseUp() {
//             this.saveCanvasToHistory()
//             this.resetToolState()
//         },
//         onSizeMouseDown() { this.isSizing = true },
//         canvasToImage() {
//             let url = this.$refs['sketchpad'].toDataURL("image/png", 1.0)
//             const link = document.createElement('a')
//             link.innerText = 'Download'
//             link.href = url
//             link.download = 'circle.png'
//             link.click()
//         }
//     }
// })

