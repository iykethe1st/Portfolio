$(".progress-bar span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%"
      },
      1000
    );
  });
  