(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"jm-halloween","clicked":false,"image":"https://pbs.twimg.com/profile_images/1206808119939960832/QP1VL1w-_400x400.jpg"},{"id":2,"name":"jm-suit","clicked":false,"image":"https://lh3.googleusercontent.com/proxy/h5OOvJ1SmmwvUnjOnp9oF4c5nQw9JDsNtOn1ZKZtrZ_2jNhwUtdGpypqPb7L-Ic7-YvLosf56m3BUKxQzOkJ4CqaAhwfA_mvQVsz01SDnHEvIZncm2RyWgysaX7dKfLuO2wUV2QG-VB9yCjJIyoPeLtu8tc8PMUpY2CFyZ75"},{"id":3,"name":"jm-red","clicked":false,"image":"https://lh3.googleusercontent.com/proxy/BVm1Xqgif3cULZAo7lmAp3RJipCD3R-rdV4lYKbPjIK-Gu09wDfFUK4mTT-DeEzCq30_RCzNxOeoAaOz9SzMHoAOEGWr9dW6VXL3vmzTUcLmNKn1qNHaRjvHSFfU3xp_QpUndxfF6-bnBjW_tWo"},{"id":4,"name":"jm-dirtycomputer","clicked":false,"image":"https://www.recordshopx.com/cover/normal/5/57/578171.jpg?cd"},{"id":5,"name":"jm-shutter","clicked":false,"image":"https://lh3.googleusercontent.com/proxy/rsr9zu56pLg5pq9zLbHdZq4cKlFxYpYVRjFs_dSh4AZwV79kMq37cqRWlfXvAp8xYKc8iNZEZEUZUNXyaPYBFoIQ3WmSr6zq2CZqyo5wqoNhaFyqEDNzKR5XGtKfJ65rlT1RRRv9YQR9udhv3jBnl8iOHiPadZTd"},{"id":6,"name":"jm-met","clicked":false,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzT02ufpVWXYauKYS7h1rF8WV82jylEDaxJEt610YeJMELi3Al&usqp=CAU"},{"id":7,"name":"jm-shade","clicked":false,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBx7xUIxxkqR8qE9Qe-6xrNz4eTJSBLwiG0T1qCnpBI8kN8GrC&usqp=CAU"},{"id":8,"name":"jm-smolder","clicked":false,"image":"https://i.scdn.co/image/01725ba396132ac8166d89d5c5d9b4afc3b83229"},{"id":9,"name":"jm-pynk","clicked":false,"image":"https://superselected.com/wp-content/uploads/2018/05/Janelle-Monae-PYNK-Vagina-Pants.jpg"},{"id":10,"name":"jm-coat","clicked":false,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZXG3ki_x_NfVU-2tJ0hD9FdbIftyNiAwHEYNtcUmHf_Xn7fHJ&usqp=CAU"},{"id":11,"name":"jm-muppet","clicked":false,"image":"https://vignette.wikia.nocookie.net/muppet/images/9/92/Janelle-Monae.jpg/revision/latest/window-crop/width/200/x-offset/111/y-offset/0/window-width/431/window-height/430?cb=20140114051531"},{"id":12,"name":"jm-queen","clicked":false,"image":"https://i1.sndcdn.com/artworks-000072464879-tiv68p-t200x200.jpg?30a2558"}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(2),o=a.n(i),r=(a(13),a(14),function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",null,"React Clicky Game"),c.a.createElement("p",null,"Click on any image to earn points, but don't click on them more than once!")))}),s=a(3),l=a(4),m=a(7),d=a(6),u=(a(15),function(e){return c.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},c.a.createElement("img",{id:e.id,src:e.image,alt:e.name}))}),p=(a(16),a(5)),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={images:p,message:"Click an image to begin.",score:0,topScore:0},e.handleClick=function(t,a){var n=e.state.images;if(a)return n.forEach((function(e,t){n[t].clicked=!1})),e.setState({image:n.sort((function(){return Math.random()-.5})),message:"You guessed incorrectly!",score:0});n.forEach((function(e,a){t===e.id&&(n[a].clicked=!0)}));var c=e.state,i=c.topScore,o=c.score+1,r=o>i?o:i;return e.setState({image:n.sort((function(){return Math.random()-.5})),message:"You guessed correctly!",score:o,topScore:r})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"conainer-fluid gameContainer"},c.a.createElement("div",{className:"gameMessage text-center"},c.a.createElement("p",null,this.state.message)),c.a.createElement("div",{className:"gameScores text-center"},c.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.images.map((function(t){return c.a.createElement(u,{key:t.id,id:t.id,name:t.name,clicked:t.clicked,image:t.image,handleClick:e.handleClick})})))))}}]),a}(n.Component),f=(a(17),function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(r,null),c.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2961a10b.chunk.js.map