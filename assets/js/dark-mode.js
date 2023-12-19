let button = document.querySelector('.dark-mode-btn')

//dark mode by gads
button.addEventListener('click', () => {

document.documentElement.classList.toggle('dark-mode')

if (document.getElementById("moon").classList.contains('fa-moon')) {

document.getElementById("moon").classList.add('fa-sun');
document.getElementById("moon").classList.remove('fa-moon');
}else{
document.getElementById("moon").classList.add('fa-moon');
document.getElementById("moon").classList.remove('fa-sun');
}

document.querySelectorAll('.inverted').forEach((result)=>{
  result.classList.toggle('invert')
})

let element = document.querySelector('.snowfall');

let currentFilter = element.style.filter;

let newFilter = currentFilter === 'brightness(0)' ? 'brightness(100)' : 'brightness(0)';

element.style.filter = newFilter;

document.getElementById("hero").classList.toggle('inv');
console.log('changed');

})

let mobileBtn = document.querySelector('.dark-mode-on-mobile')
//dark mode on mobile screen
mobileBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  if (document.getElementById("moon").classList.contains('fa-moon')) {
  document.getElementById("moon").classList.add('fa-sun');
  document.getElementById("moon").classList.remove('fa-moon');
  }else{
  document.getElementById("moon").classList.add('fa-moon');
  document.getElementById("moon").classList.remove('fa-sun');
  }
  document.querySelectorAll('.inverted').forEach((result)=>{
    result.classList.toggle('invert')
  })

  let element = document.querySelector('.snowfall');

let currentFilter = element.style.filter;

let newFilter = currentFilter === 'brightness(0)' ? 'brightness(100)' : 'brightness(0)';

element.style.filter = newFilter;

document.getElementById("hero").classList.toggle('inv');
console.log('changed');
  })
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  // function darkModeIsOn() {
  //   if (document.getElementById("moon").classList.contains('fa-moon')) {
  //     alert("Dark Mode is Enabled");
  //     }else{
  //       alert("Dark Mode is Disabled");
  //     }
  // }