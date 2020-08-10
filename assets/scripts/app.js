const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "UX/UI",
        weight: 12.3,
      },
      {
        text: "German",
        weight: 8,
      },
      {
        text: "JavaScript",
        weight: 14,
      },
      {
        text: "Marketing",
        weight: 5,
      },
      {
        text: "Japanese",
        weight: 7,
      },
      {
        text: "English",
        weight: 10,
      },
      {
        text: "HTML",
        weight: 9,
      },
      {
        text: "愛",
        weight: 15,
      },
      {
        text: "Team",
        weight: 7,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a beginner programmer.",
        "love learning new things.",
        "also love work with team.",
        "do my best!",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#FFD87E",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
