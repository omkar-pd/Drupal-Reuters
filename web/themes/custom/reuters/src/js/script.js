(function ($, Drupal) {
  Drupal.behaviors.stories = {
    attach: function (context, setting) {
      const tbmNav = document.querySelector(".tbm-nav");
      const root = document.getElementsByTagName("html")[0];
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const closeIcon = document.querySelector(".close-icon");
      const feedbackBtn = document.querySelector(".feedback-button");

      hamburgerMenu.addEventListener("click", () => {
        tbmNav.classList.add("mob-nav");
        root.classList.add("scroll");
        feedbackBtn.style.display = "none";
      });
      closeIcon.addEventListener("click", () => {
        tbmNav.classList.remove("mob-nav");
        root.classList.remove("scroll");
        feedbackBtn.style.display = "block";
      });
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.documentElement.scrollTop > 49 &&
          document.documentElement.scrollTop <= 450
        ) {
          tbmNav.classList.add("on-scroll");
          console.log(document.documentElement.scrollTop);
        } else {
          tbmNav.classList.remove("on-scroll");
        }
      }
    },
  };
})(jQuery, Drupal);

window.onload = function () {
  const feedbackBtn = document.querySelector(".feedback-button");
  const feedbackForm = document.querySelector("#block-webform");
  feedbackBtn.addEventListener("click", () => {
    if (!feedbackForm.classList.contains("slide-right")) {
      feedbackForm.style.right = "0%";
      feedbackBtn.style.right = "355px";
      feedbackForm.classList.add("slide-right");
    } else {
      feedbackForm.style.right = "100%";
      feedbackBtn.style.right = "-31px";
      feedbackForm.classList.remove("slide-right");
    }
  });
  let marginR = -36;
  let marginL = 0;
  let containerIndex = 0;
  let categoryButtons = document.querySelector(".buttons").children;
  const stories = document.querySelectorAll(".stories");
  const storiesContainer = document.querySelectorAll(".stories-item-list");
  const scrollRight = document.querySelector(".scroll-right");
  const scrollLeft = document.querySelector(".scroll-left");
  const seeAllLink = document.querySelector(".see-all-link");
  const seeAll = document.querySelector(".see-all");
  const hrefs = [
    `/world`,
    "/business",
    "/legal",
    "/breakingviews",
    "/technology",
    "/sports",
  ];
  [...categoryButtons].forEach((child, index) => {
    child.addEventListener("click", function () {
      stories[0].classList.add("hide");

      if (stories[index].classList.contains("hide")) {
        stories[index].classList.add("show");
        child.classList.add("selected");
        stories[index].classList.remove("hide");
        containerIndex = index;
        seeAllLink.href = `${hrefs[index]}`;
        seeAll.textContent = `See All ${child.textContent}`;
        for (let i = 0; i <= stories.length - 1; i++) {
          if (i !== index) {
            stories[i].classList.add("hide");
            categoryButtons[i].classList.remove("selected");
          }
        }
      }
    });
  });

  scrollRight.addEventListener("click", () => {
    marginR += 66;
    marginL -= 66;

    scrollLeft.disabled = false;

    if (marginL > -200) {
      storiesContainer[containerIndex].style.marginRight = `${marginR}vw`;
      storiesContainer[containerIndex].style.marginLeft = `${marginL}vw`;
    } else {
      scrollRight.disabled = true;
    }
  });
  scrollLeft.addEventListener("click", () => {
    marginR -= 66;
    marginL += 66;
    scrollRight.disabled = false;

    if (marginR > -76) {
      storiesContainer[containerIndex].style.marginRight = `${marginR}vw`;
      storiesContainer[containerIndex].style.marginLeft = `${marginL}vw`;
    } else {
      scrollLeft.disabled = true;
    }
  });
};
