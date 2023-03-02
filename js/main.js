function myhombur() {
    var x = document.getElementById("left__lest");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  const pics = document.querySelector('.portfilo__contint')
  let arr = [{
    pic1: './mywork/davlatlar.png',
    pic2: './mywork/dog.png',
    pic3: './mywork/figma.png',
    pic4: './mywork/nomaz.png',
    pic5: './mywork/register.png',
    pic6: "./mywork/bog'lanish.png",
    pic7: './mywork/ifigma.png',
    pic8: './mywork/figma3.png',
    pic9: './mywork/figma4.png',
  }];
  function work() {
    for (let i = 0; i < arr.length; i++) {
      pics.innerHTML += `
      <a href="https://davlatlarinfo.netlify.app" target="_blank">
      <img src=${arr[i].pic1} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://lesson4dog.netlify.app" target="_blank">
      <img src=${arr[i].pic2} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://sparkling-dolphin-7af84a.netlify.app" target="_blank">
      <img src=${arr[i].pic3} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://nomozvaqtlari1.netlify.app" target="_blank">
      <img src=${arr[i].pic4} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://nomozvaqtlari1.netlify.app" target="_blank">
      <img src=${arr[i].pic5} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://cheksizleksari.netlify.app" target="_blank">
      <img src=${arr[i].pic6} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://lessin16.netlify.app" target="_blank">
      <img src=${arr[i].pic7} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://emanmoon3.netlify.app" target="_blank">
      <img src=${arr[i].pic8} alt="pic" class="portfilo__pic">
      </a>
      <a href="https://emanmoon3.netlify.app" target="_blank">
      <img src=${arr[i].pic9} alt="pic" class="portfilo__pic">
      </a>
      `
    }
  }
  work()
pics.addEventListener('click',function (e) {
  let global = e.target
  global.classlist.add(moe)
})
let t = document.querySelector('.work-info')
let baz = ["I'm Developer","I'm Programmer","I'm Bot creator"]
let a = baz[0]
function set() {
  setTimeout(() => {
    t.innerHTML = a
  }, 1000);
}
set()

const sendbtn = document.getElementById('yubot');
const inp = document.querySelector('.form-control');
const message = document.getElementById('message-text');
let arry = []
sendbtn.addEventListener('click', function() {
  arry.push[{
    username: inp.value,
    message: message.value
  }]
})
arry.set('https://mail.google.com/mail/u/0/#sent/FMfcgzGrbHtSWzHfPrjctCGDKfhqmTMW')