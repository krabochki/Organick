var scrollToTopButton = document.getElementById("scrollToTopButton");


window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

$(document).ready(function () {
  $("#wrapper").scroll(function () {
    var e = document.getElementsByClassName("F")[0];
    var etop = e.getBoundingClientRect().top + $("#wrapper").scrollTop() - 30;
    var eheight = e.clientHeight;
    var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    if ($("#wrapper").scrollTop() >= headerHeight) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
    var elems = document.getElementById("hamb").getElementsByTagName("div");

    if ($("#wrapper").scrollTop() >= etop) {
      for (var i = 0; i < elems.length; i++) {
        elems[i].classList.add("othercolor");
      }
    } else {
      for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("othercolor");
      }
    }

    if ($("#wrapper").scrollTop() >= etop + eheight) {
      for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("othercolor");
      }
    }
  });
});

scrollToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  $("#wrapper").scrollTop(0);
});

var hamb = document.getElementById("hamb");
hamb.addEventListener("click", function (e) {
  e.preventDefault();

  var ul = document.getElementById("hambul");
  var div = document.getElementById("hambdiv");
  if (ul.classList == "hamb_open") {
    ul.classList.add("endup");
    div.classList.add("endup");
    hamb.classList.remove("hamb_open");

    setTimeout(function () {
      ul.classList.remove("hamb_open");
      div.classList.remove("hamb_open");
      ul.classList.remove("endup");
      div.classList.remove("endup");
    }, 1000);
  } else {
    ul.classList.add("hamb_open");
    div.classList.add("hamb_open");
    hamb.classList.add("hamb_open");
  }
});

jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }
  });
});

//var name = document.getElementsByclassName("name");  /* not needed */
//    var tp = document.getElementsByclassName("tooltip"); /* not needed */

var elem2 = document.getElementById("tooltip");
var bufelem;

function show(elem) {


  if(bufelem != elem){
  elem2.style.top = elem.getBoundingClientRect().top + "px";
  elem2.style.left = elem.offsetLeft + "px";
  elem.style.opacity = 0.5;

  if (elem == document.getElementsByClassName("card")[0]) {
    elem2.textContent =
      "Broccoli is a nutritious vegetable rich in vitamins, minerals, and fiber. It is known for its vibrant green color and unique taste. Add broccoli to your diet for a healthy and delicious addition to your meals.";
  }
  if (elem == document.getElementsByClassName("card")[1]) {
    elem2.textContent =
      "Zucchini, also known as courgette, is a versatile vegetable that can be used in various recipes. It is low in calories and a good source of vitamins and minerals. Enjoy zucchini grilled, roasted, or sautéed for a flavorful and nutritious dish.";
  }
  if (elem == document.getElementsByClassName("card")[2]) {
    elem2.textContent =
      "Onions are a staple ingredient in many cuisines worldwide. They come in different varieties and add flavor and aroma to dishes. Onions are also packed with antioxidants and have various health benefits. Incorporate onions into your recipes for a savory twist.";
  }
  if (elem == document.getElementsByClassName("card")[3]) {
    elem2.textContent =
      "Squash, including zucchini and other types, is a delicious and nutritious vegetable. It is low in calories and high in vitamins and minerals. Squash can be used in soups, stews, or as a side dish. Explore the different varieties of squash for a delightful culinary experience.";
  }

  elem2.classList.add("tooltip-anim-enter"); /* changed variable to argument */

  bufelem=elem;
  }

}

function hide(elem) {
  elem.style.opacity = 1;
  elem2.classList.remove(
    "tooltip-anim-enter"
  ); 
  elem2.style.display = ""; 
  setTimeout(function(){  bufelem = 0;  },300);
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setActiveSlide(index);
  });
});

function setActiveSlide(index) {
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.add("active");
      dots[slideIndex].classList.add("active");
      slide.classList.remove("no");

      var stars = slide.querySelectorAll("input");

      stars.forEach((star) => {
        star.disabled = false;
      });
    } else {
      slide.classList.remove("active");
      dots[slideIndex].classList.remove("active");

      var stars = slide.querySelectorAll("input");

      slide.classList.add("no");
      stars.forEach((star) => {
        star.disabled = true;
      });
    }
  });
}

var blurElements = document.querySelectorAll(".blur");

blurElements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    blurElements.forEach((elementX) => {
      elementX.classList.add("blurX");
    });

    element.classList.remove("blurX");
  });

  element.addEventListener("mouseleave", function () {
    blurElements.forEach((elementX) => {
      elementX.classList.remove("blurX");
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Находим элемент #ads
  var adsElement = document.getElementById("ads");

  // Функция для отображения элемента #ads
  function showAds() {
    adsElement.style.display = "flex";
  }

  // Функция для скрытия элемента #ads
  function hideAds() {
    adsElement.style.display = "none"; 

  }

  // Показываем элемент #ads через 5 секунд
  setTimeout(showAds, 5000);

  // Находим элемент #close
  var closeButton = document.getElementById("close");

  // При нажатии на элемент #close скрываем блок снова
  closeButton.addEventListener("click", hideAds);

  // Функция для показа элемента #ads каждые 15 минут, если пользователь его скрыл
  function showAdsPeriodically() {
    // Показываем элемент #ads
    showAds();

    // Запускаем таймер для следующего показа через 15 минут
    setTimeout(showAdsPeriodically, 900000); // 900000 миллисекунд = 15 минут
  }

  // Запускаем таймер для показа элемента #ads каждые 15 минут
  setTimeout(showAdsPeriodically, 900000); // 900000 миллисекунд = 15 минут

});




const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const email = $('#email-input').val();
  const email_ = $('#email-input');

  if(validateEmail(email)){
    email_.css('color', 'green');
  } else{
    email_.css('color', 'red');
  }
  return false;
}

$('#email-input').on('input', validate);


const tabs = document.getElementById('tabs').querySelectorAll('div');
  const paragraph =  document.querySelector('.G').querySelector('.beautiful-paragraph');
  const heading = document.querySelector('.G').querySelector('h2');
  const text = document.querySelector('.G').querySelector('p');

  // Обрабатываем клик по табам
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Удаляем класс "selected" у всех табов
      tabs.forEach((tab) => {
        tab.classList.remove('selected');
      });

      // Добавляем класс "selected" к текущему табу
      tab.classList.add('selected');

      // Изменяем текст в соответствии с выбранным табом
      if (index === 0) {
        paragraph.textContent = 'Eco Friendly';
        heading.textContent = 'Econis is a Friendly Organic Store';
        text.textContent = 'Are you ready to embark on a journey of self-improvement and personal growth? Start with Our Company First! We offer a wide range of innovative and useful products that will help you enhance your daily life. From cutting-edge gadgets to health and wellness solutions, we have everything you need to kickstart your journey towards a better you. Trust in our company\'s commitment to quality and let us be your partner in growth and success. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean leo ligula';



      } else if (index === 1) {
        paragraph.textContent = 'Personal Development';
        heading.textContent = 'Unlock Your Potential';
        text.textContent = 'Do you want to unlock your full potential and achieve personal growth? Join us on the path of self-discovery and transformation. Our resources and programs are designed to empower individuals to learn, grow, and thrive. Start your journey with us today and become the best version of yourself. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula';
      } else if (index === 2) {
        paragraph.textContent = 'Modern Farming';
        heading.textContent = 'Farming Strategies of Today';
        text.textContent = 'Discover the latest farming strategies and technologies to revolutionize your agricultural practices. Our company is committed to providing farmers with sustainable solutions, precision farming tools, and expert guidance. Embrace modern farming methods and maximize your productivity and profitability. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula';
      }
    });
  });