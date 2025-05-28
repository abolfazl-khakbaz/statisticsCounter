$(document).ready(function () {
  $(".count").each(function () {
    var $this = $(this);
    var resultNumber = parseInt($this.attr("data-count"), 10); // Ensure resultNumber is an integer
    $({ countNum: parseInt($this.text(), 10) }).animate(
      {
        countNum: resultNumber,
      },
      {
        duration: 1800,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});
