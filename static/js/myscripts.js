function make_link(url,title){
  return "<a href = \"" + url + "\">"+title+"</a>";
}

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Cmd+C, Enter", text);
}


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("filter_ul");
    filter = input.value.toUpperCase();
    ul = document.getElementById("main_ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


$( document ).ready(function() {
  $( ".post_listing" )
    .hover(function() {
      $(this).find('.copy_link').css('visibility','visible');
    },
    function() {
      $(this).find('.copy_link').css('visibility','hidden');
    });
});
