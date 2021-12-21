// (function ($, Drupal) {
//   Drupal.behaviors.stories = {
//     attach: function (context, setting) {
//       console.log("hello World");
//     },
//   };
// })(jQuery, Drupal);

window.onload = function () {
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
