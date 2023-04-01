document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('rotate');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('rotate');
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// show/hide dropdown content when hovering over dropdown label
var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(dropdown) {
  var label = dropdown.querySelector('.dropbtn');
  var content = dropdown.querySelector('.dropdown-content');
  label.addEventListener('mouseover', function() {
    content.style.display = 'block';
  });
  dropdown.addEventListener('mouseleave', function() {
    content.style.display = 'none';
  });
});